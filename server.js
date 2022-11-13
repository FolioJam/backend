const fastify = require('fastify')({logger: true});

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

fastify.get('/', (req, res) => {
    res.send({message: `Hello, this is a GET route @FolioJam's backend`});
})


const start = async () => {
    try {
        await fastify.listen({port: PORT});
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();