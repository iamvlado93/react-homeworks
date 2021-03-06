import React from 'react';
import pic1 from '../trackButton/img/1.png';
import pic2 from '../trackButton/img/2.png';
import pic3 from '../trackButton/img/3.png';

class TrackButton extends React.Component {

    images = [pic1, pic2, pic3];

    state = {
        currentImage: 0,
    }

    onChange = () => {
        const nextImage = this.state.currentImage === 2 ? 0 : this.state.currentImage + 1;
        this.setState({ currentImage: nextImage})
    }

    render () {
        return (
        <img onClick={this.onChange} src={this.images[this.state.currentImage]}/>)
    }

}

export default TrackButton;