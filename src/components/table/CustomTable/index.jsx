import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styles } from './styles';

export const CustomTable = ({ columns, data, renderCell, renderHeaderCell, isCenteredCells = false}) => {
  return (
    <TableContainer sx={styles.container}>
      <Table>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            {columns.map((column) => (
              <TableCell key={`table-header-${column.id}`} width={column.width} align={isCenteredCells ? 'center' : 'left'}>
                {renderHeaderCell ? renderHeaderCell(column) : column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{...styles.bodyRow, backgroundColor: ~row.id ? 'transparent' : '#F9FAFB'}}
            >
              {columns.map((column) => (
                <TableCell key={`${row.id}-${column.id}`} align={isCenteredCells ? 'center' : 'left'}>
                  {renderCell ? renderCell(row, column) : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 