import { useTable, usePagination } from 'react-table'
import Button from './Button'

const Table = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Set initial page index
        },
        usePagination,
    )

    return (
        <>
            <div class="relative overflow-x-auto">
                <table
                    {...getTableProps()}
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        scope="col"
                                        class="px-6 py-3">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <Button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className='p-2'
                    >
                    Previous
                </Button>
                <span>
                    Page{' '}
                    <strong>
                        {state.pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </Button>
            </div>

        </>
    )
}

export default Table
