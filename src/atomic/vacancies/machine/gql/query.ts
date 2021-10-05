import { gql } from "graphql-request";

export const GET_VACANCIES = gql`
  query GetVacancies($params: String) {
    result: getVacancies(company_id: $params) {
      _id
      employer_questions {
        value
        keywords
      }
      job_category
      job_description {
        value
        keywords
      }
      location
      position_and_responsibilities {
        value
        keywords
      }
      position_type
      salary {
        to
        from
      }
      skills_and_qualifications {
        value
        keywords
      }
      vacancy
      company_id
    }
  }
`;

export {};
