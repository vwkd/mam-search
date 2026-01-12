import { Command } from "commander";
import { search } from "./search/main.ts";

const program = new Command();

program
  .name("mam-search")
  .description("Search torrents on MAM")
  .version("0.0.1");

program
  .command("search")
  .description("Search torrents")
  .requiredOption("-o --out <path>", "output path")
  .action((options) => search(options));

program.parse();
