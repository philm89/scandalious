/**
 * We need to limit the azure function to last 30 days worth of transactions.
 * @returns 
 */

export default function GetVendorOrders() {
    const getVendorOrders = [
        {
            orderId: 1502,
            orderUUID: "768fca55-bbe1-4918",
            queueNumber: "BR27",
            orderMealtime: "BREAKFAST",
            shopName: "ChaTraMoo",
            orderTotal: 100,
            createdAt: "2023-07-12T04:25:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1620,
                    name: "Pepsi",
                    price: 15,
                    units: 3,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "",

                },
                {
                    id: 1650,
                    name: "Bubble Tea",
                    price: 30,
                    units: 1,
                    subItems: [
                        {
                            id: 1651,
                            name: "Jelly",
                            price: 5,
                        },
                        {
                            id: 1652,
                            name: "Starry Pearl",
                            price: 10
                        },
                        {
                            id: 1653,
                            name: "Grass Jelly",
                            price: 15
                        }
                    ],
                    requests: "",
                }
            ],
        },
        {
            orderId: 1503,
            orderUUID: "2ff482e2-6e3d-44a5",
            queueNumber: "LA97",
            orderMealtime: "LUNCHA",
            shopName: "Specialty Drinks",
            orderTotal: 120,
            createdAt: "2023-06-11T16:17:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1610,
                    name: "Coke",
                    price: 15,
                    units: 3,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "lots of iceeeee",
                },
            ],
        },
        {
            orderId: 1504,
            orderUUID: "0e093314-a9f3-4e49",
            queueNumber: "LB65",
            orderMealtime: "LUNCHB",
            shopName: "Fantasia",
            orderTotal: 425,
            createdAt: "2023-05-10T05:06:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1630,
                    name: "Fanta Orange",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1505,
            orderUUID: "aa698748-cd07-4a4d",
            queueNumber: "DR65",
            orderMealtime: "DINNER",
            shopName: "The Bubble Tea Shop",
            orderTotal: 25,
            createdAt: "2023-04-09T22:04:56+0000",
            orderStatus: "CANCELLED",
            items: [
                {
                    id: 1650,
                    name: "Bubble Tea",
                    price: 30,
                    units: 4,
                    subItems: [],
                    requests: "not cold",
                },
            ],
        },
        {
            orderId: 1506,
            orderUUID: "c99343a5-95d8-4a65",
            queueNumber: "BR16",
            orderMealtime: "BREAKFAST",
            shopName: "Pizza Hut",
            orderTotal: 243,
            createdAt: "2023-03-08T05:19:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 2,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "the most ice you can possibly fit in the glass",
                },
            ],
        },
        {
            orderId: 1507,
            orderUUID: "5a7eb61b-7566-4646",
            queueNumber: "LA46",
            orderMealtime: "LUNCHA",
            shopName: "ThipSamai",
            orderTotal: 300,
            createdAt: "2023-02-07T07:34:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 3,
                    subItems: [],
                    requests: "I will murder a pigeon if I see any ice in my cup",
                },
            ],
        },
        {
            orderId: 1508,
            orderUUID: "3736ab3b-9d5c-4fbd",
            queueNumber: "LB87",
            orderMealtime: "LUNCHB",
            shopName: "Miyazaki",
            orderTotal: 300,
            createdAt: "2023-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 4,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1501,
            orderUUID: "64583cb9-4423-4345",
            queueNumber: "DR92",
            orderMealtime: "DINNER",
            shopName: "The Drink Shop",
            orderTotal: 300,
            createdAt: "2022-08-13T14:42:56+0000",
            orderStatus: "CANCELLED",
            items: [
                {
                    id: 1630,
                    name: "Fanta Orange",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "warm please",

                },
                {
                    id: 1610,
                    name: "Coke",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "warm please",

                },
            ],
        },
        {
            orderId: 1509,
            orderUUID: "eb642b29-25f6-4fa9",
            queueNumber: "BR32",
            orderMealtime: "BREAKFAST",
            shopName: "KFC",
            orderTotal: 300,
            createdAt: "2022-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1500,
            orderUUID: "7176b81a-8ec6-4b26",
            queueNumber: "LA76",
            orderMealtime: "LUNCHA",
            shopName: "The Canteena",
            orderTotal: 300,
            createdAt: "2020-09-14T09:46:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 2,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "ไม่เย็น",

                },
                {
                    id: 1535,
                    name: "Krapao",
                    units: 1,
                    price: 35,
                    subItems: [
                        {
                            id: 1564864,
                            name: "Kai Dao",
                            price: 25,
                        },
                    ],
                    requests: "ไม่เผ็ด",
                },
            ],
        },
        {
            orderId: 1510,
            orderUUID: "cb26cead-2564-4fd7",
            queueNumber: "LB19",
            orderMealtime: "LUNCHB",
            shopName: "The Shop with an indredibly long name to demonstrate that we should probably put a character limit on this field",
            orderTotal: 300,
            createdAt: "2023-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "make it special",
                },
            ],
        },
        {
            orderId: 1511,
            orderUUID: "cb26getd-2564-4fd7",
            queueNumber: "DR87",
            orderMealtime: "DINNER",
            shopName: "Another One",
            orderTotal: 300,
            createdAt: "2024-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "make it special",
                },
            ],
        },
        {
            orderId: 1512,
            orderUUID: "768fca55-bbe1-4918",
            queueNumber: "BR57",
            orderMealtime: "BREAKFAST",
            shopName: "ChaTraMoo",
            orderTotal: 300,
            createdAt: "2023-07-12T04:25:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1620,
                    name: "Pepsi",
                    price: 15,
                    units: 3,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "",

                },
                {
                    id: 1650,
                    name: "Bubble Tea",
                    price: 30,
                    units: 1,
                    subItems: [
                        {
                            id: 1651,
                            name: "Jelly",
                            price: 5,
                        },
                        {
                            id: 1652,
                            name: "Starry Pearl",
                            price: 10
                        },
                        {
                            id: 1653,
                            name: "Grass Jelly",
                            price: 15
                        }
                    ],
                    requests: "",
                }
            ],
        },
        {
            orderId: 1513,
            orderUUID: "2ff482e2-6e3d-44a5",
            queueNumber: "LA14",
            orderMealtime: "LUNCHA",
            shopName: "Specialty Drinks",
            orderTotal: 300,
            createdAt: "2023-06-11T16:17:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1610,
                    name: "Coke",
                    price: 15,
                    units: 3,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "lots of iceeeee",
                },
            ],
        },
        {
            orderId: 1514,
            orderUUID: "0e093314-a9f3-4e49",
            queueNumber: "LB29",
            orderMealtime: "LUNCHB",
            shopName: "Fantasia",
            orderTotal: 300,
            createdAt: "2023-05-10T05:06:56+0000",
            orderStatus: "SUBMITTED",
            items: [
                {
                    id: 1630,
                    name: "Fanta Orange",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1515,
            orderUUID: "aa698748-cd07-4a4d",
            queueNumber: "DR47",
            orderMealtime: "DINNER",
            shopName: "The Bubble Tea Shop",
            orderTotal: 300,
            createdAt: "2023-04-09T22:04:56+0000",
            orderStatus: "CANCELLED",
            items: [
                {
                    id: 1650,
                    name: "Bubble Tea",
                    price: 30,
                    units: 4,
                    subItems: [],
                    requests: "not cold",
                },
            ],
        },
        {
            orderId: 1516,
            orderUUID: "c99343a5-95d8-4a65",
            queueNumber: "BR26",
            orderMealtime: "BREAKFAST",
            shopName: "Pizza Hut",
            orderTotal: 300,
            createdAt: "2023-03-08T05:19:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 2,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "the most ice you can possibly fit in the glass",
                },
            ],
        },
        {
            orderId: 1517,
            orderUUID: "5a7eb61b-7566-4646",
            queueNumber: "LA66",
            orderMealtime: "LUNCHA",
            shopName: "ThipSamai",
            orderTotal: 300,
            createdAt: "2023-02-07T07:34:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 3,
                    subItems: [],
                    requests: "I will murder a pigeon if I see any ice in my cup",
                },
            ],
        },
        {
            orderId: 1518,
            orderUUID: "3736ab3b-9d5c-4fbd",
            queueNumber: "LB77",
            orderMealtime: "LUNCHB",
            shopName: "Miyazaki",
            orderTotal: 300,
            createdAt: "2023-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 4,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1519,
            orderUUID: "64583cb9-4423-4345",
            queueNumber: "DR02",
            orderMealtime: "DINNER",
            shopName: "The Drink Shop",
            orderTotal: 300,
            createdAt: "2022-08-13T14:42:56+0000",
            orderStatus: "CANCELLED",
            items: [
                {
                    id: 1630,
                    name: "Fanta Orange",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "warm please",

                },
                {
                    id: 1610,
                    name: "Coke",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "warm please",

                },
            ],
        },
        {
            orderId: 1520,
            orderUUID: "eb642b29-25f6-4fa9",
            queueNumber: "BR75",
            orderMealtime: "BREAKFAST",
            shopName: "KFC",
            orderTotal: 300,
            createdAt: "2022-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "",
                },
            ],
        },
        {
            orderId: 1521,
            orderUUID: "7176b81a-8ec6-4b26",
            queueNumber: "LA93",
            orderMealtime: "LUNCHA",
            shopName: "The Canteena",
            orderTotal: 300,
            createdAt: "2020-09-14T09:46:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 2,
                    subItems: [
                        {
                            id: 986689567,
                            name: "extra ice",
                            price: 10
                        }
                    ],
                    requests: "ไม่เย็น",

                },
                {
                    id: 1535,
                    name: "Krapao",
                    units: 1,
                    price: 35,
                    subItems: [
                        {
                            id: 1564864,
                            name: "Kai Dao",
                            price: 25,
                        },
                    ],
                    requests: "ไม่เผ็ด",
                },
            ],
        },
        {
            orderId: 1522,
            orderUUID: "cb26cead-2564-4fd7",
            queueNumber: "LB191",
            orderMealtime: "LUNCHB",
            shopName: "The Shop with an indredibly long name to demonstrate that we should probably put a character limit on this field",
            orderTotal: 300,
            createdAt: "2023-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "make it special",
                },
            ],
        },
        {
            orderId: 1523,
            orderUUID: "cb26getd-2564-4fd7",
            queueNumber: "DR172",
            orderMealtime: "DINNER",
            shopName: "Another One",
            orderTotal: 300,
            createdAt: "2024-01-06T09:38:56+0000",
            orderStatus: "COMPLETED",
            items: [
                {
                    id: 1534,
                    name: "Apple Juice",
                    price: 15,
                    units: 1,
                    subItems: [],
                    requests: "make it special",
                },
            ],
        },

    ]

    const sortedVendorOrders = getVendorOrders.sort((a, b) => a.queueNumber.localeCompare(b.queueNumber))
    return sortedVendorOrders
}