module.exports = rawRequest => {
  const stringy = rawRequest.toString();
  const data = stringy.split(' ');
  const dataBody = data[4].split('\r\n')[2];
  if(data[0] ===  'GET') {
    return { 
      method: data[0],
      path: data[1]
    }; 
  } else {
    return { 
      method: data[0],
      path: data[1],
      body: dataBody
    };
  }
};
