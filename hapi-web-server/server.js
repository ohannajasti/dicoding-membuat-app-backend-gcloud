const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    //method Hapi.server menerima 1 param ->ServerOptions
    const server = Hapi.server(
        //ini ServerOptions terdiri dari port dan host
        {
        port: 5000,
        host: 'localhost',
    }
    );
    
    server.route(routes);

    await server.start(); //server.start menjalankan server secara async makanya butuh await
    console.log(`Server berjalan pada ${server.info.uri}`); //server.info.url: melihat alamat lengkap dan port di maan server dijalankan.
}
init();