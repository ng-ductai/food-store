import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../configs/routes";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 100px;
  height: 50vh;
`;

const Routes = () => {
  return (
    <Suspense fallback={<Loading>Loading ...</Loading>}>
      <Switch>
        {routes.map(({ exact, path, component }, index) => (
          <Route
            key={`route-${index}`}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
