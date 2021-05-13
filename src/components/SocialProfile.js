import React from 'react';
import TextWithIcon from './TextWithIcon';

function SocialProfile(props) {
    return (
      <TextWithIcon icon={props.icon}>
        <a href={props.link}>{props.name}</a>
      </TextWithIcon>
    );
  }

export default SocialProfile;