import Modal from "./UI/Modal";
import useInput from "./Hooks/useInput";
import Link from "next/link";

import classes from "./SignUp.module.css";

const Login = () => {
  const {
    value: enteredEmail,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  const emailInputClasses = emailError ? "form-group invalid" : "form-group";
  const passwordInputClasses = passwordError
    ? "form-group invalid"
    : "form-group";

  function submitHandler(event) {
    event.preventDefault();

    if (!enteredEmail.includes("@")) {
      emailBlurHandler();
      return;
    }
    if (enteredPassword === "") {
      passwordBlurHandler();
      return;
    }
    console.log(enteredEmail, enteredPassword);

    resetEmail();
    resetPassword();
  }
  return (
    <Modal>
      <form onSubmit={submitHandler} className={classes["signup-form"]}>
        <h1 id={classes["form-title"]}>Code Bucket</h1>
        <h2>Log into Account</h2>
        <div className={classes[emailInputClasses]}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailError && (
            <p className={classes["error-text"]}>*Please enter valid E-mail</p>
          )}
        </div>
        <div className={classes[passwordInputClasses]}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordError && (
            <p className={classes["error-text"]}>*Enter your password</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <button type='submit'>Login</button>
        </div>
        <div className={classes["sign-up"]}>
          <p>
            Don&apos;t have an account? <Link href='/signup'>Sign up</Link>
          </p>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
