import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewMemberForm } from "./index";

const SingleMember = ({ member, match }) => {
  const [singleMemberData, setSingleMemberData] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  async function findSingleMember() {
    try {
      const id = match.params.memberId;
      setCurrentId(match.params.memberId);

      const response = await axios.get(`/api/members/${id}`);
      const data = response.data;
      setSingleMemberData(data);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    findSingleMember();
  }, []);

  function editClickHandler() {
    console.log("i am edit");
    setIsEdit(true)
  }

  function saveClickHandler() {
    console.log("i am save");
    setIsEdit(false)
  }

  if(!singleMemberData){
    return <h1>loading</h1>
  }
console.log(singleMemberData, 'data')
  return (
    <>
      {isEdit ? <NewMemberForm  singleMemberData={singleMemberData}   isEdit={isEdit} setIsEdit={setIsEdit}/> : (
        <div className="single-member-card">
          {singleMemberData ? (
            <img
              src={singleMemberData.image}
              alt="the members portrait"
              className="single-member-image"
            />
          ) : null}

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
                {singleMemberData.meleeFighter ? (
                  <span>Yes</span>
                ) : (
                  <span>no</span>
                )}{" "}
              </p>
            ) : null}

            {singleMemberData ? (
              <p>
                <span className="single-member-label">Combat Archer: </span>{" "}
                {singleMemberData.combatArcher ? (
                  <span>Yes</span>
                ) : (
                  <span>no</span>
                )}{" "}
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
                {singleMemberData.gearStatus ? (
                  <span>Yes</span>
                ) : (
                  <span>no</span>
                )}{" "}
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
          </div>
          {singleMemberData ? (
            <img
              src={`${singleMemberData.arms}`}
              alt="the members arms"
              className="single-member-image"
            />
          ) : null}

          <button onClick={editClickHandler}>Edit</button>
        </div>
      )}
    </>
  );
};

export default SingleMember;
