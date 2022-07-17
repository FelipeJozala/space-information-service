export interface IShipsRepository {
	getAll: () => Promise<any>;
	getById: (id: string) => Promise<any>
}