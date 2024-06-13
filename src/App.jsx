import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List/List';

function App() {
  const [list, setlist] = useState([])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" ></Route>
          <Route path="/List"></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
