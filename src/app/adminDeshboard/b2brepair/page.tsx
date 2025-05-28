import React from "react";
import PageTitle from "@/components/Commen/PageTitle";
import B2BRepairTable from "@/components/adminDeshboard/B2BRepair/B2BRepairTable";

export default function Page() {
  return (
    <div className="container ">
      <PageTitle
        pageTitle="B2B Repair Table"
        dashboardUrl="/b2brepair"
        dashboardText="B2B Repair Table"
      />

      <B2BRepairTable />
    </div>
  );
}
