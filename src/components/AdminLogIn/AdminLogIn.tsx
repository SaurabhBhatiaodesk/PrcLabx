"use client";

import React, { FormEvent, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
interface FormValues {
  email: string;
  password: string;
}

export default function AdminLogIn(): JSX.Element {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");


    try {
      // Send POST request to the login API
      const response = await axios.post(
        "https://labxbackend.labxrepair.com.au/api/admin/login",
        {
          username: email,
          password: password,
        }
      );

      if (response.status === 200) {

        // Navigate to /admindashboard if login is successful
        router.push("/adminDeshboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: "10px",
          }}
        >
          Basic Form
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Box sx={{ mb: "10px" }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "16px",
              padding: "12px 10px",
              color: "#fff !important",
            }}
          >
            Get Started
          </Button>

          <Typography fontSize="14px" mt="20px" align="center">
            Already have an account?{" "}
            <Link href="#" className="primaryColor text-decoration-none">
              Sign In
            </Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
}
