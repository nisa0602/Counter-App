import React, { Component } from 'react'
import './App.css';
import Score from './Score.js'
// import { isTaggedTemplateExpression } from '@babel/types';
// import { doWhileStatement } from '@babel/types';


class App extends Component {

  state = {
    team_name: ["Red", "Blue", "Green", "Yellow", "Black", "White", "Red Bull", "Venus", "Jupiter"],
    teams: [
      {name: "Red", id: "123"},
      {name: "Blue", id: "456"}
    ],
    showScoreboard: false
  }

  toggleHandler = () => {
    const doesShow = this.state.showScoreboard;
    this.setState({
      showScoreboard: !doesShow
    });
    console.log(this.state.showScoreboard)
  }

  //switch by Input using flexible list to handle immutability*/
  switchTeamByInput = (event, idteam) => {
    //ambil 1 index dari array teams berdasar id
    const team_index = this.state.teams.findIndex(t => {
      return t.id === idteam
    })
    console.log(team_index)
    const teamNew = {
    ...this.state.teams[team_index]
    };
  
    teamNew.name = event.target.value;
  
    const teamsNew = [...this.state.teams];
    teamsNew[team_index] = teamNew
    this.setState({
    teams: teamsNew
    })
  }

  switchTeamButton = (idteam) => {
    const team_index = this.state.teams.findIndex(t => {
      return t.id === idteam
    })
    //const team_index = "0"
    console.log(team_index)
    const teamNew = {
      ...this.state.teams[team_index]
    };
    teamNew.name = this.state.teams_name[Math.floor(Math.random() * this.state.teams_name.length)]

    const teamsNew = [...this.state.teams]
    teamsNew[team_index] = teamNew
    this.setState({
      teams:teamsNew
    })
  }
  // teamButton = (event) => {
  //   this.setState ({
  //     {name: event.target.value}
  //   })
  // }

  // switchTeamOne = () => {
  //   this.setState({
  //     teams: [
  //       {name: this.state.team_name[Math.floor(Math.random() * this.state.team_name.length)]},
  //       {name: this.state.teams[1].name}
  //     ]
  //   })
  // }

  // switchTeamTwo = () => {
  //   this.setState({
  //     teams: [
  //       {name: this.state.teams[0].name},
  //       {name: this.state.team_name[Math.floor(Math.random() * this.state.team_name.length)]}
  //     ]
  //   })
  // }  
  
  // switchByInputOne = (event) => {
  //   this.setState({
  //     teams: [
  //       {name: event.target.value},
  //       {name: this.state.teams[1].name}
  //     ]
  //   })
  // }

  // switchByInputTwo = (event) => {
  //   this.setState({
  //     teams: [
  //       {name: this.state.teams[0].name},
  //       {name: event.target.value}
  //     ]
  //   })
  // }
  

  deleteMethod = (teamsIndex) => {
    const teams = [...this.state.teams];
    teams.splice(teamsIndex, 1)
    this.setState({
      teams: teams
    });
  }

  render() {
    let scores = null;

    if(this.state.showScoreboard) {
      scores =
        <div className="scoreboard">
          {this.state.teams.map((team) => {
            return <div className="team">
            <Score
              // click={this.deleteMethod.bind(this, index)}
              name={team.name}
              key={team.id}
              switchByInput={(event) => this.switchTeamByInput(event, team.id)}
              teamButton= {(event) => this.switchTeamButton(team.id)}
              //changeButton = {this.switchTeamOne}
              />
              </div>
            })}
        </div>
    }
    return (

      <div className="App">
        <h1>SCORE BOARD</h1>
        <button onClick={this.toggleHandler}>Toggle</button>
        <br></br>
        {scores}
      </div>
    );
  }
}
    

  // switchByInput = (event) => {
  //   this.setState({
  //     teams: [
  //       {name: event.target.value},
  //       {name: event.target.value},
  //       {input: event.target.value}
  //     ]
  //   })
  // }


  // switchByInputOne = (event) => {
  //     this.setState({
  //       name: event.target.value
  //     });
  // }

  // switchByInputTwo = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }


export default App;
