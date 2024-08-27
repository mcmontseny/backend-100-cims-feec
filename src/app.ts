import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/', routes);

export default app;
