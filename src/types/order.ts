export interface Order {
    id: string,
    trackingCode: string,
    customer: string,
    status: 'pendente' | 'processando' | 'em_rota' | 'entregue' | 'cancelado',
    value: number,
    createdAt: string,
    estimatedDelivery: string,
    deliveredAt: string,
    statusHistory: {status: string, timesTamp: string}[],
}