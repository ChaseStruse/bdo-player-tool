import React, { Component } from 'react';
import axios from 'axios';

export class FetchData extends Component {
  static displayName = FetchData.name;
  constructor() {  
    super();  
    this.state = {  
        FamilyMemberData: []  
    }  
}  

getFamilyData() {
  axios.get("https://localhost:7119/familymember").then(response => {  
    console.log(response.data);  
    this.setState({  
      FamilyMemberData: response.data
    });  
  });  
}

componentDidMount() {  
  this.getFamilyData();
}

render() {
  return (
    <div>
      <p>  ID = {this.state.FamilyMemberData.id}</p>
      <p>  FAMILY ID = {this.state.FamilyMemberData.familyId}</p>
      <p>  NAME = {this.state.FamilyMemberData.name}</p>
      <p>  LEVEL = {this.state.FamilyMemberData.level}</p>
    </div>
    );
  }
}
