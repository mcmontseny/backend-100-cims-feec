import supabase from '@utils/supabaseClient';

export const getAscentsData = async () => {
    const { data, error } = await supabase.from('ascents').select('*');
    if (error) {
        throw new Error(`Error retrieving ascents: ${error.message}`);
    }
    return data;
};
