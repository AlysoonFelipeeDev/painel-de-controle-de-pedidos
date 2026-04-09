import type { Order } from '../../types/order'

export const mockOrders: Order[] = [
    {
        id: '1',
        trackingCode: 'TST-1001',
        customer: 'João Silva',
        status: 'pendente',
        value: 150.00,
        createdAt: new Date().toISOString(), // hoje
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date().toISOString() }
        ]
    },
    {
        id: '2',
        trackingCode: 'TST-1002',
        customer: 'Maria Santos',
        status: 'processando',
        value: 280.50,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 dias atrás
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'processando', timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() }
        ]
    },
    {
        id: '3',
        trackingCode: 'TST-1003',
        customer: 'Pedro Costa',
        status: 'em_rota',
        value: 420.00,
        createdAt: new Date().toISOString(), // hoje
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() },
        { status: 'processando', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString() },
        { status: 'em_rota', timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString() }
        ]
    },
    {
        id: '4',
        trackingCode: 'TST-1004',
        customer: 'Ana Oliveira',
        status: 'em_rota',
        value: 95.75,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 dias atrás
        estimatedDelivery: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'processando', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'em_rota', timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() }
        ]
    },
    {
        id: '5',
        trackingCode: 'TST-1005',
        customer: 'Carlos Mendes',
        status: 'em_rota',
        value: 310.90,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 dia atrás
        estimatedDelivery: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'processando', timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString() },
        { status: 'em_rota', timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString() }
        ]
    },
    {
        id: '6',
        trackingCode: 'TST-1006',
        customer: 'Beatriz Lima',
        status: 'entregue',
        value: 540.00,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 dias atrás
        estimatedDelivery: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        deliveredAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'processando', timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'em_rota', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'entregue', timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() }
        ]
    },
    {
        id: '7',
        trackingCode: 'TST-1007',
        customer: 'Roberto Alves',
        status: 'cancelado',
        value: 75.50,
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 dias atrás
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        statusHistory: [
        { status: 'pendente', timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() },
        { status: 'cancelado', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() }
        ]
    }
]