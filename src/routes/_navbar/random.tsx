import { Navigate, createFileRoute } from '@tanstack/react-router'
import getRandomTitle from '../../api/getRandomTitle'

export const Route = createFileRoute('/_navbar/random')({
    component: () => {
        const title = Route.useLoaderData()
        /*console.log("Random title: ")*/
        /*console.log(title)*/
        return <Navigate to="/title/$code" params={{code: title.code}} />
    },
    loader: () => getRandomTitle({filter: 'code'}),
    pendingComponent: () => <>Looking for random title...</>,
    staleTime: 0,
    gcTime: 0,
    shouldReload: false
})
