import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function NavbarTest() {
  return (
    <>
      <div className="grid-navbar-container">
        <div className="left">
          <div className="imageNav"></div>
          <div className="TextNav">
            <p>BELTEI INTERNATIONAL</p>
            <p>UNIVERSITY</p>
          </div>
        </div>
        <div className="middle">
          <ul className="desktop-menu">
            <li>Academics</li>
            <li>Cost & Aids</li>
            <li>Life at BELTEI</li>
          </ul>
          <select className="mobile-menu">
            <option value="academics">Academics</option>
            <option value="costAids">Cost & Aids</option>
            <option value="lifeAtBeltei">Life at BELTEI</option>
          </select>
        </div>
        <div className="right">
          <button className="ApplyBtn">Apply</button>
          <button className="VisitBtn">Visit</button>
          <input type="button" className="SearchBtn"></input>
        </div>
      </div>
    </>
  );
}

export default NavbarTest;
