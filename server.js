import express, { urlencoded, json } from 'express';
import expressLayouts from 'express-ejs-layouts';
import { join } from 'path';
import { connectToDb, getPool } from './database/db.js';
import { insertData } from './database/savedb.js';

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true })); 
app.use(json()); 

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', join('views'));
app.set('layout', 'layout'); 

app.use(express.static(join('public')));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/journal', (req, res) => {
  res.render('journal', { title: 'Journal Page' });
});

app.post('/api/save-journal', async (req, res) => {
  try {
    const pool = await getPool();
    let user = 0;
    insertData(req.body.content, user);
    res.status(200).json({ message: 'Journal saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save journal' });
  }
});

app.listen(port, () => {
  connectToDb();
  console.log(`Server running at http://localhost:${port}`);
});