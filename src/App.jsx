import { Route, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import Error from "./pages/Error.jsx"
import Tasks from "./pages/tasks.jsx"
import Tables from "./pages/Tables.jsx"
import Forms from "./pages/Forms.jsx"
import Header from "./components/Header.jsx"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tasks" element={<Tasks/>} />
        <Route path="/Tables" element={<Tables/>} />
        <Route path="/Forms" element={<Forms/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
