import React from "react";

//npm i react-slideshow-image CMD 터미널에 실행 후 동작 가능
import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";

const imageArr = [
  {
    label : "image1",
    alt:'mainImageNo1',
    url: process.env.PUBLIC_URL + '/mainImage1.jpg'
  },
  {
    label : "image2",
    alt:'mainImageNo2',
    url: process.env.PUBLIC_URL + '/mainImage2.jpg'
  },
  {
    label : "image3",
    alt:'mainImageNo3',
    url: process.env.PUBLIC_URL + '/mainImage3.png'
  }
];

const divStyle = {
  display: 'flex',
  alignItems: "center",
  justfyContnet: "center",

  width: '1050px',
  height: '650px',
  backgoundSize: 'cover',

  marginTop: '50px',
  marginBottom: '20px',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const ImageSlider = () => {

  return(
  <div className="slide-container">
    <Fade>
      {imageArr.map(( image, index )=>(
        <div key={index}>
          <div style={{...divStyle, backgoundImage : `url(${image.url})`}}>
            <img alt={image.alt} src= {image.url} style ={{height : '650px', width : '1050px'}}></img>
          </div>
        </div>
      ))}
    </Fade>
  </div>  
  );
};

export default ImageSlider;