import { RoutesMap } from "@core/routes";
import { Route, Routes } from "react-router-dom";
import { makeStylingPage } from "@main/factories";
import { Dashboard } from "@presentation/layouts";


const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesMap.styling.main} element={<Dashboard />}>
        <Route path="" element={makeStylingPage()} />
      </Route>
    </Routes>
  )
};

export default Router;
