const express = require("express");
const app = express();

const db = {
  users: [
    { firstName: "Bruce", lastName: "Wayne" },
    { firstName: "Walter", lastName: "White" },
    { firstName: "Barry", lastName: "Allen" },
    { firstName: "Test", lastName: "User" },
  ],
};

app.get("/gian", (request, response) => {
  console.log("you just made an API request!");

  setTimeout(() => {
    response.json({
      users: db.users,
    });
  }, 1500);
});

app.get("/test", (request, response) => {
  console.log("you just made an API request!");
  // response.json(db);
  setTimeout(() => {
    response.json(db);
  }, 1500);
});

app.listen(8080, () => {
  console.log("I am listening on PORT 8080");
});
