import React, { useState } from "react";
import CustomAlert from "../components/UI/CustomAlert";

const Save = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [login, setLogin] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Show Alert</button>
      {!login && (
        <CustomAlert
          message='You are not logged in.'
          type='fail'
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default Save;
