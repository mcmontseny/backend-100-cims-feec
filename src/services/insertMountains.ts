import supabase from '@utils/supabaseClient';

export interface Mountain {
    id: string;
    url: string;
    image: string;
    name: string;
    height: number;
    region: string;
    essencial: boolean;
    latitude: string;
    longitude: string;
}

const insertMountains = async (mountains: Mountain[]) => {
    const { data, error } = await supabase.from('mountains').upsert(
        mountains,
        { onConflict: 'id' }
    );

    if (error) {
        console.error('Error inserting mountains:', error);
        return;
    }

    console.log('Mountains inserted successfully:', data);
};

export default insertMountains;
