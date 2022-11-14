var Enum;
(function (Enum) {
  Enum[Enum["A"] = 0] = "A";
  console.log('Enum', Enum)
})(Enum || (Enum = {}));

// var a = Enum.A;
// var nameOfA = Enum[a]; // "A"