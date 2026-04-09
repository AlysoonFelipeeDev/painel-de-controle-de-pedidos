import { screen } from "@testing-library/react"
import { renderComponent } from "../../test/helpers"
import { DashboardFilters } from "./DashboardFilters"
import userEvent from '@testing-library/user-event'

describe('DashboardFilters', () => {
    beforeEach(() => {
        renderComponent(<DashboardFilters /> )
    })

    describe('Renderização', () => {
        test('Deve renderizar os 3 filtros', () => {

            expect(screen.getByText('Status')).toBeInTheDocument()
            expect(screen.getByText('Período')).toBeInTheDocument()
            expect(screen.getByText('Buscar')).toBeInTheDocument()
        })
    })

    describe('Interações', () => {
        test('Deve atualizar o Redux ao selecionar status', async () => {
            const user = userEvent.setup()

            const select = screen.getByLabelText('Status')
            await user.selectOptions(select, 'em_rota')

            expect(select).toHaveValue('em_rota')
        })

        test('Deve atualizar o Redux ao selecionar periodo', async () =>{
            const user = userEvent.setup()

            const select= screen.getByLabelText('Período')
            await user.selectOptions(select, '30d')

            expect(select).toHaveValue('30d')
        })

        test('Deve atualizar o Redux ao escrever codigo do pedido ou nome do cliente', async() =>{
            const user = userEvent.setup()

            const select = screen.getByLabelText('Buscar')
            await user.type(select, 'Ana')

            expect(select).toHaveValue('Ana')
        })

        test('Deve limpar os filtros ao clicar no botão Limpar', async () => {
            const user = userEvent.setup()
            const btnClear = screen.getByText('Limpar')

            const selectStatus = screen.getByLabelText('Status')
            await user.selectOptions(selectStatus, 'pendente')

            const selectPeriod = screen.getByLabelText('Período')
            await user.selectOptions(selectPeriod, '90d')

            const selectSearch = screen.getByLabelText('Buscar')
            await user.type(selectSearch, '1234567')

            await user.click(btnClear)

            expect(selectStatus).toHaveValue('todos')
            expect(selectPeriod).toHaveValue('all')
            expect(selectSearch).toHaveValue('')

        })
    })
})