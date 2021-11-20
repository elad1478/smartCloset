/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateOutfit = /* GraphQL */ `
  subscription OnCreateOutfit {
    onCreateOutfit {
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
export const onUpdateOutfit = /* GraphQL */ `
  subscription OnUpdateOutfit {
    onUpdateOutfit {
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
export const onDeleteOutfit = /* GraphQL */ `
  subscription OnDeleteOutfit {
    onDeleteOutfit {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
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
