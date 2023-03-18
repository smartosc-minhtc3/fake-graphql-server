import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const END_POINT = process.env.END_POINT || '';
const IS_SERVER_SECURE = process.env.IS_SERVER_SECURE === '1' ? true : false;

const app = express();
const isEnableServerUI = true;
app.use(cors());
app.use(
  END_POINT,
  graphqlHTTP({
    schema,
    graphiql: isEnableServerUI,
  }),
);
app.listen(PORT, HOST);

const serverProtocol = IS_SERVER_SECURE ? 'https:' : 'http:';
const appUrl = `${serverProtocol}//${HOST}:${PORT}${END_POINT}`;
// eslint-disable-next-line no-console
console.log(`Riki Fake GraphQL API Server is running at: ${appUrl}`);
