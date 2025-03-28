import fastifyCors from "@fastify/cors";
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

//Instaciar o servidor
const server: FastifyInstance = fastify();

//Plugins
server.register(fastifyCors)

//rotas
server.get("/", (req: FastifyRequest, replay: FastifyReply) => {
  replay.status(200).send({ message: "servidor ok" });
});


//configurações de porta
server.listen(
  {
    port: 3000,
  },
  () => {
    console.log("Server runnig port 3000");
  }
);