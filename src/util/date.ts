

export const getReadableDate = (input: string): { day: string, date: string, time: string } => {

    const dateObj = new Date(input);
    const day = dateObj.toLocaleDateString('en-US', { weekday: 'long' }); // weekday long -> full name
    
    const date = dateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const time = dateObj.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return {
        day, // Sunday
        date, // 26 April 2026
        time // 19:45
    };
};

