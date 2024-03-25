import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Tour from '../../Components/Tours/Tours';
import './TourPage.css';
import tour1 from '../../Assets/tour1.jpg';
import tour2 from '../../Assets/tour2.jpg';
import tour3 from '../../Assets/tour3.jpg';
import tour4 from '../../Assets/tour4.jpg';
import tour5 from '../../Assets/tour5.jpg';
import tour6 from '../../Assets/tour6.jpg';
import React from 'react';

function TourPage({prop})
{
    const {id}=useParams();

    return (
        <div className="TourPageContainer">
          <Header/>
          {id=="Ireland"?
          <React.Fragment>
          (<Tour prop={{img:tour1,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"04"}}/>
          <Tour prop={{img:tour2,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"04"}}/>
          <Tour prop={{img:tour3,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"04"}}/>
          <Tour prop={{img:tour4,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"04"}}/>)
          </React.Fragment>
          :id=="Destination"?
          <React.Fragment>
            (<Tour prop={{img:tour5,package:"Port Blair Havelock Honeymoon Package",day:"02",night:"03"}}/>
          <Tour prop={{img:tour6,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"05"}}/>
          <Tour prop={{img:tour2,package:"Port Blair Havelock Honeymoon Package",day:"04",night:"05"}}/>
          <Tour prop={{img:tour1,package:"Port Blair Havelock Honeymoon Package",day:"02",night:"03"}}/>)
          </React.Fragment>
          :undefined
          }
          <Footer/>
        </div>
    )
}

export default TourPage;