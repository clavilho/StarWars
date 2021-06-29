import { Filme } from './filmes';
import { Personagens } from './personagens';

export interface Planetas {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: Personagens[];
  films: Filme[];
  created: Date;
  edited: Date;
  url: string;
}
