import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./views/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlantDetails } from "./views/PlantDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":pid" element={<PlantDetails />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
