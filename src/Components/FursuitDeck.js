import React, { Component } from "react";
import FursuitCard from "./FursuitCard";
import styles from "./FursuitDeckStyle.css";

export default class FursuitDeck extends Component {
  render() {
    return (
      <div id="deckTop" className={styles.Deck}>
        <FursuitCard
          fursuitName="Haskell Hound"
          fursuitDescription="Haskell is a concept collab between Syber (@MadeFurYou) and YellowFreaks."
        />
        <FursuitCard
          fursuitName="Second Card"
          fursuitDescription="Lorem Ipsum I guess"
        />
      </div>
    );
  }
}
