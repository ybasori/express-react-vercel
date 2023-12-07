import Home from "./Controllers/Home/Home";
import { IRoute } from "./Helpers/ExpandRouter";

const Routes: () => IRoute[] = () => {
  return [
    {
      path: "/",
      method: "get",
      controller: Home,
      children: [{ path: "/one", method: "get", controller: Home }],
    },
  ];
};

export default Routes;
