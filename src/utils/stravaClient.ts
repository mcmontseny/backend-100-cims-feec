import dotenv from 'dotenv';

dotenv.config();

const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID!;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET!;
const STRAVA_REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN!;

const getStravaAccessToken = async (): Promise<string> => {
    const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: STRAVA_CLIENT_ID,
            client_secret: STRAVA_CLIENT_SECRET,
            refresh_token: STRAVA_REFRESH_TOKEN,
            grant_type: 'refresh_token',
        }),
    });

    const data = await response.json();
    return data.access_token;
};

const getStravaActivities = async (): Promise<any[]> => {
    const accessToken = await getStravaAccessToken();
    const afterTimestamp = 1693526400; // Timestamp para 1 de septiembre de 2023
    const activities = [];
    const pageSize = 200; // Máximo número de actividades por página
    let page = 1;

    while (true) {
        const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?after=${afterTimestamp}&page=${page}&page_size=${pageSize}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const fetchedActivities = await response.json();

        if (fetchedActivities.length === 0) {
            break;
        }

        activities.push(...fetchedActivities);
        page++;
    }

    // Filtrar las actividades de tipo "Hike"
    return activities.filter(activity => activity.type === 'Hike');
};

export { getStravaActivities };
