import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    return (
      <header>
        <div>{props.title}</div>
        <div>{props.subtitle}</div>
        <div className="dates_location">
          <div className="dates">
            <FontAwesomeIcon icon={['far', 'calendar-alt']} fixedWidth />
            <span>{props.dates}</span>
          </div>
          <div className="location">
            <FontAwesomeIcon icon='map-marker-alt' fixedWidth />
            <span>{props.location}</span>
          </div>
        </div>
      </header>
    );
  }

export default Header;