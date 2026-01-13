import { Command, Option } from "commander";
import { search } from "./search/main.ts";
import { params_data } from "./search/params.ts";
import { parseDateString, parseNonNegativeInteger } from "./utils.ts";

const program = new Command();

program
  .name("mam-search")
  .description("Search torrents on MAM")
  .version("0.0.1");

program
  .command("search")
  .description("Search torrents")
  .requiredOption("-o --out <path>", "output path")
  .option("-q, --query <string>", "query string")
  .addOption(
    new Option("--field <field...>", "field to search").choices(
      Object.keys(params_data.field.values),
    ).default(params_data.field.defaultValue),
  )
  .addOption(
    new Option("--subset <subset>", "subset to search").choices(
      Object.keys(params_data.subset.values),
    ).default(params_data.subset.defaultValue),
  )
  .addOption(
    new Option("--location <location>", "location to search").choices(
      Object.keys(params_data.location.values),
    ).default(params_data.location.defaultValue),
  )
  // note: add always included "all" param in code, since here would need to use custom parser which would overwrite choice validation!
  .addOption(
    new Option(
      "--category <category...>",
      "category to search (all if none provided)",
    ).choices(Object.keys(params_data.category.values)),
  )
  .addOption(
    new Option(
      "--language <language...>",
      "language to search (all if none provided)",
    ).choices(Object.keys(params_data.language.values)),
  )
  .addOption(
    new Option(
      "--include",
      "include content filters instead of exclude",
    ).argParser((value) => value ? "1" : "0").preset("0").default("0"),
  )
  .addOption(
    new Option(
      "--filter <filter...>",
      "content filter to use (exclude, except if --include is set)",
    ).choices(Object.keys(params_data.filter.values)),
  )
  // todo: validate startDate <= endDate
  .addOption(
    new Option(
      "--startDate <date>",
      "minimum publish date (inclusive)",
    ).argParser(parseDateString),
  )
  // todo: validate endDate >= startDate
  .addOption(
    new Option(
      "--endDate <date>",
      "maximum publish date (inclusive)",
    ).argParser(parseDateString),
  )
  // todo: validate minSize <= maxSize
  .option(
    "--minSize <non-negative integer>",
    "minimum size (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate maxSize >= minSize
  .option(
    "--maxSize <non-negative integer>",
    "maximum size (inclusive)",
    parseNonNegativeInteger,
  )
  .addOption(
    new Option(
      "--unit <unit>",
      "unit for minSize and maxSize",
    ).choices(Object.keys(params_data.unit.values)).default(
      params_data.unit.defaultValue,
    ),
  )
  // todo: validate minSeeders <= maxSeeders
  .option(
    "--minSeeders <non-negative integer>",
    "minimum seeders (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate maxSeeders >= minSeeders
  .option(
    "--maxSeeders <non-negative integer>",
    "maximum seeders (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate minLeechers <= maxLeechers
  .option(
    "--minLeechers <non-negative integer>",
    "minimum leechers (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate maxLeechers >= minLeechers
  .option(
    "--maxLeechers <non-negative integer>",
    "maximum leechers (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate minSnatched <= maxSnatched
  .option(
    "--minSnatched <non-negative integer>",
    "minimum snatched (inclusive)",
    parseNonNegativeInteger,
  )
  // todo: validate maxSnatched >= minSnatched
  .option(
    "--maxSnatched <non-negative integer>",
    "maximum snatched (inclusive)",
    parseNonNegativeInteger,
  )
  .option(
    "--hash <hash>",
    "torrent hash to search (if provided ignores everything else)",
  )
  .addOption(
    new Option(
      "--sort <sort>",
      "sort type",
    ).default(params_data.sort.defaultValue).hideHelp(),
  )
  .addOption(
    new Option(
      "--firstPage <non-negative integer>",
      "first page",
    ).argParser(parseNonNegativeInteger).default(
      params_data.firstPage.defaultValue,
    )
      .hideHelp(),
  )
  .action((options) => search(options));

program.parse();
