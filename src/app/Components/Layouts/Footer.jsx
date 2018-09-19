import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';

const Footer = ({ muscles, category, onSelect }) => {
  const index = category ? muscles.findIndex(cur => cur === category) + 1 : 0;

  const onIndexSelect = (e, fIndex) => {
    onSelect(fIndex === 0 ? '' : muscles[fIndex - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

Footer.propTypes = {
  muscles: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
  onSelect: PropTypes.number.isRequired,
};

export { Footer as default };
