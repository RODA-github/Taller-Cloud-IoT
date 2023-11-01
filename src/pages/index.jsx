// React JS
import { useEffect, useState } from 'react'

// AppSync
import { getPadlock, subscribePadlock } from '@/frontend/services/app-sync-client'

// IoTCore
import { closePadlock, linkPadlock, lockPadlock, openPadlock, unlinkPadlock, unlockPadlock } from '@/frontend/services/iot-client'

const Home = () => {
    const [padlock, setPadlock] = useState({})
    const [payment, setPayment] = useState('')
    const idBiker = '91174e05-3e48-4c7b-ba50-d72521ac238c'

    useEffect(() => {
        startAppSync()
    }, [])

    const startAppSync = async () => {
        await getPadlock(setPadlock)
        await subscribePadlock(setPadlock)
    }

    const setPaymentApprove = () => {
        setPayment('approve')
    }

    const setPaymentPending = () => {
        setPayment('pending')
    }

    const resetPayment = () => {
        setPayment('')
    }

    return (
        <div>
            <h1>Hello world</h1>
            <h2>Padlock Data</h2>
            {
                padlock.id && <ul>
                    <li>id: {padlock.id}</li>
                    <li>idParking: {padlock.idParking}</li>
                    <li>idCompany: {padlock.idCompany}</li>
                    <li>idBiker: {padlock.idBiker}</li>
                    <li>logicalState: {padlock.logicalState}</li>
                    <li>pyshicalState: {padlock.physicalState}</li>
                    <li>phase: {padlock.phase}</li>
                </ul>
            }

            {
                idBiker === padlock.idBiker
                    ? <>
                        {
                            padlock.phase === 1 && <>
                                <button onClick={openPadlock}>Abrir</button>
                            </>
                        }
                        {
                            padlock.phase === 2 && <>
                                <button onClick={closePadlock}>Cerrar</button>
                            </>
                        }
                        {
                            padlock.phase === 3 && <>
                                <button onClick={openPadlock}>Abrir</button>
                                <button onClick={lockPadlock}>Bloquear</button>
                            </>
                        }
                        {
                            padlock.phase === 4 && <>
                                {
                                    payment === 'pending'
                                        ? <button onClick={setPaymentApprove}>Pagar</button>
                                        : <>
                                            <button onClick={unlockPadlock}>Desbloquear</button>
                                            <button onClick={() => unlinkPadlock(resetPayment)}>Desvincular</button>
                                        </>
                                }
                            </>
                        }
                        {
                            padlock.phase === 5 && <>
                                <button onClick={openPadlock}>Abrir</button>
                            </>
                        }
                    </>
                    : padlock.idBiker === '-'
                        ? <button onClick={() => linkPadlock(setPaymentPending)}>Vincular Padlock</button>
                        : <p>El Padlock ya está ocupado</p>

            }
        </div>
    )
}

export default Home
