import initializeDatabase from '../../intializers/database';
import { seed as docSeeds } from '../documentSeeds';

const seed = async (): Promise<any> => {
  await docSeeds();
};

const run = async (): Promise<any> => {
  console.log('Connecting to DB');
  const connection = await initializeDatabase({ migrationsRun: false });

  console.log('Seeding DB');
  await seed();

  console.log('Closing DB');
  return await connection.close();
};

run();