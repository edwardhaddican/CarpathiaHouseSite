import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      const allMembers = response.data;
      console.log(allMembers, "!!!!!");

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

      setDreadLordData(dreadLordInfo);
      setDreadLadyData(dreadLadyInfo);
      setOfficers(officersInfo);
      setGrunts(gruntsInfo);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    findAllMembers();
  }, []);

  if (!dreadLordData) {
    return <h1>loading</h1>;
  }

  if (!dreadLadyData) {
    return <h1>loading</h1>;
  }

  return (
    <div className="allMembers-main-container">
      <h1>Dread Lord and Lady</h1>
      <div className="dreadLord-container">
        <Link
          className="link-to-single-member"
          to={`/members/${dreadLordData._id}`}
        >
          <SingleMemberAbb member={dreadLordData} />
        </Link>
        <Link
          className="link-to-single-member"
          to={`/members/${dreadLadyData._id}`}
        >
          <SingleMemberAbb member={dreadLadyData} />
        </Link>
      </div>
      <h1>Officers:</h1>
      <div className="allMembers-inner-container">
        {officers.length > 0
          ? officers.map((member) => {
              return (
                <Link
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} key={member.scaFirstName} />
                </Link>
              );
            })
          : null}
      </div>

      <h1>Members:</h1>
      <div className="allMembers-inner-container">
        {grunts.length > 0
          ? grunts.map((member) => {
              return (
                <Link
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} key={member.scaFirstName} />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllMembers;
