import { Filme } from './filmes';

export interface Veiculos {
  id: number;
  name: string;
  model: string;
  manufacturecer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: number;
  vehicles_class: string;
  films: Filme[];
  created: Date;
  edited: Date;
  url: string;
}
