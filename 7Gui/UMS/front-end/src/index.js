import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MyApp = () => {
  const [apiData, setData] = React.useState(null);

  async function api() {
    //let url = "https://www.boredapi.com/api/activity";
    // let url = "http://localhost:8080/test";
    await fetch("/test")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setData("ERROR");
        console.log("THE ERROR:", err);
      });
  }

  function showPeople() {
    if (apiData === "ERROR") {
      return (
        <div className="users">
          <h1>Something went WRONG!</h1>
          <div className="col">
            <button
              className="indButton"
              onClick={() => {
                api();
              }}
            >
              fetch
            </button>
          </div>
        </div>
      );
    } else if (apiData === null) {
      api();
      return <div className="users">LOADING...</div>;
    } else {
      const lst = (
        <div className="mainBox">
          <div className="usersHeading">
            <h1>USERS</h1>
          </div>
          {apiData.users.map((obj) => {
            return (
              <div className="indBox">
                <h1 className="personName">
                  {obj.firstName + " " + obj.lastName}
                </h1>
                <button className="edit">
                  <h2>edit</h2>
                </button>
                <button className="delete">
                  <h2 style={{ color: "white" }}>delete</h2>
                </button>
              </div>
            );
          })}
        </div>
      );
      return (
        <div className="users">
          {/* <div className="mainBox"> */}
          {lst}
          <button className="create">CREATE</button>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>User Management System</h1>
      {showPeople()}
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
