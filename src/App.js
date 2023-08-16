import './App.css';
import { Footer } from './Footer'; // Corrected import
import Header from './Header';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

          <div className="App">
            {/* <Header /> */}
            <div className= 'Header'> 
            
            <Header />
            </div>
            <div className='Body'>
              

            </div>
            <div className="text1">
              <h1>Welcome!</h1>
              <h2>SOFTWARE DEVELOPER</h2>
            <h4 className='text'>Hello! I am a passionate and dedicated software developer who recently 
            completed a rewarding internship, gaining hands-on experience and 
            valuable insights into the world of software development. 
            Throughout my internship, I had the privilege of working 
            on diverse projects and collaborating with talented professionals, 
            honing my skills and expanding my knowledge within the field.</h4>
            </div>
            <Footer />
          </div>

  );
}

export default App;
