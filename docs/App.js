import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import ThemeDefault from './config/themes/themeDefault';
import { GlobalStyles } from './config/globalStyles/globalStyles';
import { Card } from 'ITSpecterUI';
import { Typography } from 'ITSpecterUI';
import { Divider } from 'ITSpecterUI';
import { Input } from 'ITSpecterUI';
import { Grid } from 'ITSpecterUI';
import { SignIn } from 'ITSpecterUI';
import { AutoTest } from 'ITSpecterUI';

import { AutoForm } from 'ITSpecterUI';
import { config } from 'ITSpecterUI';
import { test } from 'ITSpecterUI';

const App = () => {
  // const [status, setStatus] = useState('');

  // const handleSubmit = (form) => {
  //   setStatus('loading');
  //   console.log(status);
  //   setTimeout(() => {
  //     setStatus('success');
  //   }, 3000);
  // };
  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyles />
      {/* <Grid variant="FlexContainer" justify="space-between">
        <Grid variant="FlexItems" xs="4" sm="8" md="6" lg="4" spacing="3">
          <Card height="300" color="blue">
            Card 1
          </Card>
        </Grid>
        <Grid variant="FlexItems" xs="4" sm="2" md="2" lg="6" spacing="3">
          <Card height="300" color="green">
            Card 2
          </Card>
        </Grid>
        <Grid variant="FlexItems" xs="4" sm="2" md="4" lg="2" spacing="3">
          <Card height="300" color="red">
            Card 3
          </Card>
        </Grid>
      </Grid> */}
      {/* <AutoForm form={config}></AutoForm> */}
      <AutoTest form={test}></AutoTest>
      {/* <AutoForm form={config} onSubmit={handleSubmit} status={status}></AutoForm> */}
      {/* <SignIn></SignIn>  */}
    </ThemeProvider>
  );
};

export default App;
