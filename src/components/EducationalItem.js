import React from 'react';
import Header from './Header';
import Description from './Description';

function EducationItem(props) {
    return (
      <div className="EducationItem">
        <Header
          title={props.title}
          subtitle={props.centre}
          dates={`${props.startDate} - ${props.endDate}`}
          location={props.location}
        />
        <Description>{props.description}</Description>
      </div>
    );
  }

export default EducationItem;