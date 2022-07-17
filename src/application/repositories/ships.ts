import { IHttp } from "@application/protocols";
import { IShipsRepository } from "@domain/repositories/ships";

export class ShipsRepository implements IShipsRepository {
	private readonly prefix = ''

	constructor( private readonly httpClient: IHttp) {}

	getAll = (): Promise<any> => {
		return this.httpClient.get(this.prefix);
	}

	getById = (id: string): Promise<any> => {
		return this.httpClient.get(`${this.prefix}/${id}`);
	}
}