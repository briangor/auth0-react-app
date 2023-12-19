import '../App.css';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

export default function Protected() {
    return (
      <div className="App">
        <Navbar />
          <p>Protected page</p>
          <br />
          <Profile />
      </div>
    )
  }
  