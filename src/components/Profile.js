import { useEffect, useState } from "react";
import { getProfile } from "../api";
import Register from "./Register";

const Profile = ({ userLogIn, tokenState }) => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    async function getMyInfo() {
      let token = localStorage.getItem("token");
      console.log(token);
      const myReturnedInfo = await getProfile(token);
      console.log(myReturnedInfo);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);
  console.log(myInfo);
  return (
    <div id="Profile">
      {!userLogIn ? (
        <>
          <span>Sign Up To Get Your Own Profile Page</span>
          <Register />
        </>
      ) : (
        <>
          <div className="box">
            <span style={{ fontSize: "2em" }}>My Profile</span>
            <br></br>
            <br></br>
            <span id="myposts" className="myposts">
              My Posts
            </span>
      
            <div
              className="profile"
              key={myInfo._id}
              style={{
                alignItems: "center",
                margin: "20px 60px",
                border: "1px solid black",
                padding: "10px",
              }}>
              <h3>{myInfo.username}</h3>

              <p>{myInfo.data}</p>
              <h3>{myInfo.price}</h3>
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
};
export default Profile;
