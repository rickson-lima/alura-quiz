/* eslint-disable */ 
import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHead('Acess-Control-Allow-Credentials', true);
  response.setHead('Acess-Control-Allow-Origin', '*');
  response.setHead('Acess-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST PUT');

  response.json(db);
}
