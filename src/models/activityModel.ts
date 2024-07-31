import supabase from '@utils/supabaseClient';

export const getActivitiesData = async () => {
    const { data, error } = await supabase.from('activities').select('*');
    if (error) {
        throw new Error(`Error retrieving activities: ${error.message}`);
    }
    return data;
};
