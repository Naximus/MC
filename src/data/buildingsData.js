const buildingsData = [{
    id: "building-1",
    name: "Building A",
    address: "Sample address",
    onlineDevices: 2,
    floors: [
        {
            id: "floor-1",
            name: "Floor 1",
            offices: [
                {
                    id: "office-11",
                    capacityPeople: 4,
                    windows: 1,
                    devices: [
                        {
                            id: "device-11",
                            type: "printer",
                            powerInput: "220v",
                            interface: "usb"
                        }
                    ]
                },
                {
                    id: "office-12",
                    capacityPeople: 4,
                    windows: 1,
                    devices: [
                        {
                            id: "device-12",
                            type: "printer",
                            powerInput: "220v",
                            interface: "wifi"
                        }
                    ]
                },
                {
                    id: "office-13",
                    capacityPeople: 2,
                    windows: 0
                }
            ],
            rooms: [
                {
                    id: "room-11",
                    capacityPeople: 2
                },
                {
                    id: "room-12",
                    capacityPeople: 2
                },
                {
                    id: "room-13",
                    capacityPeople: 3
                }
                
            ]
        }
    ]
},
{
    id: "building-2",
    name: "Building B",
    address: "Sample address",
    onlineDevices: 3,
    floors: [
        {
            id: "floor-1",
            name: "Floor 1",
            offices: [
                {
                    id: "office-11",
                    capacityPeople: 4,
                    windows: 1
                },
                {
                    id: "office-12",
                    capacityPeople: 4,
                    windows: 1,
                    devices: [
                        {
                            id: "device-12",
                            type: "printer",
                            powerInput: "220v",
                            interface: "wifi"
                        }
                    ]
                },
                {
                    id: "office-13",
                    capacityPeople: 2,
                    windows: 0
                }
            ],
            rooms: [
                {
                    id: "room-11",
                    capacityPeople: 2
                },
                {
                    id: "room-12",
                    capacityPeople: 2
                },
                {
                    id: "room-13",
                    capacityPeople: 2
                },
                {
                    id: "room-14",
                    capacityPeople: 2
                }
                
            ],
            devices: [
                {
                    id: "device-12",
                    type: "printer",
                    powerInput: "220v",
                    interface: "wifi"
                }
                
            ]
        },
        {
            id: "floor-2",
            name: "Floor 2",
            offices: [
                {
                    id: "office-21",
                    capacityPeople: 4,
                    windows: 1
                },
                {
                    id: "office-22",
                    capacityPeople: 4,
                    windows: 1,
                    devices: [
                        {
                            id: "device-22",
                            type: "printer",
                            powerInput: "220v",
                            interface: "wifi"
                        }
                    ]
                },
                {
                    id: "office-23",
                    capacityPeople: 2,
                    windows: 0,
                    devices: [
                        {
                            id: "device-23",
                            type: "TV",
                            powerInput: "220v",
                            interface: "wifi"
                        },
                        {
                            id: "device-24",
                            type: "PS5",
                            powerInput: "220v",
                            interface: "wifi"
                        }
                    ]
                },
                {
                    id: "office-24",
                    capacityPeople: 6,
                    windows: 0
                }
            ],
            rooms: [
                {
                    id: "room-21",
                    capacityPeople: 2
                },
                {
                    id: "room-22",
                    capacityPeople: 2
                }
                
            ]
        }
    ]
}
];

export default buildingsData;