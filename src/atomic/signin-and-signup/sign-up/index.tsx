import React, { useEffect } from "react";
import { FormInput, CleverButton } from "../../../global-components";
import { useSignUp, spawn } from "./machine";

import { withRouter, useHistory } from "react-router";

import { StyledSignInSignUp, SignInSignUpWrapper, StyledLink } from "../styles";
import { Modifiers } from "../../../global-styles";
import { IContext } from "./machine/types/context";

export interface data {
  value: string;
  name?: string;
  secondary_name?: string;
}

interface SignUpActions {
  handleChange: (data: data) => void;
}

const SignUp = () => {
  const machine = spawn({});
  const [context, state_value, state, send] = useSignUp(machine);
  const { application_config = {}, application_data = {} } = context ?? {};
  const { fields } = (application_config as IContext["application_config"]) ?? {};
  const { field_value = {}, results } = application_data ?? {};
  console.log(state_value);
  const navigate = useHistory();

  useEffect(() => {
    if (results.successfuly_registered) navigate.push("/signin");
  }, [results, navigate]);

  const actionsProp: SignUpActions = {
    handleChange: (data: data) => {
      console.log("DATAAAAA:", data);
      send({
        type: "ON_FIELD_UPDATE",
        payload: data,
      });
    },
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    send("SUBMIT");
  };

  console.log("SIGN UP CONTEXT:", context);

  return (
    <>
      <Modifiers />
      <StyledSignInSignUp onSubmit={handleSubmit}>
        <SignInSignUpWrapper>
          {JSON.stringify(state.value)}
          <h4>sign up</h4>
          {fields &&
            Object.entries(fields).map(([key, value], index: number) => (
              <FormInput
                key={`key--${index}`}
                value={field_value[key] ?? ""}
                type="text"
                placeholder={value.place_holder}
                label={value.label}
                actions={actionsProp ?? {}}
                name={value.name}
                accessor="value"
              />
            ))}
          <CleverButton full_width={true} button_type="signin">
            SIGNUP
          </CleverButton>
          <StyledLink to="/signin" className="margin--top">
            <small>I already have an account, let mesign me in.</small>
          </StyledLink>
        </SignInSignUpWrapper>
      </StyledSignInSignUp>
    </>
  );
};
export default withRouter(SignUp);
