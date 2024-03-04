import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {
    baseUrl = "https://pokeapi.co/api/v2/";

    constructor(private http: HttpClient) {
    }

    getPokemonById(id: number) {
        return this.http.get(this.baseUrl + 'pokemon/' + {id}).subscribe();
    }

    getPokemonByName(name: string) {
        return this.http.get(`${this.baseUrl}pokemon/${name}`).subscribe();
    }

    getPokemonTypeById(id: number) {
        return this.http.get(this.baseUrl + "type/" + {id}).subscribe();
    }

    getPokemonTypeByName(name: string) {
        return this.http.get(this.baseUrl + "type/" + {name}).subscribe();
    }
}
