import React from "react";
import { SingleMember } from "./";
import userSeed from "../seedData/userSeedData";

const AllMembers = () => {
  return (
    <div className='allMembers-main-container'>
      {userSeed.length > 0
        ? userSeed.map((member) => {
            return <SingleMember member={member} key={member.scaFirstName} />;
          })
        : null}
    </div>
  );
};

export default AllMembers;
