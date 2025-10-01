export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-black text-white mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        &copy; {new Date().getFullYear()} RBD  Todos os direitos reservados.
      </div>
    </footer>
  );
}
