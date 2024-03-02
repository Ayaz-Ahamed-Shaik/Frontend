import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/logo.png';

function Header()
{
    return (
     <div className="HeaderContainer"> 
       <div className="HeaderNavigation">
          <div className="HeaderMobile">
               <h4>+353 89908908908,</h4>
               <h4>+011 23235343</h4>
          </div>
          <nav>
               <h4><Link to="/testimonials" className='link'>Testimonials  | </Link></h4>
               <h4><Link to="/register" className='link'>Register  | </Link></h4>
               <h4>About Us  | </h4>
               <h4>Contact Us  </h4>
          </nav>
       </div>
       <div className="SecondHeaderNavigation">
          <Link to="/"><img src={logo}/></Link>
          <div className='SubSecondBar'>
             <h4><Link to='' className='link'>Tours In Ireland</Link></h4>
             <h4><Link to='' className='link'>International Tours</Link></h4>
             <h4><Link to='' className='link'>Destinations</Link></h4>
             <h4><Link to='' className='link'>Transport</Link></h4>
             <h4><Link to='' className='link'> Support</Link></h4>
          </div>
          <div className='SubSecondBarTwo'>
              <h4>+35319231232</h4>
              <h6>Mon to Fri 10:00 AM-6:00 PM</h6>
          </div>
       </div>
    </div>);
}

export default Header;