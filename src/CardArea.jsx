import { Button, Card } from "react-bootstrap";
import "./CardArea.css";

import firstImage from './assets/studentGirlNote.avif';
import secondImage from './assets/studentBackpack.jpg';
import thirdImage from './assets/studentHeadphone.jpg';
import lastImage from './assets/studentHoldingBook.jpg';


  // Define an array of styles
function CardArea(){
  return (
    <>

      <section className="CardSection">
        <h1 className="text-center" style={{padding:'20px'}}>Explore our program</h1>
        <div className="grid-card-container">
          <Card style={{ width: '14rem' }} className="mainCard">
            <Card.Img variant="top" src={firstImage} className="card-img"/>
            <Card.Body>
              <Card.Title  className="cardTitle">Find your major</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, culpa?
              </Card.Text>
              <Button variant="primary" className="cardButton">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '14rem' }} className="mainCard">
            <Card.Img variant="top" src={secondImage} className="card-img" />
            <Card.Body>
              <Card.Title className="cardTitle">Transfer to BELTEI</Card.Title>
              <Card.Text>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolorum!
              </Card.Text>
              <Button variant="primary" className="cardButton">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '14rem' }} className="mainCard" >
            <Card.Img variant="top" src={thirdImage}  className="card-img"/>
            <Card.Body>
              <Card.Title  className="cardTitle">Graduate Program</Card.Title>
              <Card.Text>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!
              </Card.Text>
              <Button variant="primary" className="cardButton">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '14rem' }} className="mainCard">
            <Card.Img variant="top" src={lastImage} className="card-img" />
            <Card.Body>
              <Card.Title  className="cardTitle"> Adult Learning</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quod.
              </Card.Text>
              <Button variant="primary" className="cardButton">Learn More</Button>
            </Card.Body>
          </Card>

          
        </div>
        <div className="block">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </section>
    </>
  );
}

export default CardArea;