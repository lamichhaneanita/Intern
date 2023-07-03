import React from 'react'
import Message from './components/Messenger'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="bg-sky-200 w-full font-lato ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
