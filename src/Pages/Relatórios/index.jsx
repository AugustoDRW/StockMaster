import './styles.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SiMapbox } from 'react-icons/si';


export default function Relatorios() {

    const [selectRelatorio, setselectRelatorio] = React.useState('');

    const handleChange = (event) => {
        setselectRelatorio(event.target.value);
    };

    const [valueRadio, setValueRadio] = React.useState('Geral');

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#0D7377'),
        backgroundColor: '#0D7377',
        '&:hover': {
            backgroundColor: '#0D7377',
        },
    }));


    return (
        <div className='Relatorios'>
            <span className='Form'>
                <h3>Gerar Relatório</h3>

                <span className='SpanSelectRadio'>
                    <Box sx={{ width: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sobre</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectRelatorio}
                                label="Sobre"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Estoque</MenuItem>
                                <MenuItem value={20}>Produtos</MenuItem>
                                <MenuItem value={30}>Usuários</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Quantidade</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Geral"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Geral" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="Geral" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} onClick={() => setValueRadio('Geral')} />
                                <FormControlLabel value="Unico" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="Unico" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} onClick={() => setValueRadio('Unico')} />
                                <FormControlLabel value="Grupos" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="Grupos" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} onClick={() => setValueRadio('Grupos')} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </span>
                <span className='SpanIDDate'>
                    <span className={valueRadio !== 'Geral' ? 'SpanInputIDs' : 'SpanDisplayNone'}>
                        <p>IDs do(s) produto(s)</p>
                        <input />
                        <p>separe os IDs usando virgula</p>
                    </span>
                    <span className='SpanDate'>
                        <span className='DateInput'>
                            <p>Insira a data de inicio</p>
                            <input type='date'></input>
                        </span>
                        <span className='DateInput'>
                            <p>Insira a data de Termino</p>
                            <input type='date'></input>
                        </span>
                    </span>
                </span>
                <span className='SpanArchive'>

                    <Box>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Salvar Como</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Geral"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Geral" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="PDF" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} />
                                <FormControlLabel value="Unico" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="CSV" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} />
                                <FormControlLabel value="Grupos" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 'clamp(10px,5vw,35px)',
                                    },
                                }} />} label="Em tela" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </span>
                <ColorButton variant="contained" sx={{ color: 'white', backgroundColor: '#0D7377' }}>Gerar</ColorButton>
            </span>
        </div>
    )
}