const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/page3':
      htmlHandler.getIndex3(request, response);
      break;
    case '/party':
      mediaHandler.loadFile(request, response, '../client/party.mp4', 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.loadFile(request, response, '../client/bling.mp3', 'audio/mpeg');
      break;
    case '/bird.mp4':
      mediaHandler.loadFile(request, response, '../client/bird.mp4', 'video/mp4');
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
