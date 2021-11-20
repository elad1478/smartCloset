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
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      outfits {
        items {
          id
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      rating
      createdAt
      updatedAt
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
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      rating
      createdAt
      updatedAt
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
      items {
        items {
          id
          name
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      rating
      createdAt
      updatedAt
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
      outfit {
        id
        items {
          nextToken
        }
        rating
        createdAt
        updatedAt
      }
      eventName
      date
      createdAt
      updatedAt
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
      outfit {
        id
        items {
          nextToken
        }
        rating
        createdAt
        updatedAt
      }
      eventName
      date
      createdAt
      updatedAt
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
      outfit {
        id
        items {
          nextToken
        }
        rating
        createdAt
        updatedAt
      }
      eventName
      date
      createdAt
      updatedAt
    }
  }
`;
