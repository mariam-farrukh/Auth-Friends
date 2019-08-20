import React from "react";

const FriendsDisplay = ({ friend }) => {
  console.log("friends prop", friend);
  return (
    <>
      <div>
        <p>Name: {friend.name} </p>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email} </p>
      </div>
    </>
  );
};

export default FriendsDisplay;