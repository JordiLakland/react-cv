import React from 'react';
import List from './List';

function Skills(props) {
    const { data: skills } = props;
    return (
      <List className="skills no-style no-indent space-between-items">
        {skills.map((category, index) =>
          <React.Fragment key={index}>
            <span><strong>{category.name}</strong> - </span>
            {category.skills.join(', ')}
          </React.Fragment>
        )}
      </List>
    );
  }

export default Skills;