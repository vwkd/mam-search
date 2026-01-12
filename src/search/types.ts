export interface Options {
  out: string;
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
