import React, { useState } from "react";

const FormsParent = () => {
  const [hasBeenSubmited, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [first, setFirst] = useState("");
  const [firstError, setFirstError] = useState(" ");
  const [last, setLast] = useState("");
  const [lastError, setLastError] = useState(" ");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(" ");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { first, last, email, password };
    console.log(user);
    setEmail("");
    setFirst("");
    setLast("");
    setPassword("");
    setConfirm("");
    setSubmit(true);
  };

  const handleFirst = (e) => {
    setFirst(e.target.value);
    if (e.target.value.length < 1) {
      setFirstError(" ");
    } else if (e.target.value.length < 3) {
      setFirstError("The First Name must be at least 3 characters or more");
    } else {
      setFirstError("");
    }
  };

  const handleLast = (e) => {
    setLast(e.target.value);
    if (e.target.value.length < 1) {
      setLastError(" ");
    } else if (e.target.value.length >= 3) {
      setLastError("");
    } else if (e.target.value.length > 0 || e.target.value.length < 3) {
      setLastError("Your last name must be at least 3 characters or more");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError(" ");
    } else if (
      e.target.value.length > 5 &&
      e.target.value.includes("@") &&
      e.target.value.includes(".")
    ) {
      setEmailError("");
    } else if (e.target.value.length > 5 || e.target.value.length < 5) {
      setEmailError("The Email is invalid");
    }
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError(" ");
    } else if (e.target.value.length > 8) {
      setPasswordError("");
    } else if (e.target.value.length < 8 || e.target.value.length > 0) {
      setPasswordError("Your password must be at least 8 characters or more");
    }
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmError(" ");
    } else if (password === e.target.value) {
      setConfirmError("");
    } else if (e.target.value.length < 8 || e.target.value.length > 0) {
      setConfirmError("The passwords don't match");
    }
  };

  return (
    <>
      {hasBeenSubmited ? (
        <h2>Thank You, We received your form</h2>
      ) : (
        <>
          <h2>Sign Up:</h2>
          <form style={{ margin: "32px" }} onSubmit={handleSubmit}>
            <>
              <div className="input-container">
                <input
                  placeholder="First Name"
                  value={first}
                  onChange={handleFirst}
                  name="FirstName"
                  required
                />
                <br />
                {firstError ? (
                  <label className="error">{firstError}</label>
                ) : (
                  ""
                )}
              </div>
              <input
                placeholder="Last Name"
                value={last}
                onChange={handleLast}
                name="LastName"
                required
              />
              <br />
              {lastError ? <label className="error">{lastError}</label> : ""}
              <div className="input-container">
                <input
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                  name="email"
                  type="email"
                  required
                />
                <br />
                {emailError ? (
                  <label className="error">{emailError}</label>
                ) : (
                  ""
                )}
              </div>
              <input
                placeholder="Password"
                value={password}
                onChange={handlePass}
                name="password"
                required
              />
              <br/>
              {passwordError ? (
                  <label className="error">{passwordError}</label>
                ) : (
                  ""
                )}
              <input
                placeholder="Confirm Password"
                value={confirm}
                onChange={handleConfirm}
                name="ConfirmPass"
                required
              />
              <br/>
              {confirmError ? (
                  <label className="error">{confirmError}</label>
                ) : (
                  ""
                )}
              <br />
              {!emailError && !firstError && !lastError && !passwordError && !confirmError ? (
                <button type="submit" className="enabled">
                  Submit
                </button>
              ) : (
                <button type="submit" className="disabled" disabled={true}>
                  Submit
                </button>
              )}
            </>
          </form>
        </>
      )}
    </>
  );
};

export default FormsParent;
