import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imagem1 from '/sliders/1.png'
import imagem2 from '/sliders/2.png'
import imagem3 from '/sliders/3.png'
import imagem4 from '/sliders/4.png'

export const Sliders = () => {
    return (
        <div className="slide_container centralizar">

            <Carousel 
                className='banner'
                showIndicators={false}
                showArrows={false}
                autoPlay
                infiniteLoop
                autoFocus={false}
                interval={3000}
            >
                <img src={imagem1} alt="" className='imagem-slide'/>
                <img src={imagem2} alt="" className='imagem-slide'/>
                <img src={imagem3} alt="" className='imagem-slide'/>
                <img src={imagem4} alt="" className='imagem-slide'/>
            </Carousel>

        </div>
    )
}