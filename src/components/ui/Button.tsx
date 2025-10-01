interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-red hover:text-white transition cursor-pointer"
    >
      {children}
    </button>
  );
}
