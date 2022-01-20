require("dotenv").config();

const cloudinary = require("cloudinary").v2;

const result = [];

const options = {
  resource_type: "image",
  folder: "Carpathia",
  max_results: 500,
};

function listResources(next_cursor) {
  if (next_cursor) {
    options["next_cursor"] = next_cursor;
  }
  console.log(options, "options");
  cloudinary.api.resources(options, function (error, res) {
    if (error) {
      console.log(error, "my error");
    }
    const more = res.next_cursor;

    resources = res.resources;

    for (let res in resources) {
      res = resources[res];
      let url = res.secure_url;
      result.push(url);
    }

    if (more) {
      listResources(more);
    } else {
      console.log("done");
      console.log(result, "result arr");
    }
  });
}
listResources(null);
