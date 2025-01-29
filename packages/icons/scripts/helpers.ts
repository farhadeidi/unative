/// <reference types="node" />

import { capitalize, toCamelCase } from "remeda";

function prependIfStartsWithNumber(input: string, prefix: string) {
  return input.replace(/^(\d)/, `${prefix}$1`);
}

export const getComponentName = (value: string) => {
  value = value.replaceAll("&", "-");
  value = prependIfStartsWithNumber(value, "i-");
  value = toCamelCase(value);

  return capitalize(toCamelCase(value));
};

export const getVariantName = (iconName: string, variant: string) => {
  return `${getComponentName(iconName)}${capitalize(variant)}`;
};
