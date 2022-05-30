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
import { fetchData } from "../utils";

const volcanoByName = "http://sefdb02.qut.edu.au:3001/volcanoes";

export default function VolcanoList() {
  // All the states we can find
  const [volcanoData, setVolcanoData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState("");
  const [populated, searchPopulated] = useState(0);

  // ???
  const handleChange = (event) => {
    searchPopulated(event.target.value);
  };

  // Asynchronously function
  const getCountries = async () => {
    const urlCountries = "http://sefdb02.qut.edu.au:3001/countries";
    const countriesData = await fetchData(urlCountries);
    setCountries(countriesData);
  };

  const searchVolcanoes = async () => {
    const populatedWithin =
      populated === 0 ? "" : `&populatedWithin=${populated}km`;
    const queryCountry = `${volcanoByName}?country=${inputCountry.toLowerCase()}${populatedWithin}`;

    const volcanoesData = await fetchData(queryCountry);
    setVolcanoData(volcanoesData);
  };

  useEffect(() => {
    getCountries();
  }, []);

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
        <Button onClick={searchVolcanoes} variant="contained" sx={{ m: 2 }}>
          Search
        </Button>
      </Grid>
      <VolcanoTable volcanos={volcanoData}></VolcanoTable>
    </Grid>
  );
}
