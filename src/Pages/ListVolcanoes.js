import * as React from "react";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

export default function VolcanoPage() {
  const [volcanoRegion, setVolcanoRegion] = useState({});
  const volcanoId = useParams();
  const volcanoIdAPI = `http://sefdb02.qut.edu.au:3001/volcano/${volcanoId.id}`;
  const fetchData = async (url, state) => {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json(); // Await
    state(data);
  };
  useEffect(() => {
    fetchData(volcanoIdAPI, setVolcanoRegion);
  }, []);
  console.log(volcanoRegion.latitude, volcanoRegion.longitude);
  return (
    <div>
      <Grid container spacing={10} columns={4}>
        <Grid item xs={8}>
          <div class="volcanoStyle">
            <h1>{volcanoRegion.name}</h1>
            <p>Country: {volcanoRegion.country}</p>
            <p>Region: {volcanoRegion.region}</p>
            <p>Subregion: {volcanoRegion.subregion}</p>
            <p>Last Eruption: {volcanoRegion.last_eruption}</p>
            <p>Summit: {volcanoRegion.summit}</p>
            <p>Elevation: {volcanoRegion.elevation}</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          {volcanoRegion.latitude && volcanoRegion.longitude && (
            <Map
              height={450}
              defaultCenter={[
                Number(volcanoRegion.latitude),
                Number(volcanoRegion.longitude),
              ]}
              defaultZoom={8}
            >
              <Marker
                width={50}
                anchor={[
                  Number(volcanoRegion.latitude),
                  Number(volcanoRegion.longitude),
                ]}
              />
            </Map>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
