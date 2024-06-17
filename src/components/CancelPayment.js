import React from "react";

const CancelPayment = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
    },
    message: {
      fontSize: "2rem",
      color: "#dc3545",
      marginBottom: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.message}>You have cancelled your payment.</h1>
    </div>
  );
};

export default CancelPayment;
