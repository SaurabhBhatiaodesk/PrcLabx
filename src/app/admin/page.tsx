import React from "react";
import AdminLogIn from "@/components/AdminLogIn/AdminLogIn";
import PageTitle from "@/components/Commen/PageTitle";

export default function Page() {
  return (
    <div className="container ">
      <PageTitle
        pageTitle="LogIn"
        dashboardUrl="/admin"
        dashboardText="Admin"
      />

      <AdminLogIn />
    </div>
  );
}
