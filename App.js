import React from 'react';
import QuizApp from './apps/QuizApp';
import BoatApp from './apps/BoatApp';
const MyApp = () => {
  // Show one app at a time
  // To view the other app, comment out the current line and uncomment the other one
  return (
      <QuizApp/>
       //<BoatApp/>
  );
};

export default MyApp;