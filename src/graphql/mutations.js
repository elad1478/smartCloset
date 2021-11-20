/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createOutfit = /* GraphQL */ `
  mutation CreateOutfit(
    $input: CreateOutfitInput!
    $condition: ModelOutfitConditionInput
  ) {
    createOutfit(input: $input, condition: $condition) {
      id
      rating
      createdAt
      updatedAt
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateOutfit = /* GraphQL */ `
  mutation UpdateOutfit(
    $input: UpdateOutfitInput!
    $condition: ModelOutfitConditionInput
  ) {
    updateOutfit(input: $input, condition: $condition) {
      id
      rating
      createdAt
      updatedAt
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteOutfit = /* GraphQL */ `
  mutation DeleteOutfit(
    $input: DeleteOutfitInput!
    $condition: ModelOutfitConditionInput
  ) {
    deleteOutfit(input: $input, condition: $condition) {
      id
      rating
      createdAt
      updatedAt
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
      id
      eventName
      date
      createdAt
      updatedAt
      outfit {
        id
        rating
        createdAt
        updatedAt
        items {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
      id
      eventName
      date
      createdAt
      updatedAt
      outfit {
        id
        rating
        createdAt
        updatedAt
        items {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
      id
      eventName
      date
      createdAt
      updatedAt
      outfit {
        id
        rating
        createdAt
        updatedAt
        items {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
