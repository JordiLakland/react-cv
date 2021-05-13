import React from 'react';
import TextWithIcon from './TextWithIcon';

function PhoneNumber(props) {
    return (
      <TextWithIcon icon="phone-alt">
        <span>{props.children}</span>
      </TextWithIcon>
    );
  }

export default PhoneNumber;