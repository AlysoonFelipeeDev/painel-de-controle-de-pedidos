import { OrdersTable } from "../components/OrdersTable";
import { PageHeader, PageShell, PageSubtitle, PageTitle } from "../components/styles/PageShell";
import { useOrder } from "../hooks/useOrders";

export function Dashboard() {
    const {orders, isLoading, isError} = useOrder()
    if(isLoading) return <div>Carregando...</div>
    if(isError) return <div>Erro ao buscar dados</div>

    return (
        <PageShell>
            <PageHeader>
                <PageTitle>Painel de Pedidos</PageTitle>
                <PageSubtitle>Visão geral de logistica e indicadores operacionais</PageSubtitle>
            </PageHeader>
            <OrdersTable orders={orders}/>
        </PageShell>
    )
}