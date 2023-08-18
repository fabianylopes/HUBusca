import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='container'>
      <Link to="/">
        <h1>HUBusca</h1>
      </Link>
      <Outlet />
    </div>
  )
}

export default App;
