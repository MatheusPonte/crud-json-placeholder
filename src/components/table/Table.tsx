import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import styles from './style';

interface TMuITable {
    columns: string[];
    data: any[];
}

const MuITable = ({ columns, data }: TMuITable): JSX.Element => {
    const {paper} = styles;
    return (
        <TableContainer component={Paper} style={paper}>
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        {
                            columns && columns.map((column) => (
                                <TableCell
                                    align="center"
                                    variant="head"
                                >
                                    {column}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data && data.map((row) =>(
                            <TableRow key={row.id}>
                                <TableCell  align="center" variant="head">{row.userId} </TableCell>
                                <TableCell  align="center" variant="head">{row.title} </TableCell>
                                <TableCell  align="center" variant="head">{row.body} </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuITable;
