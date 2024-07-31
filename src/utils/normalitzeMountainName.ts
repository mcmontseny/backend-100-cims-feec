export const normalizeMountainName = (name: string): string => {
    return name.replace(/[’'´`]/g, "'"); // Reemplaza todas las variantes de apóstrofes y comillas con un solo tipo
};
