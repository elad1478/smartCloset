/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
        createdAt
        updatedAt
        owner
        outfits {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOutfit = /* GraphQL */ `
  query GetOutfit($id: ID!) {
    getOutfit(id: $id) {
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
export const listOutfits = /* GraphQL */ `
  query ListOutfits(
    $filter: ModelOutfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        createdAt
        updatedAt
        items {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
