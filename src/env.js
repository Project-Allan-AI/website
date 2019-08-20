'use strict';

module.exports = (() => {
  return {
    backendPort: getBackendPort(),
    backendURL: getBackendURL()
  };
})();


function getBackendPort(){
  let port = process.env.port || 5000;
  return port
}

function getBackendURL(){
  let port = getBackendPort();
  let url = "http://localhost:"+port;
  return url;
}
