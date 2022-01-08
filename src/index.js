import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from 'faker';

const App = function() {
  return (
      <div>
          <Comment name="Cheryl" time="2021-01-03 00:00:00" content="hello" image_src={faker.image.image()} className="ui container comment"></Comment>
          <Comment name="Peter" time="2021-01-02 00:00:00" content="hi" image_src={faker.image.image()} className="ui container comment"></Comment>
          <Comment name="Jithin" time="2021-01-01 00:00:00" content=":)" image_src={faker.image.image()} className="ui container comment"></Comment>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
