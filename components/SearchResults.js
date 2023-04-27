import React, { useState } from "react";
import { Button, Card, CardContent, CardActions,Container, Grid, TextField, makeStyles, responsiveFontSizes } from '@mui/material';
// import styles from '@/styles/Home.module.css';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import styles from 'C:\\Users\\fdominguezmac\\Documents\\Reportal Software Stuff\\WEB-APP\\material-ui-next\\styles\\SearchResults.module.css';




function SearchResults() {
  //Set the state holder for my UI elements and to make the search
  const [idNumber, setidNumber] = React.useState(null);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [results, setResults] = useState([]);

  async function getResults() {
    const res = await fetch(`/api/searchHandler?idNumber=${idNumber}&toDate=${toDate}&fromDate=${fromDate}`).then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error)});

    const data = await JSON.parse(res.result.Content);
    return data;
  }


  async function handleSearch() {
    const searchResults = await getResults();

    setResults(searchResults);
  }

  async function handleOpenDocument(reportId, fileGUID) {
    const myURL = `/api/fileURL?reportId=${reportId}&fileGUID=${fileGUID}`;
    const baseURL = 'https://portal.sealdsweet.com/';
    
    const res = await fetch(myURL).then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error)});

    const data = await JSON.parse(res.result.Content);

    window.open(baseURL + data[0].FileURL);
  }
  
  return (
    <div>
          <Box textAlign='center' sx={{ p: 2, border: '1px ' }}>
              <TextField label="Container/Vessel/Lot Number"
                        InputProps={{
                          style:{
                            width:'300px'
                          }
                        }}
                        onChange={(event) => {
                          setidNumber(event.target.value);
                        }}/>
          </Box>
          <Box textAlign='center' sx={{ p: 2, border: '1px ' }}>
          <Button variant="contained" className={styles.primaryColor} onClick={handleSearch}>search</Button>
          </Box>


        
        <Container>
          <Grid container spacing={3} className="grid-container">
            {results.map((result) => (
              <Grid key={result.ReportId} item xs={12} sm={6} md={3}>
                <Card  className={styles.secondaryColor} style={{alignContent: 'center', height:200,}}>
                  <Box height="70%">
                    <CardContent >
                      <Typography gutterBottom variant="h5" component="div">
                              {result.Description}
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box height="30%" >
                    <CardActions style={{alignContent: 'baseline',}}>
                      <Button size="small" variant="contained" className={styles.primaryColor} onClick={()=>{
                        handleOpenDocument(result.ReportId,result.fileGUID);
                      }} >Open Document</Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
    </div>
  );
}

export default SearchResults;