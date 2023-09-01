import dynamic from "next/dynamic";
import { useEffect } from 'react';
import { useAccount, useContract } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useDisconnect } from 'wagmi'
import { useBalance } from 'wagmi'

function Dashboard() {

    const account = useAccount();
    const router = useRouter();
    const { disconnect } = useDisconnect();
    const { data } = useBalance({
        address: account.address,
    })

    console.log("BALANCE:", data?.formatted)

    const disconnectAction = useAccount({
        onDisconnect() {
            router.push("/");
        },
    })

    function disconnectAccount() {
        try {
            disconnect();
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     if (!account || account.address === undefined) {
    //         router.push("/");
    //     }
    // }, []); 

    if (!account || account.address === undefined ) {
        return (
            <div className="flex flex-col">
                <p>you are not loggin!!</p>
                <button onClick={()=>router.push("/")} className="bg-yellow-500 w-64">go to login</button>
            </div>
        )
    } else {
        return (
            <>
                <div>
                    <p>i am loggin</p>
                    <p>address: {account.address} </p>
                    <p>Balance: {data?.formatted} {data?.symbol} </p>
                </div>
                <button onClick={() => disconnectAccount()} className="border bg-red-500">Disconnect</button>
            </>
        )
    }
}

export default dynamic(() => Promise.resolve(Dashboard), {
    ssr: false,
});