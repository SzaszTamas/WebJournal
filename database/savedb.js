import { getPool } from './db.js';

export async function insertData(content, user) {
  const pool = await getPool();

  try {
    const query = `
      INSERT INTO content (szoveg, datum, felhasznalo) 
      VALUES (@content, GETDATE(), @user)
    `;

    const request = pool.request();
    request.input('content', content);
    request.input('user', user);

    await request.query(query);
  } catch (err) {
    console.error('Error inserting data:', err);
    throw err;
  }
}
