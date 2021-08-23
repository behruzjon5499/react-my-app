import React, {Component} from 'react';
import Carousel from "./carousel";
import '../../assets/styles/carousel.scss'
import '../../assets/styles/homeCarousel.scss'
import Slider from "./HomeCarousel";

class Home extends Component {
    render() {
        return (
            <div>
                <div id="home-carousel">
                    <Slider/>
                </div>
                <Carousel/>
            </div>
        );
    }
}

export default Home;