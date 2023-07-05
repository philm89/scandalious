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
                    price: 10,
                    quantity: 500,
                }
            ],
            quantity: 100,
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
                    price: 125,
                    quantity: 50,
                },
                {
                    id: 1891534,
                    name: "Extra Rice",
                    price: 15,
                    quantity: 500,
                },
                {
                    id: 189443189,
                    name: "Double Meat",
                    price: 20,
                    quantity: 70,
                },
                {
                    id: 19808483,
                    name: "Extra Salt",
                    price: 15,
                    quantity: 1000,
                },
                {
                    id: 19886335915,
                    name: "Another Thing",
                    price: 5,
                    quantity: 10000,
                },
            ],
            quantity: 250,
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
                    price: 25,
                    quantity: 100,
                },
                {
                    id: 9538195,
                    name: "Sprinkles",
                    price: 15,
                    quantity: 100,
                },
            ],
            quantity: 100,
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
                    price: 10,
                    quantity: 100,
                },
                {
                    id: 5938461591,
                    name: "Other Toppings",
                    price: 15,
                    quantity: 100,
                },
            ],
            quantity: 200,
        },
        {
            id: 1538,
            name: "Cake",
            count: 1,
            price: 15,
            quantity: 250,
        },
        {
            id: 1539,
            name: "Donut",
            count: 1,
            price: 15,
            quantity: 100,
        },
        {
            id: 1540,
            name: "Muffin",
            count: 1,
            price: 15,
            quantity: 50,
        },
    ]
    return menuItems
}