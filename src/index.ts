import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { AssetResolver } from "./resolvers/AssetResolver";

(async () => {
  console.log("running at", process.env.NODE_ENV);

  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AssetResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
    // Enable graphql in production
    introspection: true,
    playground: true,
  });

  apolloServer.applyMiddleware({
    app,
    // cors: false
  });
  
  const port = process.env.PORT || 8888;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
