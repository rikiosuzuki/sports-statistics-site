import React, { Component } from "react";
import axios from "axios";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: null,
      teamStats: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getTeamID();
    console.log(this.state.teamName);
  };

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if (replace.length > 0) {
      this.setState({ teamName: replace });
    } else {
      alert("Please type the TEAM name!");
    }
  };

  getTeamID = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/teams?search=${this.state.teamName}`
      )
      .then(async (res) => {
        // console.log(res.data.data)
        if (res.data.data[6] === undefined) {
          alert("This team couldn't be found");
        } else if (res.data.data.length > 1) {
          alert("Pleases specify the name more!");
        } else {
          await this.getTeamStats(res.data.data[6].id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getTeamStats = (teamId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${teamId}`)

      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ teamStats: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="please enter the TEAM name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* // build a table with the team data 
      "abbreviation":"LAL",
      "city":"Los Angeles",
      "conference":"West",
      "division":"Pacific",
      "full_name":"Los Angeles Lakers",
      "name":"Lakers"
    
    */}
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
            <tr>
              <td>{this.state.teamStats["name"]}</td>
              <td>{this.state.teamStats["abbreviation"]}</td>
              <td>{this.state.teamStats["city"]}</td>
              <td>{this.state.teamStats["conference"]}</td>
              <td>{this.state.teamStats["division"]}</td>
              <td>{this.state.teamStats["full_name"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Teams;
