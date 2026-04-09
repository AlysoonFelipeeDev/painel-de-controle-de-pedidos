import styled from "styled-components"
import { PageHeader, PageShell, PageTitle } from "../components/styles/PageShell"
import { useParams } from "react-router-dom"
import { useOrderById } from "../hooks/useOrderById"
import { OrderDetailsBackButton } from "../components/order-details/OrderDetailsBackButton"
import { OrderTimeline } from "../components/order-details/OrderTimeline"
import { OrderInfoCard } from "../components/order-details/OrderInfoCard"

export function OrderDetails() {
  const { id } = useParams()
  if(!id) return <div>ID nao encontrado</div>

  const {data: order, isLoading, isError  } = useOrderById(id)

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Erro ao buscar pedido</div>
  if(!order) return <div>Pedido não encontrado</div>

    return (
      <PageShell>
        <TopBar>
          <OrderDetailsBackButton />
        </TopBar>
        <PageHeader>
          <PageTitle>Detalhes do pedido</PageTitle>
        </PageHeader>
        <Stack>
          <OrderTimeline order={order}/>
          <OrderInfoCard order={order}/>
        </Stack>
      </PageShell>
    )
  }

  const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`