import React, { useEffect, useState } from "react";
import Select from "react-select";
import { FileInput } from "./";

const NewMemberForm = ({ singleMemberData, setIsEdit }) => {
  const [firstName, setFirstName] = useState(
    singleMemberData ? singleMemberData.mundaneFirstName : ""
  );
  const [lastName, setLastName] = useState(
    singleMemberData ? singleMemberData.mundaneLastName : ""
  );
  const [firstNameSCA, setFirstNameSCA] = useState(
    singleMemberData ? singleMemberData.scaFirstName : ""
  );
  const [lastNameSCA, setLastNameSCA] = useState(
    singleMemberData ? singleMemberData.scaLastName : ""
  );
  const [registeredName, setRegisteredName] = useState(
    singleMemberData ? singleMemberData.registeredName : false
  );
  const [registeredArms, setRegisteredArms] = useState(
    singleMemberData ? singleMemberData.registeredArms : false
  );
  const [singlesFighter, setSinglesFighter] = useState(
    singleMemberData ? singleMemberData.singlesFighter : false
  );
  const [combatArcher, setCombatArcher] = useState(
    singleMemberData ? singleMemberData.combatArcher : false
  );
  const [meleeFighter, setMeleeFighter] = useState(
    singleMemberData ? singleMemberData.meleeFighter : false
  );
  const [gearStatus, setGearStatus] = useState(
    singleMemberData ? singleMemberData.gearStatus : false
  );
  const [authorizedForms, setAuthorizedForms] = useState(
    singleMemberData ? singleMemberData.authorizedForms : []
  );
  const [memberStatus, setMemberStatus] = useState(
    singleMemberData ? singleMemberData.memberStatus : ""
  );
  const [rank, setRank] = useState(
    singleMemberData ? singleMemberData.rank : ""
  );
  const [isAdmin, setIsAdmin] = useState(
    singleMemberData ? singleMemberData.admin : false
  );

  const [photo, setPhoto] = useState("");
  const [arms, setArms] = useState("");

  const [notes, setNotes] = useState(
    singleMemberData ? singleMemberData.notes : ""
  );

  function handleSubmit(event) {
    event.preventDefault();

    const newUserObject = {
      mundaneFirstName: firstName,
      mundaneLastName: lastName,
      scaFirstName: firstNameSCA,
      scaLastName: lastNameSCA,
      registeredName: registeredName,
      registeredArms: registeredArms,
      singlesFighter: singlesFighter,
      combatArcher: combatArcher,
      meleeFighter: meleeFighter,
      authorizedForms: authorizedForms,
      gearStatus: gearStatus,
      memberStatus: memberStatus,
      admin: isAdmin,
      rank: rank,
      image:
        "https://www.thesprucepets.com/thmb/_yrib2KGkS4VJSgCQEl59KPUPOU=/1885x1414/smart/filters:no_upscale()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg",
      arms: "./deviceImages/Lawrence_Vaughan_device.jpg",
      notes: notes,
    };

    console.log(newUserObject);
  }

  const options = [
    { value: "sword&shield", label: "Sword & Shield" },
    { value: "two-weapon", label: "Two Weapon" },
    { value: "spear", label: "Spear" },
    { value: "polearm", label: "Polearm" },
    { value: "great-weapon", label: "Great Weapon" },
    { value: "combat-archery", label: "Combat Archery" },
  ];

  const memberOptions = [
    { value: "officer", label: "Officer" },
    { value: "member", label: "Member" },
    { value: "onwatch", label: "Onwatch" },
    { value: "prospect", label: "Prospect" },
  ];

  const rankOptions = [
    { value: "Dread Lord", label: "Dread Lord" },
    { value: "Dread Lady", label: "Dread Lady" },
    { value: "Officer", label: "Officer" },
    { value: "seneschal", label: "Seneschal" },
    { value: "Sergeant", label: "Sergeant" },
    { value: "quartermaster", label: "Quartermaster" },
    { value: "grunt", label: "Grunt" },


  ];

  const booleanOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const photoURL = photo ? URL.createObjectURL(photo.selectedFile) : "";
  const armsURL = arms ? URL.createObjectURL(arms.selectedFile) : "";


  return (
    <div className="new-member-form-main-container">
      <form onSubmit={handleSubmit} className="new-member-form-inner-container">
        <div className="new-member-form-image-container">
          {singleMemberData && singleMemberData.image ? (
            <img
              src={singleMemberData.image}
              alt="the members portrait"
              className="single-member-image"
            />
          ) : null}

          {singleMemberData && singleMemberData.arms ? (
            <img
              src={singleMemberData.arms}
              alt="the members arms"
              className="single-member-image"
            />
          ) : null}
        </div>

        <div className="label-container name-container">
          <label className="new-member-form-label">First Name (Mundane):</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              console.log(firstName);
            }}
          />
        </div>

        <div className="label-container name-container">
          <label className="new-member-form-label">Last Name (Mundane): </label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              console.log(lastName);
            }}
          />
        </div>

        <div className="label-container name-container">
          <label className="new-member-form-label">First Name (SCA): </label>
          <input
            type="text"
            value={firstNameSCA}
            onChange={(event) => {
              setFirstNameSCA(event.target.value);
              console.log(firstNameSCA);
            }}
          />
        </div>

        <div className="label-container name-container">
          <label className="new-member-form-label">Last Name (SCA): </label>
          <input
            type="text"
            value={lastNameSCA}
            onChange={(event) => {
              setLastNameSCA(event.target.value);
              console.log(lastNameSCA);
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Registered Name (Y/N):{" "}
          </label>

          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === registeredName) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setRegisteredName(value.value);
              }

              if (action.action === "remove-value") {
                setRegisteredName("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Registered Arms (Y/N):{" "}
          </label>

          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === registeredArms) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setRegisteredArms(value.value);
              }

              if (action.action === "remove-value") {
                setRegisteredArms("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Singles Fighter(Y/N):{" "}
          </label>
          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === singlesFighter) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setSinglesFighter(value.value);
              }

              if (action.action === "remove-value") {
                setSinglesFighter("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Combat Archer (Y/N): </label>
          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === combatArcher) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setCombatArcher(value.value);
              }

              if (action.action === "remove-value") {
                setCombatArcher("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Melee Fighter (Y/N): </label>

          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === meleeFighter) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setMeleeFighter(value.value);
              }

              if (action.action === "remove-value") {
                setMeleeFighter("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Is gear ready?:</label>
          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === gearStatus) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setGearStatus(value.value);
              }

              if (action.action === "remove-value") {
                setGearStatus("");
              }
            }}
          />
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Is Admin?:</label>
          <Select
            className="select-component"
            options={booleanOptions}
            defaultValue={
              booleanOptions.find((option) => option.value === isAdmin) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setIsAdmin(value.value);
              }

              if (action.action === "remove-value") {
                setIsAdmin("");
              }
            }}
          />
        </div>


        <div className="label-container ">
          <label className="new-member-form-label">
            Authorized Weapons Forms:
          </label>
          <Select
            options={options}
            defaultValue={
              options.filter((option) => authorizedForms.includes(option.value)) || []
            }
            isMulti
            onChange={(_, action) => {
              if (action.action === "select-option") {
                setAuthorizedForms([...authorizedForms, action.option.value]);
              }

              if (action.action === "remove-value") {
                setAuthorizedForms(
                  authorizedForms.filter(
                    (form) => form !== action.removedValue.value
                  )
                );
              }
            }}
          />
        </div>
        <div className="label-container">
          <label className="new-member-form-label">Member Status:</label>
          <Select
            options={memberOptions}
            defaultValue={
              memberOptions.find((option) => option.value === memberStatus) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setMemberStatus(value.value);
              }

              if (action.action === "remove-value") {
                setMemberStatus("");
              }
            }}
          />
        </div>
        <div className="label-container">
          <label className="new-member-form-label">Rank:</label>
          <Select
            options={rankOptions}
            defaultValue={
              rankOptions.find((option) => option.value === rank) || null
            }
            onChange={(value, action) => {
              if (action.action === "select-option") {
                setRank(value.value);
              }

              if (action.action === "remove-value") {
                setRank("");
              }
            }}
          />
        </div>

        <FileInput
          myState={photo}
          myUseState={setPhoto}
          title={"Upload the Users Photo here:"}
        />

        <img src={photoURL} alt="portrait of user" />

        <FileInput
          myState={arms}
          myUseState={setArms}
          title={"Upload the Users Coat of Arms here:"}
        />

        <img src={armsURL} alt="coat of arms of user" />
        <div className="form-button-container">
          <input className="submit-button" type="submit" value="Submit" />
          {singleMemberData ? (
            <button
              className="cancel-button"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default NewMemberForm;
