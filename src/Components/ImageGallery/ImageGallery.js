import './ImageGallery.css';



function ImageGallery({image1,image2,image3,text1,text2,text3})
{
    return (
      <div className='ImageGallery'>
           <div className='ImagePoster'>
              <img src={image1}/>
              <h4>
                {text1}
               </h4>
           </div>
           <div className='ImagePoster'>
              <img src={image2}/>
              <h4>
                {text2}
              </h4>
           </div>
           <div className='ImagePoster'>
              <img src={image3}/>
              <h4>
                {text3}
              </h4>
           </div>
      </div>
    );
}

export default ImageGallery
