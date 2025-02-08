import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';

export const CustomTable = ({ columns, data, renderCell, currentUserId }) => {
  return (
    <TableContainer
      sx={{
        maxWidth: '1040px',
        overflowX: 'auto',
        '& .MuiTable-root': {
          borderCollapse: 'separate',
          borderSpacing: 0,
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          overflow: 'hidden',
        },
        '& .MuiTableCell-root': {
          borderBottom: '1px solid #E5E7EB',
          borderRight: 'none',
        },
        '& .MuiTableRow-root:last-child .MuiTableCell-root': {
          borderBottom: 'none',
        }
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              height: '48px',
              backgroundColor: '#F9FAFB',
              '& .MuiTableCell-head': {
                fontWeight: 600,
                whiteSpace: 'nowrap',
                padding: '0 16px',
                backgroundColor: '#F9FAFB',
              }
            }}
          >
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
              sx={{
                height: '63px',
                '& .MuiTableCell-body': {
                  padding: '0 16px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '12px',
                  lineHeight: '14.5px'
                }
              }}
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