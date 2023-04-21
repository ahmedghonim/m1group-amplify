/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateAboutUsInput = {
  id?: string | null,
  desc_ar: string,
  desc_en: string,
};

export type ModelAboutUsConditionInput = {
  desc_ar?: ModelStringInput | null,
  desc_en?: ModelStringInput | null,
  and?: Array< ModelAboutUsConditionInput | null > | null,
  or?: Array< ModelAboutUsConditionInput | null > | null,
  not?: ModelAboutUsConditionInput | null,
};

export type AboutUs = {
  __typename: "AboutUs",
  id: string,
  desc_ar: string,
  desc_en: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAboutUsInput = {
  id: string,
  desc_ar?: string | null,
  desc_en?: string | null,
};

export type DeleteAboutUsInput = {
  id: string,
};

export type CreateOurServiceInput = {
  id?: string | null,
  title_ar: string,
  title_en: string,
  desc_ar: string,
  desc_en: string,
  image: string,
};

export type ModelOurServiceConditionInput = {
  title_ar?: ModelStringInput | null,
  title_en?: ModelStringInput | null,
  desc_ar?: ModelStringInput | null,
  desc_en?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelOurServiceConditionInput | null > | null,
  or?: Array< ModelOurServiceConditionInput | null > | null,
  not?: ModelOurServiceConditionInput | null,
};

export type OurService = {
  __typename: "OurService",
  id: string,
  title_ar: string,
  title_en: string,
  desc_ar: string,
  desc_en: string,
  image: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateOurServiceInput = {
  id: string,
  title_ar?: string | null,
  title_en?: string | null,
  desc_ar?: string | null,
  desc_en?: string | null,
  image?: string | null,
};

export type DeleteOurServiceInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelAboutUsFilterInput = {
  id?: ModelIDInput | null,
  desc_ar?: ModelStringInput | null,
  desc_en?: ModelStringInput | null,
  and?: Array< ModelAboutUsFilterInput | null > | null,
  or?: Array< ModelAboutUsFilterInput | null > | null,
  not?: ModelAboutUsFilterInput | null,
};

export type ModelAboutUsConnection = {
  __typename: "ModelAboutUsConnection",
  items:  Array<AboutUs | null >,
  nextToken?: string | null,
};

export type ModelOurServiceFilterInput = {
  id?: ModelIDInput | null,
  title_ar?: ModelStringInput | null,
  title_en?: ModelStringInput | null,
  desc_ar?: ModelStringInput | null,
  desc_en?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelOurServiceFilterInput | null > | null,
  or?: Array< ModelOurServiceFilterInput | null > | null,
  not?: ModelOurServiceFilterInput | null,
};

export type ModelOurServiceConnection = {
  __typename: "ModelOurServiceConnection",
  items:  Array<OurService | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAboutUsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  desc_ar?: ModelSubscriptionStringInput | null,
  desc_en?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAboutUsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAboutUsFilterInput | null > | null,
};

export type ModelSubscriptionOurServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title_ar?: ModelSubscriptionStringInput | null,
  title_en?: ModelSubscriptionStringInput | null,
  desc_ar?: ModelSubscriptionStringInput | null,
  desc_en?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOurServiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionOurServiceFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAboutUsMutationVariables = {
  input: CreateAboutUsInput,
  condition?: ModelAboutUsConditionInput | null,
};

export type CreateAboutUsMutation = {
  createAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAboutUsMutationVariables = {
  input: UpdateAboutUsInput,
  condition?: ModelAboutUsConditionInput | null,
};

export type UpdateAboutUsMutation = {
  updateAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAboutUsMutationVariables = {
  input: DeleteAboutUsInput,
  condition?: ModelAboutUsConditionInput | null,
};

export type DeleteAboutUsMutation = {
  deleteAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOurServiceMutationVariables = {
  input: CreateOurServiceInput,
  condition?: ModelOurServiceConditionInput | null,
};

export type CreateOurServiceMutation = {
  createOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOurServiceMutationVariables = {
  input: UpdateOurServiceInput,
  condition?: ModelOurServiceConditionInput | null,
};

export type UpdateOurServiceMutation = {
  updateOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOurServiceMutationVariables = {
  input: DeleteOurServiceInput,
  condition?: ModelOurServiceConditionInput | null,
};

export type DeleteOurServiceMutation = {
  deleteOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAboutUsQueryVariables = {
  id: string,
};

export type GetAboutUsQuery = {
  getAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAboutusesQueryVariables = {
  filter?: ModelAboutUsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAboutusesQuery = {
  listAboutuses?:  {
    __typename: "ModelAboutUsConnection",
    items:  Array< {
      __typename: "AboutUs",
      id: string,
      desc_ar: string,
      desc_en: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOurServiceQueryVariables = {
  id: string,
};

export type GetOurServiceQuery = {
  getOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOurServicesQueryVariables = {
  filter?: ModelOurServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOurServicesQuery = {
  listOurServices?:  {
    __typename: "ModelOurServiceConnection",
    items:  Array< {
      __typename: "OurService",
      id: string,
      title_ar: string,
      title_en: string,
      desc_ar: string,
      desc_en: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAboutUsSubscriptionVariables = {
  filter?: ModelSubscriptionAboutUsFilterInput | null,
};

export type OnCreateAboutUsSubscription = {
  onCreateAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAboutUsSubscriptionVariables = {
  filter?: ModelSubscriptionAboutUsFilterInput | null,
};

export type OnUpdateAboutUsSubscription = {
  onUpdateAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAboutUsSubscriptionVariables = {
  filter?: ModelSubscriptionAboutUsFilterInput | null,
};

export type OnDeleteAboutUsSubscription = {
  onDeleteAboutUs?:  {
    __typename: "AboutUs",
    id: string,
    desc_ar: string,
    desc_en: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOurServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOurServiceFilterInput | null,
};

export type OnCreateOurServiceSubscription = {
  onCreateOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOurServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOurServiceFilterInput | null,
};

export type OnUpdateOurServiceSubscription = {
  onUpdateOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOurServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOurServiceFilterInput | null,
};

export type OnDeleteOurServiceSubscription = {
  onDeleteOurService?:  {
    __typename: "OurService",
    id: string,
    title_ar: string,
    title_en: string,
    desc_ar: string,
    desc_en: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
