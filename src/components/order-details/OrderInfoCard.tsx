import styled from "styled-components"

import { format } from "date-fns"
import type { Order } from "../../types/order"

interface OrderInfoCardProps {
    order: Order
}
export function OrderInfoCard({order}: OrderInfoCardProps){
    const lastUpdate = order.statusHistory.at(-1)
    return (
        <Card aria-label="Informações do pedido">
            <Head>
                <div>
                <Code> Código do pedido: {order.trackingCode}</Code>
                </div>
                <Badge>{lastUpdate.status}</Badge>
            </Head>
            <Grid>
                <Field>
                    <FieldLabel>Cliente</FieldLabel>
                    <FieldValue>{order.customer}</FieldValue>
                </Field>
                <Field>
                    <FieldLabel>Última atualização</FieldLabel>
                <   FieldValue>{format(new Date(lastUpdate.timestamp), "dd/MM/yyyy 'às' HH:mm")}</FieldValue>
                </Field>
                <Field>
                    <FieldLabel>Transportadora</FieldLabel>
                    <FieldValue>RápidoExpress · BR-882144</FieldValue>
                </Field>
                <Field>
                    <FieldLabel>Total</FieldLabel>
                    <FieldValue>R$ {order.value}</FieldValue>
                </Field>
            </Grid>
        </Card>
    )
}

const Card = styled.article`
    background: #111827;
    border: 1px solid #243044;
    border-radius: 12px;
    padding: 20px;
    display: grid;
    gap: 16px;
`

const Head = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`

const Code = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
`

const Badge = styled.span`
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 800;
    border: 1px solid #243044;
    background: rgba(251, 191, 36, 0.12);
    color: #fbbf24;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Field = styled.div`
    padding: 12px 12px;
    border-radius: 8px;
    background: #0b1220;
    border: 1px solid #243044;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const FieldLabel = styled.span`
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
    font-weight: 700;
`

const FieldValue = styled.span`
    font-size: 0.95rem;
    font-weight: 650;
`