import { gql } from '@apollo/client';

export const CREATE_POSTING = gql`
  mutation CreatePost(
    $user_id: uuid
    $trial_amount: numeric! 
    $origin: String! 
    $min_quantity: numeric! 
    $min_price: numeric! 
    $max_quantity: numeric! 
    $max_price: numeric!
    $fuel_name: String! 
    $description: String! 
    $account_email: String! 
    $contract: String!
  ) {
  insert_posting_list_one(object: {
    account_email: $account_email, 
    contract: $contract, 
    description: $description, 
    fuel_name: $fuel_name, 
    max_price: $max_price, 
    max_quantity: $max_quantity, 
    min_price: $min_price, 
    min_quantity: $min_quantity, 
    origin: $origin,  
    trial_amount: $trial_amount, 
    user_id: $user_id
  }) {
    account_email
    contract
    created_at
    description
    fuel_name
    max_price
    max_quantity
    min_price
    min_quantity
    origin
    posting_list_id
    trial_amount
    user_id
  }
}
`;