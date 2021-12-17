
import useSortBy, { sortTypeEnum } from "./useSortBy";


export default function useTable({ columns = [], data = [], options = {} }) {
    
    const {
        selectedSort,
        sortState,
        isSortToggle
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
        onClick: () => selectedSort(name)(sortTypeEnum.DESC),
        ...style
    })




    const headers = columns.map(({ name, style }) => ({ name, headCellProps: defaultHeadCellProps(name, style) }))

    const body = sortState.data;

    return {
        headers,
        body,
        selectedSort,
        isSortToggle
    }
}
