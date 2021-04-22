import { Naves } from '../../naves/interface/naves';
import { Personagens } from '../../personagens/interface/personagens';
import { Planetas } from '../../planetas/interface/planetas';
import { Veiculos } from '../../veiculos/interface/veiculos';

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
