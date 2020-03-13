export interface Movie {
    title: string;
    vote_average: number;
    release_date: Date; 
    overview: string;
    credits: {
        cast: [
            {
                name: string;
                character: string;
                profile_path: string;
            }
        ]
    }
}