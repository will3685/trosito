import { RoutesMap } from "@core/routes";
import { Route, Routes } from "react-router-dom";
import { makeStylingPage } from "@main/factories";


const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesMap.styling.main}>
        <Route path="" element={makeStylingPage()} />
      </Route>
    </Routes>
  )
};

export default Router;
