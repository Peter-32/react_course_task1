import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = function() {
  return (
      <div className="ui container comments">
          <ApprovalCard>
              <Comment name="Cheryl" time="Today at 4:55pm" content="hello" image_src={faker.image.image()} className="ui container comment"></Comment>
          </ApprovalCard>
          <ApprovalCard>
              <Comment name="Peter" time="Today at 2:41pm" content="hi" image_src={faker.image.image()} className="ui container comment"></Comment>
          </ApprovalCard>
          <ApprovalCard>
              <Comment name="Jithin" time="Today at 1:10pm" content=":)" image_src={faker.image.image()} className="ui container comment"></Comment>
          </ApprovalCard>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
