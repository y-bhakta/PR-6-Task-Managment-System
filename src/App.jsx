import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./components/Home.jsx"
import Error from "./pages/Error.jsx"
import Tasks from "./pages/tasks.jsx"
import Tables from "./pages/Tables.jsx"
import Header from "./components/Header.jsx"
import { useEffect, useState } from "react"

function App() {

  const [task,setTask]=useState({});
  const [list,setList]=useState([]);
  const navigator=useNavigate();
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setTask({...task,[name]:value});
    console.log(task);    
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    let updatedList;
    if(task.id){
      updatedList=list.map((item)=>{
        if(item.id == task.id){
          return task;
        }
        return item;
      });
      setList(updatedList);
      navigator('/Tables');
    }else{
      updatedList=[...list,{...task,id:Date.now()}];
      setList(updatedList);
    }
    localStorage.setItem('tasks', JSON.stringify(updatedList));
    setTask({}); 
    navigator('/Tables');   
  }
  const handelDelete=(id)=>{
    let newList=list.filter(item => item.id != id);
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  }
  const handelEdit=(id)=>{
    let data = list.find(item => item.id == id);
    setTask(data);
    navigator('/Tasks');
  }
  console.log(list);
  useEffect(()=>{
    try {
      let isLocal=JSON.parse(localStorage.getItem('tasks')) || [];
      setList(isLocal);
    } catch(error) {
      console.error('Failed to parse localStorage:', error);
      localStorage.removeItem('tasks');
      setList([]);
    }
  },[]);
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tasks" element={<Tasks task={task} handelChange={handelChange} handelSubmit={handelSubmit} />} />
        <Route path="/Tables" element={<Tables list={list} handelDelete={handelDelete} handelEdit={handelEdit} />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
