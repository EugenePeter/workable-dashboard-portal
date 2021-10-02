import { gql } from "graphql-request";

export const ADD_VACANCIES = gql`
  mutation AddVacancy($params: AddVacancyParams!) {
    result: addVacancy(params: $params) {
      id
      success
      message
      _id
    }
  }
`;
