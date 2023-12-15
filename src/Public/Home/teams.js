import React, { Component } from "react";
import axios from "axios";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [], // Change to an array to store multiple teams
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getTeams();
  };

  getTeams = () => {
    axios
      .get(`https://www.balldontlie.io/api/v1/teams`)
      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ teams: res.data.data }); // Store the array of teams
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Load Teams</label>
          <input type="submit" value="Submit" />
        </form>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Abbreviation</th>
              <th>City</th>
              <th>Conference</th>
              <th>Division</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teams.map((teamStats) => (
              <tr key={teamStats.id}>
                <td>{teamStats.name}</td>
                <td>{teamStats.abbreviation}</td>
                <td>{teamStats.city}</td>
                <td>{teamStats.conference}</td>
                <td>{teamStats.division}</td>
                <td>{teamStats.full_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Teams;
