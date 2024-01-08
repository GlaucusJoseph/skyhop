import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const HomeScreen = React.lazy(() => import("./Views/HomeScreen"));
/* const ResultsScreen = React.lazy(() => import("./Views/ResultsScreen"));
const URLUnknown = React.lazy(() => import("./Views/URLUnknown")); */

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/*           <Route path="/afiliados" element={<ResultsScreen />} />
          <Route path="*" element={<URLUnknown />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
