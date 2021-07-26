import React, { useState, useEffect } from "react";
import { SingleMember, SingleMemberAbb } from "./";
import axios from "axios";

const AllMembers = () => {
  const [dreadLordData, setDreadLordData] = useState(null);
  const [dreadLadyData, setDreadLadyData] = useState(null);
  const [officers, setOfficers] = useState([]);
  const [grunts, setGrunts] = useState([]);

  async function findAllMembers() {
    try {
      const response = await axios.get("/api/members");
      const allMembers = response.data
      console.log(allMembers, '!!!!!')

      const dreadLordInfo = allMembers.filter(
        (user) => user.rank === "Dread Lord"
      )[0];
      const dreadLadyInfo = allMembers.filter(
        (user) => user.rank === "Dread Lady"
      )[0];

      const officersInfo = allMembers.filter((user) => {
        if (
          user.memberStatus === "officer" &&
          user.rank !== "Dread Lord" &&
          user.rank !== "Dread Lady"
        ) {
          return true;
        }
      });

      const gruntsInfo = allMembers.filter((user) => user.rank === "grunt");

      setDreadLordData(dreadLordInfo)
      setDreadLadyData(dreadLadyInfo)
      setOfficers(officersInfo)
      setGrunts(gruntsInfo)

    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    findAllMembers()
  }, []);

 if(!dreadLordData){
   return <h1>loading</h1>
 }

 if(!dreadLadyData){
  return <h1>loading</h1>
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
