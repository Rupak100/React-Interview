import { useLocation, useParams } from "react-router-dom";

function Profile() {

    const {userID} =useParams();
    const location = useLocation();
    const {name,age,userIDs} =location.state
  return <>
   <h2>This is the Profile Page : {userID}</h2>
   <h4>The name of the person is : {name}</h4>
   <h4>The age of the person is : {age}</h4>
   <h4>The userID of the person is : {userIDs}</h4>
  </>;
}

export default Profile;
