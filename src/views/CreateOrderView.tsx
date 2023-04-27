import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from '@mui/material/Radio';
import React, { useState } from "react";
import { Button } from "@mui/material";
import OrderModel from "../models/OrderModel";

export default function CreateOrderView(){
  let data;
  const [orderType, setOrderType] = useState('desarrollo');
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [appName, setAppName] = useState('');

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(1900);

  const handleOrderType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderType((event.target as HTMLInputElement).value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMeetingDate(new Date(day, month, year))
    data = {orderType: orderType, meetingDate: meetingDate, description: description, appName: appName};
    
    alert(data.appName);

    const order = new OrderModel('ORD001', orderType, new Date(), description);
    order.create();
  }
  console.log(data);
  return(
    <Box
        sx= {
        {
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
        component='div'
        >
      <Box sx={{
        width: 400,
        padding: 5,
        backgroundColor: 'rgba(113, 174, 30, 0.8)',
        borderRadius: '9px',
        margin: 10
      }}
      component='form'
      onSubmit={onSubmit}
      >
        <h2>Nueva Orden</h2>
        <FormControl>
          <FormLabel>Tipo de Orden</FormLabel>
          <RadioGroup color='info' row defaultValue={orderType} onChange={handleOrderType} name="tipo-de-orden">
            <FormControlLabel value='desarrollo' control={<Radio />}  label="Desarrollo"/>
            <FormControlLabel value='mantenimiento' control={<Radio />}  label="Mantenimiento"/>
          </RadioGroup>
        </FormControl>
        <TextField value={appName} onChange={(e) => setAppName(e.target.value)}sx={{backgroundColor: 'white'}} margin='normal' fullWidth variant='outlined' label='Tipo o Nombre de la Aplicación' />
        <TextField value={description} onChange={(e) => setDescription(e.target.value)}sx={{backgroundColor: 'white'}} margin="normal" multiline fullWidth label='Descripción breve del proyecto' rows={8}/>
        <FormLabel>Fecha para Agendar Reunión</FormLabel>
        <Box sx={{marginTop: '10px', display: "flex", justifyContent: 'space-between', '& .MuiTextField-root': {width: '10ch'}}}>
          <TextField value={day} onChange={(e) => setDay(Number(e.target.value))} sx={{backgroundColor: 'white'}} type="number" name="date" label="Día" />
          <TextField value={month} onChange={(e) => setMonth(Number(e.target.value))} sx={{backgroundColor: 'white'}} type="number" name="month" label="Mes" />
          <TextField value={year} onChange={(e) => setYear(Number(e.target.value))} sx={{backgroundColor: 'white'}} type="number" name="year" label="Año" />
        </Box>
        <Button sx={{marginTop: '10px'}} color="warning" variant="contained" type="submit">Enviar</Button>
      </Box>
    </Box>
  )
}