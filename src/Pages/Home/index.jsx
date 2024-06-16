import './styles.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Home() {

  return (<div className='Home'>
    <h3>O que podemos dizer sobre nosso software?</h3>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum adipisci quos ut maiores, laboriosam maxime numquam veritatis itaque minus id perferendis deleniti nulla nostrum architecto expedita ipsa. Illo, quos?</p>
      <img src="https://img.freepik.com/free-photo/woman-working-warehouse_23-2148923070.jpg?t=st=1717882385~exp=1717885985~hmac=ea117cbe4d621ab53e36bd6cce362b169b08c415c402eb7404847cb44450fcc1&w=1380" alt="Mulher olando o estoque" />
    </section>
    <section>
      <img src="https://img.freepik.com/free-photo/african-american-police-officer-analyzing-criminology-report-checking-crime-scene-files-laptop-computer-private-investigator-working-overtime-arhive-room-looking-investigation-evidence_482257-71600.jpg?t=st=1717882880~exp=1717886480~hmac=9abe30aecc785ab4ff52910a5260c6f40fa2d2cf4c12a0d8f69af86e218402e2&w=1380" alt="Homem analizando relatório de estoque" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum adipisci quos ut maiores, laboriosam maxime numquam veritatis itaque minus id perferendis deleniti nulla nostrum architecto expedita ipsa. Illo, quos?</p>
    </section>
    <section>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a, dicta amet ipsam minus ab corporis, dolorum nemo quisquam esse consequatur velit neque odit, consequuntur ipsa reiciendis quas ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore sint commodi ad doloremque illum. Sed harum dolor animi omnis cum, illum
        ratione saepe maiores quis corrupti officiis commodi quos?</p>
    </section>
    <section className='Coments'>
      <Card sx={{ minWidth: 100 }} variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            John Stanley
          </Typography>
          <Typography variant="h5" component="div">
            Muito aplicavel
          </Typography>
          <Typography variant="body2">
            apliquei na minha empresa de forma muito simples e eficiente, recomento
            para os logistas de pequeno e grande porte
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 100 }} variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            John Stanley
          </Typography>
          <Typography variant="h5" component="div">
            Muito aplicavel
          </Typography>
          <Typography variant="body2">
            apliquei na minha empresa de forma muito simples e eficiente, recomento
            para os logistas de pequeno e grande porte
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 100 }} variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            John Stanley
          </Typography>
          <Typography variant="h5" component="div">
            Muito aplicavel
          </Typography>
          <Typography variant="body2">
            apliquei na minha empresa de forma muito simples e eficiente, recomento
            para os logistas de pequeno e grande porte
          </Typography>
        </CardContent>
      </Card>
    </section>
  </div>)
}

