import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazy-load/pages";

interface Route {
  path: string,
  to: string,
  name: string,
  Component: () => JSX.Element
}

export const routes: Route[] = [
  {
    path: "lazy1",
    to: '/lazy1',
    Component: LazyPage1,
    name: "lazy-1"
  },
  {
    path: "lazy2",
    to: '/lazy2',
    Component: LazyPage2,
    name: "lazy-2"
  },
  {
    path: "lazy3",
    to: '/lazy3',
    Component: LazyPage3,
    name: "lazy-3"
  },
]
