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
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} src="/broken-image.jpg" />
          <TextField id="LabelEmail" label="Email" variant="outlined" />
          <TextField id="LabelPassword" label="Password" variant="outlined" />
          <Button variant="contained">Sign In</Button>

          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom component="div">
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Link variant="h6" href="/register">
                Create an account
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </div>
  );
}
