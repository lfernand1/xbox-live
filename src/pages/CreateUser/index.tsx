import * as zod from 'zod'

import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import {
    Container,
    FormContainer,
    ButtonLogin,
    NoCount,
    ButtonCreate,
    InputCheck

} from './styles'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Hooks/UseAuth/useAuth'

const createUserValidationSchema = zod.object({
    email: zod.string(), 
    password: zod.string(), 
    cpf: zod.string(), 
    name: zod.string(), 
    isAdmin: zod.boolean()
})


export type RegisterData = zod.infer<typeof createUserValidationSchema>



export function CreateUse(){
    const {registerUser} = useAuth()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
      } = useForm<RegisterData>({
        resolver: zodResolver(createUserValidationSchema),
      });


      async function handleCreateUser(data: RegisterData) {
        const {email, cpf, isAdmin, name, password} = data

        try {

            const response = await registerUser({email, cpf, isAdmin, name, password})
            
            alert('success')
            reset()
            navigate('/')
            return response
            
        } catch (error) {
            alert("user registration error")
        }
        

    }

    function gotoPageLogin(){
        navigate('/')
    }


    return(
        <Container>
            <FormContainer onSubmit={handleSubmit(handleCreateUser)}>
                <input
                    placeholder='Type your name'
                    required
                    {...register('name')}
                />

                <input
                    placeholder='Type your email'
                    required
                    {...register('email')}
                />

                <input
                    placeholder='Password'
                    required
                    {...register('password')}
                />

                <input
                    placeholder='CPF'
                    required
                    {...register('cpf')}
                      
                />

                <InputCheck>
                    <input 
                        {...register('isAdmin')}
                        type='checkbox'
                    />
                    <label>Register as administrator?</label>
                </InputCheck>
                

                <ButtonCreate type='submit' >
                    Register
                </ButtonCreate>error
            </FormContainer>

            <NoCount>
            do you already have an account?
                    
                <ButtonLogin onClick={gotoPageLogin}>
                    login
                </ButtonLogin>
            </NoCount>
        </Container>

    )
}