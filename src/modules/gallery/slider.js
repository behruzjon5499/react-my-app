import React, {Component} from 'react';
import '../../assets/styles/galleryslider.scss'
import ImageGallery from 'react-image-gallery';
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


class Slider extends Component {
    render() {
        return <ImageGallery items={images} />;

    }
}

export default Slider;