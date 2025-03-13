function Button({ children }) {
  return (
    <button className="border-1 h-fit text-1l rounded-md p-1 hover:p-1.5 animation duration-250 ease-in-out">
      {children}
    </button>
  );
}

export default Button;
