import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './styles.css'
import { HiClipboardCopy, HiOutlinePencilAlt, HiTrash } from "react-icons/hi";


const handleEditClick = (id) => {
  alert(`Editar a função de ID: ${id}`);
};

const handleDeleteClick = (id) => {
  alert(`Excluir a função de ID: ${id}`);
};


const columns = [
  { field: 'id', headerName: 'ID', width: 90, resizable: false, },
  {
    field: 'nome',
    headerName: 'Nome da função',
    width: 200,
    resizable: false,
    editable: true,
  },
  {
    field: 'Funcionalidades',
    resizable: false,
    headerName: 'Funcionalidades',
    width: 200,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: '100%', alignItems: 'center', fontSize: 20, color: '#0D7377' }}>

        <HiOutlinePencilAlt
          title="Editar"
          onClick={() => handleEditClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
        <HiTrash
          title="Excluir"
          onClick={() => handleDeleteClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    ),
  },
];

const rows = [
  { id: 1, nome: 'TI' },
  { id: 2, nome: 'Contador' },
  { id: 3, nome: 'Cliente' },
  { id: 4, nome: 'Gerente de Estoque' },
  { id: 5, nome: 'ADM' },


];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#0D7377'),
  backgroundColor: '#0D7377',
  '&:hover': {
    backgroundColor: '#0D7377',
  },
}));

export default function Funcoes() {
  return (
    <div className='Funcoes'>
      <span className='GridBox'>
        <Box sx={{ height: 'auto', width: '90%', backgroundColor: 'white' }}>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50]} />
        </Box>
      </span>
      <ColorButton variant="contained" sx={{ color: 'white', backgroundColor: '#0D7377' }}>Adicionar</ColorButton>
    </div>
  );
}