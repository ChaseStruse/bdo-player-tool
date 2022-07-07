import React, { Component } from "react";
import axios from "axios";
import "./addFamilyMember.css";

export class AddFamilyMember extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      level: 0,
      lifeSkills: {
        alchemy: 0,
        barter: 0,
        cooking: 0,
        farming: 0,
        fishing: 0,
        gathering: 0,
        hunting: 0,
        processing: 0,
        sailing: 0,
        trade: 0,
        training: 0,
      },
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;

    console.log("Set: " + name + " to " + event.target.value);
    console.log(this.name);
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLifeSkillChange = (event, _lifeSkills) => {
    const propToUpdate = event.target.name;
    _lifeSkills[propToUpdate] = event.target.value;
    this.setState({
      lifeSkills: _lifeSkills,
    });
  };

  async postFamilyMember(e, _familyName, _name, _level, _lifeSkills) {
    e.preventDefault();
    await axios
      .post(`https://localhost:7119/family/addFamilyMember/${_familyName}`, {
        name: _name,
        level: _level,
        lifeSkills: _lifeSkills,
      })
      .then(function (response) {
        console.log("This is the post response: " + response.data);
      })
      .catch(function (error) {
        console.log("Error within the post: " + error);
      });
  }
  render() {
    return (
      <div className="formFields">
        <form
          onSubmit={(e) =>
            this.postFamilyMember(
              e,
              this.state.familyName,
              this.state.name,
              this.state.level,
              this.state.lifeSkills
            )
          }
        >
          <label>
            Family Name:
            <input
              name="familyName"
              type="text"
              value={this.state.familyName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Level:
            <input
              name="level"
              type="number"
              value={this.state.level}
              onChange={this.handleInputChange}
              style={{ textAlign: "right" }}
            />
          </label>
          <br />
          <div className="lifeSkillArea">
            <h2> Life Skills </h2>
            <label>
              Alchemy:
              <input
                name="alchemy"
                type="number"
                value={this.state.lifeSkills.alchemy}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Barter:
              <input
                name="barter"
                type="number"
                value={this.state.lifeSkills.barter}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Cooking:
              <input
                name="cooking"
                type="number"
                value={this.state.lifeSkills.cooking}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Farming:
              <input
                name="farming"
                type="number"
                value={this.state.lifeSkills.farming}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Fishing:
              <input
                name="fishing"
                type="number"
                value={this.state.lifeSkills.fishing}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Gathering:
              <input
                name="gathering"
                type="number"
                value={this.state.lifeSkills.gathering}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Hunting:
              <input
                name="hunting"
                type="number"
                value={this.state.lifeSkills.hunting}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Processing:
              <input
                name="processing"
                type="number"
                value={this.state.lifeSkills.processing}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Sailing:
              <input
                name="sailing"
                type="number"
                value={this.state.lifeSkills.sailing}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Trade:
              <input
                name="trade"
                type="number"
                value={this.state.lifeSkills.trade}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
            <label>
              Training:
              <input
                name="training"
                type="number"
                value={this.state.lifeSkills.training}
                onChange={(e) =>
                  this.handleLifeSkillChange(e, this.state.lifeSkills)
                }
              />
            </label>
            <br />
          </div>
          <button type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
