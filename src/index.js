import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from 'Comment';
const avatar = require('./images/blank_profile.png');



const App = function() {
  return (
      <div>
          <Comment name="Cheryl" time="2021-01-03 00:00:00" comment="hello" className="ui container comment"></Comment>
          <Comment name="Peter" time="2021-01-02 00:00:00" comment="hi" className="ui container comment"></Comment>
          <Comment name="Jithin" time="2021-01-01 00:00:00" comment=":)" className="ui container comment"></Comment>
      </div>
  );
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
