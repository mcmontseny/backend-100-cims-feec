import createTables from './config/setupDatabase';
import insertMountains from './services/insertMountains';
import insertActivities from './services/insertActivities';
import fs from 'fs/promises';
import path from 'path';
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await createTables();

    // Leer el JSON de montañas
    const mountainsFilePath = path.join(__dirname, 'config/muntanyesRepte100CimsFEEC.json');
    try {
        const data = await fs.readFile(mountainsFilePath, 'utf-8');
        const mountains = JSON.parse(data);
        await insertMountains(mountains);
        // Ejecutar la obtención inicial de actividades
        await insertActivities(mountains);
    } catch (err) {
        console.error('Error reading or inserting mountains:', err);
    }
});