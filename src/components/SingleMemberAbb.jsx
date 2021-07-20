import React from "react";

const SingleMemberAbb = ({ member, match }) => {
  console.log(match);

  return (
    <div className="single-member-abb-card">
      <img
        src={member.image}
        alt="the members portrait"
        className="single-member-image"
      />
      <p>
        <span className="single-member-label"> Mundane Name: </span>
        {member.mundaneLastName}, {member.mundaneFirstName}{" "}
      </p>
      <p>
        <span className="single-member-label"> SCA Name: </span>
        {member.scaLastName}, {member.scaFirstName}{" "}
      </p>

      <p>
        <span className="single-member-label">Rank: </span>
        {member.rank}
      </p>

      <img
        src={member.arms}
        alt="the members arms"
        className="single-member-arms"
      />
    </div>
  );
};

export default SingleMemberAbb;
