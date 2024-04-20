import { useState } from 'react'
import './App.css'
import Tictactoe from './Comp/Tictactoe';
import frontImg from './Comp/Images/img1.jpeg';

function App() {
  const [click, setClick] = useState(false);


  return (
    <div className='App'>
      {
        click ? <Tictactoe /> : <div className='homePage'> <img src={frontImg} />
          <button onClick={() => setClick(true)}>Start Tic Toc Toe</button>
        </div>
      }
    </div>

  )
}

export default App
