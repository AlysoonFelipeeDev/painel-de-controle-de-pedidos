import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Order } from './pages/Order'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/pedido/:id' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  ) 
}
export default App
