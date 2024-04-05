import './MethodTable.css'

type props = {
    headers: string[],
    methodData: any[]
}

export default function MethodTable({headers, methodData}: props) {

    return <table className="method-table">
        <thead>
            <th>i</th>
                {
                    headers.map((header, index) => <th key={`tableHeader${index}`}>{header}</th>)
                }
        </thead>
        <tbody>
            {
                methodData.map((data, index) => <tr key={`row${index}`}>
                    <td>{index+ 1}</td>
                    {
                        headers.map((header, index) => <td key={header+index}>{data[header]}</td>)
                    }
                </tr>)
            }
        </tbody>
    </table>
}