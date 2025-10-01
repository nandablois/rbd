export default function Header() {
  return (
    <header className="w-full py-4 px-6bg-gradient-to-r from-black to-red text-white shadow-md" >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src="./assets/logo2.png" width={150} />
        <nav>
          <ul className="flex gap-6 text-gray font-montserrat font-semibold">
            <li><a href="#historia" className="hover:text-red transition">História</a></li>
            <li><a href="#slides" className="hover:text-red transition">Galeria</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
