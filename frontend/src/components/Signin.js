import React, { useState, useEffect } from "react";
import Login from "./Login";
import TaskComponent from "./TaskComponent";
import fireb from "./fire";
import "../styles/SignIn.css";
function SignIn() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  function handleLogin() {
    clearErrors();

    fireb
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((errors) => {
        switch (errors.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(errors.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(errors.message);
            break;
        }
      });
  }
  function handleSignUp() {
    clearErrors();

    fireb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((errors) => {
        switch (errors.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(errors.message);
            break;
          case "auth/weak-password":
            setPasswordErr(errors.message);
            break;
        }
      });
  }
  function handleLogOut() {
    fireb.auth().signOut();
  }
  function authListener() {
    fireb.auth().onAuthStateChanged((user) => {
      if (user) {
        clear();
        setUser(user);
      } else setUser("");
    });
  }
  function clear() {
    setEmail("");
    setPassword("");
  }
  function clearErrors() {
    setPasswordErr("");
    setEmailErr("");
  }
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div className="Signin">
      {user ? (
        <TaskComponent handleLogOut={handleLogOut}/>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailErr={emailErr}
          passwordErr={passwordErr}
        />
      )}
    </div>
  );
}
export default SignIn;
