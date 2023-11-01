const { IoTDataPlane } = require('@aws-sdk/client-iot-data-plane')

const endpoint = 'https://a33lelep6oufus-ats.iot.us-east-1.amazonaws.com'
const region = 'us-east-1'

const publisherIoT = new IoTDataPlane({
    endpoint,
    region,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    }
})

const body = {
    id: '5c993868-0cb7-4608-a75f-02e12673d348',
    idBiker: '91174e05-3e48-4c7b-ba50-d72521ac238c',
    phase: '2',
    idParking: 'bf54b7f5-e911-47d1-8884-6b72b2911a09'
}

export const publish = async (body) => {
    const topic = 'RODA/5c993868-0cb7-4608-a75f-02e12673d348'
    const bodyMessage = JSON.stringify(body)

    await publisherIoT.publish({
        topic: topic,
        payload: bodyMessage,
        qos: 0
    })
}

export const linkPadlock = (setPaymentPending) => {
    setPaymentPending()
    body.phase = '1'
    publish(body)
}

export const openPadlock = () => {
    body.phase = '2'
    publish(body)
}
export const closePadlock = () => {
    body.phase = '3'
    publish(body)
}
export const lockPadlock = () => {
    body.phase = '4'
    publish(body)
}
export const unlockPadlock = () => {
    body.phase = '5'
    body.payment = 'approved'
    publish(body)
}
export const unlinkPadlock = (resetPayment) => {
    resetPayment()
    body.phase = '6'
    body.payment = 'approved'
    publish(body)
}
