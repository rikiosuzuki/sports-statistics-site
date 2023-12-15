import React, { Component } from "react";
import axios from "axios";

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      playerStats: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
    console.log(this.state.playerName);
  };

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if (replace.length > 0) {
      this.setState({ playerName: replace });
    } else {
      alert("Please type players name!");
    }
  };

  getPlayerId = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`
      )
      .then(async (res) => {
        // console.log(res.data.data)
        if (res.data.data[0] === undefined) {
          alert("This player is either injured or hasn't played yet!");
        } else if (res.data.data.length > 1) {
          alert("Pleases specify the name more!");
        } else {
          await this.getPlayerStats(res.data.data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerStats = (playerId) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ playerStats: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App" style={{ marginTop: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <label className="playerLabels">
            Player Name{" "}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter the Players Name!"
            />
          </label>
          <input className="playerResultLabels" type="submit" value="Submit" />
        </form>
        <div>
          <label className="playerLabels">games played: </label>
          <label className="playerResultLabels">
            {this.state.playerStats["games_played"]}
          </label>
        </div>
        <div>
          <label className="playerLabels"> points averaged: </label>
          <label className="playerResultLabels">
            {this.state.playerStats["pts"]}
          </label>
        </div>
        <div>
          <label className="playerLabels"> rebounds averaged: </label>
          <label className="playerResultLabels">
            {this.state.playerStats["reb"]}
          </label>
        </div>
        <div>
          <label className="playerLabels"> assists averaged: </label>
          <label className="playerResultLabels">
            {this.state.playerStats["ast"]}
          </label>
        </div>
      </div>
    );
  }
}
export default Players;
