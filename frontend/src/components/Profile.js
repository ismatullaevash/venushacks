import fireb from "./fire";
import { Redirect } from "react-router-dom";

const Profile = () => {
  let user = fireb.auth().currentUser;

  if (user != null) {
    return (<>
      <div>{user.email}</div>
    </>);
  } else {
    return (<Redirect to={{ pathname: "/" }} />);
  }
};

export default Profile;
