const http = require('http');
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
 const requestListener = (request, response) => {
    response.setHeader('Content-type','text/html');
    response.statusCode = 200;
    response.end('<h1>Halo HTP server!</h1>')
};
//http.createServer() -> membuat http server dan menerima satu parameter custom callback yang digunakan sebagai request listener.
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});