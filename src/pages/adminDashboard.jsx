import Head from 'next/head'
import Layout from '@/Layout'
import axios from 'axios'
import useSWR from 'swr'

import Table from '@/components/Table'

const adminDashboard = () => {
    const fetchData = () => {
        const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/iban-numbers`
        const { data: users, error, mutate } = useSWR(URL, () =>
            axios
                .get(URL)
                .then(res => res)
                .catch(error => {
                    if (error.response.status !== 409) throw error
                }),
        )
    }


    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 3, name: 'Bob Johnson', age: 35 },
      ];

      const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        // Add more columns here
      ];





    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex flex-col">
                            <Table data={data} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default adminDashboard
