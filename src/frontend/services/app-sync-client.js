import { API, graphqlOperation } from 'aws-amplify'
import { getRODA } from '../../graphql/queries'
import { onUpdateRODA } from '../../graphql/subscriptions'

export const subscribePadlock = async (setPadlock) => {
    const sub = await API.graphql(graphqlOperation(onUpdateRODA, {
        input: {
            entityType: 'padlock',
            id: '5c993868-0cb7-4608-a75f-02e12673d348'
        }
    })).subscribe({
        next: ({ value }) => {
            if (value.data.onUpdateRODA.entityType === 'padlock') {
                const { id, idBiker, idCompany, idParking, logicalState, physicalState, phase } = value.data.onUpdateRODA
                setPadlock({ id, idBiker, idCompany, idParking, logicalState, physicalState, phase })
            }
        },
        error: (err) => {
            console.log(err.error)
        }
    })
    console.log('padlock suscribe')
    return sub
}

export const getPadlock = async (setPadlock) => {
    const response = await API.graphql(graphqlOperation(getRODA, {
        entityType: 'padlock',
        id: '5c993868-0cb7-4608-a75f-02e12673d348'
    }))

    const { id, idBiker, idCompany, idParking, logicalState, physicalState, phase } = response?.data?.getRODA
    setPadlock({ id, idBiker, idCompany, idParking, logicalState, physicalState, phase })
}

export const unsubPadlock = async (subPadlock) => {
    await subPadlock.unsubscribe()
    console.log('unsubscribe padlock')
}
