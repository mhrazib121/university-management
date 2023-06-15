import express, { Application } from 'express';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

// cors use
app.use(cors());

// Parsing data
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1', routes);
app.use('/api/v1/semester', AcademicSemesterRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   Promise.reject(new Error(('unhandle promise rejected')))
// });

app.use(globalErrorHandler);

export default app;
