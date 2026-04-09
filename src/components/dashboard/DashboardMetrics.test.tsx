import { screen } from "@testing-library/react"
import { renderComponent } from "../../test/helpers"
import { mockOrders } from "../../test/mocks/order"
import { DashboardMetrics } from "./DashboardMetrics"

describe('DashboardMetrics', () => {

    beforeEach(() => {
        renderComponent(<DashboardMetrics orders={mockOrders}/>)
    })

    test('Deve renderizar os 3 cards de métricas', () => {

        expect(screen.getByText("Total Pedidos")).toBeInTheDocument()
        expect(screen.getByText("Pedidos hoje")).toBeInTheDocument()
        expect(screen.getByText("Em trânsito")).toBeInTheDocument()
    })

    test('Deve calcular total de pedidos corretamente', () => {

        const card = screen.getByTestId('metric-total')
        expect(card).toHaveTextContent('7')
    })

    test('Deve calcular pedidos criados hoje corretamente', () => {

        const card = screen.getByTestId('metric-today')
        expect(card).toHaveTextContent('2')
    })

    test('Deve calcular pedidos em trânsito corretamente', () => {

        const card = screen.getByTestId('metric-transit')
        expect(card).toHaveTextContent('3')
    })
})