import Button from "./Button";

function Header() {
  return (
    <div className="w-full flex align-center justify-end p-4 h-20 ">
      <div className="flex align-center justify-center gap-5 h-18">
        <Button>Inicio</Button>
        <Button>Experiencia</Button>
        <Button>Projectos</Button>
        <Button>Contactar</Button>
      </div>
    </div>
  );
}

export default Header;
