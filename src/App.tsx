import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'


function App() {
  return (
    <div>
      <div className='flexing'>
    <Navbar/>
    <Home/>
    {/* <Test data={datas} /> */}
    </div>
    </div>
  )
}

export default App
