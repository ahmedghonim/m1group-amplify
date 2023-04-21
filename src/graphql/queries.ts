/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAboutUs = /* GraphQL */ `
  query GetAboutUs($id: ID!) {
    getAboutUs(id: $id) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAboutuses = /* GraphQL */ `
  query ListAboutuses(
    $filter: ModelAboutUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAboutuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        desc_ar
        desc_en
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOurService = /* GraphQL */ `
  query GetOurService($id: ID!) {
    getOurService(id: $id) {
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
export const listOurServices = /* GraphQL */ `
  query ListOurServices(
    $filter: ModelOurServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOurServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
