import { Naves } from './naves';
import { Personagens } from './personagens';
import { Planetas } from './planetas';
import { Veiculos } from './veiculos';

export interface Filme {
  id: number;
  title: string;
  episoe_id: number;
  opening_crawl: string;
  director: string;
  producer: String;
  release_date: Date;
  characteres: Personagens[];
  planets: Planetas[];
  starship: Naves[];
  veicles: Veiculos[];
  created: Date;
  edited: Date;
  url: string;
}
