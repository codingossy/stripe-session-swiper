import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";




const Header = () => {
  
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
 
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor('#fff');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#000');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);



  return (
    <header 
    style={{ backgroundColor: `${color}` }}
    className="fixed left-0 top-0 w-full transition-all ease-in duration-300 z-50">
      <div className="container mx-auto">
        <div className="flex py-3 items-center justify-between border-b">
          <Link to="/">
             <h4  style={{ color: `${textColor}` }} className="capitalize">Logo</h4>
          </Link>

          <Navbar textColor={textColor} />

    
          {/* mobile nav functionality */}
          <HiMenu
          style={{ color: `${textColor}` }}
            onClick={() => setNavMobile(true)}
            className="md:hidden text-black text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
