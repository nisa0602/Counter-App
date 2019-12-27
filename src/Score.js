import React, { Component } from 'react'

class Score extends Component {
   state = {
       score: 0,
   }

   increaseScore=()=> {
    this.setState({
      score: this.state.score + 2
    });
  }    
   decreaseScore=()=> {
     this.setState({
       score: this.state.score - 1
     });
   }
    render() {
      return (
        <div>
          <h1 onClick={this.props.click}>{this.props.name}</h1>
          <p>{this.props.id}</p>
          <input type='text' onChange={this.props.switchByInput}/>
          <button onClick={this.props.click}>Delete</button>
          <h1>{this.state.score}</h1>
           
          <button onClick={this.increaseScore}>+2</button>
          <button onClick={this.decreaseScore}>-1</button>
          <button onClick={this.props.teamButton}>Switch Team</button>
          
    </div>
      
        
      );
    }
  }

  export default Score;