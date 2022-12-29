import React from 'react';

const MediaItem = ({task}) => {
    const {img,text} = task;
    return (
        <div>
            <div>
            <img src={img} alt="img"/>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default MediaItem;