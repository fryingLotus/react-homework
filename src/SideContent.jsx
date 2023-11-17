import { Button } from 'react-bootstrap';
import './SideContent.css';
import sideImage from './assets/sideImage.jpg';

function SideContent()
{
    return (
        <>
        <section className="sideContent">
            <div className="grid-side">
                <div className='leftSide'>
                  <h1>THE BELTEI DIFFERENCE</h1>
                  <p>We provide students with much more than just a single letter grade. Our feedback identifies strengths and targets areas for growth. Our learning approach is centered around the 8 Abilities – what set our students and alums apart. These are the skills that will help you thrive both personally and professionally.</p>
                  <Button variant="primary" className='leftButton'>
          OUR ABILITIES IN ACTION
        </Button>{' '}
                </div>
                <div className='rightSide'>
                    <h1><img src={sideImage} alt="" className='imageSide'/></h1>
                </div>
            </div>
            
        </section>
        </>
    );

}

export default SideContent;