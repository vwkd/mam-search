import { delay } from "@std/async";
import { getSearchResultPage } from "./get.ts";
import { params_data } from "./params.ts";
import { isErrorResponse, Options } from "./types.ts";

const DELAY_MS = 1000;

/**
 * Search torrents on MyAnonamouse
 *
 * @param options search options
 */
export async function search(options: Options): Promise<void> {
  const { out, firstPage } = options;

  const MAM_ID = Deno.env.get("MAM_ID");
  const UID = Deno.env.get("UID");

  if (!MAM_ID) {
    throw new Error("MAM_ID environment variable is not set.");
  }

  if (!UID) {
    throw new Error("UID environment variable is not set.");
  }

  const params = createParams(options);

  const results = [];

  for (let pageNumber = firstPage;; pageNumber += 1) {
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

/**
 * Create search parameters
 *
 * @param options search options
 * @returns search parameters
 */
function createParams(options: Options): Map<string, string> {
  const {
    query,
    field,
    subset,
    location,
    category,
    language,
    include,
    filter,
    startDate,
    endDate,
    minSize,
    maxSize,
    unit,
    minSeeders,
    maxSeeders,
    minLeechers,
    maxLeechers,
    minSnatched,
    maxSnatched,
    hash,
    sort,
  } = options;

  const params = new Map<string, string>();

  if (query) {
    params.set(params_data.query.key, query);
  }

  for (const f of field) {
    params.set(params_data.field.values[f].key, params_data.field.value);
  }

  params.set(params_data.subset.key, params_data.subset.values[subset].value);
  params.set(
    params_data.location.key,
    params_data.location.values[location].value,
  );

  if (category) {
    for (const c of category) {
      params.set(
        params_data.category.key,
        params_data.category.values[c].value,
      );
    }
  }

  // note: always included "all" parameter
  params.set(
    params_data.category.key,
    params_data.category.values["all"].value,
  );

  if (language) {
    for (const l of language) {
      params.set(
        params_data.language.key,
        params_data.language.values[l].value,
      );
    }
  }

  params.set(params_data.include.key, include);

  if (filter) {
    for (const f of filter) {
      params.set(params_data.filter.key, params_data.filter.values[f].value);
    }
  }

  if (startDate) {
    params.set(params_data.startDate.key, startDate);
  }

  if (endDate) {
    params.set(params_data.endDate.key, endDate);
  }

  if (minSize !== undefined) {
    params.set(params_data.minSize.key, minSize.toString());
  }

  if (maxSize !== undefined) {
    params.set(params_data.maxSize.key, maxSize.toString());
  }

  params.set(params_data.unit.key, params_data.unit.values[unit].value);

  if (minSeeders !== undefined) {
    params.set(params_data.minSeeders.key, minSeeders.toString());
  }

  if (maxSeeders !== undefined) {
    params.set(params_data.maxSeeders.key, maxSeeders.toString());
  }

  if (minLeechers !== undefined) {
    params.set(params_data.minLeechers.key, minLeechers.toString());
  }

  if (maxLeechers !== undefined) {
    params.set(params_data.maxLeechers.key, maxLeechers.toString());
  }

  if (minSnatched !== undefined) {
    params.set(params_data.minSnatched.key, minSnatched.toString());
  }

  if (maxSnatched !== undefined) {
    params.set(params_data.maxSnatched.key, maxSnatched.toString());
  }

  if (hash) {
    params.set(params_data.hash.key, hash);
  }

  params.set(params_data.sort.key, sort);

  return params;
}
