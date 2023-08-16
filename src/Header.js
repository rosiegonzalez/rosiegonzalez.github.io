
import './Header.css'; // Import your component-specific CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const Header = () => {
  return (
    <header className="Header">
     <div className="b1">
        <div className="c4">
            <h3>Rosie Gonzalez</h3>
            <ul className="l-u">

            </ul>
        </div>
     </div>

     <div className="b2">
        <div className="c4">
            <h2>Home</h2>
            <ul className="l-u">
                
            </ul>
        </div>
     </div>

     <div className="b3">
        <div className="c4">
            <h2>About</h2>
            <ul className="l-u">
                
            </ul>
        </div>
     </div>
     <div className="b3">
        <div className="c4">
            <h2>Projects</h2>
            <ul className="l-u">
                
            </ul>
        </div>
     </div>
    </header>
  );
};

export default Header;
