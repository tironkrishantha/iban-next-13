import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Button from '@/components/Button'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className='min-h-screen flex justify-center flex-col items-center'>
                <h2 className='mb-3 text-xl font-bold uppercase text-center'>IBMA Validator</h2>
                <div className='flex'>
                    <Link href="/login">
                        <Button className="ml-3">Sign In</Button>
                    </Link>
                    <Link href="/register">
                        <Button className="ml-3">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}