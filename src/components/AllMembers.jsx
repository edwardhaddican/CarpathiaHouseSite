import React from "react";
import { SingleMember , SingleMemberAbb} from "./";
import userSeed from "../seedData/userSeedData";

const AllMembers = () => {
  let dreadLordData;
  let dreadLadyData;
  let officers;
  let grunts;

  if (userSeed.length > 0) {
    dreadLordData = userSeed.filter((user) => user.rank === "dreadLord")[0];
    dreadLadyData = userSeed.filter((user) => user.rank === "dreadLady")[0];

    officers = userSeed.filter((user) => {
      if (
        user.memberStatus === "officer" &&
        user.rank !== "dreadLord" &&
        user.rank !== "dreadLady"
      ) {
        return true;
      }
    });

    grunts = userSeed.filter((user) => user.rank === "grunt");
  }

  return (
    <div className="allMembers-main-container">
      <div className="dreadLord-container">
        <h1>Dread Lord:</h1>
        <SingleMemberAbb member={dreadLordData} key={dreadLordData.scaFirstName} />
      </div>
      <div className="dreadLady-container">
      <h1>Dread Lady:</h1>
        <SingleMemberAbb member={dreadLadyData} key={dreadLadyData.scaFirstName} />

      </div>
      <div className="officers-container">
      <h1>Officers:</h1>
        {officers.length > 0
          ? officers.map((member) => {
              return <SingleMemberAbb member={member} key={member.scaFirstName} />;
            })
          : null}
      </div>
      <div className="grunts-container">
      <div className="officers-container">
      <h1>Members:</h1>
        {grunts.length > 0
          ? grunts.map((member) => {
              return <SingleMemberAbb member={member} key={member.scaFirstName} />;
            })
          : null}
      </div>
      </div>
    </div>
  );
};

export default AllMembers;
