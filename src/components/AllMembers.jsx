import React from "react";
import { SingleMember } from "./";
import userSeed from "../seedData/userSeedData";

const AllMembers = () => {
  return userSeed.length > 0
    ? userSeed.map((member) => {
        return <SingleMember member={member} key={member.scaFirstName}/>;
      })
    : null;

  // <div>
  //   <h1>all members</h1>
  // </div>
};

export default AllMembers;
