import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks"
import { clearFilters, setPeriod, setSearchOrder, setStatus } from "../../store/filterSlice"
import type { OrderStatus } from "../../types/order"


type Period = '7d' | '30d' | '90d'

export function DashboardFilters() {
    const status = useAppSelector(state => state.filters.status)
    const period = useAppSelector(state => state.filters.period)
    const searchOrder = useAppSelector(state => state.filters.searchOrder)
    const dispatch = useAppDispatch()

    return (
        <Panel aria-label="Filtros do dashboard">
            <Field>
            <Label htmlFor="status">Status</Label>
            <Select 
            id="status" 
            value={status}
            onChange={(e) => dispatch(setStatus(e.target.value as OrderStatus))}
            >
            <option value="todos">Todos</option>
            <option value="pendente">Pendente</option>
            <option value="processando">Processando</option>
            <option value="em_rota">Em rota</option>
            <option value="entregue">Entregue</option>
            <option value="cancelado">Cancelado</option>
            </Select>
            </Field>
            <Field>
            <Label htmlFor="period">Período</Label>
            <Select 
            id="period" 
            value={period}
            onChange={(e) => dispatch(setPeriod(e.target.value as Period))}
            >
                <option value="all">Todos</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
            </Select>
            </Field>
            <Field style={{ flex: '2 1 280px' }}>
            <Label htmlFor="search">Buscar</Label>
            <Search
                id="search"
                type="search"
                placeholder="Código, Cliente..."
                autoComplete="off"
                value={searchOrder}
                onChange={(e) => dispatch(setSearchOrder(e.target.value))}
            />
            </Field>
            <Actions>
            <GhostButton type="button" onClick={() => dispatch(clearFilters())}>Limpar</GhostButton>
            </Actions>
        </Panel>
    )
}

const Panel = styled.section`
    background: #111827;
    border: 1px solid #243044;
    border-radius: 12px;
    padding: 18px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: flex-end;
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 180px;
    flex: 1;
`

const Label = styled.label`
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #9ca3af;
`

const Select = styled.select`
    appearance: none;
    background: #0b1220;
    border: 1px solid #243044;
    border-radius: 8px;
    padding: 10px 12px;
    color: #f3f4f6;
`

const Search = styled.input`
    width: 100%;
    background: #0b1220;
    border: 1px solid #243044;
    border-radius: 8px;
    padding: 10px 12px;
    outline: none;
    color: #ffffff;
    &::placeholder {
        color: #9ca3af;
    }

    &:focus {
        border-color: #38bdf8;
    }
`

const Actions = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

const GhostButton = styled.button`
    border: 1px solid #243044;
    background: #0b1220;
    color: #f3f4f6;
    padding: 10px 14px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
`
