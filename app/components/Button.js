function Button({ children }) {
  return (
    <button className="border-1 rounded-md p-1 hover:p-2 animation duration-250 ease-in-out">
      {children}
    </button>
  );
}

export default Button;
