import Modal from "./UI/Modal";
import useInput from "./Hooks/useInput";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const {
    value: enteredName,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: confirmPassword,
    hasError: confirmPasswordError,
    valueChangeHandler: confirmPasswordChangeHandler,
    valueBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value) => value.trim() !== "");

  let nameInputClasses = nameError ? "form-group invalid" : "form-group";
  const emailInputClasses = emailError ? "form-group invalid" : "form-group";
  const passwordInputClasses = passwordError
    ? "form-group invalid"
    : "form-group";
  const passwordConfirmInputClasses = confirmPasswordError
    ? "form-group invalid"
    : "form-group";
  function submitHandler(event) {
    event.preventDefault();

    if (enteredName === "") {
      nameBlurHandler();
      return;
    }
    if (!enteredEmail.includes("@")) {
      emailBlurHandler();
      return;
    }
    if (enteredPassword !== confirmPassword) {
      confirmPasswordBlurHandler();
      return;
    }
    console.log(enteredName, enteredEmail, enteredPassword, confirmPassword);

    resetName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  }

  return (
    <Modal>
      <form onSubmit={submitHandler} className={classes["signup-form"]}>
        <h1 id={classes["form-title"]}>Code Bucket</h1>
        <h2>Create an Account</h2>
        <div className={classes[nameInputClasses]}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameError && (
            <p className={classes["error-text"]}>*Name cannot be empty</p>
          )}
        </div>
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
            <p className={classes["error-text"]}>
              *Password length must be greate than 7
            </p>
          )}
        </div>
        <div className={classes[passwordConfirmInputClasses]}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            min={7}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
          />
          {confirmPasswordError && (
            <p className={classes["error-text"]}>*Password does not match.</p>
          )}
        </div>
        <div className={classes["form-group"]}>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
