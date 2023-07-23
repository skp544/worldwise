import { Navigate, Route, Routes } from "react-router-dom";
import {
  AppLayout,
  Homepage,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from "./pages";
import { City, CityList, CountriesList, Form } from "./components";
import { CitiesProvider } from "./contexts/CitiesContext";

const App = () => {
  return (
    <div>
      <CitiesProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CitiesProvider>
    </div>
  );
};

export default App;
