"use client";

import React, { useEffect, useState } from "react";
import { Typography, Paper, Box, CircularProgress } from "@mui/material";
import Image from "next/image";

const API_URL = "https://labxbackend.labxrepair.com.au/api/repair/id/";

interface RepairData {
  personalDetails: {
    businessName: string;
    fullName: string;
    contactNo: string;
    emailAddress: string;
    returnShippingAddress: string;
  };
  deviceDetails: {
    deviceType: string;
    brand: string;
    model: string;
    imeiOrSerialNo: string;
    devicePassword: string;
  };
  repairDetails: {
    deviceType: string;
    issueDescription: string;
    previousRepairAttempts: boolean;
    jumpQueueForFasterService: boolean;
    additionalComments: string;
  };
  shippingDetails: {
    requireReturnLabel: boolean;
    requirePickupLabel: boolean;
    termsAndConditions: boolean;
    signature: string;
  };
}

const ProductDetails: React.FC = () => {
  const [repairData, setRepairData] = useState<RepairData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepairData = async () => {
      const id = localStorage.getItem("selectedId"); // Retrieve the ID from localStorage
      if (!id) {
        console.error("ID not found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}${id}`, {
          method: "GET",
          redirect: "follow",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setRepairData(result.data);
      } catch (error) {
        console.error("Error fetching repair data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepairData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!repairData) {
    return (
      <Typography variant="h6" sx={{ margin: 2 }}>
        No data available.
      </Typography>
    );
  }

  const { personalDetails, deviceDetails, repairDetails, shippingDetails } =
    repairData;

  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Repair Details
      </Typography>

      {/* Personal Details */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Personal Details</Typography>
        <Typography variant="body1">
          <strong>Business Name:</strong> {personalDetails.businessName}
        </Typography>
        <Typography variant="body1">
          <strong>Full Name:</strong> {personalDetails.fullName}
        </Typography>
        <Typography variant="body1">
          <strong>Contact No:</strong> {personalDetails.contactNo}
        </Typography>
        <Typography variant="body1">
          <strong>Email Address:</strong> {personalDetails.emailAddress}
        </Typography>
        <Typography variant="body1">
          <strong>Shipping Address:</strong>{" "}
          {personalDetails.returnShippingAddress}
        </Typography>
      </Box>

      {/* Device Details */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Device Details</Typography>
        <Typography variant="body1">
          <strong>Device Type:</strong> {deviceDetails.deviceType}
        </Typography>
        <Typography variant="body1">
          <strong>Brand:</strong> {deviceDetails.brand}
        </Typography>
        <Typography variant="body1">
          <strong>Model:</strong> {deviceDetails.model}
        </Typography>
        <Typography variant="body1">
          <strong>IMEI/Serial No:</strong> {deviceDetails.imeiOrSerialNo}
        </Typography>
      </Box>

      {/* Repair Details */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Repair Details</Typography>
        <Typography variant="body1">
          <strong>Issue Description:</strong> {repairDetails.issueDescription}
        </Typography>
        <Typography variant="body1">
          <strong>Previous Repair Attempts:</strong>{" "}
          {repairDetails.previousRepairAttempts ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>Jump Queue for Faster Service:</strong>{" "}
          {repairDetails.jumpQueueForFasterService ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>Additional Comments:</strong>{" "}
          {repairDetails.additionalComments}
        </Typography>
      </Box>

      {/* Shipping Details */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Shipping Details</Typography>
        <Typography variant="body1">
          <strong>Require Return Label:</strong>{" "}
          {shippingDetails.requireReturnLabel ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>Require Pickup Label:</strong>{" "}
          {shippingDetails.requirePickupLabel ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <strong>Terms and Conditions:</strong>{" "}
          {shippingDetails.termsAndConditions ? "Accepted" : "Not Accepted"}
        </Typography>
      </Box>

      {/* Signature */}
      <Box>
        <Typography variant="h6">Signature</Typography>
        <Image
          src={shippingDetails.signature}
          alt="Signature"
          style={{ maxWidth: "100%", height: "auto", marginTop: 10 }}
        />
      </Box>
    </Paper>
  );
};

export default ProductDetails;
