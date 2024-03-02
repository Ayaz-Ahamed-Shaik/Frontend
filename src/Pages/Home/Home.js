import './Home.css';
import Header from '../../Components/Header/Header';
import travel from '../../Assets/travel.jpg';

import img1 from "../../Assets/kashmir-tours.jpg";
import img2 from "../../Assets/leh-ladakh-tours_0_0.jpg";
import img3 from "../../Assets/uttarakhand-tours_0.jpg";

import img4 from "../../Assets/cars.jpg";
import img5 from "../../Assets/luxury-bus.jpg";
import img6 from "../../Assets/tempo-traveller.jpg";

import img7 from "../../Assets/gujarat-tours.jpg";
import img8 from "../../Assets/wildlife-tours-in-india_0.jpg";
import img9 from "../../Assets/honeymoon-tours.jpg";

import ImageGallery from '../../Components/ImageGallery/ImageGallery';
import Footer from '../../Components/Footer/Footer.js';

function Home()
{
    return (
      <div className='HomeContainer'>
           <Header/>
           <div className='ImageContainer'>
              <img src={travel} width='80%' height="100%"/>
           </div>
           <div className='SubHeading'>
              <h5 className='LightText'>Explore Ireland, Customize Tour Packages, Lowest Rates, Guaranteed Services.</h5>
              <h5 className='LightText'> We are one of the best Travel Agents in India that provide customised tour packages according to your preference. Come and explore the places that you always wished to see! .
             </h5>
           </div>
             <ImageGallery image1={img1} image2={img2} image3={img3}  text1="Kashmir Tour Packages" text2="Uttarakhand Tour Packages" text3="Ladakh Tour Packages"/>
             <ImageGallery image1={img7} image2={img8} image3={img9}  text1="Gujarat Tour Packages" text2="Gujarat Tour Packages" text3="HoneyMoon Tour Packages"/>
             <ImageGallery image1={img1} image2={img2} image3={img3}  text1="Kashmir Tour Packages" text2="Uttarakhand Tour Packages" text3="Ladakh Tour Packages"/>
            <button type='button' className='viewtoursbutton'>View all tours</button>
            <hr className='line'/>
            <h3 className='HeadingStyleOrange'>TRANSPORT</h3>
            <h5 className='LightText'>We are the number one Travel Agent in India, providing our clients with the best from hotel bookings to transportation. You can avail of mini-coaches, luxury coaches, and cars to make each plan special.</h5>
            <ImageGallery image1={img4} image2={img5} image3={img6}  text1="Cars" text2="Mini-Coach" text3="Luxury Coach"/>
            <button type='button' className='viewtoursbutton'>View all tours</button>
             <div className='textDescriptionContainer'>
               <div className='textWithDescription'>
               <h3>Travel Agents in Ireland</h3>
               <h5>India, a land of gaiety, colour, traditions, and festivals, is a diverse country with deep-rooted religion, landscape, and language. The rich culture with striking uniqueness makes India proud of its diversity. Glimpses of Indian heritage lie in the treasure of its art and architecture, classical forms of dance, and traditional music. Many travel agents in India offer you a close view of these phenomenal Indian scenic places through their affordable tour packages.    

Swan Tours is one of the best travel agents in Delhi. We are a reputable name and are known to make your holidays a memorable experience. We have been serving our customers for almost three decades. We customise the tours and packages according to our client's preferences. So whether it's a group trip or a solo trip, we got you covered. Our 50k satisfied customers are a mark of our sane ethics and brand value. We always strive for ultimate customer happiness with our exclusive offerings</h5>
               </div>
               <div className='textWithDescription'>
               <h3>Tour Operators In Ireland</h3>
               <h5>India, a land of gaiety, colour, traditions, and festivals, is a diverse country with deep-rooted religion, landscape, and language. The rich culture with striking uniqueness makes India proud of its diversity. Glimpses of Indian heritage lie in the treasure of its art and architecture, classical forms of dance, and traditional music. Many travel agents in India offer you a close view of these phenomenal Indian scenic places through their affordable tour packages.    

Swan Tours is one of the best travel agents in Delhi. We are a reputable name and are known to make your holidays a memorable experience. We have been serving our customers for almost three decades. We customise the tours and packages according to our client's preferences. So whether it's a group trip or a solo trip, we got you covered. Our 50k satisfied customers are a mark of our sane ethics and brand value. We always strive for ultimate customer happiness with our exclusive offerings</h5>
               </div>
               <div className='textWithDescription'>
               <h3>How to Book Your Holiday in India ?</h3>
               <h5>India, a land of gaiety, colour, traditions, and festivals, is a diverse country with deep-rooted religion, landscape, and language. The rich culture with striking uniqueness makes India proud of its diversity. Glimpses of Indian heritage lie in the treasure of its art and architecture, classical forms of dance, and traditional music. Many travel agents in India offer you a close view of these phenomenal Indian scenic places through their affordable tour packages.    

Swan Tours is one of the best travel agents in Delhi. We are a reputable name and are known to make your holidays a memorable experience. We have been serving our customers for almost three decades. We customise the tours and packages according to our client's preferences. So whether it's a group trip or a solo trip, we got you covered. Our 50k satisfied customers are a mark of our sane ethics and brand value. We always strive for ultimate customer happiness with our exclusive offerings</h5>
               </div>
             </div>
             <Footer/>
      </div>
    );
}

export default Home;