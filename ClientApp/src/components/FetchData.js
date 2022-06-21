import React, { Component } from "react";
import axios from "axios";

export class FetchData extends Component {
  static displayName = FetchData.name;

	constructor() {
    super();
    this.state = {
			name: "",
			level: 0,
			familyId: "",
			familyMemberId: "HaZOAjSvHnrK4x1ZEFRP",
			lifeSkillData: {},
			family: {}
    };
  }

	async getFamilyData(familyDocumentId) {
		await axios
			.get(`https://localhost:7119/family/getFamily/${familyDocumentId}`)
			.then((response) => {
				this.setState({
					family: response.data
				})
			});
	}
  
	async getFamilyMemberData() {
    await axios
      .get(`https://localhost:7119/familymember/getFamilyMember/${this.state.familyMemberId}`)
      .then((response) => {
        this.setState({
					name: response.data.name,
					level: response.data.level,
					familyId: response.data.familyId,
					lifeSkillData: response.data.lifeSkills
				});
			});
	};

  async componentDidMount() {
    await this.getFamilyMemberData();
		await this.getFamilyData(this.state.familyId);
  }

  render() {
    return (
      <div>
        <p> NAME = {this.state.name}</p>
        <p> LEVEL = {this.state.level}</p>
        <p> Life Skills: </p>
				{
					Object.keys(this.state.lifeSkillData).map((key, index) => {
        		return (
							<div>
								<ul>
            			<li key="{index}">
              			{key}: {this.state.lifeSkillData[key]}
            			</li>
								</ul>
							</div>
        		);
      		})
				}
				
				<h1> Family Name: {this.state.family.familyName} </h1> 
      </div>
    );
  }
}
