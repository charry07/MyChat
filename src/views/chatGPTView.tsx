import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { chatGPT } from '../ApiKeyOpenIA';
import { Loader } from '../components/Loader';

export const chatGPTView = () => {
  const [loading, setLoading] = useState(false);
  const [askToGPT, setAskToGPT] = useState('');
  const [msgFromGPT, setMsgFromGPT] = useState([] as any);

  const handleSendChatGPT = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    setAskToGPT('');
    setMsgFromGPT([...msgFromGPT, await chatGPT(msgFromGPT)]);
    setLoading(false);
  };

  return (
    <>
      {loading && Loader()}
      {msgFromGPT && (
        <Grid container sx={{ maxHeight: 300, overflow: 'auto', border: 'solid 0.5px ', borderRadius: 1, mt: 2, p: 2 }}>
          {msgFromGPT.map((msg: any, i: number) => (
            <Grid container key={i}>
              <Typography sx={{ color: '#1976d2' }}>
                <b>{msg.role}:</b>
              </Typography>
              <Typography>{msg.content}</Typography>
            </Grid>
          ))}
        </Grid>
      )}

      <Grid>
        <form onSubmit={handleSendChatGPT}>
          <TextField
            fullWidth
            required
            sx={{ mt: 1.2 }}
            name='chat'
            label='Preguntame algo!'
            placeholder='Preguntame algo!'
            onChange={({ target }: any) => setAskToGPT(target.value)}
            onKeyDown={({ key }: any) => key === 'Enter' && setMsgFromGPT([...msgFromGPT, { role: 'user', content: askToGPT }])}
            value={askToGPT}
          />
          <Button variant='outlined' sx={{ mt: 1 }} onClick={() => setMsgFromGPT([])}>
            Limpiar
          </Button>
          <Button variant='outlined' type='submit' sx={{ mt: 1, ml: 2 }}>
            Enviar
          </Button>
        </form>
      </Grid>
    </>
  );
};
