import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./components/Home.jsx"
import Error from "./pages/Error.jsx"
import Tasks from "./pages/tasks.jsx"
import Tables from "./pages/Tables.jsx"
import Header from "./components/Header.jsx"
import { useState } from "react"

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
    if(task.id){
      let newList=list.map((item)=>{
        if(item.id == task.id){
          return task;
        }
        return item;
      });
      setList(newList);
      navigator('/Tables');
    }else{
      setList([...list,{...task,id:Date.now()}]);
    }
    setTask({}); 
    navigator('/Tables');   
  }
  const handelDelete=(id)=>{
    let newList=list.filter(item => item.id != id);
    setList(newList);
  }
  const handelEdit=(id)=>{
    let data = list.find(item => item.id == id);
    setTask(data);
    navigator('/Tasks');
  }
  console.log(list);
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
