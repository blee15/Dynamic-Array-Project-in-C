import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.send('Welcome to ReSpoken!');
  });
  
app.get('/about', (req, res) => {
    res.send('About ReSpoken');
  });
  
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

app.listen(process.env.PORT || 3000);