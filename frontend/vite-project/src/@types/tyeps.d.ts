import { StringOptionsWithImporter } from "sass"

type language = {
    code: string
    name: string,
    country_code: string
}

type Page = {
    name: string,
    route: string,
    element: JSX.Element
}

type Horse = {
    id: UUID,
    name: string,
    identification?: string,
    owner?: Owner,
    bornYear?: number,
    gender?: string,
    father?: string,
    maternalGrandfather?: string,
    color?: string,
    entry?: Date,
}

type Owner = {
    id: UUID,
    name: string,
    phone?: number,
    email?: string,
    debt?: number,
    horses: Horse[]
}

