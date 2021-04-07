import { gql } from '@apollo/client'

export const CREATE_ORDER = gql`
  mutation CreateOrder($productId: String!, $name: String!, $number: Float!) {
    createOrder
    (
      productId: $productId 
      name: $name
      number: $number
    ) 
    {
      productId
      name
      number
    }
  }
`;