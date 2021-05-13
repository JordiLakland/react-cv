import React from 'react';

function Section(props) {
    const { border = false, className } = props;
    const h3Classes = [];
    if (border) h3Classes.push('border');
    return (
      <div className={['Section', className].join(' ')}>
        {props.title &&
          <h3 className={h3Classes.join(' ')}>{props.title}</h3>
        }
        {props.children}
      </div>
    );
  }

export default Section;