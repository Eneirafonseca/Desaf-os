import React, { useState } from 'react';
import Login from './components/Login';
import CustomAlert from './components/Alert';


function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSuccess = () => {
    setShowAlert(true);
    setAlertVariant("success");
    setAlertMessage("La sesión se inició correctamente");
  };

  const handleError = () => {
    setShowAlert(true);
    setAlertVariant("danger");
    setAlertMessage("Los datos ingresados no son correctos");
  };

  return (
    <div className="container">

      <Login
        onSuccess={handleSuccess}
        onError={handleError} />

      <br></br>
      
      {showAlert && (
        <CustomAlert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          title={alertMessage}
        />
      )}
    </div>
  );
}

export default App;

