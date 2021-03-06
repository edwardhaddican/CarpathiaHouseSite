//this is the correct seed file, check and delete the other one

const defaultArms = "/deviceImages/CarpathiaHouseArms.png";

const defaultImage =
  "https://www.thesprucepets.com/thmb/_yrib2KGkS4VJSgCQEl59KPUPOU=/1885x1414/smart/filters:no_upscale()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg";

const userSeed = [
  {
    mundaneFirstName: "Matt",
    mundaneLastName: "Merkel",
    scaFirstName: "Klaus",
    scaLastName: "Winterhalter von Walachey",
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
    armsAlt:
      "Argent, an eagle rising to sinister regardant, wings displayed, on a chief embattled sable three mullets voided and interlaced within and conjoined to as many annulets argent.",
    notes: "",
    title: "Baron",
    _id: 1,
  },
  {
    mundaneFirstName: "Felicia",
    mundaneLastName: "Merkel",
    scaFirstName: "Anastasia",
    scaLastName: "Kurt-Kalbi",
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
    armsAlt: "default arms",
    notes: "",
    title: "Baroness",
    _id: 2,
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
    armsAlt: "default arms",
    notes: "",
    title: "Lord",
    _id: 3,
  },
  {
    mundaneFirstName: "Travis",
    mundaneLastName: "Vaughan",
    scaFirstName: "Lawrence",
    scaLastName: "Vaughan",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: true,
    memberStatus: "officer",
    admin: true,
    rank: "Quartermaster",
    image: "/profileImages/LawrenceProfile.jpeg",
    arms: "/deviceImages/LawrenceArms.jpg",
    armsAlt:
      "Argent, an owl rising wings adorsed sable, a bordure embattled counter-ermine",
    notes: "",
    title: "First Sworn/Lord",
    _id: 4,
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
    rank: "Bannerman",
    image: defaultImage,
    arms: "/deviceImages/VicsArms.jpg",
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 5,
  },
  {
    mundaneFirstName: "Karen",
    mundaneLastName: "MacPherson",
    scaFirstName: "Muirenn",
    scaLastName: "Ingen du Daire",
    registeredName: true,
    registeredArms: true,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "spear"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "Bannerman",
    image: "/profileImages/RhynnProfile.jpeg",
    arms: "/deviceImages/RhynnArms.png",
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 6,
  },
  {
    mundaneFirstName: "Brian",
    mundaneLastName: "Payseur",
    scaFirstName: "Gilbert",
    scaLastName: "le Merchand",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: true,
    meleeFighter: true,
    authorizedForms: ["polearm", "combat-archery"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "Companion",
    image: defaultImage,
    arms: "/deviceImages/GilbertArms.png",
    armsAlt: "Per bend sinister sable and argent, a chalice counterchanged.",
    notes: "",
    title: "",
    _id: 7,
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
    rank: "Companion",
    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 8,
  },
  {
    mundaneFirstName: "John",
    mundaneLastName: "Simpson",
    scaFirstName: "Fenwick",
    scaLastName: "xxxx",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield", "combat-archery"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "Companion",
    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 9,
  },
  {
    mundaneFirstName: "Micheal",
    mundaneLastName: "Guaracino",
    scaFirstName: "Tempo",
    scaLastName: "xxxx",
    registeredName: true,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "Bannerman",
    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "Lord",
    _id: 10,
  },
  {
    mundaneFirstName: "K",
    mundaneLastName: "S",
    scaFirstName: "Thaddeus",
    scaLastName: "Obcyczyk",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: [
      "sword&shield",
      "two-weapon",
      "polearm",
      "spear",
      "great-weapon",
    ],
    gearStatus: true,
    memberStatus: "onwatch",
    admin: false,
    rank: "Companion",
    image: "/profileImages/ThaddeusProfile.jpeg",
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 11,
  },

  {
    mundaneFirstName: "Cory",
    mundaneLastName: "Walker",
    scaFirstName: "Sabine",
    scaLastName: "di Sandra",
    registeredName: false,
    registeredArms: false,
    singlesFighter: false,
    combatArcher: false,
    meleeFighter: false,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "member",
    admin: true,
    rank: "Bannerman",
    image: defaultImage,
    arms: "/deviceImages/CoryArms.JPEG",
    armsAlt:
      "Per fess argent and sable, two trees blasted their trunks issuant from the line of division counterchanged and in sinister canton a sun sable.",
    notes: "",
    title: "",
    _id: 13,
  },
  {
    mundaneFirstName: "Brandon",
    mundaneLastName: "Mickley",
    scaFirstName: "Jasper",
    scaLastName: "Emre",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "officer",
    admin: false,
    rank: "Seneschal",
    image: defaultImage,
    arms: "/deviceImages/JasperArms.jpg",
    armsAlt:
      "Per fess sable and argent, two trees blasted their trunks issuant from the line of division between three mullets of eight points counterchanged",
    notes: "",
    title: "",
    _id: 14,
  },
  {
    mundaneFirstName: "Sam",
    mundaneLastName: "Arcaini",
    scaFirstName: "Malcom",
    scaLastName: "xxxx",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["sword&shield"],
    gearStatus: false,
    memberStatus: "member",
    admin: false,
    rank: "Bannerman",
    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 15,
  },
  {
    mundaneFirstName: "Joe",
    mundaneLastName: "Spagnoli",
    scaFirstName: "Liam",
    scaLastName: "xxxx",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: ["polearm"],
    gearStatus: false,
    memberStatus: "onwatch",
    admin: false,
    rank: "Companion",
    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 16,
  },
  {
    mundaneFirstName: "E",
    mundaneLastName: "H",
    scaFirstName: "Decl??n",
    scaLastName: "mac Aodhag??in",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: [
      "sword&shield",
      "polearm",
      "spear",
      "two-weapon",
      "great-weapon",
    ],
    gearStatus: false,
    memberStatus: "officer",
    admin: false,
    rank: "Field Marshal",
    image: defaultImage,
    arms: "/deviceImages/DeclanArms.png",
    armsAlt: "default arms",
    notes: "",
    title: "Lord",
    _id: 17,
  },
  {
    mundaneFirstName: "Hunter",
    mundaneLastName: "Findon",
    scaFirstName: "Jeager",
    scaLastName: "xxxx",
    registeredName: false,
    registeredArms: false,
    singlesFighter: true,
    combatArcher: false,
    meleeFighter: true,
    authorizedForms: [],
    gearStatus: false,
    memberStatus: "prospect",
    admin: false,
    rank: "Companion",

    image: defaultImage,
    arms: defaultArms,
    armsAlt: "default arms",
    notes: "",
    title: "",
    _id: 18,
  },
];

module.exports = userSeed;
