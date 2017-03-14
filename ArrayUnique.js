Array.prototype.unique = function() {
  var result = [];
  this.forEach(function(value) {
    if (result.indexOf(value) === -1) {
      result.push(value);
    }
  });
  return result;
};

var result = [1, 2, '1', 2, 3, 'a', 'b', 'a'];
result = result.unique();
console.log(result);

// Using hash, speed is faster
Array.prototype.unique2 = function() {
  var result = [], hash = {};
  this.forEach(function(value) {
    if (!hash[value]) {
      result.push(value);
      hash[value] = true;
    }
  });
  return result;
};

result = [1, 2, '1', 2, 3, 'a', 'b', 'a'];
result = result.unique2();
console.log(result);

Array.prototype.unique3 = function () {
  var result = [this[0]];
  this.sort();
  this.forEach(function(value) {
    if (value !== result[result.length - 1]) {
      result.push(value);
    }
  });
  return result;
};

result = [1, 2, '1', 2, 3, 'a', 'b', 'a'];
result = result.unique3();
console.log(result);
