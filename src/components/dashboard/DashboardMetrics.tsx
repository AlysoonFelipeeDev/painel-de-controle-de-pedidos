import styled from "styled-components"
import type { Order } from "../../types/order"

interface DashboardProps {
    orders: Order[]
}

export function DashboardMetrics({orders} : DashboardProps) {
    const totalOrder = orders.length

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const totalOrderDay = orders.filter(orders => {
        const orderDate = new Date(orders.createdAt)
        orderDate.setHours(0, 0, 0, 0)

        return today.getTime() === orderDate.getTime()
    }).length

    const onRouteDelivery = orders.filter(order => order.status === 'em_rota').length 
    
    return (
        <Grid>
            <Card>
                <Label>Total Pedidos</Label>
                <Value>{totalOrder}</Value>
            </Card>
            <Card>
                <Label>Pedidos hoje</Label>
                <Value>{totalOrderDay}</Value>
            </Card>
            <Card>
                <Label>Em trânsito</Label>
                <Value>{onRouteDelivery}</Value>
            </Card>
        </Grid>
        )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

const Card = styled.article`
    background: #111827;
    border: 1px solid #243044;
    border-radius: 12px;
    padding: 18px 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.span`
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9ca3af;
    font-weight: 600;
`

const Value = styled.span`
    font-size: 1.55rem;
    font-weight: 700;
    letter-spacing: -0.03em;
`
