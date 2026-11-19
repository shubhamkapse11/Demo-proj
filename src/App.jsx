import { useState } from 'react'
import './App.css'
import User from './compoents/User';

function App() {


  const [task, setTask] = useState([]);


  return (
    <>
      <div className='container mx-auto'>


        <User />

      </div>

    </>
  );
}

export default App;
