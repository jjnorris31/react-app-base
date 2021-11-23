// import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazy-load/pages";
import {lazy, LazyExoticComponent} from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string,
  to: string,
  name: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ "../01-lazy-load/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/ "../01-lazy-load/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ "../01-lazy-load/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "lazy1",
    to: '/lazy1',
    Component: Lazy1,
    name: "lazy-1"
  },
  {
    path: "lazy2",
    to: '/lazy2',
    Component: Lazy2,
    name: "lazy-2"
  },
  {
    path: "lazy3",
    to: '/lazy3',
    Component: Lazy3,
    name: "lazy-3"
  },
]
