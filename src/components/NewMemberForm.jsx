import React, { useState } from "react";
import Select from "react-select";
import { FileInput } from "./";

const NewMemberForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameSCA, setFirstNameSCA] = useState("");
  const [lastNameSCA, setLastNameSCA] = useState("");
  const [registeredName, setRegisteredName] = useState(false);
  const [registeredArms, setRegisteredArms] = useState(false);
  const [singlesFighter, setSinglesFighter] = useState(false);
  const [combatArcher, setCombatArcher] = useState(false);
  const [meleeFighter, setMeleeFighter] = useState(false);
  const [gearStatus, setGearStatus] = useState(false);
  const [authorizedForms, setAuthorizedForms] = useState([]);
  const [memberStatus, setMemberStatus] = useState("");
  const [rank, setRank] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [photo, setPhoto] = useState("");
  const [arms, setArms] = useState("");

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
    { value: "member", label: "member" },
    { value: "onwatch", label: "onwatch" },
    { value: "prospect", label: "prospect" },
  ];

  const rankOptions = [
    { value: "dreadlord", label: "Dreadlord" },
    { value: "dreadlady", label: "Dread Lady" },
    { value: "officer", label: "Officer" },
    { value: "sergeant", label: "Sergeant" },
    { value: "quartermaster", label: "Quartermaster" },
    { value: "grunt", label: "Grunt" },
  ];

  const booleanOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const photoURL = photo ? URL.createObjectURL(photo.selectedFile) : "";
  const armsURL = arms ? URL.createObjectURL(arms.selectedFile) : "";

  // console.log(newUserObject)
  return (
    <div className="new-member-form-main-container">
      <form onSubmit={handleSubmit} className="new-member-form-inner-container">
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

          <select
            value={registeredName}
            onChange={(event) => {
              setRegisteredName(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Registered Arms (Y/N):{" "}
          </label>

          <select
            value={registeredArms}
            onChange={(event) => {
              setRegisteredArms(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Singles Fighter(Y/N):{" "}
          </label>
          <select
            value={singlesFighter}
            onChange={(event) => {
              setSinglesFighter(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Combat Archer (Y/N): </label>

          <select
            value={combatArcher}
            onChange={(event) => {
              setCombatArcher(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Melee Fighter (Y/N): </label>
          <select
            value={meleeFighter}
            onChange={(event) => {
              setMeleeFighter(event.target.value);
              console.log(combatArcher);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">
            Is gear ready?
          </label>

          <select
            value={gearStatus}
            onChange={(event) => {
              setGearStatus(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container name-container ">
          <label className="new-member-form-label">Is Admin?:</label>
          <select
            value={isAdmin}
            onChange={(event) => {
              setIsAdmin(event.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="label-container">
          <label className="new-member-form-label">
            Authorized Weapons Forms:
          </label>
          <Select
            className="select-component"
            options={options}
            isMulti
            onChange={(_, action) => {
              if (action.action === "select-option") {
                // console.log(action)
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
            className="select-component"
            options={memberOptions}
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
            className="select-component"
            options={rankOptions}
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

        <img src={photoURL} />

        <FileInput
          myState={arms}
          myUseState={setArms}
          title={"Upload the Users Coat of Arms here:"}
        />

        <img src={armsURL} />

        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewMemberForm;
