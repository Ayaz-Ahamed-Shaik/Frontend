import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Tours.css';
import img3 from "../../Assets/uttarakhand-tours_0.jpg";

function Tour({prop})
{
    return (
        <div className="TourContainer">
           <div className='TourBar'>
                <img src={prop.img}/>
                <div className='DetailsTours'>
                    <div className='TextTour'>
                        <h3>{prop.package}</h3>
                        <h4>{`${prop.day} Days / ${prop.night} Nights`}</h4>
                        <h4>Place covered</h4>
                    </div>
                    <div className='ButtonTour'>
                        <button>Details</button>
                        <button>Book Now</button>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Tour;