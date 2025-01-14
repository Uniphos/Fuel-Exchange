import { gql } from '@apollo/client';

export const ADD_BANK = gql`
    mutation addBank(
        $account_email: String!
        $account_name: String!  
        $account_number: String! 
        $bank_email: String! 
        $bank_name: String!, 
        $bank_phone_number: String! 
        $iban: String!
        $swift_code: String!
        $user_id: uuid
        ) 
    {
    insert_banking_information_one(object: {
        account_email: $account_email, 
        account_name: $account_name, 
        account_number: $account_number, 
        bank_email: $bank_email, 
        bank_name: $bank_name, 
        bank_phone_number: $bank_phone_number, 
        iban: $iban, 
        swift_code: $swift_code, 
        user_id: $user_id
    }) {
    account_email
    account_name
    account_number
    bank_email
    bank_name
    bank_phone_number
    banking_info_id
    iban
    swift_code
    user_id
  }
}
`;