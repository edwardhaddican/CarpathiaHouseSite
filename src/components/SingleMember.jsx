import React, { useEffect, useState } from "react";
import userSeed from "../seedData/userSeedData";

const SingleMember = ({ member, match }) => {
  const [singleMemberData, setSingleMemberData] = useState(null);

  async function findSingleMember() {
    try {
      const id = match.params.memberId;

      const singleMember = userSeed.filter((e) => e._id == id);

      setSingleMemberData(singleMember[0]);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    findSingleMember();
  }, []);

  if (!singleMemberData) {
    return <h1>loading</h1>;
  }

  return (
    <div className="single-member-card">
      <div className="single-member-image-container">
        {singleMemberData ? (
          <img
            src={singleMemberData.image}
            alt="the members portrait"
            className="single-member-image"
          />
        ) : null}

        {singleMemberData ? (
          <img
            src={`${singleMemberData.arms}`}
            alt="the members arms"
            className="single-member-image"
          />
        ) : null}
      </div>

      <div className="single-member-card-inner-container">
        {singleMemberData ? (
          <p>
            <span className="single-member-label"> Mundane Name: </span>
            {singleMemberData.mundaneLastName},{" "}
            {singleMemberData.mundaneFirstName}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label"> SCA Name: </span>
            {singleMemberData.scaLastName}, {singleMemberData.scaFirstName}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">
              Is this member's name registered?:
            </span>{" "}
            {singleMemberData.registeredName ? (
              <span>Yes</span>
            ) : (
              <span>no</span>
            )}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">
              Is this member's arms registered?:
            </span>{" "}
            {singleMemberData.registeredArms ? (
              <span>Yes</span>
            ) : (
              <span>no</span>
            )}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Singles Fighter:</span>{" "}
            {singleMemberData.singlesFighter ? (
              <span>Yes</span>
            ) : (
              <span>no</span>
            )}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Melee Fighter: </span>{" "}
            {singleMemberData.meleeFighter ? <span>Yes</span> : <span>no</span>}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Combat Archer: </span>{" "}
            {singleMemberData.combatArcher ? <span>Yes</span> : <span>no</span>}{" "}
          </p>
        ) : null}

        {singleMemberData && singleMemberData.authorizedForms.length > 0 ? (
          <p>
            <span className="single-member-label">
              Authorized Weapons Forms:{" "}
            </span>{" "}
            {singleMemberData.authorizedForms.join(", ")}
          </p>
        ) : (
          <p>
            <span className="single-member-label">
              Authorized Weapons Forms:{" "}
            </span>{" "}
            No weapons forms authorized
          </p>
        )}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">
              Is Gear ready for fighting:{" "}
            </span>{" "}
            {singleMemberData.gearStatus ? <span>Yes</span> : <span>no</span>}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Member:</span>{" "}
            {singleMemberData.memberStatus}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Is Admin: </span>{" "}
            {singleMemberData.admin ? <span>Yes</span> : <span>no</span>}{" "}
          </p>
        ) : null}

        {singleMemberData ? (
          <p>
            <span className="single-member-label">Rank: </span>
            {singleMemberData.rank}
          </p>
        ) : null}

        {singleMemberData && singleMemberData.armsAlt.length > 12 ? (
          <p>
            <span className="single-member-label">Arms: </span>
            {singleMemberData.armsAlt}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SingleMember;
