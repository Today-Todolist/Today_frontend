import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<MainContainer />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
