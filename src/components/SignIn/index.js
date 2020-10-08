import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

import { StyledSignIn } from './styles';
import { Grid } from 'ITSpecterUI';
// import { useForm } from "react-hook-form";
import { Input } from 'ITSpecterUI';
import { Card } from 'ITSpecterUI';
import { Typography } from 'ITSpecterUI';

const SignIn = (props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Succesfully" + JSON.stringify(values));
  }

  return (
    <StyledSignIn>
      <Grid variant="FlexContainer" justify="center">
        <Grid variant="FlexItems" xs="10" sm="10" md="4" lg="4">
          <Card height="300">
            <Typography variant="headline_5" color="black">
              Sign In
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
          </Card>
        </Grid>
      </Grid>
      {props.children}
    </StyledSignIn>
  );
};

SignIn.propTypes = {};

// Card.defaultProps = {
//   children: PropTypes.node.isRequired,
//   variant: 'Card',
// };

export default SignIn;
