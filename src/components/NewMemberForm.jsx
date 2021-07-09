import React, { useState } from "react";
import Select from "react-select";

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

  function handleSubmit(event) {
    event.preventDefault();
  }

  const options = [
    { value: "sword&shield", label: "Sword & Shield" },
    { value: "two-weapon", label: "Two Weapon" },
    { value: "spear", label: "Spear" },
    { value: "polearm", label: "Polearm" },
    { value: "great-weapon", label: "Great Weapon" },
    { value: "combat-archery", label: "Combat Archery" },
  ];

  console.log(authorizedForms);
  return (
    <div className="allMembers-main-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name (Mundane):
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              console.log(firstName);
            }}
          />
        </label>
        <label>
          Last Name (Mundane):
          <input
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              console.log(lastName);
            }}
          />
        </label>
        <label>
          First Name (SCA):
          <input
            type="text"
            value={firstNameSCA}
            onChange={(event) => {
              setFirstNameSCA(event.target.value);
              console.log(firstNameSCA);
            }}
          />
        </label>
        <label>
          Last Name (SCA):
          <input
            type="text"
            value={lastNameSCA}
            onChange={(event) => {
              setLastNameSCA(event.target.value);
              console.log(lastNameSCA);
            }}
          />
        </label>

        <label>
          Registered Name (Y/N):
          <input
            type="text"
            value={registeredName}
            onChange={(event) => {
              setRegisteredName(event.target.value);
              console.log(registeredName);
            }}
          />
        </label>

        <label>
          Registered Arms (Y/N):
          <input
            type="text"
            value={registeredArms}
            onChange={(event) => {
              setRegisteredArms(event.target.value);
              console.log(registeredArms);
            }}
          />
        </label>

        <label>
          Singles Fighter(Y/N):
          <input
            type="text"
            value={singlesFighter}
            onChange={(event) => {
              setSinglesFighter(event.target.value);
              console.log(singlesFighter);
            }}
          />
        </label>
        <label>
          Combat Archer (Y/N):
          <input
            type="text"
            value={combatArcher}
            onChange={(event) => {
              setCombatArcher(event.target.value);
              console.log(combatArcher);
            }}
          />
        </label>
        <label>
          Melee Fighter (Y/N):
          <input
            type="text"
            value={meleeFighter}
            onChange={(event) => {
              setMeleeFighter(event.target.value);
              console.log(combatArcher);
            }}
          />
        </label>
        <label>
          Authorized Forms:
          <input type="text" value={false} onChange={(event) => {}} />
        </label>
        <label>
          Is the gear in fighting shape:
          <input
            type="text"
            value={gearStatus}
            onChange={(event) => {
              setGearStatus(event.target.value);
            }}
          />
        </label>

        <label>Authorized Weapons Forms:</label>
        <Select
          options={options}
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





        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewMemberForm;
