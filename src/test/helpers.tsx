import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import  orderSlice  from "../store/orderSlice";
import  filterSlice  from "../store/filterSlice";

export function renderComponent(component: React.ReactElement){
    const queryClient = new QueryClient()
    const testStore = configureStore({
        reducer: {
            orders: orderSlice,
            filters: filterSlice
        }
    })

    return render (
        <QueryClientProvider client={queryClient}>
            <Provider store={testStore}>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    )
}