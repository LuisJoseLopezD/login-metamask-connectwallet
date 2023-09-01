import { useEffect } from 'react';
import { useAccount, useContract } from 'wagmi';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function Dashboard() {

    const account = useAccount();
    const router = useRouter();

    // Server-render loading state
    if (!account || account.address === undefined) {
        return <p>you are not loggin!!!</p>
    }

    return (
        <>
            <h1>Your Profile</h1>
            <pre>i am loggin</pre>
        </>
    )
}