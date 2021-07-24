//working on integrating google sheets

const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

//tutorial: https://github.com/theoephraim/node-google-spreadsheet

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication

async function getGoogleSheets() {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title, "doc title ");
    // await doc.updateProperties({ title: "renamed doc" });

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    // console.log(sheet, "sheet");
    // console.log(sheet.title, "sheet title");
    // console.log(sheet.rowCount, "sheet row count");

    // adding / removing sheets
    const newSheet = await doc.addSheet({ title: "hot new sheet!" });
    await newSheet.delete();

    // adding a new sheet with headers
    // const sheet2 = await doc.addSheet({ headerValues: ['name', 'email'] });
    // await sheet2.delete();

    const carpathianHeaderValues = {
      headerValues: [
        "mundaneFirstName",
        "mundaneLastName",
        "scaFirstName",
        "scaLastName",
        "registeredName",
        "registeredArms",
        "singlesFighter",
        "combatArcher",
        "meleeFighter",
        "authorizedForms",
        "gearStatus",
        "memberStatus",
        "admin",
        "rank",
        "image",
        "arms",
      ],
    };

    //this will make a members sheet and populate the headers.
    // const members = await doc.addSheet({
    //   title: "Members",
    //   headerValues: carpathianHeaderValues.headerValues,
    // });
  } catch (err) {
    console.log(err);
  }
}

(async function () {
  await getGoogleSheets();
})();
