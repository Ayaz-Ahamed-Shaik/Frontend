import './Header.css';


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
               <h4>Testimonials  | </h4>
               <h4>Blogs  | </h4>
               <h4>About Us  | </h4>
               <h4>Contact Us  </h4>
          </nav>
       </div>
       <div className="SecondHeaderNavigation">
          <div className='SubSecondBar'></div>
          <div className='SubSecondBar'></div>
          <div className='SubSecondBar'></div>
       </div>
    </div>);
}

export default Header;