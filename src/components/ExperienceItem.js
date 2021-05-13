import React from 'react';
import Header from './Header';
import Html from './Html';
import Milestones from './Milestones';
import List from './List';

function ExperienceItem(props) {
  
    const title = !Array.isArray(props.position) ? (
      props.position
     ) : (
       <List className="job_positions no-style no-indent">
        {props.position.map((position, index) => <span key={index}>{position}</span>)}
       </List>
     );
  
    return (
      <div className="ExperienceItem">
        <Header
          title={title}
          subtitle={props.company}
          dates={`${props.startDate} - ${props.endDate}`}
          location={<Html>{props.location}</Html>}
        />
        <Milestones data={props.milestones} />
      </div>
    );
  }

export default ExperienceItem;