import '../App.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='App'>
        <Navbar />
        <header className="App-header">
        <p>
          Home page
        </p>
        <a
          className="App-link"
          href="localhost:3000"
          target="_self"
          rel="noopener noreferrer"
        >
          Auth0 React App
        </a>
        {/* <Profile /> */}
      </header>
    </div>
  )
}
