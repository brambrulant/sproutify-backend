let express = require("express");
let request = require("request");
let querystring = require("querystring");
const user = require("./models/user");
require("dotenv").config();

let app = express();

let redirect_uri = process.env.REDIRECT_URI;
let frontEnd_uri = process.env.FRONTEND_URI;

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope:
          "user-read-private user-read-email user-top-read playlist-read-private playlist-read-collaborative ugc-image-upload playlist-modify-public playlist-modify-private ",
        redirect_uri,
      })
  );
});

app.get("/callback", function (req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET
        ).toString("base64"),
    },
    json: true,
  };
  request.post(authOptions, async function (error, response, body) {
    console.log(body);
    // find or create the user

    var access_token = body.access_token;
    // res.redirect(frontEnd_uri + "?access_token=" + access_token);
    // add userID to redirect :
    res.redirect(`${frontEnd_uri}?access_token=${access_token}`);
  });
});

app.post("/tree", function (req, res) {
  console.log(req.body);

  // {
  //   userId: 123,
  //   image: ' string',
  //   name: string
  // }
});

app.get("/:userId/tree", async function (req, res) {
  // const trees = await return Tree.findAll({
  //   where: {
  //     userId: req.params.userId
  //   }
  // });
  console.log(trees);
});

app.get("/:userId/tree/:treeId", function (req, res) {
  // return Tree.find({
  //   where : {
  //     userId: req.params.userId,
  //     id: req.params.treeId
  //   }
  // })
});

const port = process.env.PORT;
console.log(process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_SECRET);
console.log(
  `Listening on port ${port}. Go /login to initiate authentication flow.`
);
app.listen(port);
