import "./Header.css";
import dolcevita from "../../assets/Header.img/dolcevita.webp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="DolceVita">
      <NavLink to={'/'} ><img src={dolcevita} width="300" /></NavLink>
        <div className="h1 text-secondary">
          <NavLink to={'/'} ><h1>Cinema "La DolceVita" </h1></NavLink>
        </div>
        <div>
       <h2 className="subtitle">Entradas online</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
