import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <>
      <Box className='d-flex d-flex justify-content-center' sx={{ marginY: 3 }}>
        <Box className='p-3'>
          <img src="src\assets\logo\plane.svg" width="50" alt="logo da empresa" className='img-fluid align-start' />
        </Box>
        <Box className='d-flex align-items-center'>
          <h1 >MY FLY</h1>
        </Box>
      </Box>

      <Box className='row' sx={{ minWidth: 'md' }}>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '10%' }} className='col-4 container text-center'>
          <Card sx={{ maxWidth: 400, bgcolor: '#FDF5E6', padding: 5 }} >
            <h3 className='mt-3'>Ainda Não Tem Conta?</h3>
            <Box sx={{ marginTop: '108%' }}>
              <Button variant="contained" sx={{
                width: '100%', marginBottom: 2, bgcolor: 'warning.main', ':hover': { bgcolor: '#FFA500', cursor: 'pointer' },
              }} >CADASTRA-SE</Button>
            </Box>
          </Card>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginRight: '10%' }} className='col-4 container text-center'>
          <Card sx={{ maxWidth: 400, bgcolor: '#FDF5E6', padding: 5 }}>
            <h3 className='mt-3'>Login</h3>
            <p className='text-start mt-3'>
              Ganhe tempo ao fazer login e gerenciar suas viagens. Aqui, você também pode
              contratar serviços exclusivos para tornar sua viagem ainda melhor!
            </p>

            <Box sx={{ marginTop: '25%' }}>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control border border-warning" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Senha</label>
                  <input type="email" className="form-control border border-warning" id="exampleFormControlInput1" placeholder="*******" />
                </div>
              </form>
            </Box>
          </Card>
        </Box>




      </Box>

    </>
  );
};

export default Login;