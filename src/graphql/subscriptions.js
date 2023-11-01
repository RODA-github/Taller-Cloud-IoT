/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRODA = /* GraphQL */ `
  subscription OnCreateRODA(
    $entityType: String
    $id: String
    $idCompany: String
    $idParking: String
  ) {
    onCreateRODA(
      entityType: $entityType
      id: $id
      idCompany: $idCompany
      idParking: $idParking
    ) {
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
export const onUpdateRODA = /* GraphQL */ `
  subscription OnUpdateRODA(
    $entityType: String
    $id: String
    $idCompany: String
    $idParking: String
    $payment: String
  ) {
    onUpdateRODA(
      entityType: $entityType
      id: $id
      idCompany: $idCompany
      idParking: $idParking
      payment: $payment
    ) {
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
export const onDeleteRODA = /* GraphQL */ `
  subscription OnDeleteRODA(
    $entityType: String
    $id: String
    $idCompany: String
    $idParking: String
  ) {
    onDeleteRODA(
      entityType: $entityType
      id: $id
      idCompany: $idCompany
      idParking: $idParking
    ) {
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
