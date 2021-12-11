import express, { Application } from 'express';
import 'dotenv/config';

const app: Application = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});