import { Menu } from "lucide-react"
const Navbar = () => {
  return (
    <header className="flex p-[16px] md:px-[39px] md:py-[20px] items-center justify-between">
      <img
        src="./logo.webp"
        alt="logo"
        className="w-[110px] h-[16px] md:w-[164px] md:h-[24px]"
      />
      <nav className="hidden lg:flex gap-[40px] items-center">
        <ul className="flex gap-[40px]">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-nav hover:text-primary transition-colors">Nosotros</a>
          </li>
          <li>
            <a href="#" className="text-nav hover:text-primary transition-colors">Servicios</a>
          </li>
          <li>
            <a href="#" className="text-nav hover:text-primary transition-colors">Planes</a>
          </li>
        </ul>
        <div className="flex gap-[20px]">
          <button className="border-primary border-[1px] text-primary py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-white hover:bg-primary transition-colors">
            Iniciar Sesión
          </button>
          <button className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors">
             Registarme
          </button>
        </div>
      </nav>
      <div className="flex gap-[16px] lg:hidden">
        <Menu className="size-[24px] text-primary"/>
      </div>
    </header>
  );
};

export default Navbar;
