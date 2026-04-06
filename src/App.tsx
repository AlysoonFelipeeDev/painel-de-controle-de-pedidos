import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Order } from './pages/Order'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/pedido/:id' element={<Order/>} />
      </Routes>
    </BrowserRouter>
  ) 
}
export default App
