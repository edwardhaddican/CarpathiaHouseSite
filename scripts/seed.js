require("../server/db");
const { Member } = require("../server/db/models");
const userSeed = require("./userSeedData");

Member.deleteMany({}, (err) => {
  if (err) {
    throw err;
  } else {
    userSeed.forEach((e) => {
      Member.create(e, function (err, member) {
        if (err) {
          throw err;
        } else {
          console.log("member create:", member.mundaneFirstName);
        }
      });
    });
  }
  console.log(`${userSeed.length} Members created.`)
});
