import { useState } from 'react';
import './App.css';
import DeptList from './components/DeptList';
import Form from './components/Form'
import TotalDept from './components/TotalDept';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [depts, setDepts] = useState(
    [
      { payee: "me", debtor: "Bilge Adam", amount: 76000, status: true }, //true: aktif borc
      { payee: "me", debtor: "My Friend", amount: 3000, status: false }, // false: kapanmiş borc
      { payee: "My Aunt", debtor: "me", amount: 140, status: false }
    ]);

  return (
    <div className="container-sm">
      <h1 className='text-center my-5'>Dept Follow Up</h1>
      <hr />
      <Form depts={depts} setDepts={setDepts} />
      <DeptList depts={depts} setDepts={setDepts} />
      <TotalDept depts={depts} />
    </div>
  );
}
export default App;
