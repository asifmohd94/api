export interface IFilmSearchFilter {
    Title?: string|undefined;
    ReleaseDate?: {
        Start: Date | string;
        End: Date | string;
    };
    Category?: string;
    Id?: number|undefined;
    Language?: number;
    Rating?: number;
}