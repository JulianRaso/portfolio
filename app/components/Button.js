function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="border-2 rounded-4xl p-1">
      {children}
    </button>
  );
}

export default Button;
