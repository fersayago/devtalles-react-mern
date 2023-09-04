import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout"
import { useForm } from '../../hooks'

const formData = {
  email: 'sayago.fernando@gmail.com',
  password: '123456',
  displayName: 'Fernando Sayago'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @.'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 .'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
}

const RegisterPage = () => {

  const {
    displayName,
    email, password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations)

  console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault()

    console.log(formState);
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Nombre completo'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label='Correo'
              type='email'
              placeholder='example@email.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='password'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={ 12 }
            >
              <Button variant='contained' type='submit' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/login'
            >
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage