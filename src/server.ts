import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import admin, { ServiceAccount } from 'firebase-admin';
import serviceData from '/home/secret/google.json';
import { authRoutes } from './routes/auth';

const app: Application = express();
app.use(cors());

const port = process.env.PORT;

const serviceAccount: ServiceAccount = {projectId: serviceData.project_id, clientEmail: serviceData.client_email, privateKey: serviceData.private_key};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});