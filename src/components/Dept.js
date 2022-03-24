import React from 'react'
import { VscTrash } from 'react-icons/vsc'
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md'

function Dept({ dept, index, setDepts, depts }) {

    const handleCloseClick = (index) => {
        const newDepts = [...depts];
        newDepts[index].status = !newDepts[index].status;
        setDepts(newDepts);
    }
    const handleDeleteClick = (index) => {
        const newDepts = [...depts];
        newDepts.splice(index, 1);
        setDepts(newDepts);
    }
    return (
        <li className='list-group-item d-flex' key={index}>
            <span className='fw-bold border border-1 p-1'>Payee -
                <span className='text-primary opacity-50'>{dept.payee}
                </span>
            </span>
            <span className='fw-bold border border-1 p-1'>
                Debtor:
                <span className='text-success opacity-75'> {dept.debtor}</span>
            </span>
            <span className='fw-bold border border-1 p-1'>
                Amount:
                <span className='text-info opacity-75'> ${dept.amount}</span>
            </span>
            <button
                className={`btn btn-${dept.status ? 'warning' : 'primary'} btn-sm ms-auto`}
                onClick={() => handleCloseClick(index)}>{dept.status ? <MdMoneyOffCsred size='1.2rem' /> : <MdAttachMoney size='1.2rem' />}
            </button>
            <button
                className='btn btn-danger btn-sm ms-1'
                onClick={() => handleDeleteClick(index)}>
                <VscTrash size='1.2rem' />
            </button>
        </li>
    )
}

export default Dept

