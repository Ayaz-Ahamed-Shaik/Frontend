import './Footer.css';
import twitter from '../../Assets/Twitter.png';
import facebook from '../../Assets/facebook.png';
import instagram from '../../Assets/Instagram.png';
import linkedIn from '../../Assets/linkedIn.png';
import dialer from '../../Assets/dialer.png';
function Footer()
{
   return (
         <div className='FooterContainer'>
              <div className='navigationMenuFooter'>
                  <div className='menu'>
                     <h5>Need help?</h5>
                     <h6>Working Hours:<br/>
                      (10:00 AM – 6:00 PM. Monday – Friday)
                      </h6>
                     <h6>Telephone: +91 11 23415601</h6>
                     <h6>Emergency Numbers:  + 91 - 9810100293,<br/> 9910049132, 7042150002, 7042160002, 9910048582</h6>
                     <h6>Address: Flat No. 6, Shankar Market, 2nd Floor,<br/> Above Shop No.1 Shankar Market, Outer Circle,<br/> Opposite M Block, Connaught Place, Delhi, 110001, India.</h6>
                  </div>
                  
                  <div className='menu'>
                  <h5>About</h5>
                     <h6>Blog</h6>
                     <h6>Holiday Packages in India</h6>
                     <h6>About us</h6>
                     <h6>Hotels in Ireland</h6>
                     <h6>International Tour Packages</h6>
                     <h6>Luxury Tours in Ireland</h6>
                     <h6>Transport</h6>
                     <h6>Sitemap</h6>
                  </div>
                  <div className='menu'>
                  <h5>Customer Support</h5>
                     <h6>Contact Us</h6>
                     <h6>Swan Tours Awards</h6>
                     <h6>Help & FAQs</h6>
                     <h6>Reservation Policy</h6>
                     <h6>Terms & Condition</h6>
                     <h6>Payment Options</h6>
                     <h6>Lowest Rates Challenge</h6>
                     <h6>Testimonials</h6>
                     <h6>Careers</h6>
                  </div>
              </div>
              <hr className='line' style={{width:"80%",marginTop:"50px",border:"1px solid #c7c6c653"}}/>
              <div className='socialNetworkBarFooter'>
                <img src={twitter} width="40" height="40"/>
                <img src={facebook} width="40" height="40"/>
                <img src={instagram} width="40" height="40"/>
                <img src={linkedIn} width="40" height="40"/>
              </div>
         </div>
   );
}

export default Footer;