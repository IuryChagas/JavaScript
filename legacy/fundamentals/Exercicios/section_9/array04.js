const bus = {
    wheels: 8,
    passengers: 40,
    doors: 2
};

bus.windows = 20; // add new attribute
    console.log(bus);

delete bus.wheels; // remove attribute
    console.log(bus);