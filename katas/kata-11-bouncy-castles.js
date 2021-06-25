const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let finalSphereVol = 4/3 * PI * (radius * radius * radius)
  return finalSphereVol
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);



const coneVolume = function (radius, height) {
  let finalConeVol = 1/3 * PI * (radius * radius) * height
  return finalConeVol
}


console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);


const prismVolume = function (height, width, depth) {
  let base = width * depth
  let finalPrismVol = base * height
  return finalPrismVol
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {
  let finalVol = 0;
  let sphereVol = 0;
  let prismVol = 0;
  let coneVol = 0;
  for (i = 0; i < solids.length; i++) {
    if (solids[i].type === "sphere") {
      sphereVol = sphereVolume(solids[i].radius)
      finalVol += sphereVol
    } else if (solids[i].type === "cone") {
      coneVol = coneVolume(solids[i].radius, solids[i].height)
      finalVol += coneVol
    }
  }
  return finalVol
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);




