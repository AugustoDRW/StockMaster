import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './styles.css'
import { HiClipboardCopy, HiOutlinePencilAlt, HiTrash } from "react-icons/hi";


const handleReportClick = (id) => {
  alert(`Relatório para o Usuário com ID: ${id}`);
};

const handleEditClick = (id) => {
  alert(`Editar o Usuário com ID: ${id}`);
};

const handleDeleteClick = (id) => {
  alert(`Excluir o Usuário com ID: ${id}`);
};


const columns = [
  { field: 'id', headerName: 'ID', width: 90, resizable: false, },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 150,
    resizable: false,
    editable: true,
  },
  {
    field: 'funcao',
    headerName: 'Função',
    width: 150,
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
        <HiClipboardCopy
          title="Relatórios"
          onClick={() => handleReportClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
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
  { id: 1, nome: 'Augusto', funcao: 'TI' },
  { id: 2, nome: 'Anderson', funcao: 'TI' },
  { id: 3, nome: 'Vitor', funcao: 'Contador' },
  { id: 4, nome: 'Lucas', funcao: 'Cliente' },
  { id: 5, nome: 'Carlos', funcao: 'Gerente de Estoque' },
  { id: 6, nome: 'Fabio', funcao: 'ADM' },


];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#0D7377'),
  backgroundColor: '#0D7377',
  '&:hover': {
    backgroundColor: '#0D7377',
  },
}));

export default function Usuarios() {
  return (
    <div className='Usuarios'>
      <span className='GridBox'>
        <Box sx={{ height: 400, width: '90%' }}>
          <DataGrid
            sx={{ backgroundColor: 'white' }}
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
            pageSizeOptions={[5, 10, 25, 50]}
          />
        </Box>
      </span>
      <ColorButton variant="contained" sx={{ color: 'white', backgroundColor: '#0D7377' }}>Adicionar</ColorButton>
    </div>
  );
}