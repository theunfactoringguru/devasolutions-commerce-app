import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table' 
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function OrderView(){
  const [orders, setOrders] = useState([] as any);

  async function fetchData(){
    return await fetch(`http://localhost:8080/order`).then(
      (response) => {
        return response.json();
      }
    ).then((data) => {
      setOrders(data)
    });
  }
  useEffect(() => {
    fetchData()
  }, [])
  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipo de Orden</TableCell>
            {/*<TableCell>Tipo de Aplicación</TableCell>*/}
            <TableCell>Fecha de Reunión</TableCell>
            <TableCell>Fecha de Entrega</TableCell>
            {/*<TableCell>Estado</TableCell>*/}
            <TableCell>Cotización</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((value: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{value.orderType}</TableCell>
              {/*<TableCell>{value.applicationType}</TableCell>*/}
              <TableCell>{`${new Date(value.deliveryDate).getDate()+1}-${new Date(value.deliveryDate).getMonth()+1}-${new Date(value.deliveryDate).getFullYear()}`}</TableCell>
              <TableCell>{`${new Date(value.meetingDate).getDate()+1}-${new Date(value.meetingDate).getMonth()+1}-${new Date(value.deliveryDate).getFullYear()}`}</TableCell>
              {/*<TableCell>{value.state}</TableCell>*/}
              <TableCell>{value.totalPrice}</TableCell>
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