import React from 'react';

function Html(props) {
    const { children, ...others } = props
    return (
      <span {...others} dangerouslySetInnerHTML={{ __html: children }}>
      </span>
    );
  }

export default Html;