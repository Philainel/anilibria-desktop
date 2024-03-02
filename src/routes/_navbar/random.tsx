import { Link, Navigate, createFileRoute, useLoaderData } from '@tanstack/react-router'
import getTitle from '../../api/getTitle'
import { MDIcon } from '../../components/MDIcon'
import getRandomTitle from '../../api/getRandomTitle'
import { TitleInformation } from './title/$code'

export const Route = createFileRoute('/_navbar/random')({
    component: () => {
        const {code} = Route.useLoaderData()
        return <Navigate to="/title/$code" params={{code}} />
    },
    loader: () => getRandomTitle({})
})