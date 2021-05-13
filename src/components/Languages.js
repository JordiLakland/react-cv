import React from 'react';
import List from './List';
import { ProgressBar } from 'react-bootstrap';

function Languages(props) {
    const { data: languages } = props;
    return (
      <List className="langs no-style no-indent">
        {languages.map((lang, index) =>
          <div>
            <div className="lang__title">
              <div><strong>{lang.name}</strong></div>
              <div>{lang.maxLevel}</div>
            </div>
            <ProgressBar now={lang.level} />
          </div>
        )}
      </List>
    );
  }

export default Languages;