import React, { useState } from "react";

const FormsParent = () => {
  const [hasBeenSubmited, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [first, setFirst] = useState("");
  const [firstError, setFirstError] = useState(" ");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

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
      setFirstError("The First Name must have at least 3 characters or more");
    } else {
      setFirstError("");
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
                onChange={(e) => setLast(e.target.value)}
                name="LastName"
                required
              />
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />
              <input
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                name="ConfirmPass"
                required
              />
              <br />
              {!emailError && !firstError ? (
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
