import React, { Component } from "react";
import FursuitCard from "./FursuitCard";
import styles from "./FursuitDeckStyle.css";
import { fursuitData } from "./../../FursuitData";

export default class FursuitDeck extends Component {
  render() {
    return (
      <div id="deckTop" className={styles.Deck}>
        <FursuitCard
          fursuitName="Haskell Hound"
          fursuitDescription="Haskell is a concept collab between Syber (@MadeFurYou) and YellowFreaks."
        />

        {fursuitData.map(({ name, date, imageSource }) => (
          <FursuitCard
            fursuitName={name}
            fursuitDescription="test"
            imageSource={imageSource}
          />
        ))}
      </div>
    );
  }
}
