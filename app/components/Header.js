import Button from "./Button";

function Header() {
  return (
    <div className="border-2 w-full flex items-center justify-between p-3">
      <p>Julian Raso</p>
      <div className="flex align-center gap-5">
        <Button>Inicio</Button>
        <Button>Experiencia</Button>
        <Button>Projectos</Button>
        <Button>Contactar</Button>
      </div>
    </div>
  );
}

export default Header;
