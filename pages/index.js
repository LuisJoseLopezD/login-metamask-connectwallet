import { useEffect } from 'react'
import { useWeb3Modal } from '@web3modal/react'
import { useRouter } from 'next/router'
import { useAccount, useConnect } from 'wagmi'

export default function Home() {

    const router = useRouter();
    const { open, close } = useWeb3Modal()

    const account = useAccount({
        onConnect({ address, connector, isReconnected }) {
            console.log('Connected', { address, connector, isReconnected })
            router.push("/dashboard");
        },
    })

    async function loginWithMetamask() {
        try {
            await open();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <button onClick={() => loginWithMetamask()} className="border bg-blue-500">Connect wallet</button>
        </>
    )
}
