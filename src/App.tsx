import { Sidebar } from "./components/Sidebar";
import { MyTrips } from "./pages/mytrips";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<MyTrips />} />
        <Route path="/trips" element={<MyTrips />} />
        <Route path="*" element={<Header title="404 Page not found." />} />
      </Routes>
    </BrowserRouter>
  );
}
