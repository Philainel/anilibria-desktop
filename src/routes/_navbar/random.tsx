import { Navigate, createFileRoute } from '@tanstack/react-router'
import getRandomTitle from '../../api/getRandomTitle'

export const Route = createFileRoute('/_navbar/random')({
    component: () => {
        const {code} = Route.useLoaderData()
        return <Navigate to="/title/$code" params={{code}} />
    },
    loader: () => getRandomTitle({})
})
