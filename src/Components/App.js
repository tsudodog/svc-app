import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts/index";
import Exercises from "./Exercises/index";
import { muscles, exercises } from "../store";

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
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
