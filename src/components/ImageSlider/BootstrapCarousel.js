import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import "./BootstrapCarousel.css"

const data = [
    {
     image: require('./../../assets/about-chef1.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('./../../assets/about-chef2.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./../../assets/about-chef1.jpg'), 
      caption:"Caption",
      description:"Description Here"
     } 
  ]
const BootstrapCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex,e ) => {
        setIndex(selectedIndex);
    };
    return (<>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                data.map((slide, i) =>{
                    return(
                        <Carousel.Item>
                            <img
                             className='d-block w-100'
                             src={slide.image}
                             alt='slider image'
                             width={1200} 
                             height={504}
                             marginLeft={"400px"}  
                             marginTop= {"100px"}
                            />
                            {/* <Carousel.Caption>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    </>)
}

export default BootstrapCarousel