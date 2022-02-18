import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./theme/layouts/ProtectedRoute";
import { pages } from "./routes/components";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loader-box">
          <div className="loader-30"></div>
        </div>
      }
    >
      <Routes>
        <Route
          exact
          path={pages.authentication.path}
          element={pages.authentication.component}
        />
        {pages.protected.map((page, index) => (
          <Route
            key={index}
            exact
            path={page.path}
            element={<ProtectedRoute>{page.component}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
