import Header from '../../Components/Header/Header';
import './Testimonials.css'; 
import img1 from '../../Assets/testimonials.jpg';
import family1 from '../../Assets/Mr-Rakesh-Jain_1.jpg';
import family2 from '../../Assets/Mrs-Seema-Dhingra-and-family.jpg';
import family3 from '../../Assets/naomi-keith-orange-county-california.jpg';
import family4 from '../../Assets/suzzanne-and-kathy-perth-australia_0.jpg';
import Footer from '../../Components/Footer/Footer.js';

function Testimonials()
{
    return (
        <div className='HomeContainer'>
           <Header/>
           <div className='ImageContainer'>
              <img src={img1} width='100%' height="100%"/>
           </div>
           <h4 className='HeadingStyleOrange'style={{marginTop:"20px"}}>
            TESTIMONIALS
           </h4>
           <div className='testimonialContainer'>
               <img src={family1}/>
               <div className='testimonialText'>
                   <h5>
                Swan Tours helped us to organize a family get together in Golden Palms, Mussoorie , the arrangements made were absolutely wonderful and we had a great time!
                <br/><br/>
                Thank you Swan Tours
                   </h5>
                   <h4>Mr. Rakesh Jain</h4>
               </div>
           </div>
           <div className='testimonialContainer'>
               <img src={family2}/>
               <div className='testimonialText'>
                   <h5>
                Swan Tours helped us to organize a family get together in Golden Palms, Mussoorie , the arrangements made were absolutely wonderful and we had a great time!
                <br/><br/>
                Thank you Swan Tours
                   </h5>
                   <h4>Mr. Rakesh Jain</h4>
               </div>
           </div>
           <div className='testimonialContainer'>
               <img src={family3}/>
               <div className='testimonialText'>
                   <h5>
                Swan Tours helped us to organize a family get together in Golden Palms, Mussoorie , the arrangements made were absolutely wonderful and we had a great time!
                <br/><br/>
                Thank you Swan Tours
                   </h5>
                   <h4>Mr. Rakesh Jain</h4>
               </div>
           </div>
           <div className='testimonialContainer'>
               <img src={family4}/>
               <div className='testimonialText'>
                   <h5>
                Swan Tours helped us to organize a family get together in Golden Palms, Mussoorie , the arrangements made were absolutely wonderful and we had a great time!
                <br/><br/>
                Thank you Swan Tours
                   </h5>
                   <h4>Mr. Rakesh Jain</h4>
               </div>
           </div>
           <Footer/>
        </div>
    );
}

export default Testimonials;