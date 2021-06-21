const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.waste++
  } else if (trash === "waste") {
    bins.recycling++
  } else if (trash === "compost") {
    bins.compost++
  }
  return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))
