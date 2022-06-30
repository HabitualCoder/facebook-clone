import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="http://localhost:3000/dhruva.jpg"
                message="yoo this is the message"
                timestamp="1601493943737"
                imgName="imgName"
                userName="JayDash"
            />
        </div>
    );
}

export default Feed;