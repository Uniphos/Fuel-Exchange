import { gql } from '@apollo/client';

export const ADD_ACCOUNT = gql`
  mutation addAccount(
    $username: String!
    $title: String!
    $telephone_number: String!
    $tax_number: String!
    $password: String!
    $passport_number: String!
    $passport_issue_date: date!
    $passport_image: String!
    $passport_expiry_date: date!
    $email: String!
    $company_name: String!
    $company_address: String!
    $account_type: String!
    $account_manager_name: String!
  ) {
  insert_account_information_one(object: {
    username: $username,
    title: $title,
    telephone_number: $telephone_number,
    tax_number: $tax_number,
    password: $password,
    passport_number: $passport_number,
    passport_issue_date: $passport_issue_date,
    passport_image: $passport_image,
    passport_expiry_date: $passport_expiry_date,
    email: $email,
    company_name: $company_name,
    company_address: $company_address,
    account_type: $account_type,
    account_manager_name: $account_manager_name
  }) {
    username
    user_id
    title
    telephone_number
    tax_number
    password
    passport_number
    passport_issue_date
    passport_image
    passport_expiry_date
    email
    created_at
    company_name
    company_address
    authorized_person
    account_type
    account_manager_name
  }
}
`;
