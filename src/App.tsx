import Layout from "./layouts/Layout";
import ListProducts from "./components/ListProducts";
import AllModals from "./modals/AllModals";


function App() {
  return (
    <Layout>
      <ListProducts />

      <AllModals />
    </Layout>
  )
}

export default App
