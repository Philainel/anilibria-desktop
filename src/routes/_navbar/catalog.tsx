import { Link, createFileRoute } from '@tanstack/react-router'
import Shelf from '../../components/shelf'
import search from '../../api/search'
import getUpdatedTitles from '../../api/getUpdatedTitles'
import advancedSearch from '../../api/advancedSearch'

function Catalog() {
    return <main>
        <Shelf name="Недавно обновлено">{async () => (await getUpdatedTitles({ limit: 15 })).list}</Shelf>
        <Shelf name={`Хиты ${new Date().getFullYear()}`}>{async () => (await search({ limit: 15, order_by: "in_favorites", sort_direction: 1, year: `${new Date().getFullYear()}` })).list}</Shelf>
        <Shelf name="ТОП-15">{async () => (await advancedSearch({ limit: 15, order_by: "in_favorites", query: "{in_favorites} >= 0", sort_direction: 1 })).list}</Shelf>
    </main>
}

export const Route = createFileRoute('/_navbar/catalog')({
    component: Catalog,
})