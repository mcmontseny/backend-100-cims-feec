import supabase from '@utils/supabaseClient';

export const getMountainsData = async () => {
    const { data, error } = await supabase.from('mountains').select('*');
    if (error) {
        throw new Error(`Error retrieving mountains: ${error.message}`);
    }
    return data;
};
