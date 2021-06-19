function chooseStations(stations) {
  let goodStations = [];
  for (station of stations) {
    const number = station[1]

    if (number >= 20) {
      const name = station[2]
      if (name === "school" || name === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
return goodStations
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
