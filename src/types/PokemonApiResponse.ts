export interface PokeApiResponse {
    count: number;
    next: string;
    previous: string;
    results: PokeApiInfo[];
}

export interface PokeApiInfo {
    name: string;
    url: string;
}

export interface PokeInfo {
    name: string;
    picture: string;
    id: string;
    color?: string;
}
