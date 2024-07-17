import { useRoutes } from "react-router-dom"

/**
 * 
 * @returns 
 */
const Router = () => {
    const routing = useRoutes([
        {
            path: "", element: <h1>menu</h1>,
            children: [
                {
                    path: "/", element: <h1>body</h1>
                },
            ]
        },
        {
            path: "*", element: <h1>error404</h1>
        }
    ])

    return routing
}

export default Router