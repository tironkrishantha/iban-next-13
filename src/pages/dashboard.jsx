'use client'
import Layout from '@/pages/Layout'
import Button from '@/components/Button'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Dashboard = () => {
    const [ibnText, setIbnText] = useState('')
    const [error, setError] = useState(false)

    const inputChange = (e) => {
        setError(false)
        setIbnText(e.target.value)
    }

    const ibnHandler = async () => {
        const csrf = () => axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`)
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/iban-number-checker`

        if(ibnText !== '') {
            
            await csrf()
            axios
                .post(url, ibnText)
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(error => {
                    if (error.response.status !== 422) throw error
    
                    // setErrors(error.response.data.errors)
                })
        } else {
            setError(true)
        }

    }

    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex flex-col">

                            <div className='wrap-input flex w-[90%]'>
                                <input type="text" onChange={(e) => inputChange(e)} name='iban_number' value={ibnText} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your IBAN Numnber" required />

                                <Button onClick={ibnHandler} className={'w-10%'}>check</Button>
                            </div>

                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                {error ? 'Enter IBAN Number ' : ''}
                            </span>

                            <Link href={'/adminDashboard'}>admin</Link>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard