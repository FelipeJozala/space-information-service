import { IHttp } from "@application/protocols";
import { IAgencies, IAgenciesRepository } from "@domain/repositories";

export class AgenciesRepository implements IAgenciesRepository {

	prefix= 'agencies';

	constructor ( private readonly httpClient: IHttp ) {}

  getAll = (params?: IAgencies.Params): Promise<IAgencies.Model> => {
    return this.httpClient.get(this.prefix, params )
  }
}
