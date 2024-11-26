import { Toaster } from "react-hot-toast";

import Layout from "./layouts/Layout";
import AllModals from "./modals/AllModals";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <Layout>
      <ListProducts />

      <AllModals />
      <Toaster position="bottom-right" />
    </Layout>
  )
}

export default App
