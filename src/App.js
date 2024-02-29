import './App.css';
import Board from "./components/Board";
import Auth from "./components/Auth";
import {useState} from "react";

function App() {

    const [currentPage, setCurrentPage] = useState('default');

    const boardBackground = {
        backgroundImage: 'url("imgs/9.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundAttachment: 'fixed'
    };
  return (
      <>
          { currentPage === 'auth' && <Auth></Auth> }
          { currentPage === 'board' && <Board boardBackground={boardBackground}></Board> }
          { currentPage === 'default' &&
              <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={boardBackground}>
                  <h1>Welcome to our TO DOS App</h1>
                  <div className="mt-4">
                      <button className="btn btn-primary mx-2" onClick={() => setCurrentPage('auth')}>Login Page</button>
                      <button className="btn btn-secondary mx-2" onClick={() => setCurrentPage('board')}>Board</button>
                  </div>
              </div>
          }
      </>
  )
}

export default App;
