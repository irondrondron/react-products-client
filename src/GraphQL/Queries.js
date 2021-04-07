import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      _id
      name
      category
      price
    }
  }
`;