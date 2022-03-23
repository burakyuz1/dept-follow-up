import React from 'react'

function TotalDept({ depts }) {
    let budget = 0;
    depts.forEach(element => {
        if (element.status) {
            if (element.payee === 'me') {
                budget -= element.amount;
            } else {
                budget += element.amount;
            }
        }
    });

    return (
        <div className='mt-5'>
            <hr />
            <h3 className={budget < 0 ? 'text-danger' : 'text-success'}>Total budget: ${budget} </h3>
        </div>
    )
}

export default TotalDept