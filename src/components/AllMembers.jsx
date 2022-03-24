import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SingleMemberAbb } from "./";

import userSeed from "../seedData/userSeedData";

const AllMembers = () => {
  const [dreadLordData, setDreadLordData] = useState(null);
  const [dreadLadyData, setDreadLadyData] = useState(null);
  const [officers, setOfficers] = useState([]);
  const [grunts, setGrunts] = useState([]);
  const [onWatch, setOnWatch] = useState([]);
  const [prospects, setProspects] = useState([]);

  async function findAllMembers() {
    try {
      const allMembers = userSeed;

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
        } else {
          return false
        }
      });

      const gruntsInfo = allMembers.filter(
        (user) => user.memberStatus === "member"
      );

      const thoseOnWatch = allMembers.filter(
        (user) => user.memberStatus === "onwatch"
      );
      const prospectsInfo = allMembers.filter(
        (user) => user.memberStatus === "prospect"
      );

      setDreadLordData(dreadLordInfo);
      setDreadLadyData(dreadLadyInfo);
      setOfficers(officersInfo);
      setGrunts(gruntsInfo);
      setOnWatch(thoseOnWatch);
      setProspects(prospectsInfo);
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
                  key={member.scaFirstName}
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} />
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
                  key={`${member.scaLastName}: ${member.scaFirstName}`}
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} />
                </Link>
              );
            })
          : null}
      </div>
      <h1>On Watch:</h1>
      <div className="allMembers-inner-container">
        {onWatch.length > 0
          ? onWatch.map((member) => {
              return (
                <Link
                  key={`${member.scaLastName}: ${member.scaFirstName}`}
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} />
                </Link>
              );
            })
          : null}
      </div>
      <h1>Prospects:</h1>
      <div className="allMembers-inner-container">
        {prospects.length > 0
          ? prospects.map((member) => {
              return (
                <Link
                  key={`${member.scaLastName}: ${member.scaFirstName}`}
                  className="link-to-single-member"
                  to={`/members/${member._id}`}
                >
                  <SingleMemberAbb member={member} />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllMembers;
