/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRODA = /* GraphQL */ `
  query GetRODA($entityType: String!, $id: String!) {
    getRODA(entityType: $entityType, id: $id) {
      entityType
      id
      idCompany
      idParking
      idBiker
      idReceipt
      idLot
      idPadlock
      logicalState
      occupiedLots
      occupiedPadlocks
      payment
      phase
      physicalState
      timeOut
      __typename
    }
  }
`;
export const listRODAS = /* GraphQL */ `
  query ListRODAS(
    $filter: TableRODAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRODAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        entityType
        id
        idCompany
        idParking
        idBiker
        idReceipt
        idLot
        idPadlock
        logicalState
        occupiedLots
        occupiedPadlocks
        payment
        phase
        physicalState
        timeOut
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryRODASByIdParkingEntityTypeIndex = /* GraphQL */ `
  query QueryRODASByIdParkingEntityTypeIndex(
    $idParking: String!
    $first: Int
    $after: String
  ) {
    queryRODASByIdParkingEntityTypeIndex(
      idParking: $idParking
      first: $first
      after: $after
    ) {
      items {
        entityType
        id
        idCompany
        idParking
        idBiker
        idReceipt
        idLot
        idPadlock
        logicalState
        occupiedLots
        occupiedPadlocks
        payment
        phase
        physicalState
        timeOut
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryRODASByIdCompanyEntityTypeIndex = /* GraphQL */ `
  query QueryRODASByIdCompanyEntityTypeIndex(
    $idCompany: String!
    $first: Int
    $after: String
  ) {
    queryRODASByIdCompanyEntityTypeIndex(
      idCompany: $idCompany
      first: $first
      after: $after
    ) {
      items {
        entityType
        id
        idCompany
        idParking
        idBiker
        idReceipt
        idLot
        idPadlock
        logicalState
        occupiedLots
        occupiedPadlocks
        payment
        phase
        physicalState
        timeOut
        __typename
      }
      nextToken
      __typename
    }
  }
`;
