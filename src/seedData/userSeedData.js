const defaultArms =
  "/deviceImages/DefaultHouseArms.jpg";

const defaultImage =
  "https://www.thesprucepets.com/thmb/_yrib2KGkS4VJSgCQEl59KPUPOU=/1885x1414/smart/filters:no_upscale()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg";

const userSeed = [
  {
    mundaneFirstName: "Matt",
    mundaneLastName: "Merkel",
    scaFirstName: "Klaus",
    scaLastName: "",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: true,
    memberStatus: "officer",
    admin: true,
    rank: "Dread Lord",
    image: defaultImage,
    arms: "/deviceImages/KlausArms.jpg",
    notes: "",
    title: "Sir",
  },
  {
    mundaneFirstName: "Felicia",
    mundaneLastName: "Merkel",
    scaFirstName: "Anastasia",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "officer",
    admin: true,
    rank: "Dread Lady",
    image: defaultImage,
    arms: "/deviceImages/StasiaArms.jpg",
    notes: "",
    title: "Lady",
  },
  {
    mundaneFirstName: "Tyler",
    mundaneLastName: "Stanley",
    scaFirstName: "Guillaume",
    scaLastName: "Du Chantier",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: true,
    memberStatus: "officer",
    admin: true,
    rank: "Sergeant",
    image: defaultImage,
    arms: "/deviceImages/GuisArms.jpg",
    notes: "",
    title: "Lord",
  },
  {
    mundaneFirstName: "Travis",
    mundaneLastName: "Vaughan",
    scaFirstName: "Lawrence",
    scaLastName: "",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: true,
    memberStatus: "officer",
    admin: true,
    rank: "quartermaster",
    image: defaultImage,
    arms: "/deviceImages/LawrenceArms.jpg",
    notes: "",
    title: "First Sworn/Lord",
  },
  {
    mundaneFirstName: "Victoria",
    mundaneLastName: "Twaites",
    scaFirstName: "Ezra",
    scaLastName: "Di Bazzi",
    registeredName: false,
    registeredArms: true,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "member",
    admin: true,
    rank: "grunt",
    image: defaultImage,
    arms: "/deviceImages/VicsArms.jpg",
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Karen",
    mundaneLastName: "MacPherson",
    scaFirstName: "Rhynn",
    scaLastName: "",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Brian",
    mundaneLastName: "Payseur",
    scaFirstName: "Gilbert",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: true,
    meleeFighter: true,
    authorizedForms: ["polearm", "combat-archery"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Erica",
    mundaneLastName: "Payseur",
    scaFirstName: "Jeromina",
    scaLastName: "De la Cueva",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "John",
    mundaneLastName: "Simpson",
    scaFirstName: "Fenwick",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "combat-archery"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Micheal",
    mundaneLastName: "Guaracino",
    scaFirstName: "Tempo",
    scaLastName: "",
    registeredName: true,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "Lord",
  },
  {
    mundaneFirstName: "Kordian",
    mundaneLastName: "Starczyk",
    scaFirstName: "Thaddeus",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "two-weapon"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Corey",
    mundaneLastName: "Abernathy",
    scaFirstName: "Grimm",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "Lord",
  },
  {
    mundaneFirstName: "Cory",
    mundaneLastName: "Walker",
    scaFirstName: "Sabine",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Brandon",
    mundaneLastName: "Mickley",
    scaFirstName: "Jasper",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "officer",
    admin: false,
    rank: "seneschal",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Sam",
    mundaneLastName: "Arcaini",
    scaFirstName: "Malcom",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Joe",
    mundaneLastName: "Spagnoli",
    scaFirstName: "Liam",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["polearm"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
  {
    mundaneFirstName: "Ed",
    mundaneLastName: "Had",
    scaFirstName: "Declan",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "polearm", "spear", "two-weapon"],
    gearStatus: false,
    memberStatus: "officer",
    admin: false,
    rank: "Officer",
    image: defaultImage,
    arms: "/deviceImages/DeclanArms.png",
    notes: "",
    title: "Lord",
  },
  {
    mundaneFirstName: "Hunter",
    mundaneLastName: "Findon",
    scaFirstName: "Jeager",
    scaLastName: "",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "prospect",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: "",
    title: "",
  },
];

module.exports = userSeed;
