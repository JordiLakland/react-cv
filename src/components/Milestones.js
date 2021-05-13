import React from 'react';
import Milestone from './Milestone';
import List from './List';

function Milestones(props) {
    return (
      <List className="no-indent space-between-items compact">
        {props.data.map((milestone, index) =>
          <Milestone key={index} data={milestone} />
        )}
      </List>
    );
  }

export default Milestones;