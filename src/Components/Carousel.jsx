import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Slider = () => {
  return (
    <div>
        <Carousel>
            <div>
                <img src="./images/couch.jpg" />
                <p className="legend">Couch</p>
            </div>
            <div>
                <img src="./images/chair.jpg" />
                <p className="legend">Chair</p>
            </div>
            <div>
                <img src="./images/bed.jpg" />
                <p className="legend">Bed</p>
            </div>
            <div>
                <img src="./images/curtain.jpg" />
                <p className="legend">Curtain</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Slider
