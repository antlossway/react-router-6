import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import DashboardAdmin from "./pages/DashboardAdmin"
import DashboardSales from "./pages/DashboardSales"
import DashboardLayout from "./pages/DashboardLayout"
import Unauthorized from "./pages/Unauthorized"

import SingleProduct from "./components/SingleProduct"
import RequireAuth from "./components/RequireAuth"

import { AuthProvider } from './context'


function App() {

  return (
    <BrowserRouter>
    <AuthProvider>

      <Routes>
        <Route path="/" element={<Layout /> } >
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />

          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={["admin","sales"]} />}>

            <Route path="dashboard" element={<DashboardLayout /> } >
                  <Route index element={<Dashboard />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />} >
              <Route path="/dashboard/admin" element={<DashboardAdmin /> } />
          </Route>
          <Route element={<RequireAuth allowedRoles={["sales"]} />} >
              <Route path="/dashboard/sales" element={<DashboardSales /> } />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Error/> } />
          <Route path="/unauthorized" element={<Unauthorized />  } />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
