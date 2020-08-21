import React from 'react';
import Typography from './../typography/typography';
import Grid from './../grid/grid';
import Card from './card'

export default function CardExample (){
    return (
        <div>
        <Grid variant="FlexContainer" direction="row" justify="space-around">
          <Grid variant="FlexItems" xs="12" sm="4" md="4" lg="6" order="3">
            <Card height="200">
              <Typography variant="headline_6">Card 1</Typography>
            </Card>
          </Grid>
          <Grid variant="FlexItems" xs="12" sm="4" md="2" lg="3" order="2">  
            <Card height="200" color="#d40030">
              <Typography variant="headline_6">Card 2</Typography>
            </Card>
          </Grid>  
          <Grid variant="FlexItems" xs="12" sm="4" md="6" lg="3" order="1">  
            <Card height="200" color="#d40030">
              <Typography variant="headline_6">Card 3</Typography>
            </Card>
          </Grid>  
        </Grid>
        </div>
    );
} 