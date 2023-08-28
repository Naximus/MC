export const calculateRoomsCount = (floors) => {
    let count = 0;
    floors.forEach(floor => {
        if (floor.rooms && floor.rooms.length > 0) {
            count += floor.rooms.length;
        }
    });
    return count;
};

export const calculateOfficesCount = (floors) => {
    let count = 0;
    floors.forEach(floor => {
        if (floor.offices && floor.offices.length > 0) {
            count += floor.offices.length;
        }
    });
    return count;
};

export const calculateDevicesCount = (floors) => {
    let count = 0;
    floors.forEach(floor => {
        if (floor.offices && floor.offices.length > 0) {
            floor.offices.forEach(office => {
                if (office.devices && office.devices.length > 0) {
                    count += office.devices.length;
                }
            });
        }

        if (floor.rooms && floor.rooms.length > 0) {
            floor.rooms.forEach(room => {
                if (room.devices && room.devices.length > 0) {
                    count += room.devices.length;
                }
            });
        }
    });
    return count;
};
