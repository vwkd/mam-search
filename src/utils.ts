import { InvalidArgumentError } from "commander";

const DATE_REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

export function parseDateString(value: string): string {
  if (!DATE_REGEX.test(value)) {
    throw new InvalidArgumentError("Date must be in YYYY-MM-DD format.");
  }

  return value;
}

export function parseNonNegativeInteger(value: string): number {
  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue) || parsedValue < 0) {
    throw new InvalidArgumentError("Must be non-negative integer.");
  }

  return parsedValue;
}
