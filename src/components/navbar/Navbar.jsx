
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="capitalize hidden md:flex">
      <ul className="flex items-center space-x-4 text-black">
        <li >
          <Link className="cursor-pointer border p-1 text-red-400 bg-gray-400"  to="/bio">bio</Link>
        </li>
        <li>
          <Link className="cursor-pointer border p-1 text-blue-600 bg-gray-400"  to="/brand">photos</Link>
        </li>
        <li>
          <Link className="cursor-pointer border p-1 text-green-400 bg-gray-400"  to="/docs">doc</Link>
        </li>
        <li>
          <Link className="cursor-pointer border p-1 text-yellow-400 bg-gray-400"  to="/videos">videos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
