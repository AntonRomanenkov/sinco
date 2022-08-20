import React, { Fragment } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const ModalVideos = (props) => {
    const { isOpen, onClick } = props;
    return (
        <Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Faow3SKIzq0" onClose={onClick} />
        </Fragment>
    )
}

export default ModalVideos