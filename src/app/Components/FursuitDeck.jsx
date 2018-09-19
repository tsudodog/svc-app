import React from 'react';
import PropTypes from 'prop-types';
import styles from './FursuitDeckStyle.css';
import FursuitCard from './FursuitCard';

const FursuitDeck = ({ fursuitData }) => (
  <div id="deckTop" className={styles.Deck}>
    {fursuitData.map(({
      name, date, description, imageSource, chips,
    }) => (
      <FursuitCard
        fursuitName={name}
        fursuitDescription={description}
        date={date}
        imageSource={imageSource}
        chips={chips}
      />
    ))}
  </div>
);

const fursuitShape = {
  name: PropTypes.string.isRequired,
};

FursuitDeck.propTypes = {
  fursuitData: PropTypes.objectOf(PropTypes.shape(fursuitShape)).isRequired,
};

export { FursuitDeck as default };
