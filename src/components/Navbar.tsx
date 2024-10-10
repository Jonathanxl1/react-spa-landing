import { Link } from "react-router-dom";
import logo from "../assets/EvalText_logo.png";

interface attrLink {
  link: string;
  name: string;
}

function Navbar() {
  const links: Array<attrLink> = [
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/download",
      name: "Download",
    },
    {
      link: "/contact",
      name: "Contact us",
    },
    {
      link: "/login",
      name: "Login",
    },
  ];

  return (
    <nav className="relative top-0 bg-black text-white w-full h-16 flex items-center justify-between px-4">
      <div className="w-2/12  ">
        <Link to="/">
          <img className="w-auto h-6" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="list-none space-x-3 ">
        {links.map(({ link, name }, idx) => {
          return (
            <li className="float-left cursor-pointer" data-link={link}>
              <Link to={link} key={idx}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
