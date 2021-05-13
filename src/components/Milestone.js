import React from 'react';
import Html from './Html';
import Milestones from './Milestones';

function Milestone(props) {
    return typeof props.data === 'string' ? (
      <Html>
        {props.data}
      </Html>
    ) : (
        <React.Fragment>
          <Html>
            {props.data.description}
          </Html>
          <Milestones data={props.data.milestones} />
        </React.Fragment>
      );
  }

export default Milestone;