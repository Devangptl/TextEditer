
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React ,{ useState }from 'react'


function App() {

  const [mode,setMode]= useState("ligth")

  const togglemode=()=>{
    if(mode==='ligth'){
      setMode('dark')
      document.body.style.backgroundColor = "#0b5f7a"
    }
    else{
      setMode('ligth')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
<>

   <Navbar title={"TextEditer"} mode={mode} togglemode={togglemode} />
   <div className={`container my-3 text-${mode==='ligth'?'dark':'white'}`}>

   <TextForm  hadinng={"Enter the Text"}/>

   </div>


</>
  );
}

export default App;
