import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import MediaItem from './MediaItem';
const Media = () => {
    const tasks = useLoaderData();
    return (
        <div>
            <h1>This is Media</h1>
            {
                    tasks.map(task => <MediaItem
                        key={task._id}
                        task={task}
                    ></MediaItem>)
                }
        </div>
    );
};

export default Media;