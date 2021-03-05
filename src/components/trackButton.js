import React from 'react';
import картинка1 from '../components/картинка.png';
import картинка2 from '../components/картинка.png';
import картинка3 from '../components/картинка.png';

class TrackButton extends React.Component {

    images = [картинка1, картинка2, картинка3];

    state = {
        currentImage: 0,
    }

    onChange = () => {

        const nextImage = this.state.currentImage === 2 ? 0 : this.state.currentImage + 1;
        this.setState({ currentImage: nextImage})
    }

    render () {
        <img onClick={this.onChange} src={this.images[this.state.currentImage]} />
    }

}

export default TrackButton;