const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation)

};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => total + journey.distance, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  let transportArray = this.journeys.map((journey) => journey.transport)
  return transportArray.filter((type,index) => transportArray.indexOf(type) === index);

};
  // let onlyUnique = function (value, index, self) {
  //   return self.indexOf(value) === index;
  // };
  //
  // return transportArray.filter((onlyUnique))


module.exports = Traveller;
