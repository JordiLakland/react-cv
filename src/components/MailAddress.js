import React from 'react';
import TextWithIcon from './TextWithIcon';

function MailAddress(props) {
    return (
      <TextWithIcon icon={['far', 'envelope']}>
        <a href={`mailto:${props.children}`}>{props.children}</a>
      </TextWithIcon>
    );
  }

export default MailAddress;