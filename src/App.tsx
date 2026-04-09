import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { OrderDetails } from './pages/OrderDetails'
import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/pedido/:id' element={<OrderDetails/>} />
          </Routes>
        </BrowserRouter>
    </>
  ) 
}
export default App
