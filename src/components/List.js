import React from 'react';

function List(props) {
    const { children, ...rest } = props;
    return (
      <ul {...rest}>
        {children.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    );
  }

export default List;