import React from 'react';
import VideosList from '../../../Widgets/VideosList/videosList';
const VideosMain = () => {
    return (
       <VideosList
        type="card"
        title="false"
        loadmore={true}
        start={0}
        amount={5}
       />
    );
};

export default VideosMain;