import React, { Component } from 'react';
import styles from './FursuitDeckStyle.css';
import FursuitCard from './FursuitCard';
import { fursuitData } from '../../FursuitData';

const FursuitDeck = ({ fursuitData }) => {

  return (
    <div id="deckTop" className={styles.Deck}>
      {fursuitData.map(({ name, date, description, imageSource, chips }) => (
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
};

export { FursuitDeck as default };
