import { ToastContainer } from "react-toastify";

import HomePage from "@/components/templates/HomePage";
import Layout from "@/components/templates/layout/index.tsx";
import TanstackProvider from "@/core/configs/TanstackProvider.tsx";

function App() {
  return (
    <TanstackProvider>
      <Layout>
        <HomePage />
      </Layout>
      <ToastContainer position="top-center" autoClose={3000} />
    </TanstackProvider>
  );
}

export default App;
