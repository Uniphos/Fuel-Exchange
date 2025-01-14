import { gql } from '@apollo/client';

export const GET_ID = gql`
          query getID($email: String!) {
            account_information(where: {email: {_eq: $email}}) {
              user_id
            }
          }
        `;