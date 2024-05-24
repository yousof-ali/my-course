import { useState } from 'react'
import './App.css'
import Calculation from './component/calculation/Calculation'
import Courses from './component/courses/Courses'
import Header from './component/header/Header'

function App() {

  const[course,setCourse]=useState([]);

  const[left , timeLeft] = useState(20);

  const[totaltime, setTotalTime] = useState(0);
  
  const handleclk = (cTitle)=>{
    if(course.includes(cTitle)){
      setCourse([...course]);
      return alert("can not add duplicate items");
    }
    else{
      let ltime = left-cTitle.credit_time;
      
      if( ltime >= 0 ){
        timeLeft(left-cTitle.credit_time);
        setTotalTime(totaltime+cTitle.credit_time);
        setCourse([...course,cTitle]);
      }
      else{
        alert("Your total credit is 20 ");
      }
      
    }
  }

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-col md:flex-row my-8 container mx-auto gap-6'>
           <Courses handleclk={handleclk}></Courses>
           <Calculation course={course} left={left} totaltime={totaltime}></Calculation>
        </div>
      </main>
      
    </>
  )
}

export default App
