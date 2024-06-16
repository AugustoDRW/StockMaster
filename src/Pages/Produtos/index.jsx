import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './styles.css'
import { HiClipboardCopy, HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const handleReportClick = (id) => {
  alert(`Relatório para o produto com ID: ${id}`);
};

const handleEditClick = (id) => {
  alert(`Editar o produto com ID: ${id}`);
};

const handleDeleteClick = (id) => {
  alert(`Excluir o produto com ID: ${id}`);
};


const columns = [
  { field: 'id', headerName: 'ID', width: 90, resizable: false, },
  {
    field: 'Produto',
    resizable: false,
    headerName: 'Produto',
    width: 150,
    editable: true,

  },
  {
    field: 'QuantidadeEmEstoque',
    resizable: false,
    headerName: 'Quantidade em estoque',
    width: 150,
    editable: true,

  },
  {
    field: 'Funcionalidades',
    headerName: 'Funcionalidades',
    width: 200,
    resizable: false,
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
  { id: 1, Produto: 'Sabão', QuantidadeEmEstoque: 150 },
  { id: 2, Produto: 'Sabão em pó', QuantidadeEmEstoque: 100 },
  { id: 3, Produto: 'Detergente', QuantidadeEmEstoque: 250 },
  { id: 4, Produto: 'Shanpoo', QuantidadeEmEstoque: 10 },
  { id: 5, Produto: 'Condicionador', QuantidadeEmEstoque: 15 },
  { id: 6, Produto: 'Pinho Sol', QuantidadeEmEstoque: 20 },
  { id: 7, Produto: 'Água Sanitária', QuantidadeEmEstoque: 50 },
  { id: 8, Produto: 'Esponja', QuantidadeEmEstoque: 150 },
  { id: 9, Produto: 'Amaciante', QuantidadeEmEstoque: 60 },
];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#0D7377'),
  backgroundColor: '#0D7377',
  '&:hover': {
    backgroundColor: '#0D7377',
  },
}));

export default function Produtos() {
  return (
    <div className='Produtos'>
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