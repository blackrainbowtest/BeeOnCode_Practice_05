import { useRoutes } from "react-router-dom"
import Error404Page from '../app/main/404/Error404Page'
import Layout from '../app/main/layout/Layout';

/**
 * 
 * @returns 
 */
const Router = () => {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    const routing = useRoutes([
        {
            path: "", element: <Layout />,
            children: [
                {
                    path: "/", element: <h1>body</h1>
                },
            ]
        },
        {
            path: "*", element: <Error404Page onGoHome={handleGoHome} />
        }
    ])

    return routing
}

export default Router