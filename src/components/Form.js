import React, { useState } from 'react'

function Form({ depts, setDepts }) {
    const [payee, setPayee] = useState('');
    const [debtor, setDebtor] = useState('');
    const [amount, setAmount] = useState(1);
    const [visibility, setVisibility] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDebtor('');
        setPayee('');
        setAmount('');
        setDepts([...depts, { payee: payee === '' ? 'me' : payee, debtor: debtor === '' ? 'me' : debtor, amount: amount, status: true }]);
    }

    const showItem = (e) => {
        setVisibility(true)
    }

    const hideItem = (e) => {
        setVisibility(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-3 align-items-center">
                        <h5>Payee</h5>
                        <div className="form-check">
                            <label className='form-check-label'>Me</label>
                            <input
                                className='form-check-input'
                                type="radio"
                                name='payee'
                                checked={!visibility}
                                onChange={hideItem} />
                        </div>
                        <div className="form-check">
                            <label className='form-check-label'>Other</label>
                            <input className='form-check-input'
                                type="radio"
                                name='payee'
                                checked={visibility}
                                onChange={showItem}
                                required />
                        </div>
                        <div className="col-10">
                            {visibility &&
                                <input
                                    placeholder='Who is payee?'
                                    className='form-control'
                                    type="text"
                                    value={payee}
                                    onChange={(e) => setPayee(e.target.value)} />
                            }
                        </div>
                    </div>
                    <div className="col-md-3 align-items-center">
                        <h5>Debtor</h5>
                        <div className="form-check">
                            <label className='form-check-label'>Me</label>
                            <input
                                className='form-check-input'
                                type="radio"
                                name='debtor'
                                checked={visibility}
                                onChange={showItem} />
                        </div>
                        <div className="form-check">
                            <label className='form-check-label'>Other</label>
                            <input
                                className='form-check-input'
                                type="radio"
                                name='debtor'
                                checked={!visibility}
                                onChange={hideItem} />
                        </div>
                        <div className="col-10">
                            {!visibility &&
                                <input
                                    placeholder='Who is debtor?'
                                    className='form-control'
                                    type="text"
                                    value={debtor}
                                    onChange={(e) => setDebtor(e.target.value)}
                                    required />
                            }
                        </div>
                    </div>
                </div>

                <div className="row align-items-end">
                    <div className="col-2">
                        <span>Amount</span> ($)
                        <input
                            className='form-control'
                            type="number"
                            min='1' max='999999' step='any'
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value))} />
                    </div>
                    <div className="col-4">
                        <button
                            className='btn btn-secondary'>Submit</button>
                    </div>
                </div>
                <hr />
            </form>

        </>
    )
}

export default Form