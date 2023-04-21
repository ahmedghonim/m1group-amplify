/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createAboutUs = /* GraphQL */ `
  mutation CreateAboutUs(
    $input: CreateAboutUsInput!
    $condition: ModelAboutUsConditionInput
  ) {
    createAboutUs(input: $input, condition: $condition) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAboutUs = /* GraphQL */ `
  mutation UpdateAboutUs(
    $input: UpdateAboutUsInput!
    $condition: ModelAboutUsConditionInput
  ) {
    updateAboutUs(input: $input, condition: $condition) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAboutUs = /* GraphQL */ `
  mutation DeleteAboutUs(
    $input: DeleteAboutUsInput!
    $condition: ModelAboutUsConditionInput
  ) {
    deleteAboutUs(input: $input, condition: $condition) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOurService = /* GraphQL */ `
  mutation CreateOurService(
    $input: CreateOurServiceInput!
    $condition: ModelOurServiceConditionInput
  ) {
    createOurService(input: $input, condition: $condition) {
      id
      title_ar
      title_en
      desc_ar
      desc_en
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOurService = /* GraphQL */ `
  mutation UpdateOurService(
    $input: UpdateOurServiceInput!
    $condition: ModelOurServiceConditionInput
  ) {
    updateOurService(input: $input, condition: $condition) {
      id
      title_ar
      title_en
      desc_ar
      desc_en
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOurService = /* GraphQL */ `
  mutation DeleteOurService(
    $input: DeleteOurServiceInput!
    $condition: ModelOurServiceConditionInput
  ) {
    deleteOurService(input: $input, condition: $condition) {
      id
      title_ar
      title_en
      desc_ar
      desc_en
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
