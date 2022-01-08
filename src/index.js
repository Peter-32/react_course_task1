import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
const avatar = require('./images/blank_profile.png');

const Comment = function(props) {
    return (
      <div className="ui container comments">
          <div className="comment">
              <a href="/" className="avatar">
                  <img alt="avatar" src={faker.image.image()}/>
              </a>
              <div className="content">
                  <a href="/" className="author">{props.name}</a>
                  <div className="metadata">
                      <span className="date">{props.time}</span>
                  </div>
                  <div className="text">{props.comment_detail}</div>
              </div>
          </div>
      </div>
  );
}

const App = function() {
  return (
      <div>
          <Comment name="Cheryl" time="2021-01-03 00:00:00" comment_detail="hello" className="ui container comment"></Comment>
          <Comment name="Peter" time="2021-01-02 00:00:00" comment_detail="hi" className="ui container comment"></Comment>
          <Comment name="Jithin" time="2021-01-01 00:00:00" comment_detail=":)" className="ui container comment"></Comment>
      </div>
  );
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
