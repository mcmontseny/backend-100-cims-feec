import supabase from '../utils/supabaseClient';

const createTables = async () => {
    const createMountainsTable = `
    CREATE TABLE IF NOT EXISTS mountains (
      id VARCHAR PRIMARY KEY,
      name VARCHAR NOT NULL,
      url VARCHAR,
      image VARCHAR,
      height INTEGER,
      region VARCHAR,
      essencial BOOLEAN,
      latitude VARCHAR,
      longitude VARCHAR
    );
  `;

    const createActivitiesTable = `
    CREATE TABLE IF NOT EXISTS activities (
      id BIGINT PRIMARY KEY,
      name VARCHAR NOT NULL,
      distance FLOAT,
      moving_time INTEGER,
      elapsed_time INTEGER,
      total_elevation_gain FLOAT,
      start_date TIMESTAMP,
      start_date_local TIMESTAMP,
      timezone VARCHAR,
      start_lat DOUBLE PRECISION[],
      end_lat DOUBLE PRECISION[],
      average_speed FLOAT,
      max_speed FLOAT,
      elev_high FLOAT,
      elev_low FLOAT
    );
  `;

    const createAscentsTable = `
    CREATE TABLE IF NOT EXISTS ascents (
      id SERIAL PRIMARY KEY,
      mountain_id VARCHAR REFERENCES mountains(id),
      activity_id BIGINT REFERENCES activities(id),
      UNIQUE(mountain_id, activity_id)
    );
  `;

    const { error: errorMountains } = await supabase.rpc('execute_sql', { sql: createMountainsTable });
    if (errorMountains) {
        console.error('Error creating mountains table:', errorMountains);
        return;
    }

    const { error: errorActivities } = await supabase.rpc('execute_sql', { sql: createActivitiesTable });
    if (errorActivities) {
        console.error('Error creating activities table:', errorActivities);
        return;
    }

    const { error: errorAscents } = await supabase.rpc('execute_sql', { sql: createAscentsTable });
    if (errorAscents) {
        console.error('Error creating ascents table:', errorAscents);
        return;
    }

    console.log('All tables checked/created successfully.');
};

export default createTables;
