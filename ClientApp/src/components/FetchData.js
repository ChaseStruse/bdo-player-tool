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
			familyMemberFromFamilyLifeSkills: {}
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
  
	async getFamilyMemberDataFromFamily(familyId, familyMemberId) {
		await axios
			.get(`https://localhost:7119/family/getFamilyMember/${familyId}/${familyMemberId}`)
			.then((response) => {
				this.setState ({
					familyMemberFromFamily: response.data,
					familyMemberFromFamilyLifeSkills: response.data.lifeSkills
				});
			});
	}

	async addFamilyMember() {
		await axios.post('https://localhost:7119/familymember/addFamilyMember', {
			name: 'Post Name',
			level: 26,
			familyId: 's9bRGGvpHkkrQNaHSicH',
			lifeSkills: {
				'fishing': 1
			}
		})
		.then(function(response) {
			console.log('This is the post response: ' + response.data);
		})
		.catch(function(error) {
			console.log('Error within the post: ' + error);
		});
	}
  async componentDidMount() {
		await this.getFamilyData(this.state.familyId);
		await this.getFamilyMemberDataFromFamily('s9bRGGvpHkkrQNaHSicH', 'wz2vcAthPozpiK7oZPN2');
		console.log(JSON.stringify(this.state.familyMemberFromFamilyLifeSkills));
  }

  render() {
    return (
      <div>
				<button onClick={() => this.addFamilyMember()}> Click me </button>
        <p> NAME = {this.state.familyMemberFromFamily.name}</p>
        <p> LEVEL = {this.state.familyMemberFromFamily.level}</p>
        <p> Life Skills: </p>
				{
					Object.keys(this.state.familyMemberFromFamilyLifeSkills).map((key, index) => {
        		return (
							<div>
								<ul>
            			<li>
              			 {key}: {this.state.familyMemberFromFamilyLifeSkills.key}
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
