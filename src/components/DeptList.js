import React from 'react'
import Dept from './Dept'

function DeptList({ depts, setDepts }) {
    return (
        <>
            <h2>ONGOING DEPTS</h2>
            <ul className='list-group'>
                {depts.map((dept, index) => (
                    dept.status && <Dept
                        key={index}
                        dept={dept}
                        index={index}
                        setDepts={setDepts}
                        depts={depts}
                    />
                ))}
            </ul>
            <hr />
            <h2>COMPLETED DEPTS</h2>
            <ul className='list-group'>
                {depts.map((dept, index) => (
                    !dept.status && <Dept
                        key={index}
                        dept={dept}
                        index={index}
                        setDepts={setDepts}
                        depts={depts}
                    />
                ))}
            </ul>
        </>
    )
}

export default DeptList