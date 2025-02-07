import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styles } from './styles';

export const CustomTable = ({ columns, data, renderCell, currentUserId }) => {
  return (
    <TableContainer sx={styles.container}>
      <Table>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            {columns.map((column) => (
              <TableCell key={column.id} width={column.width}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={styles.bodyRow}
            >
              {columns.map((column) => (
                <TableCell key={`${row.id}-${column.id}`}>
                  {renderCell ? renderCell(row, column, row.id === currentUserId) : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 