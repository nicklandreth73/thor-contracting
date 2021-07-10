import React, {useState} from "react";
import OurWorkImages from "./OurWorkImages";
import {Modal} from "react-bootstrap";

export default function OurWork() {
  const [imageEnlarged, setImageEnlarged] = useState(false);
  const [imageShown, setImageShown] = useState({
    url:"#",
    alt:"none"
  });
  function enlargeImage(url, alt){
    setImageShown({url, alt })
    setImageEnlarged(true);
  }

  return (<>
<Modal className="our-work-modal" show={imageEnlarged} onHide={() => setImageEnlarged(false)}> 
    <Modal.Header className="our-work-header" closeButton> {imageShown.alt} </Modal.Header>
    <Modal.Body className="our-work-body">
    <img className="our-work-card-expanded" src={imageShown.url} alt={imageShown.alt} />
    </Modal.Body>
  </Modal>
    <div className="our-work-container">
    
      {OurWorkImages.map((img) => (<>
        <img className="our-work-card"
         src={img.link}
          alt={img.alt} 
          onClick={() => {
            enlargeImage(img.link, img.alt)
            }}  
          />
  </>
      ))}
    </div>
    </>
  );
}
