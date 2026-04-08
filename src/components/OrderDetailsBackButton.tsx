import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export function OrderDetailsBackButton() {
    const navigate = useNavigate()

    return (
        <Btn type="button" onClick={() => navigate('/')}>
        <Icon aria-hidden />
        Voltar
        </Btn>
    )
}

const Btn = styled.button`
    border: 1px solid #243044;
    background: #111827;
    color: #f3f4f6;
    padding: 10px 14px;
    border-radius: 8px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: default;
`

const Icon = styled.span`
    width: 10px;
    height: 10px;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    margin-left: 2px;
`
