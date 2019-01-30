import React, {Component} from 'react';

let quiz_data = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>{quiz_data.quiz_questions[0].instruction_text}</div>
    );
  }
}

export default Quiz;
