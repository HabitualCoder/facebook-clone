import React from 'react';
import Story from './Story';
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyreel">
            <Story
                image="https://media.giphy.com/media/lNX7rdyDOdRXFJFj9s/giphy.gif"
                profileSrc="http://localhost:3000/dhruva.jpg"
                title="Jay Dash"
            />
            <Story
                image="https://media.giphy.com/media/KOLC3Iun8xwL9KJGxI/giphy.gif"
                profileSrc="http://localhost:3000/superman.jpg"
                title="Clark Kent"
            />
            <Story
                image="https://media.giphy.com/media/Y4PUPG0d2In8bimcIm/giphy.gif"
                profileSrc="http://localhost:3000/flash.jpg"
                title="Barry Allen"
            />
        </div>
    );
}

export default StoryReel;