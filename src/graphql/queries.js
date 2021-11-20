/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        outfits {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOutfit = /* GraphQL */ `
  query GetOutfit($id: ID!) {
    getOutfit(id: $id) {
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
export const listOutfits = /* GraphQL */ `
  query ListOutfits(
    $filter: ModelOutfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
        }
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        outfit {
          id
          rating
          createdAt
          updatedAt
        }
        eventName
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
