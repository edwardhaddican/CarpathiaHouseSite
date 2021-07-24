import React from "react";

const SingleMemberAbb = ({ member, match }) => {
  console.log(match);

  return (
    <div className="single-member-abb-card">
      <img
        src={member.arms}
        alt="the members arms"
        className="single-member-arms"
      />
      {/* <img
        src={member.image}
        alt="the members portrait"
        className="single-member-image"
      /> */}
      <div className="single-member-abb-card-inner-container">
        <p className="single-member-label"> Mundane Name: </p>
        <p className="single-member-data">
          {member.mundaneLastName}, {member.mundaneFirstName}{" "}
        </p>
        <p className="single-member-label"> SCA Name: </p>
        <p className="single-member-data">
          {member.scaLastName}, {member.scaFirstName}{" "}
        </p>


        <p ><span className="single-member-label">Rank: </span>  {member.rank}</p>
      </div>
    </div>
  );
};

export default SingleMemberAbb;
