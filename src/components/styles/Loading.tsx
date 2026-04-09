import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

export function Loading() {
    return (
        <Container>
            <RingLoader 
                color="#38bdf8"  
                size={60}   
            />
            <Text>Carregando...</Text>
        </Container>
    )
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color:#0b1220;
    gap: 16px;
`

const Text = styled.p`
    color: #FFFFFF;
    font-size: 1em;
`