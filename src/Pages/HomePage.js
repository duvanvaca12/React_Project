import * as React from "react";
import Typography from "@mui/material/Typography";
import hcbgImage from "/home/cesar/Documents/Proyect_React/volcano-data/src/Resources/background.jpg";
import "@fontsource/roboto/700.css";

export default function HomePage() {
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: "url(" + hcbgImage + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
        textAlign: "center",
        paddingTop: "20em",
        maxWidth: "100%",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        Search Info About volcanos <br />
        around the world
      </Typography>
    </div>
  );
}
