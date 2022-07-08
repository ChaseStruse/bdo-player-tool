import React, { Component } from "react";
import { AddFamilyMember } from "../addFamilyMember/addFamilyMember";

export class AddFamilyMemberPage extends Component {
  static displayName = "Add Family Member";

  render() {
    return (
      <div>
        <h1>Add Family Member Page</h1>
        <AddFamilyMember />
      </div>
    );
  }
}
