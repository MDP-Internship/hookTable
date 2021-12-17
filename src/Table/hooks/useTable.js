
import useSortBy, { sortTypeEnum } from "./useSortBy";


export default function useTable({ columns = [], data = [], options = {} }) {
    
    const {
        sortState,
        isSortToggle,
        sortToggle
    } = useSortBy(data);

    // {
    //     name: 'placement',
    //     text: 'Puan Sırası',
    //     filterable: false,
    //     editable: false,
    //     align: 'left', -> textAlign
    //     sortable: true,
    //     type: 'text',
    //     customBody: (value, columnName, index, row) => (
    //       ...node
    //     ),
    // },



    const defaultHeadCellProps = (name, style) => ({
        textAlign: 'center',
        onClick: () => isSortToggle(name),
        ...style
    })




    const headers = columns.map(({ name, style }) => ({ name, headCellProps: defaultHeadCellProps(name, style) }))

    const body = sortState.data;

    return {
        headers,
        body,
        sortToggle,
        isSortToggle
    }
}
