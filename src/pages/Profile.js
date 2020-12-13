import React, { useState, useEffect } from "react";
import { getCookie } from "utils/cookie";

function Profile() {
  const [name, setName] = useState("");
  const [userDataLoading, setUserDataLoading] = useState(false);

  const userId = JSON.parse(getCookie("userData")).username;

  return (
    <div>
      <h1> My Profile!</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <p>{`username : ${userId}`}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
