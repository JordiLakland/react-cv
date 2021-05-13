import React from 'react';
import TextWithIcon from './TextWithIcon';

function Address(props) {
    return (
      <TextWithIcon icon='map-marker-alt'>
        <span>{props.children}</span>
      </TextWithIcon>
    );
  }

export default Address;


