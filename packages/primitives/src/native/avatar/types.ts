import type { Image } from "react-native";

import type {
  ComponentPropsWithAsChild,
  SlottableViewProps,
  ViewRef,
} from "../shared/types";

export type RootProps = SlottableViewProps & {
  alt: string;
};

export type ImageProps = Omit<
  ComponentPropsWithAsChild<typeof Image>,
  "alt"
> & {
  children?: React.ReactNode;
  onLoadingStatusChange?: (status: "error" | "loaded") => void;
};

export type FallbackProps = SlottableViewProps;

export type RootRef = ViewRef;
export type ImageRef = React.ElementRef<typeof Image>;
export type FallbackRef = ViewRef;
