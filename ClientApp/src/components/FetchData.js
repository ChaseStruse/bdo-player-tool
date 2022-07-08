import React, { Component } from "react";
import axios from "axios";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor() {
    super();
    this.state = {
      familyMemberId: "HaZOAjSvHnrK4x1ZEFRP",
      family: {},
      familyMemberFromFamily: {},
      familyMemberFromFamilyLifeSkills: {},
    };
  }

  async getFamilyData(familyDocumentId) {
    await axios
      .get(`https://localhost:7119/family/getFamily/${familyDocumentId}`)
      .then((response) => {
        this.setState({
          family: response.data,
        });
      });
  }

  async getFamilyMemberDataFromFamily(familyId, familyMemberId) {
    await axios
      .get(
        `https://localhost:7119/family/getFamilyMember/${familyId}/${familyMemberId}`
      )
      .then((response) => {
        this.setState({
          familyMemberFromFamily: response.data,
          familyMemberFromFamilyLifeSkills: response.data.lifeSkills,
        });
      });
  }
  async componentDidMount() {
    await this.getFamilyMemberDataFromFamily(
      "Struse Family",
      "35516fec-b421-47d3-a0f3-1edb13ea0959"
    );
    console.log(JSON.stringify(this.state.familyMemberFromFamilyLifeSkills));
  }

  render() {
    return (
      <div>
        <h1> Name: {this.state.familyMemberFromFamily.name} </h1>
        {Object.keys(this.state.familyMemberFromFamilyLifeSkills).map(
          (key, index) => {
            return (
              <div>
                <ul>
                  <li>
                    {key}: {this.state.familyMemberFromFamilyLifeSkills[key]}
                  </li>
                </ul>
              </div>
            );
          }
        )}

        <h1> Family Name: {this.state.family.familyName} </h1>
      </div>
    );
  }
}
