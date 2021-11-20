/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
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
export const onCreateOutfit = /* GraphQL */ `
  subscription OnCreateOutfit($owner: String!) {
    onCreateOutfit(owner: $owner) {
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
export const onUpdateOutfit = /* GraphQL */ `
  subscription OnUpdateOutfit($owner: String!) {
    onUpdateOutfit(owner: $owner) {
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
export const onDeleteOutfit = /* GraphQL */ `
  subscription OnDeleteOutfit($owner: String!) {
    onDeleteOutfit(owner: $owner) {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String!) {
    onCreateHistory(owner: $owner) {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String!) {
    onUpdateHistory(owner: $owner) {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String!) {
    onDeleteHistory(owner: $owner) {
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
