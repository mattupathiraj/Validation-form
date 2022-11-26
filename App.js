// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Create from './COMPONENTS/Create'
// import Update from './COMPONENTS/Update'
// import Read from './COMPONENTS/Read'
// import './App.css'
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route exact path="/" element={<Create/>}/>
//     <Route exact path="/read" element={<Read/>}/>
//     <Route exact path="/edit" element={<Update/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }



import React from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
    <div className="App__form">
      <h1><center><b>DYNAMIC FORM</b></center></h1>
      <p><center>Please fill in this form to create an account</center></p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          name="firstName" 
          label="First Name" 
          placeholder="Enter your FirstName"
          variant="outlined"
          fullWidth 
          {...register("firstName", { required: "First Name is required.", pattern: {
            value: /^^[\w\s-]+$$/,
            message: 'First Name should not contain special characters',
          }
        })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <TextField 
          label="Last Name"
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "Last Name is required." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="E-mail ID"
          variant="outlined"
          fullWidth
          name="email"
          {...register("email", { required: "E-mail Address is required.", pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email id',
        } })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          name="password"
          {...register("password", { required: "Set Password to proceed", pattern: {
            value: /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.[!@#$%^&])(?=.{8,})$/,
            message: 'Your password must contain 6 characters, 1 lowercase, 1 uppercase, 1 numeric, 1 special character',
        } })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
{/* Radio button */}
        <FormControl error={Boolean(errors.gender)} >
          <FormLabel component="legend"> Choose Your Gender </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel 
              value="female" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Female"
             />
            <FormControlLabel 
              value="male" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Male" 
              />
            <FormControlLabel 
              value="other" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Other" 
            />
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div>
{/* Check box */}
        <FormGroup 
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel 
            control={
              <Checkbox  name="tnc" {...register("tnc", { required: "please aggre our terms and condtions" })} />
            } 
            label="I agree to all the terms and conditions" 
          />
        </FormGroup>
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
        <div className="clearfix"></div>
        <Button variant="contained" color="secondary" type="submit" className="btns">
            SUBMIT
          </Button>
      </form>
    </div>
  )
}


export default App







