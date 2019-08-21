import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriends = props => {
  const [name, setName] = useState({
    name: "",
    age: "",
    email: ""
  });
  const changeHandler = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  function addFriend(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", name)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }

  return (
    <div className="loginModal">
      <form
        className="login-modal"
        onSubmit={event => addFriend(event)}
        onKeyDown={props.closeLoginHandler2}
        tabIndex="0"
      >
        <h1 className="loginTitle">Add More Friends</h1>
        <p className="loginInputs">
          <label>
            Name:
            <input
              className="input-modal"
              type="text"
              name="name"
              onChange={changeHandler}
              value={name.name}
            />
          </label>
        </p>

        <p className="loginInputs">
          <label>
            Age:
            <input
              className="input-modal"
              type="age"
              name="age"
              onChange={changeHandler}
              value={name.age}
            />
          </label>
        </p>

        <p className="loginInputs">
          <label>
            Email:
            <input
              className="input-modal"
              type="email"
              name="email"
              onChange={changeHandler}
              value={name.email}
            />
          </label>
        </p>
        <button onClick={addFriend}>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
