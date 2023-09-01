import { useWeb3Modal } from '@web3modal/react'
import { useRouter } from 'next/router'
import { useAccount, useContract } from 'wagmi';

export default function Home() {

    const router = useRouter();
    const account = useAccount();
    const { open, close } = useWeb3Modal()

    async function loginWithMetamask() {
        try {
            await open();
            // if (account.isConnected){
            //     router.push("/dashboard");
            // }
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
