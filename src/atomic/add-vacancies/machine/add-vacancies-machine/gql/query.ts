// import { gql } from 'graphql-request';

// export const GET_TICKET_NUMBERS = gql`
//   query getTicketNumbers($filters: WarrantyV2EntityFilterInput) {
//     result: WarrantiesV2(
//       search: {
//         filters: $filters
//         order: { start: 0, limit: 1, order_directions: "DESCENDING" }
//       }
//     ) {
//       data {
//         id
//         ticket_number: ticket_id
//       }
//     }
//   }
// `;

export {};
