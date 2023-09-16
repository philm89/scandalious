export default function GetStudentOrders() {
    const getStudentOrders = [
        {
            orderId: 1500,
            shopName: "The Canteena",
            orderTotal: 300,
            transDate: "2023-09-14T09:46:56+0000",
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
            orderId: 1501,
            shopName: "The Drink Shop",
            orderTotal: 300,
            transDate: "2023-08-14T09:46:56+0000",
            orderStatus: "SUBMITTED",
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
            orderId: 1502,
            shopName: "ChaTraMoo",
            orderTotal: 300,
            transDate: "2023-07-14T14:36:46+0000",
            orderStatus: "PREPARED",
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
            shopName: "Specialty Drinks",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "COMPLETED",
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
            shopName: "Fantasia",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "COMPLETED",
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
            shopName: "The Bubble Tea Shop",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "SUBMITTED",
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
            shopName: "Pizza Hut",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "PREPARED",
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
            shopName: "ThipSamai",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
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
            shopName: "Miyazaki",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
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
            orderId: 1509,
            shopName: "KFC",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "SUBMITTED",
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
            orderId: 1510,
            shopName: "The Shop with an indredibly long name to demonstrate that we should probably put a character limit on this field",
            orderTotal: 300,
            transDate: "1997-07-16T19:20:30.451Z",
            orderStatus: "PREPARED",
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
    return getStudentOrders
}

