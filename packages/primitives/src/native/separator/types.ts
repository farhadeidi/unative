import type { SlottableViewProps, ViewRef } from "../shared/types";

type RootProps = SlottableViewProps & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

type RootRef = ViewRef;

export type { RootProps, RootRef };
