
export default function getVendorMenuLists() {
    const getVendorMenuLists = [
        {
            id: 1600,
            name: "Drink Shop",
            description: "We make the best drinks in the school",
            items: [
                {
                    id: 1610,
                    name: "Coke",
                    price: 15,
                },
                {
                    id: 1620,
                    name: "Pepsi",
                    price: 15,
                },
                {
                    id: 1630,
                    name: "Fanta Orange",
                    price: 15,
                },
                {
                    id: 1640,
                    name: "Fanta Grape",
                    price: 15,
                },
                {
                    id: 1650,
                    name: "Bubble Tea",
                    price: 30,
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
                    ]
                }

            ],
        },
        {
            id: 1700,
            name: "Thai Food",
            description: "We make all types of Thai Food",
            items: [
                {
                    id: 1710,
                    name: "Krapao",
                    price: 35,
                    subItems: [
                        {
                            id: 1711,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 1712,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 1713,
                            name: "Crispy Pork",
                            price: 50,
                        }
                    ]
                },
                {
                    id: 1720,
                    name: "Pad Thai",
                    price: 120,
                    subItems: [
                        {
                            id: 1721,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 1722,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 1723,
                            name: "Extra Meat",
                            price: 50,
                        }
                    ]
                },
            ],
        },
        {
            id: 1800,
            name: "Ice Cream Shop",
            description: "Soft Serve Ice Cream that is delicious",
            items: [
                {
                    id: 1810,
                    name: "Vanilla Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 1811,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 1812,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 1813,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 1820,
                    name: "Chocolate Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 1821,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 1822,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 1823,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 1900,
            name: "Dessert Shop",
            description: "The sweetest and best deserts ever created!",
            items: [
                {
                    id: 1910,
                    name: "Salapao",
                    price: 15,
                    subItems: [
                        {
                            id: 1911,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 1912,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 1913,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 1920,
                    name: "Kanom Kloak",
                    price: 15,
                    subItems: [
                        {
                            id: 1921,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 1922,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 1923,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 2000,
            name: "Bake Shop",
            description: "Our items are delicious and unhealthy",
            items: [
                {
                    id: 2010,
                    name: "Muffin",
                    price: 15,
                    subItems: [
                        {
                            id: 2011,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2012,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2013,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 2020,
                    name: "Scone",
                    price: 15,
                    subItems: [
                        {
                            id: 2021,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2022,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2023,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
        {
            id: 2100,
            name: "Bakery Shop",
            description: "Our bread is baked daily for maximum freshness",
            items: [
                {
                    id: 2110,
                    name: "Croissant",
                    price: 15,
                    subItems: [
                        {
                            id: 2111,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2112,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2113,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 2120,
                    name: "Sourdough Loaf of Bread baked with love and affection",
                    price: 100,
                    subItems: [
                        {
                            id: 2121,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2122,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2123,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
        {
            id: 2200,
            name: "Vegetarian Food",
            description: "Delicous food that has killed no animals",
            items: [
                {
                    id: 2210,
                    name: "Coke",
                    price: 15,
                },
                {
                    id: 2220,
                    name: "Pepsi",
                    price: 15,
                },
                {
                    id: 2230,
                    name: "Fanta Orange",
                    price: 15,
                },
                {
                    id: 2240,
                    name: "Fanta Grape",
                    price: 15,
                },
                {
                    id: 2250,
                    name: "Bubble Tea",
                    price: 30,
                    subItems: [
                        {
                            id: 2251,
                            name: "Jelly",
                            price: 5,
                        },
                        {
                            id: 2252,
                            name: "Starry Pearl",
                            price: 10
                        },
                        {
                            id: 2253,
                            name: "Grass Jelly",
                            price: 15
                        }
                    ]
                }

            ],
        },
        {
            id: 2300,
            name: "Thai Food",
            description: "We make all types of Thai Food",
            items: [
                {
                    id: 2310,
                    name: "Krapao",
                    price: 35,
                    subItems: [
                        {
                            id: 2311,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 2312,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 2313,
                            name: "Crispy Pork",
                            price: 50,
                        }
                    ]
                },
                {
                    id: 2320,
                    name: "Pad Thai",
                    price: 120,
                    subItems: [
                        {
                            id: 2321,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 2322,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 2323,
                            name: "Extra Meat",
                            price: 50,
                        }
                    ]
                },
            ],
        },
        {
            id: 2400,
            name: "Ice Cream Shop",
            description: "Soft Serve Ice Cream that is delicious",
            items: [
                {
                    id: 2410,
                    name: "Vanilla Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 2411,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2412,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2413,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 2420,
                    name: "Chocolate Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 2421,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2422,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2423,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 2500,
            name: "Dessert Shop",
            description: "The sweetest and best deserts ever created!",
            items: [
                {
                    id: 2510,
                    name: "Salapao",
                    price: 15,
                    subItems: [
                        {
                            id: 2511,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2512,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2513,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 2520,
                    name: "Kanom Kloak",
                    price: 15,
                    subItems: [
                        {
                            id: 2521,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2522,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2523,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 2600,
            name: "Bake Shop",
            description: "Our items are delicious and unhealthy",
            items: [
                {
                    id: 2610,
                    name: "Muffin",
                    price: 15,
                    subItems: [
                        {
                            id: 2611,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2612,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2613,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 2620,
                    name: "Scone",
                    price: 15,
                    subItems: [
                        {
                            id: 2621,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2622,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2623,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
        {
            id: 2700,
            name: "Bakery Shop",
            description: "Our bread is baked daily for maximum freshness",
            items: [
                {
                    id: 2710,
                    name: "Croissant",
                    price: 15,
                    subItems: [
                        {
                            id: 2711,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2712,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2713,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 2720,
                    name: "Sourdough Loaf of Bread baked with love and affection",
                    price: 100,
                    subItems: [
                        {
                            id: 2721,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 2722,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 2723,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
        {
            id: 2800,
            name: "Vegetarian Food",
            description: "Delicous food that has killed no animals",
            items: [
                {
                    id: 2810,
                    name: "Coke",
                    price: 15,
                },
                {
                    id: 2820,
                    name: "Pepsi",
                    price: 15,
                },
                {
                    id: 2830,
                    name: "Fanta Orange",
                    price: 15,
                },
                {
                    id: 2840,
                    name: "Fanta Grape",
                    price: 15,
                },
                {
                    id: 2850,
                    name: "Bubble Tea",
                    price: 30,
                    subItems: [
                        {
                            id: 2851,
                            name: "Jelly",
                            price: 5,
                        },
                        {
                            id: 2852,
                            name: "Starry Pearl",
                            price: 10
                        },
                        {
                            id: 2853,
                            name: "Grass Jelly",
                            price: 15
                        }
                    ]
                }

            ],
        },
        {
            id: 2900,
            name: "Thai Food",
            description: "We make all types of Thai Food",
            items: [
                {
                    id: 2910,
                    name: "Krapao",
                    price: 35,
                    subItems: [
                        {
                            id: 2911,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 2912,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 2913,
                            name: "Crispy Pork",
                            price: 50,
                        }
                    ]
                },
                {
                    id: 2920,
                    name: "Pad Thai",
                    price: 120,
                    subItems: [
                        {
                            id: 2921,
                            name: "Fried Egg",
                            price: 15,
                        },
                        {
                            id: 2922,
                            name: "Steamed Rice",
                            price: 11,
                        },
                        {
                            id: 2923,
                            name: "Extra Meat",
                            price: 50,
                        }
                    ]
                },
            ],
        },
        {
            id: 3000,
            name: "Ice Cream Shop",
            description: "Soft Serve Ice Cream that is delicious",
            items: [
                {
                    id: 3010,
                    name: "Vanilla Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 3011,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3012,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3013,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 3020,
                    name: "Chocolate Cone",
                    price: 15,
                    subItems: [
                        {
                            id: 3021,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3022,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3023,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 3100,
            name: "Dessert Shop",
            description: "The sweetest and best deserts ever created!",
            items: [
                {
                    id: 3110,
                    name: "Salapao",
                    price: 15,
                    subItems: [
                        {
                            id: 3111,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3112,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3113,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                },
                {
                    id: 3120,
                    name: "Kanom Kloak",
                    price: 15,
                    subItems: [
                        {
                            id: 3121,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3122,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3123,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ]
                }
            ],
        },
        {
            id: 3200,
            name: "Bake Shop",
            description: "Our items are delicious and unhealthy",
            items: [
                {
                    id: 3210,
                    name: "Muffin",
                    price: 15,
                    subItems: [
                        {
                            id: 3211,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3212,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3213,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 3220,
                    name: "Scone",
                    price: 15,
                    subItems: [
                        {
                            id: 3221,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3222,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3223,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
        {
            id: 3300,
            name: "Bakery Shop",
            description: "Our bread is baked daily for maximum freshness",
            items: [
                {
                    id: 3310,
                    name: "Croissant",
                    price: 15,
                    subItems: [
                        {
                            id: 3311,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3312,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3313,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                },
                {
                    id: 3320,
                    name: "Sourdough Loaf of Bread baked with love and affection",
                    price: 100,
                    subItems: [
                        {
                            id: 3321,
                            name: "Sprinkles",
                            price: 15,
                        },
                        {
                            id: 3322,
                            name: "Chocolate Syrup",
                            price: 11,
                        },
                        {
                            id: 3323,
                            name: "Strawberry Syrup",
                            price: 13,
                        }
                    ],
                }
            ],
        },
    ]
    return getVendorMenuLists
}