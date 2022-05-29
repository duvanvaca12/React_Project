import { useEffect, useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import VolcanoTable from "../components/table";
import { VolcanoSharp } from "@mui/icons-material";

const urlCountries = "http://sefdb02.qut.edu.au:3001/countries";
const volcanoByName = "http://sefdb02.qut.edu.au:3001/volcanoes";

export default function VolcanoList() {
  // All the states we can find
  const [volcanoData, setVolcanoData] = useState({});
  const [countries, setCountries] = useState([0]);
  const [inputCountry, setInputCountry] = useState("");
  const [populated, searchPopulated] = useState(0);

  // Fetch the url of countries using GET
  const fetchData = async (url, state) => {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json(); // Await
    state(data);
  };

  // ???
  const handleChange = (event) => {
    searchPopulated(event.target.value);
  };

  let queryCountry =
    populated === 0
      ? `${volcanoByName}?country=${inputCountry.toLowerCase()}`
      : `${volcanoByName}?country=${inputCountry.toLowerCase()}&populatedWithin=${populated}km`;

  // Asynchronously function

  useEffect(() => {
    fetchData(urlCountries, setCountries);
  }, []);

  useEffect(() => {
    fetchData(queryCountry, setVolcanoData);
  }, [queryCountry]);
  console.log(volcanoData);

  return (
    <Grid container justifyContent="center" spacing={10} p={10}>
      <Grid item>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          inputValue={inputCountry}
          onInputChange={(event, newInputValue) => {
            setInputCountry(newInputValue);
          }}
          options={countries}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
      </Grid>
      <Grid item>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="population-width-label">Populated Within</InputLabel>
          <Select
            labelId="population-width-label"
            id="population-width-select"
            value={populated}
            label="Populated"
            onChange={handleChange}
          >
            <MenuItem value={0}>
              <em>...</em>
            </MenuItem>
            <MenuItem value={5}>5Km</MenuItem>
            <MenuItem value={10}>10Km</MenuItem>
            <MenuItem value={30}>30Km</MenuItem>
            <MenuItem value={100}>100Km</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={console.log(volcanoData.id)}
          variant="contained"
          sx={{ m: 2 }}
        >
          Search
        </Button>
      </Grid>
      <Grid></Grid>
      {/* {VolcanoTable(volcanoData)} */}
    </Grid>
  );
}
