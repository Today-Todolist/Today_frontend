import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  ModifyProfileConainer,
  MainContainer,
  SearchContainer,
  MyPageContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<MainContainer />} />
          <Route path="modifyprofile" element={<ModifyProfileConainer />} />
          <Route path="search" element={<SearchContainer />} />
          <Route path="mypage" element={<MyPageContainer />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
