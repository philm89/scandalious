import { MenuItems } from "~/@types/types"

export default function getMenuItemsUtility() {
    const menuItems = [
        {
            id: 1534,
            name: "Apple Juice",
            price: 15,
            count: 1,
            subItems: [
                {
                    id: 986689567,
                    name: "extra ice",
                    price: 10
                }
            ],
            bgColor: '#FFFFFF'
        },
        {
            id: 1535,
            name: "Krapao",
            count: 1,
            price: 35,
            subItems: [
                {
                    id: 1564864,
                    name: "Kai Dao",
                    price: 125

                },
                {
                    id: 1891534,
                    name: "Extra Rice",
                    price: 15

                },
                {
                    id: 189443189,
                    name: "Double Meat",
                    price: 20
                },
                {
                    id: 19808483,
                    name: "Extra Salt",
                    price: 15
                },
                {
                    id: 19886335915,
                    name: "Another Thing",
                    price: 5
                },
            ],
            bgColor: '#FFFFFF'
        },
        {
            id: 1536,
            name: "Brownie",
            count: 1,
            price: 15,
            subItems: [
                {
                    id: 9567318,
                    name: "Ice Cream",
                    price: 25

                },
                {
                    id: 9538195,
                    name: "Sprinkles",
                    price: 15

                },
            ],
            bgColor: '#FFFFFF'
        },
        {
            id: 1537,
            name: "Ice Cream",
            count: 1,
            price: 25,
            subItems: [
                {
                    id: 908648619,
                    name: "Sprinkles",
                    price: 10

                },
                {
                    id: 5938461591,
                    name: "Other Toppings",
                    price: 15

                },
            ],
            bgColor: '#FFFFFF'
        },
        {
            id: 1538,
            name: "Cake",
            count: 1,
            price: 15,
            bgColor: '#FFFFFF'
        },
        {
            id: 1539,
            name: "Donut",
            count: 1,
            price: 15,
            bgColor: '#FFFFFF'
        },
        {
            id: 1540,
            name: "Muffin",
            count: 1,
            price: 15,
            bgColor: '#FFFFFF'
        },
    ]
    return menuItems
}