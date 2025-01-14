import { gql } from '@apollo/client';

export const ADD_TOKEN = gql`
mutation addToken(
    $_eq: uuid = "",
    $chat_token: String = ""
) {
  update_account_information(where: {user_id: {_eq: $_eq}}, _set: {chat_token: $chat_token}) {
    affected_rows
    returning {
      chat_token
    }
  }
}
`;