import Express from 'express';
import timeout from 'connect-timeout';
import cors from 'cors';
import routes from './routes/routes';

const port = process.env.PORT || 8080;

// Initialize the Express App
const app = Express();

app.use(timeout('60s'));
app.use(cors());

app.use(Express.json({ limit: '50mb' }));
app.use(Express.urlencoded({ limit: '50mb' }));

app.use(routes);

// Start App
app.listen(port, (error?: Error) => {
	if (error) {
		console.log('Something Went Wrong while starting the server', error);
		return;
	}
	console.info(`Server running at ${port}`);
});

export default app;
