import { params_data } from "./params.ts";

export interface Options {
  out: string;
  query?: string;
  field: (keyof typeof params_data.field.values)[];
  subset: keyof typeof params_data.subset.values;
  location: keyof typeof params_data.location.values;
  category?: (keyof typeof params_data.category.values)[];
  language?: (keyof typeof params_data.language.values)[];
  include: "1" | "0";
  filter?: (keyof typeof params_data.filter.values)[];
  startDate?: string;
  endDate?: string;
  minSize?: number;
  maxSize?: number;
  unit: keyof typeof params_data.unit.values;
  minSeeders?: number;
  maxSeeders?: number;
  minLeechers?: number;
  maxLeechers?: number;
  minSnatched?: number;
  maxSnatched?: number;
  hash?: string;
  sort: "default";
  firstPage: 0;
}

export function isErrorResponse(
  result: SearchResponse | ErrorResponse,
): result is ErrorResponse {
  return "error" in result;
}

export interface ErrorResponse {
  error: string;
}

export interface SearchResponse {
  perpage: number;
  start: number;
  data: Entry[];
  total: number;
  found: number;
}

export interface Entry {
  id: number;
  language: number;
  lang_code: string;
  main_cat: number;
  category: number;
  mediatype: number;
  maincat: number;
  categories: string;
  catname: string;
  size: string;
  numfiles: number;
  vip: number;
  vip_expire: number;
  free: number;
  personal_freeleech: number;
  fl_vip: number;
  title: string;
  w: number;
  tags: number | string;
  author_info: string;
  narrator_info: string;
  series_info: string;
  filetype: string;
  seeders: number;
  leechers: number;
  added: Date;
  browseflags: number;
  times_completed: number;
  comments: number;
  bookmarked: null;
  my_snatched: number;
  poster_type: string;
  mediainfo: string;
  ownership: string;
  cat: string;
}
