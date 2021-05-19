export interface IFilm {
    film_id?: number;
    title?: string;
    description?:string;
    release_year?:Date | string;
    language_id?:number;
    rental_rate?:number;
    replacement_cost?:number;
    rating?:number;
    last_update?:Date | string;
    full_text?:string;
    rental_duration?:number;
    length:number;
}