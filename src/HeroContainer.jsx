import "./index.css";

function HeroContainer() {
  return (
    <>
      <div className="heroSection">
        <div className="heroContainer">
          <h1 className="HeroText">
            <p>The Future Of </p>
            <p style={{color:'var( --text-color-primary)'}}>Global Leader</p>
          </h1>
          <div className="grid-hero-container">
            <button>FIND YOUR PROGRAM</button>
            <button>TUITION & FEE</button>
            <button>THE BELTEI EXPERIENCE</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroContainer;
