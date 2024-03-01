import { Link, createFileRoute } from '@tanstack/react-router'
import getTitle from '../../api/getTitle'
import { MDIcon } from '../../components/MDIcon'
import getRandomTitle from '../../api/getRandomTitle'
import { TitleInformation } from './title/$code'

export const Route = createFileRoute('/_navbar/random')({
    component: () => <TitleInformation Route={Route}/>,
    loader: ({ params }) => getRandomTitle({})
})