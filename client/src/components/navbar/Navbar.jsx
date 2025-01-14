import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../../images/Mr-Beast-Logo-HF.png";
import "./navbar.scss";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="cursor-pointer w-full flex md:justify-center justify-between items-center p-4 z-10">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial cursor-pointer">
        {/* {["About Us", "Services", "Tokenomics", "How To Buy", "Community"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        <li className="mx-4 cursor-pointer"><a href="#description">About Us</a></li>
        <li className="mx-4 cursor-pointer"><a href="#services">Services</a></li>
        <li className="mx-4 cursor-pointer"><a href="#distribution">Distribution</a></li>
        <li className="mx-4 cursor-pointer"><a href="#howto">How To Buy</a></li>
        <li className="mx-4 cursor-pointer"><a href="#community">Community</a></li>

        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] buy-coin">
          <a href="https://pancakeswap.com/swap" target="_blank" >Buy BeastCoin</a>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {/* {["About Us", "Services", "Tokenomics", "How To Buy", "Community"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )} */}
            <li className="my-2 text-lg cursor-pointer"><a href="#description">About Us</a></li>
            <li className="my-2 text-lg cursor-pointer"><a href="#services">Services</a></li>
            <li className="my-2 text-lg cursor-pointer"><a href="#distribution">Distribution</a></li>
            <li className="my-2 text-lg cursor-pointer"><a href="#howto">How To Buy</a></li>
            <li className="my-2 text-lg cursor-pointer"><a href="#community">Community</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
