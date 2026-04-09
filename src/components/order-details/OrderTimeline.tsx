import styled from "styled-components"
import type { Order } from "../types/order"
import { format } from "date-fns"

interface OrderTimelineProps {
    order: Order
}

export function OrderTimeline({order} : OrderTimelineProps) {

    return (
            <Wrap aria-label="Linha do tempo do pedido">
                <Title>Progresso do pedido</Title>
                <div>
                    <Track>
                    {order.statusHistory.map((sta, index) => (
                        <Step key={index}>
                            <StepTitle>
                                {
                                    sta.status === 'pendente' ? 'Pedido Recebido' : 
                                    sta.status === 'processando' ? 'Separação no CD' :
                                    sta.status === 'em_rota' ? 'Despachado' :
                                    sta.status === 'entregue' ? 'Entregue ao cliente' : 'Cancelado'
                                }</StepTitle>
                            <StepMeta>{format(new Date(sta.timestamp), "dd/MM/yyyy 'às' HH:mm" )}</StepMeta>
                        </Step>
                    ))}
                    </Track>
                </div>
            </Wrap>
    )
}

const Wrap = styled.section`
    background: #111827;
    border: 1px solid #243044;
    border-radius: 12px;
    padding: 22px 20px 26px;
`

const Title = styled.h2`
    margin: 0 0 18px;
    font-size: 1rem;
    font-weight: 700;
`

const Track = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Step = styled.li`
    position: relative;
    padding: 14px 14px 14px 16px;
    border-radius: 8px;
    border: 1px solid #243044;
    background: #0b1220;
    min-height: 92px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const StepTitle = styled.span`
    font-weight: 700;
    font-size: 0.92rem;
`

const StepMeta = styled.span`
    font-size: 0.82rem;
    color: #9ca3af;
`
