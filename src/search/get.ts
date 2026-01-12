import { getSetCookies } from "@std/http";
import type { ErrorResponse, SearchResponse } from "./types.ts";

const ENDPOINT_URL =
  "https://www.myanonamouse.net/tor/js/loadSearchJSONbasic.php";
const BROWSE_URL = "https://www.myanonamouse.net/tor/browse.php";
const PAGE_SIZE = 20;

let mam_id_new: string | null = null;

/**
 * Fetch search results page from MyAnonamouse
 *
 * @param params search parameters
 * @param pageNumber page number, 0-based
 * @param uid UID cookie value
 * @param mam_id MAM ID cookie value
 * @returns search results
 */
export async function getSearchResultPage(
  params: Map<string, string>,
  pageNumber: number,
  mam_id: string,
  uid: string,
): Promise<SearchResponse | ErrorResponse> {
  console.debug(`Fetching page ${pageNumber}...`);

  mam_id_new = mam_id_new ?? mam_id;

  const headers = new Headers({
    // note: invalid header for GET request, only keep for accuracy
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Cookie": `mam_id=${mam_id_new}; uid=${uid}`,
    "Referer": pageNumber == 0
      ? BROWSE_URL
      : createUrl(BROWSE_URL, pageNumber - 1, params),
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.10 Safari/605.1.1",
  });

  const url = createUrl(ENDPOINT_URL, pageNumber, params);

  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
  }

  const set_cookies = getSetCookies(res.headers);

  for (const cookie of set_cookies) {
    if (cookie.name == "mam_id") {
      mam_id_new = cookie.value;
    } else if (cookie.name == "uid") {
      // noop
    } else {
      console.warn(`Skipping unexpected cookie: ${cookie.name}`);
    }
  }

  const results: SearchResponse | ErrorResponse = await res.json();

  return results;
}

/**
 * Create search results URL
 *
 * @param baseUrl base URL
 * @param pageNumber page number, 0-based
 * @param params search parameters
 * @returns search results URL
 */
function createUrl(
  baseUrl: string,
  pageNumber: number,
  params: Map<string, string>,
): string {
  const url = new URL(baseUrl);

  for (const [key, value] of params.entries()) {
    url.searchParams.append(key, value);
  }

  const offset = pageNumber * PAGE_SIZE;

  url.searchParams.append("tor[startNumber]", offset.toString());

  return url.toString();
}
