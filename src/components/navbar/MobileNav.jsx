import { Link } from 'react-router-dom';

import { IoClose } from "react-icons/io5";




const MobileNav = ({ setNavMobile }) => {
  return (
    <nav className="block md:hidden bg-black text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
      <li  onClick={() => setNavMobile(false)}>
          <Link className="cursor-pointer border p-1 text-red-400 bg-gray-400"  to="/bio">bio</Link>
        </li>
        <li  onClick={() => setNavMobile(false)}>
          <Link className="cursor-pointer border p-1 text-blue-600 bg-gray-400"  to="/brand">photos</Link>
        </li>
        <li  onClick={() => setNavMobile(false)}>
          <Link className="cursor-pointer border p-1 text-green-400 bg-gray-400"  to="/doc">doc</Link>
        </li>
        <li  onClick={() => setNavMobile(false)}>
          <Link className="cursor-pointer border p-1 text-yellow-400 bg-gray-400"  to="/videos">videos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
