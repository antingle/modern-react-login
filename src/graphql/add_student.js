import { gql } from '@apollo/client';

export const add_student = gql`
  mutation Register(
    $first_name: String!
    $last_name: String!
    $username: String!
    $password: String!
    $confirm_pass: String!
    $teacher_code: String!
  ) {
    add_student(
      registration_input: {
        first_name: $first_name
        last_name: $last_name
        username: $username
        password: $password
        confirm_pass: $confirm_pass
        teacher_code: $teacher_code
      }
    ) {
      id
      name {
        first
        last
      }
    }
  }
`;