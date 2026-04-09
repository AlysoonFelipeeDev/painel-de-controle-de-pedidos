import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterSlice {
    status: 'todos'| 'pendente' | 'processando' | 'em_rota' | 'entregue' | 'cancelado',
    searchOrder: string
    period: 'all' | '7d' | '30d' | '90d'
}

const initialState: FilterSlice = {
    status: 'todos',
    searchOrder: '',
    period: 'all' 
}
export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers :{
        setStatus: (state, action: PayloadAction<'todos'| 'pendente' | 'processando' | 'em_rota' | 'entregue' | 'cancelado'>) => {
            state.status = action.payload
        },
        setSearchOrder: (state, action: PayloadAction<string>) => {
            state.searchOrder = action.payload
        },
        setPeriod: (state, action: PayloadAction<'all' | '7d' | '30d' | '90d'>) => {
            state.period = action.payload
        },
        clearFilters: () => {
            return initialState
        }
    }
})

export const {setStatus, setSearchOrder, setPeriod, clearFilters} = filterSlice.actions
export default filterSlice.reducer