import { Filme } from '../../filmes/interface/filmes';

export interface Naves {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: string;
  passenger: number;
  cargo_capacity: number;
  consumables: number;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: [];
  filmes: Filme[];
  created: Date;
  edited: Date;
  url: string;
}
