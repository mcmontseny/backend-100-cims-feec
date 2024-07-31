import supabase from '@utils/supabaseClient';
import {getStravaActivities} from '@utils/stravaClient';
import {Mountain} from "./insertMountains";
import {normalizeMountainName} from "@utils/normalitzeMountainName";

const insertActivities = async (mountains: Mountain[]) => {
    const activities = await getStravaActivities();

    for (const activity of activities) {
        const {
            id,
            name,
            distance,
            moving_time,
            elapsed_time,
            total_elevation_gain,
            start_date,
            start_date_local,
            timezone,
            start_latlng,
            end_latlng,
            average_speed,
            max_speed,
            elev_high,
            elev_low
        } = activity;

        // Normalizar el nombre de la actividad
        const normalizedActivityName = normalizeMountainName(name);

        // Filtrar actividades que contengan "FEEC" en el nombre
        if (!normalizedActivityName.includes('FEEC')) continue;

        // Filtrar actividades que contengan el nombre de una montaña del reto
        const matchedMountains = mountains.filter(mountain => normalizedActivityName.includes(normalizeMountainName(mountain.name)));
        if (matchedMountains.length === 0) continue;

        const {data, error} = await supabase.from('activities').upsert(
            {
                id,
                name,
                distance,
                moving_time,
                elapsed_time,
                total_elevation_gain,
                start_date,
                start_date_local,
                timezone,
                start_lat: start_latlng,
                end_lat: end_latlng,
                average_speed,
                max_speed,
                elev_high,
                elev_low
            },
            {onConflict: 'id'}
        );

        if (error) {
            console.error(`Error inserting activity ${id}:`, error);
            continue;
        }

        console.log(`Activity ${id} inserted/updated successfully`);

        for (const matchedMountain of matchedMountains) {
            const ascent = {mountain_id: matchedMountain.id, activity_id: id};
            const {error: ascentError} = await supabase.from('ascents').upsert(
                ascent,
                {onConflict: 'mountain_id, activity_id'}
            );

            if (ascentError) {
                console.error(`Error inserting ascent for activity ${id} and mountain ${matchedMountain.id}:`, ascentError);
            } else {
                console.log(`Ascent for activity ${id} and mountain ${matchedMountain.id} inserted successfully`);
            }
        }
    }
};

export default insertActivities;
