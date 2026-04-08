import { PageHeader, PageShell, PageSubtitle, PageTitle } from "../components/styles/PageShell";

export function Dashboard() {
    return (
        <PageShell>
            <PageHeader>
                <PageTitle>Painel de Pedidos</PageTitle>
                <PageSubtitle>Visão geral de logistica e indicadores operacionais</PageSubtitle>
            </PageHeader>
        </PageShell>
    )
}