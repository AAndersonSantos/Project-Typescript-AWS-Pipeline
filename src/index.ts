import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = '8081';

app.use(bodyParser.json());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
});
