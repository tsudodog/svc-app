import React, { Component } from "react";
import FursuitCard from "./FursuitCard";
import styles from "./FursuitDeckStyle.css";
import { fursuitData } from "./../../FursuitData";

export default class FursuitDeck extends Component {
  render() {
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
  }
}
