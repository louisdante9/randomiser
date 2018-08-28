let _ = require('underscore');

let randomiser = {
  between: function(low, high){
   return _.random(low, high);	
}
};

module.exports = randomiser;

