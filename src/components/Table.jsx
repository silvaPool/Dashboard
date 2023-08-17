import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AlbumIcon from '@mui/icons-material/Album';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Person2Icon from '@mui/icons-material/Person2';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'albuns', label: 'Albúns', minWidth: 100 },
    // { id: 'whatsapp', label: 'Whatsapp', minWidth: 100 },
    { id: 'perfil', label: 'Perfil', minWidth: 100 },
];



export default function StickyHeadTable({ students }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { profile } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(students);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    function gotoPerfil(student) {
        console.log(student);
        navigate('/admin/user-profile', {state: student});
    }

    return (
        <Paper sx={{ width: '90%', overflow: 'hidden', backgroundColor: '#243B55 ' }}>
            <TableContainer sx={{ maxHeight: "70vh" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{backgroundColor: '#141E30', color: 'white'}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell component="th" scope='row'>
                                            {row.nome}
                                        </TableCell>
                                        <TableCell component="th" scope='row'>
                                        <IconButton sx={{color: 'black'}} >
                                          <SmartphoneIcon />
                                          </IconButton>
                                        </TableCell>
                                        <TableCell component="th" scope='row'>
                                          <IconButton  sx={{color: 'black'}} onClick={() => navigate('/admin/workout', {state: row.id})}>
                                          <AlbumIcon/>
                                          </IconButton>
                                        </TableCell>
                                        {/* <TableCell component="th" scope='row' >
                                        {profile?.telefone}
                                        </TableCell> */}
                                        <TableCell component="th" scope='row'>
                                         <IconButton onClick={() => gotoPerfil(row)}>
                                           <Person2Icon />
                                         </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}