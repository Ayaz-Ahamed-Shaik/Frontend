import './Home.css';
import Header from '../../Components/Header/Header';
import travel from '../../Assets/travel.jpg';
import img1 from "../../Assets/kashmir-tours.jpg";
import img2 from "../../Assets/leh-ladakh-tours_0_0.jpg";
import img3 from "../../Assets/uttarakhand-tours_0.jpg";

import ImageGallery from '../../Components/ImageGallery/ImageGallery';

function Home()
{
    return (
      <div className='HomeContainer'>
           <Header/>
           <div className='ImageContainer'>
              <img src={travel} width='80%' height="100%"/>
           </div>
           <div className='SubHeading'>
              <h5 className=''>Explore Ireland, Customize Tour Packages, Lowest Rates, Guaranteed Services.</h5>
              <h5> We are one of the best Travel Agents in India that provide customised tour packages according to your preference. Come and explore the places that you always wished to see! .
             </h5>
           </div>
           <ImageGallery image1={img1} image2={img2} image3={img3}  text1="Kashmir Tour Packages" text2="Uttarakhand Tour Packages" text3="Ladakh Tour Packages"/>
           <ImageGallery image1={img1} image2={img2} image3={img3}  text1="Kashmir Tour Packages" text2="Uttarakhand Tour Packages" text3="Ladakh Tour Packages"/>
           <ImageGallery image1={img1} image2={img2} image3={img3}  text1="Kashmir Tour Packages" text2="Uttarakhand Tour Packages" text3="Ladakh Tour Packages"/>

      </div>
    );
}

export default Home;