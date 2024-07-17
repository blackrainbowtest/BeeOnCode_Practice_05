import { useRoutes } from "react-router-dom"
import Error404Page from '../app/main/404/Error404Page'
import Layout from '../app/main/layout/Layout';
import Content from '../app/main/content/Content';

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
                    path: "/", element: <Content />
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