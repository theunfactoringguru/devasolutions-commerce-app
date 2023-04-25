import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table' 
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function createData(
  orderType: string,
  applicationType: string,
  fechaReunion: Date,
  fechaEntrega: Date,
  state: string,
  price: string
) {
  return {orderType, applicationType, fechaReunion, fechaEntrega, state, price};
}

const data = [
  createData(
    'Desarrollo',
    'Sistema de Administracion',
    new Date('2023-01-17'),
    new Date('2023-01-17'),
    'Desarrollo',
    'www.example.com'
  ),
  createData(
    'Desarrollo',
    'Sistema de Administracion',
    new Date('2023-01-17'),
    new Date('2023-01-17'),
    'Desarrollo',
    'www.example.com'
  ),
  createData(
    'Desarrollo',
    'Sistema de Administracion',
    new Date('2023-01-17'),
    new Date('2023-01-17'),
    'Desarrollo',
    'www.example.com'
  ),
  createData(
    'Desarrollo',
    'Sistema de Administracion',
    new Date('2023-01-17'),
    new Date('2023-01-17'),
    'Desarrollo',
    'www.example.com'
  ),
  createData(
    'Desarrollo',
    'Sistema de Administracion',
    new Date('2023-01-17'),
    new Date('2023-01-17'),
    'Desarrollo',
    'www.example.com'
  ),
]

export default function OrderView(){
  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipo de Orden</TableCell>
            <TableCell>Tipo de Aplicación</TableCell>
            <TableCell>Fecha de Reunión</TableCell>
            <TableCell>Fecha de Entrega</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Cotización</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value, index) => (
            <TableRow key={index}>
              <TableCell>{value.orderType}</TableCell>
              <TableCell>{value.applicationType}</TableCell>
              <TableCell>{`${value.fechaEntrega.getDate()+1}-${value.fechaEntrega.getMonth()+1}-${value.fechaEntrega.getFullYear()}`}</TableCell>
              <TableCell>{`${value.fechaReunion.getDate()+1}-${value.fechaReunion.getMonth()+1}-${value.fechaReunion.getFullYear()}`}</TableCell>
              <TableCell>{value.state}</TableCell>
              <TableCell>{value.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell><Link to="/nueva-orden"><Button variant="contained">+ Nueva Orden</Button></Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}