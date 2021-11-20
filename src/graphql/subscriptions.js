/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
      id
      name
      image
      outfits {
        items {
          id
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
      id
      name
      image
      outfits {
        items {
          id
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
      id
      name
      image
      outfits {
        items {
          id
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOutfit = /* GraphQL */ `
  subscription OnCreateOutfit($owner: String!) {
    onCreateOutfit(owner: $owner) {
      id
      items {
        items {
          id
          name
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOutfit = /* GraphQL */ `
  subscription OnUpdateOutfit($owner: String!) {
    onUpdateOutfit(owner: $owner) {
      id
      items {
        items {
          id
          name
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOutfit = /* GraphQL */ `
  subscription OnDeleteOutfit($owner: String!) {
    onDeleteOutfit(owner: $owner) {
      id
      items {
        items {
          id
          name
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($owner: String!) {
    onCreateHistory(owner: $owner) {
      id
      outfit {
        id
        items {
          nextToken
          startedAt
        }
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      eventName
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($owner: String!) {
    onUpdateHistory(owner: $owner) {
      id
      outfit {
        id
        items {
          nextToken
          startedAt
        }
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      eventName
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($owner: String!) {
    onDeleteHistory(owner: $owner) {
      id
      outfit {
        id
        items {
          nextToken
          startedAt
        }
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      eventName
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
