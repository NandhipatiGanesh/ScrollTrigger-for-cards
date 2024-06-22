import './App.css';
import Parallax from "./Parallax/Parallax.js";

const HeroStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

function Hero() {
  return (
    <div className='hero-section' style={HeroStyle}>
      <h3>Hi I am Ganesh</h3>
      <p>Good Frontend Developer</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Hero />
      <Parallax />
    </>
  );
}

export default App;
