import React from "react";
import AdminNav from "../components/AdminNav";
import AdminMain from "../components/AdminMain";
{
  /* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
     */
}
const Admin = () => {
  return (
    <>
      <div>
        <AdminNav />
        <AdminMain />
      </div>
    </>
  );
};

export default Admin;
