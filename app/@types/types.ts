
export class MenuItems {
    id: number
    name: string
    price: number
    order?: number
    count?: number
    subItems: SubItems[] | []
}

export class SubItems {
    id: number
    name: number
    price: number
}

export class POSMenuItems {
    id: number
    studentName?: string
    total: number
    date: string


}

export class VendorMenuList {
    id: number
    name: string
    description?: string
    items?: VendorItemList[] | []
}

export class VendorItemList {
    id: number
    name: string
    price: number
    subItems?: VendorSubItemsList[] | []
}

export class VendorSubItemsList {
    id: number
    name: string
    price: number
}