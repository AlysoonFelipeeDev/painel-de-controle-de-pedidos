import styled from "styled-components"
import type { Order } from "../types/order"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

interface OrderTableProps {
    orders: Order[]
}
export function OrdersTable({orders}: OrderTableProps){
    const navigate = useNavigate()

    return (
        <Panel aria-label="Lista de pedidos">
            <HeadRow>
                <Title>Pedidos recentes</Title>
            </HeadRow>
            <TableWrap>
                <Table>
                <thead>
                    <tr>
                    <Th>Pedido</Th>
                    <Th>Cliente</Th>
                    <Th>Status</Th>
                    <Th>Atualizado em</Th>
                    <Th>Total</Th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {
                    const lastUpdate = order.statusHistory.at(-1)
                    return (
                        <tr key={order.id} onClick={() => navigate(`/pedido/${order.id}`)}>
                            <Td>
                            <Code>{order.trackingCode}</Code>
                            </Td>
                            <Td>{order.customer}</Td>
                            <Td>
                            <Status>
                                <Dot aria-hidden />
                                {lastUpdate.status}
                            </Status>
                            </Td>
                            <Td>{format(new Date(lastUpdate.timestamp), "dd/MM/yyyy 'às' HH/mm")}</Td>
                            <Td>R$ {order.value}</Td>
                        </tr>
                    )
                    })}
                </tbody>
                </Table>
            </TableWrap>
        </Panel>
    )
}

const Panel = styled.section`
    background: #111827;
    border: 1px solid #243044;
    border-radius: 12px;
    overflow: hidden;
`

const HeadRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    border-bottom: 1px solid #243044;
    gap: 12px;
    flex-wrap: wrap;
`

const Title = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
`

const TableWrap = styled.div`
    overflow-x: auto;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 720px;
`

const Th = styled.th`
    text-align: left;
    padding: 12px 18px;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
    background: #0b1220;
    border-bottom: 1px solid #243044;
`

const Td = styled.td`
    padding: 14px 18px;
    border-bottom: 1px solid #243044;
    font-size: 0.92rem;
`

const Code = styled.span`
    font-weight: 700;
    letter-spacing: -0.01em;
`

const Status = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    border: 1px solid #243044;
    background: #0b1220;
    color: #f3f4f6;
`

const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.85;
`