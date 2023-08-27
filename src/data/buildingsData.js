const buildingsData = [{
    id: "building-1",
    name: "Building A",
    address: "Sample address",
    floorsCount: 1,
    officesCount: 3,
    roomsCount: 2,
    devicesCount: 2,
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
                }
                
            ],
            devices: [
                {
                    id: "device-11",
                    type: "printer",
                    powerInput: "220v",
                    interface: "usb"
                },
                {
                    id: "device-12",
                    type: "printer",
                    powerInput: "220v",
                    interface: "wifi"
                }
                
            ]
        }
    ]
},
{
    id: "building-2",
    name: "Building B",
    address: "Sample address",
    floorsCount: 2,
    officesCount: 3,
    roomsCount: 8,
    devicesCount: 1,
    onlineDevices: 1,
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
                },
                {
                    id: "room-23",
                    capacityPeople: 2
                },
                {
                    id: "room-24",
                    capacityPeople: 2
                }
                
            ],
            devices: [
                {
                    id: "device-22",
                    type: "printer",
                    powerInput: "220v",
                    interface: "wifi"
                }
                
            ]
        }
    ]
}]

export default buildingsData;