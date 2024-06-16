import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './styles.css'
import { HiClipboardCopy, HiOutlinePencilAlt, HiExternalLink } from "react-icons/hi";


const handleReportClick = (id) => {
  alert(`Relatório unico para o Estoque do produto de ID: ${id}`);
};

const handleEditClick = (id) => {
  alert(`Adicionar manualmente entrada para o Estoque do produto de ID: ${id}`);
};

const handleDeleteClick = (id) => {
  alert(`Adicionar manualmente saida para o Estoque do produto de ID: ${id}`);
};


const columns = [
  { field: 'id', headerName: 'ID', width: 90, resizable: false, },
  {
    field: 'Produto',
    headerName: 'Produto',
    width: 150,
    resizable: false,
    editable: true,
  },
  {
    field: 'Entradas',
    headerName: 'Entradas',
    width: 150,
    resizable: false,
    editable: true,
  },
  {
    field: 'Saidas',
    headerName: 'Saidas',
    width: 150,
    resizable: false,
    editable: true,
  },
  {
    field: 'QTDEstoque',
    headerName: 'Estoque atual',
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
        <HiClipboardCopy
          title="Relatórios"
          onClick={() => handleReportClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
        <HiOutlinePencilAlt
          title="Adicionar Entrada"
          onClick={() => handleEditClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
        <HiExternalLink
          title="Adicionar Saida"
          onClick={() => handleDeleteClick(params.id)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    ),
  },
];

const rows = [
  { id: 1, Produto: 'Sabão', Entradas: 300, Saidas: 150, QTDEstoque: 150 },
  { id: 2, Produto: 'Sabão em pó', Entradas: 300, Saidas: 200, QTDEstoque: 100 },
  { id: 3, Produto: 'Detergente', Entradas: 300, Saidas: 50, QTDEstoque: 250 },
  { id: 4, Produto: 'Shanpoo', Entradas: 160, Saidas: 150, QTDEstoque: 10 },
  { id: 5, Produto: 'Condicionador', Entradas: 50, Saidas: 35, QTDEstoque: 15 },
  { id: 6, Produto: 'Pinho Sol', Entradas: 60, Saidas: 40, QTDEstoque: 20 },
  { id: 7, Produto: 'Água Sanitária', Entradas: 200, Saidas: 150, QTDEstoque: 50 },
  { id: 8, Produto: 'Esponja', Entradas: 300, Saidas: 150, QTDEstoque: 150 },
  { id: 9, Produto: 'Amaciante', Entradas: 300, Saidas: 240, QTDEstoque: 60 },
  { id: 10, Produto: 'Sabão', Entradas: 300, Saidas: 150, QTDEstoque: 150 },
  { id: 11, Produto: 'Sabão em pó', Entradas: 300, Saidas: 200, QTDEstoque: 100 },
  { id: 12, Produto: 'Detergente', Entradas: 300, Saidas: 50, QTDEstoque: 250 },
  { id: 13, Produto: 'Shanpoo', Entradas: 160, Saidas: 150, QTDEstoque: 10 },
  { id: 14, Produto: 'Condicionador', Entradas: 50, Saidas: 35, QTDEstoque: 15 },
  { id: 15, Produto: 'Pinho Sol', Entradas: 60, Saidas: 40, QTDEstoque: 20 },
  { id: 16, Produto: 'Água Sanitária', Entradas: 200, Saidas: 150, QTDEstoque: 50 },
  { id: 17, Produto: 'Esponja', Entradas: 300, Saidas: 150, QTDEstoque: 150 },
  { id: 18, Produto: 'Amaciante', Entradas: 300, Saidas: 240, QTDEstoque: 60 },

];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#0D7377'),
  backgroundColor: '#0D7377',
  '&:hover': {
    backgroundColor: '#0D7377',
  },
}));

export default function Estoque() {
  return (
    <div className='Estoque'>
      <span className='GridBox'>
        <Box sx={{ height: 'auto', width: '90%' }}>
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
            pageSizeOptions={[5, 10, 25, 50]} />
        </Box>
      </span>
    </div>
  );
}