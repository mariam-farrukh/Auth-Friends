import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriends from "./AddFriends.js";
import FriendsDisplay from "./FriendsDisplay.js";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => getData(), []);
  function getData() {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }

  console.log("list of friends", friends);
  return (
    <div>
        <div>
            <h4>Friends</h4>
            {friends.length > 0
                ? friends.map(friend => (
                    <>
                        <FriendsDisplay key={friend.id} friend={friend} />
                        <button onClick={() => deleteFriend(friend.id)}>Remove Friend</button>
                    </>
                    ))
                : null}
        </div>
        <AddFriends />
    </div>
  );
};

export default Friends;
