import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { to: "/historia", label: "História" },
    { to: "/integrantes", label: "Integrantes" },
    { to: "/shows", label: "Shows" },
    { to: "/produtos", label: "Produtos" },
  ];

  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-black to-red text-white shadow-xl fixed ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="./assets/logo2.png" width={150} alt="Logo Rebelde" className="cursor-pointer" />
        </Link>

        <nav className="flex gap-6 text-gray font-montserrat font-semibold">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
