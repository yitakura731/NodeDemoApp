var os = require('os');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'K8s Sample App',
    context1: 'Kubernetes Sample App',
    ipAddr: getLocalAddress()
  });
});

function getLocalAddress() {
  const ifacesObj = [];
  var interfaces = os.networkInterfaces();

  for (var dev in interfaces) {
    interfaces[dev].forEach((details) => {
      if (!details.internal){
        switch(details.family){
          case "IPv4":
            ifacesObj.push({
              name: dev,
              address: details.address
            });
            break;
          }
        }
      });
    }
    return ifacesObj;
};

module.exports = router;
