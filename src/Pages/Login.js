import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <Grid
      className="login-container"
      container
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{ width: "20%" }}>
        <Stack alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} src="/broken-image.jpg" />
          <TextField
            fullWidth
            id="LabelEmail"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="LabelPassword"
            label="Password"
            variant="outlined"
          />
          <Button fullWidth variant="contained">
            Sign In
          </Button>
          <Typography variant="h6" gutterBottom component="div">
            Don't have an account?
          </Typography>
          <Link variant="h6" href="/register">
            Create an account
          </Link>
        </Stack>
      </Box>
    </Grid>
  );
}
