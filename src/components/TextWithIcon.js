import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextWithIcon(props) {
    return (
      <div>
        <FontAwesomeIcon icon={props.icon} fixedWidth />
        {props.children}
      </div>
    );
  }

  export default TextWithIcon;