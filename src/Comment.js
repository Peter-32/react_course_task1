import React from 'react';
import ReactDOM from 'react-dom';

const Comment = function(props) {
    return (

        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image_src} />
            </a>
            <div className="content">
                <a href="/" className="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">{props.content}</div>
            </div>
        </div>

  );
}

export default Comment;
