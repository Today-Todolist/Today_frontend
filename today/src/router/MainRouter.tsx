import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  ModifyProfileConainer,
  MainContainer,
  MyPageContainer,
  ToDoListContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*">
          <Route path="" element={<MainContainer />} />
          <Route path="modifyprofile" element={<ModifyProfileConainer />} />
          <Route path="mypage" element={<MyPageContainer />} />
          <Route path="todolist" element={<ToDoListContainer />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
