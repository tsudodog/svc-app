import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import Exercises from "./Exercises/index";
import FursuitCard from "./FursuitCard";
import FursuitDeck from "./FursuitDeck";
import { muscles, exercises } from "../store";

// THIS APP USES 1.0.0-beta-34 material-ui
// this app uses 1.0.0-beta-36 for material-ui-icons

export default class extends Component {
  state = {
    exercises,
    category: "",
    exercise: ""
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        // I dont understand this javascript wizardry
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercise }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    console.log(category);
    return (
      <Fragment>
        <Header />

        <FursuitDeck />
        <div>
          <h1>Hello World</h1>
        </div>
        {/* <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        /> */}
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
