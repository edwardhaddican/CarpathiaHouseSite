const defaultArms =
  "https://pic.ebid.net/upload_medbig/5/6/4/uo_1596811661-32027-154.jpg";

const defaultImage =
  "https://www.thesprucepets.com/thmb/_yrib2KGkS4VJSgCQEl59KPUPOU=/1885x1414/smart/filters:no_upscale()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg";

const userSeed = [
  {
    mundaneFirstName: "Matt",
    mundaneLastName: "Merkel",
    scaFirstName: "Klaus",
    scaLastName: "idk",
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
    arms: defaultArms,
    notes: '',
    title: 'Sir',
    phoneNumber: '732-710-9597',
    email: 'klausw84@gmail.com',
    address: '215 Sunset Ln, Howell Township, NJ 07731',
    memberId: '',
    authExpirationDate: '',
  },
  {
    mundaneFirstName: "Felicia",
    mundaneLastName: "Merkel",
    scaFirstName: "Stasia",
    scaLastName: "idk",
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
    arms: defaultArms,
    notes: '',
    title: 'Lady',
    phoneNumber: '908-31-1684',
    email: '',
    address: '215 Sunset Ln, Howell Township, NJ 07731',
    memberId: '',
    authExpirationDate: '',
  },
  {
    mundaneFirstName: "Tyler",
    mundaneLastName: "idk",
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
    arms: "./deviceImages/VicsArms.jpg",
    notes: '',
  },
  {
    mundaneFirstName: "Travis",
    mundaneLastName: "idk",
    scaFirstName: "Lawrence",
    scaLastName: "idk",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: true,
    memberStatus: "officer",
    admin: true,
    rank: "Quarter Master",
    image: defaultImage,
    arms: "/public/deviceImages/LawrenceArms.jpg",
    notes: '',
  },
  {
    mundaneFirstName: "Vic",
    mundaneLastName: "idk",
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
    arms: "./deviceImages/Lawrence_Vaughan_device.jpg",
    notes: '',
  },
  {
    mundaneFirstName: "Karen",
    mundaneLastName: "MacPherson",
    scaFirstName: "Rhynn",
    scaLastName: "idk",
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
    notes: '',
  },
  {
    mundaneFirstName: "Brian",
    mundaneLastName: "idk",
    scaFirstName: "Gilbert",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: true,
    meleeFighter: true,
    authorizedForms: ["polearm", "combat-archery"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "Erica",
    mundaneLastName: "idk",
    scaFirstName: "idk",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "idk",
    mundaneLastName: "idk",
    scaFirstName: "Fenwick",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "combat-archery"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "Mike",
    mundaneLastName: "idk",
    scaFirstName: "Tempo",
    scaLastName: "idk",
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
    notes: '',
  },
  {
    mundaneFirstName: "idk",
    mundaneLastName: "idk",
    scaFirstName: "Kordian/Thaddeus",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "two-weapon"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "idk",
    mundaneLastName: "idk",
    scaFirstName: "Grim",
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
    notes: '',
  },
  {
    mundaneFirstName: "Cory",
    mundaneLastName: "idk",
    scaFirstName: "Sabine",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "Brandon",
    mundaneLastName: "idk",
    scaFirstName: "Jasper",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "officer",
    admin: false,
    rank: "officer",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
  },
  {
    mundaneFirstName: "Malcom",
    mundaneLastName: "idk",
    scaFirstName: "idk",
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
    notes: '',
  },
  {
    mundaneFirstName: "Liam",
    mundaneLastName: "idk",
    scaFirstName: "idk",
    scaLastName: "idk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["polearm"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "grunt",
    image: defaultImage,
    arms: defaultArms,
    notes: '',
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
    arms: defaultArms,
    notes: '',
  },
];

module.exports = userSeed;
