export const formatExampleData = (data: any): string => {
    if (!data || typeof data !== 'object') {
        return 'Invalid data';
    }

    return Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
};