import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

const App = function() {
  return (
      <div>
          <Comment name="Cheryl" time="2021-01-03 00:00:00" content="hello" className="ui container comment"></Comment>
          <Comment name="Peter" time="2021-01-02 00:00:00" content="hi" className="ui container comment"></Comment>
          <Comment name="Jithin" time="2021-01-01 00:00:00" content=":)" className="ui container comment"></Comment>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
