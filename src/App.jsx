import './App.css'
import Calculation from './component/calculation/Calculation'
import Courses from './component/courses/Courses'
import Header from './component/header/Header'

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='flex flex-col md:flex-row my-8 container mx-auto'>
           <Courses></Courses>
           <Calculation></Calculation>
        </div>
      </main>
      
    </>
  )
}

export default App
