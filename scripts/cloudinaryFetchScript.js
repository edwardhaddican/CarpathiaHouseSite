require("dotenv").config();

const cloudinary = require("cloudinary").v2;

function listResources() {
  cloudinary.search
    .expression("folder:Carpathia/*")
    .sort_by("public_id", "desc")
    .execute()
    .then((e) => {
      return e.resources.map((element) => {
        return element.url;
      });
    })
    .then((arr) => {
      return arr.map((e) => {
        const index = 49;
        const splitArr = e.split("");
        splitArr.splice(49, 0, "q_50/");

        return splitArr.join("");
      });
    })
    .then((arr) => {
      console.log(arr);
    })
    .catch((error) => {
      console.log(error);
    });
}
listResources();

