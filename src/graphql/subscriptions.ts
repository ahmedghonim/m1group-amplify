/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAboutUs = /* GraphQL */ `
  subscription OnCreateAboutUs($filter: ModelSubscriptionAboutUsFilterInput) {
    onCreateAboutUs(filter: $filter) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAboutUs = /* GraphQL */ `
  subscription OnUpdateAboutUs($filter: ModelSubscriptionAboutUsFilterInput) {
    onUpdateAboutUs(filter: $filter) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAboutUs = /* GraphQL */ `
  subscription OnDeleteAboutUs($filter: ModelSubscriptionAboutUsFilterInput) {
    onDeleteAboutUs(filter: $filter) {
      id
      desc_ar
      desc_en
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOurService = /* GraphQL */ `
  subscription OnCreateOurService(
    $filter: ModelSubscriptionOurServiceFilterInput
  ) {
    onCreateOurService(filter: $filter) {
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
export const onUpdateOurService = /* GraphQL */ `
  subscription OnUpdateOurService(
    $filter: ModelSubscriptionOurServiceFilterInput
  ) {
    onUpdateOurService(filter: $filter) {
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
export const onDeleteOurService = /* GraphQL */ `
  subscription OnDeleteOurService(
    $filter: ModelSubscriptionOurServiceFilterInput
  ) {
    onDeleteOurService(filter: $filter) {
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
