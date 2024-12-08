import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    route("tecnologies","routes/tecnologies.tsx"),
    route("news/:id", "routes/newspage.tsx")

] satisfies RouteConfig;