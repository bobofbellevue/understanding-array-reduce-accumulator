const planets = [
  { id: 'mercury', name: 'Mercury', moonsCount: 0 },
  { id: 'venus', name: 'Venus', moonsCount: 0 },
  { id: 'earth', name: 'Earth', moonsCount: 1 },
  { id: 'mars', name: 'Mars', moonsCount: 2 },
  { id: 'jupiter', name: 'Jupiter', moonsCount: 80, },
  { id: 'saturn', name: 'Saturn', moonsCount: 82 },
  { id: 'uranus', name: 'Uranus', moonsCount: 27 },
  { id: 'neptune', name: 'Neptune', moonsCount: 14 }
];

// number implementation
console.log('1. NUMBER IMPLEMENTATION');
function getSolarSystemMoonsCount1() {
  return planets.reduce(function(numberCount, planet) {
    console.log('Typeof numberCount is ' + typeof numberCount + ' and its value is ' + numberCount);
    return numberCount += planet.moonsCount;
  }, 0); // INITIAL VALUE IS 0 (ZERO) OR IN OTHER WORDS, A NUMBER
}
let totalNumber = getSolarSystemMoonsCount1();
console.log('Typeof totalNumber is ' + typeof totalNumber);
console.log('Total of moons in the solar system is ' + totalNumber + '.');

// object implementation
console.log('2. OBJECT IMPLEMENTATION');
function getSolarSystemMoonsCount2() {
  return planets.reduce(function(planetObject, planet) {
    console.log('Typeof planetObject is ' + typeof planetObject + ' and Typeof planetObject[\'moonsCount\'] is ' + typeof planetObject['moonsCount'] + ' and its value is ' + planetObject['moonsCount']);
    planetObject['moonsCount'] += planet.moonsCount;
    return planetObject;
  }, {id: '', name: '', moonsCount: 0}); // INITIAL VALUE IS AN OBJECT
}
let totalObject = getSolarSystemMoonsCount2();
console.log('Typeof totalObject is ' + typeof totalObject + ' and Typeof totalObject[\'moonsCount\'] is ' + typeof totalObject['moonsCount'] + ' and its value is ' + totalObject['moonsCount']);
console.log('Total of moons in the solar system is ' + totalObject['moonsCount'] + '.');

// string implementation
console.log('3. STRING IMPLEMENTATION');
function getSolarSystemMoonsCount3() {
  return planets.reduce(function(stringCount, planet) {
    console.log('Typeof stringCount is ' + typeof stringCount + ' and its value is ' + stringCount);
    return stringCount = ((stringCount * 1) + planet.moonsCount).toString();
  }, ''); // INITIAL VALUE IS AN EMPTY STRING
}
let totalString = getSolarSystemMoonsCount3();
console.log('Typeof totalString is ' + typeof totalString);
console.log('Total of moons in the solar system is ' + totalString + '.');

// no initial value
console.log('4. NO INITIAL VALUE - ANOTHER OBJECT IMPLEMENTATION');
function getSolarSystemMoonsCount4() {
  return planets.reduce(function(planetObject, planet) {
    console.log('Typeof planetObject is ' + typeof planetObject + ' and Typeof planetObject[\'moonsCount\'] is ' + typeof planetObject['moonsCount'] + ' and its value is ' + planetObject['moonsCount']);
    planetObject['moonsCount'] += planet.moonsCount;
    return planetObject;
  }); // NO INITIAL VALUE - ACCUMULATOR WILL BE AN OBJECT
}
let totalObject2 = getSolarSystemMoonsCount4();
console.log('Typeof totalObject2 is ' + typeof totalObject2 + ' and Typeof totalObject2[\'moonsCount\'] is ' + typeof totalObject2['moonsCount'] + ' and its value is ' + totalObject2['moonsCount']);
console.log('Total of moons in the solar system is ' + totalObject2['moonsCount'] + '.');

// naive implementation
console.log('5. NAIVE IMPLEMENTATION - NOT UNDERSTANDING TYPES');
function getSolarSystemMoonsCount5() {
  return planets.reduce(function(moonsCount, planet) {
    console.log('Typeof moonsCount is ' + typeof moonsCount + ' and its value is ' + moonsCount);
    return moonsCount += planet.moonsCount;
  }); // NO INITIAL VALUE - HOPING THE ACCUMULATOR WILL BE A NUMBER
}
let totalMoonsCount = getSolarSystemMoonsCount5();
console.log('Typeof totalMoonsCount is ' + typeof totalMoonsCount + ' and its value is ' + totalMoonsCount);
console.log('Total of moons in the solar system is ' + totalMoonsCount + '.');
