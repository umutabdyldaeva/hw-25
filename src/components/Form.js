import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import { uiAction } from "../store/reducer/uiSlice";
import "./Form.css";

const Form = () => {
  const { spinner } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [enterePassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);


  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setIsValidEmail((p)=>p=e.target.value.includes('@'))
    dispatch(uiAction.data(isValidEmail));
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setIsValidPassword((p)=>p=e.target.value.length > 4)
    dispatch(uiAction.data(isValidPassword));
  
  };

  let formIsValid = true
  if(isValidEmail && isValidPassword){
    formIsValid = false
  }
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(uiAction.toggle());
    setTimeout(() => {
      dispatch(uiAction.toggle());
      dispatch(uiAction.profile());
    }, 2000);

    localStorage.setItem("email", enteredEmail.email);
    localStorage.setItem("password", enterePassword.password);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <h2>Login Page</h2>
        <div className="input">
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="text"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Password</label>
          <br />
          <input
            type="password"
            onChange={passwordChangeHandler}
            value={enterePassword}
          />
        </div>
        <div className="button">
          <button disabled={formIsValid}>login</button>
          {spinner && <SpinnerDotted />}
        </div>
      </div>
    </form>
  );
};

export default Form;
