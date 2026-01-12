import { delay } from "@std/async";
import { getSearchResultPage } from "./get.ts";
import { isErrorResponse, Options } from "./types.ts";

const DELAY_MS = 1000;

/**
 * Search torrents on MyAnonamouse
 *
 * @param options search options
 */
export async function search(options: Options): Promise<void> {
  const { out } = options;

  const MAM_ID = Deno.env.get("MAM_ID");
  const UID = Deno.env.get("UID");

  if (!MAM_ID) {
    throw new Error("MAM_ID environment variable is not set.");
  }

  if (!UID) {
    throw new Error("UID environment variable is not set.");
  }

  const params = new Map<string, string>();

  // todo: make params configurable
  params.set("tor[srchIn][title]", "true");
  params.set("tor[srchIn][author]", "true");
  params.set("tor[searchType]", "all");
  params.set("tor[searchIn]", "torrents");
  params.set("tor[cat][]", "0");
  params.set("tor[browseFlagsHideVsShow]", "0");
  params.set("tor[unit]", "1");
  params.set("tor[sortType]", "default");

  const results = [];

  for (let pageNumber = 0;; pageNumber += 1) {
    const res = await getSearchResultPage(params, pageNumber, MAM_ID, UID);

    if (isErrorResponse(res)) {
      if (res.error.includes("Nothing returned")) {
        break;
      }

      throw new Error(`Error fetching page ${pageNumber}: ${res.error}`);
    }

    results.push(...res.data);

    await delay(DELAY_MS);
  }

  console.debug(`Got ${results.length} results.`);

  await Deno.writeTextFile(out, JSON.stringify(results));
}
