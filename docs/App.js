import React from 'react';

import { ThemeProvider } from 'styled-components';
import ThemeDefault from './config/themes/themeDefault';
import { GlobalStyles } from './config/globalStyles/globalStyles';

import { Button, Wrapper, Title, Pic, Typography, Divider } from 'ITSpecterUI';
import { Form } from 'ITSpecterUI';
import { Card } from 'ITSpecterUI';

const App = () => (
  <ThemeProvider theme={ThemeDefault}>
    <GlobalStyles />
    <br></br>
            <br></br>
    <Divider variant="list"></Divider>
            <br></br>
            <br></br>
        <Divider variant="list" type="subheader" subheader="subheader"></Divider>  
            <br></br>
            <br></br>  
        <Divider variant="inset"></Divider>
            <br></br>
            <br></br>
        <Divider variant="inset" type="subheader" subheader="subheader"></Divider>
            <br></br>
            <br></br>    
        <Divider variant="middle"></Divider>
            <br></br>
            <br></br>
        <Card height="300"></Card>
        <br></br>
        <br></br>
      <Typography variant="headline_1">Typography</Typography>
      <br/>
      <Typography variant="headline_2">Typography</Typography>
      <br/>
      <Typography variant="headline_3">Typography</Typography>
      <br/>
      <Typography variant="headline_4">Typography</Typography>
      <br/>
      <Typography variant="headline_5" color="red">Typography</Typography>
      <br/>
      <Typography variant="headline_6">Typography</Typography>
      <br/>
      <Typography variant="subtitle_1">Typography</Typography>
      <br/>
      <Typography variant="subtitle_2" color="blue">Typography</Typography>
      <br/>
      <Typography variant="body_1">Typography</Typography>
      <br/>
      <Typography variant="body_2">Typography</Typography>
      <br/>
      <Typography variant="caption">Typography</Typography>
      <br/>
      <Typography variant="overline">Typography</Typography>
  </ThemeProvider>
);

export default App;

{/* <Button type="submit">Hello world</Button>
<Wrapper>
  <Title>Hello World</Title>
</Wrapper>
<Form></Form>
<Card color="red" height="300">
  Hello
</Card>
<Pic size={300} />
<Pic round /> */}