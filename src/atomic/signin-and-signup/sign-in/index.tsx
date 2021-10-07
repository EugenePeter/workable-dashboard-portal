import React, { useContext, useEffect } from "react";
import { FormInput, CleverButton } from "../../../global-components";
import { useSignUp, spawn } from "./machine";
import { StyledSignInSignUp, SignInSignUpWrapper, StyledLink } from "../styles";
import { Modifiers } from "../../../global-styles";
import { IContext } from "./machine/types/context";
import { withRouter, useHistory } from "react-router";

import { ProtectedRoutesActions } from "../../../protected-routes/ProtectedRoutesProvider";

import { Loader } from "../../../global-components";

export interface data {
  value: string;
  name?: string;
  secondary_name?: string;
}
interface SignInActions {
  handleChange: (data: data) => void;
}

const SignIn = () => {
  const machine = spawn({});
  const [context, state_value, state, send] = useSignUp(machine);
  const { application_config = {}, application_data = {} } = context ?? {};
  const { fields } = (application_config as IContext["application_config"]) ?? {};
  const { field_value = {}, results } = application_data ?? {};
  console.log(state_value);
  const { setAuthenticated, setCompanyId } = useContext(ProtectedRoutesActions);
  const token = localStorage.getItem("token");
  const navigate = useHistory();
  console.log(state);
  useEffect(() => {
    if (results.token) {
      setAuthenticated(true);
      setCompanyId(localStorage.getItem("company_id"));
      navigate.push("/");
    }
  }, [results, setAuthenticated, setCompanyId, navigate]);

  useEffect(() => {
    console.log("TOKEN IS CALLLED:", token);
  }, [token]);

  const actionsProp: SignInActions = {
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

  console.log("SIGN IN CONTEXT:", context);

  return (
    <>
      <Modifiers />
      <StyledSignInSignUp onSubmit={handleSubmit}>
        <SignInSignUpWrapper>
          {state.matches("ready.submitting") ? (
            <>
              <Loader />
              <p>just a moment</p>
            </>
          ) : (
            <h4>sign in</h4>
          )}
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
            login
          </CleverButton>
          <StyledLink to="/signup" className="margin--top">
            <small>I don't have an account yet, sign me up</small>
          </StyledLink>
        </SignInSignUpWrapper>
      </StyledSignInSignUp>
    </>
  );
};
export default withRouter(SignIn);
