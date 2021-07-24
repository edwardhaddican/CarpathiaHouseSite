import React from "react";
import { SingleMember, SingleMemberAbb } from "./";
import userSeed from "../seedData/userSeedData";

const AllMembers = () => {
  let dreadLordData;
  let dreadLadyData;
  let officers;
  let grunts;

  if (userSeed.length > 0) {
    dreadLordData = userSeed.filter((user) => user.rank === "Dread Lord")[0];
    dreadLadyData = userSeed.filter((user) => user.rank === "Dread Lady")[0];

    officers = userSeed.filter((user) => {
      if (
        user.memberStatus === "officer" &&
        user.rank !== "Dread Lord" &&
        user.rank !== "Dread Lady"
      ) {
        return true;
      }
    });

    grunts = userSeed.filter((user) => user.rank === "grunt");
  }

  return (
    <div className="allMembers-main-container">
      <h1>Dread Lord and Lady</h1>
      <div className="dreadLord-container">
        {/* <h1>Dread Lord:</h1> */}
        <SingleMemberAbb
          member={dreadLordData}
          key={dreadLordData.scaFirstName}
        />
        <SingleMemberAbb
          member={dreadLadyData}
          key={dreadLadyData.scaFirstName}
        />
      </div>
      <h1>Officers:</h1>
      <div className="allMembers-inner-container">
        {officers.length > 0
          ? officers.map((member) => {
              return (
                <SingleMemberAbb member={member} key={member.scaFirstName} />
              );
            })
          : null}
      </div>

      <h1>Members:</h1>
      <div className="allMembers-inner-container">
        {grunts.length > 0
          ? grunts.map((member) => {
              return (
                <SingleMemberAbb member={member} key={member.scaFirstName} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllMembers;
