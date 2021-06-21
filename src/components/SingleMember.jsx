import React from "react";

const SingleMember = ({ member }) => {
  return (
    <div className="single-member-card">
      <img src={member.image} alt='the members portrait' className="single-member-image"/>
      <p>
        <span className="single-member-label"> Mundane Name: </span>
        {member.mundaneLastName}, {member.mundaneFirstName}{" "}
      </p>
      <p>
        <span className="single-member-label"> SCA Name: </span>
        {member.scaLastName}, {member.scaFirstName}{" "}
      </p>
      <p>
        <span className="single-member-label">
          Is this member's name registered?:
        </span>{" "}
        {member.registeredName ? <span>Yes</span> : <span>no</span>}{" "}
      </p>
      <p>
        <span className="single-member-label">
          Is this member's arms registered?:
        </span>{" "}
        {member.registeredArms ? <span>Yes</span> : <span>no</span>}{" "}
      </p>

      <p>
        <span className="single-member-label">Singles Fighter:</span>{" "}
        {member.registeredArms ? <span>Yes</span> : <span>no</span>}{" "}
      </p>
      <p>
        <span className="single-member-label">Melee Fighter: </span>{" "}
        {member.meleeFighter ? <span>Yes</span> : <span>no</span>}{" "}
      </p>

      {member.authorizedForms.length > 0 ? (
        <p>
          <span className="single-member-label">
            Authorized Weapons Forms:{" "}
          </span>{" "}
          {member.authorizedForms.join(", ")}
        </p>
      ) : (
        <p>
          <span className="single-member-label">
            Authorized Weapons Forms:{" "}
          </span>{" "}
          No weapons forms authorized
        </p>
      )}

      <p>
        <span className="single-member-label">
          Is Gear ready for fighting:{" "}
        </span>{" "}
        {member.gearStatus ? <span>Yes</span> : <span>no</span>}{" "}
      </p>

      <p>
        <span className="single-member-label">Member:</span>{" "}
        {member.memberStatus}
      </p>

      <p>
        <span className="single-member-label">Is Admin: </span>{" "}
        {member.admin ? <span>Yes</span> : <span>no</span>}{" "}
      </p>
      <p>
        <span className="single-member-label">Rank: </span>
        {member.rank}
      </p>
    </div>
  );

  //   authorizedForms: ["sword & shield", "spear"],
  //   gearStatus: true,
  //   memberStatus: "Officer",
  //   admin: true,
  //   rank: "Dread Lord",
};

export default SingleMember;
