import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {chickenList} from './chickens.data';

export interface IParents {
    parentOne: string;
    parentTwo: string;
}

export interface IChicken {
    type: string;
    parents: IParents;
}

@Injectable({
    providedIn: 'root'
})
export class ChickenService {

    public getChickens (): Observable<IChicken[]> {
        return of(chickenList);
    }
}
