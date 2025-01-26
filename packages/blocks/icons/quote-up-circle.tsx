import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const QuoteUpCircleBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.61 11.84C11.61 14.92 10.94 15.61 9.15 16.67C9.03 16.74 8.9 16.77 8.77 16.77C8.51 16.77 8.26 16.64 8.12 16.4C7.91 16.04 8.03 15.58 8.38 15.37C9.59 14.65 10.01 14.39 10.09 12.58H8.19C7.1 12.58 6.25 11.73 6.25 10.64V9.16C6.25 8.07 7.1 7.22 8.19 7.22H9.68C10.75 7.22 11.62 8.09 11.62 9.16V11.84H11.61ZM17.75 11.84C17.75 14.92 17.08 15.61 15.29 16.67C15.17 16.74 15.04 16.77 14.91 16.77C14.65 16.77 14.4 16.64 14.26 16.4C14.05 16.04 14.17 15.58 14.52 15.37C15.73 14.65 16.15 14.39 16.23 12.58H14.32C13.23 12.58 12.38 11.73 12.38 10.64V9.16C12.38 8.07 13.23 7.22 14.32 7.22H15.81C16.88 7.22 17.75 8.09 17.75 9.16V11.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M17.0009 11.84H14.3209C13.6109 11.84 13.1309 11.3 13.1309 10.65V9.15997C13.1309 8.50997 13.6109 7.96997 14.3209 7.96997H15.8109C16.4609 7.96997 17.0009 8.50997 17.0009 9.15997V11.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0002 11.8401C17.0002 14.6301 16.4802 15.1001 14.9102 16.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8602 11.84H8.18022C7.47022 11.84 6.99023 11.3 6.99023 10.65V9.15997C6.99023 8.50997 7.47022 7.96997 8.18022 7.96997H9.67023C10.3202 7.96997 10.8602 8.50997 10.8602 9.15997V11.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8595 11.8401C10.8595 14.6301 10.3395 15.1001 8.76953 16.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteUpCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M15.8109 7.21997H14.3209C13.2309 7.21997 12.3809 8.06997 12.3809 9.15997V10.65C12.3809 11.74 13.2309 12.59 14.3209 12.59H16.2309C16.1509 14.4 15.7309 14.67 14.5209 15.38C14.1609 15.59 14.0508 16.05 14.2608 16.41C14.4008 16.65 14.6509 16.78 14.9109 16.78C15.0409 16.78 15.1708 16.75 15.2908 16.68C17.0808 15.62 17.7509 14.93 17.7509 11.85V9.17999C17.7509 8.08999 16.8809 7.21997 15.8109 7.21997Z"
        fill="currentColor"
      />
      <Path
        d="M9.67999 7.21997H8.19C7.1 7.21997 6.25 8.06997 6.25 9.15997V10.65C6.25 11.74 7.1 12.59 8.19 12.59H10.1C10.02 14.4 9.6 14.67 8.39 15.38C8.03 15.59 7.92 16.05 8.13 16.41C8.27 16.65 8.52 16.78 8.78 16.78C8.91 16.78 9.04 16.75 9.16 16.68C10.95 15.62 11.62 14.93 11.62 11.85V9.17999C11.61 8.08999 10.74 7.21997 9.67999 7.21997Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.9999 11.84H14.3199C13.6099 11.84 13.1299 11.3 13.1299 10.65V9.15997C13.1299 8.50997 13.6099 7.96997 14.3199 7.96997H15.8099C16.4599 7.96997 16.9999 8.50997 16.9999 9.15997V11.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9999 11.8401C16.9999 14.6301 16.4799 15.1001 14.9099 16.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.86 11.84H8.17998C7.46998 11.84 6.98999 11.3 6.98999 10.65V9.15997C6.98999 8.50997 7.46998 7.96997 8.17998 7.96997H9.66998C10.32 7.96997 10.86 8.50997 10.86 9.15997V11.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.86 11.8401C10.86 14.6301 10.34 15.1001 8.77002 16.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteUpCircleOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.9989 12.5898H14.3189C13.2289 12.5898 12.3789 11.7398 12.3789 10.6498V9.15973C12.3789 8.06973 13.2289 7.21973 14.3189 7.21973H15.8089C16.8789 7.21973 17.7489 8.08973 17.7489 9.15973V11.8298C17.7489 12.2498 17.4089 12.5898 16.9989 12.5898ZM14.3189 8.71973C13.9989 8.71973 13.8789 8.95973 13.8789 9.15973V10.6498C13.8789 10.8498 13.9889 11.0898 14.3189 11.0898H16.2489V9.16974C16.2489 8.92974 16.0489 8.72974 15.8089 8.72974H14.3189V8.71973Z"
        fill="currentColor"
      />
      <Path
        d="M14.91 16.7798C14.65 16.7798 14.4 16.6498 14.26 16.4098C14.05 16.0498 14.17 15.5898 14.52 15.3798C15.88 14.5698 16.25 14.3598 16.25 11.8398C16.25 11.4298 16.59 11.0898 17 11.0898C17.41 11.0898 17.75 11.4298 17.75 11.8398C17.75 14.9198 17.08 15.6098 15.29 16.6698C15.17 16.7398 15.04 16.7798 14.91 16.7798Z"
        fill="currentColor"
      />
      <Path
        d="M10.8602 12.5898H8.18022C7.09022 12.5898 6.24023 11.7398 6.24023 10.6498V9.15973C6.24023 8.06973 7.09022 7.21973 8.18022 7.21973H9.67023C10.7402 7.21973 11.6102 8.08973 11.6102 9.15973V11.8298C11.6102 12.2498 11.2802 12.5898 10.8602 12.5898ZM8.19023 8.71973C7.87023 8.71973 7.75023 8.95973 7.75023 9.15973V10.6498C7.75023 10.8498 7.86023 11.0898 8.19023 11.0898H10.1202V9.16974C10.1202 8.92974 9.92022 8.72974 9.68022 8.72974H8.19023V8.71973Z"
        fill="currentColor"
      />
      <Path
        d="M8.76934 16.7798C8.50934 16.7798 8.25933 16.6498 8.11933 16.4098C7.90933 16.0498 8.02934 15.5898 8.37934 15.3798C9.73934 14.5698 10.1093 14.3598 10.1093 11.8398C10.1093 11.4298 10.4493 11.0898 10.8593 11.0898C11.2693 11.0898 11.6093 11.4298 11.6093 11.8398C11.6093 14.9198 10.9393 15.6098 9.14933 16.6698C9.02933 16.7398 8.89934 16.7798 8.76934 16.7798Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpCircleTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M16.9989 11.8398H14.3189C13.6089 11.8398 13.1289 11.2998 13.1289 10.6498V9.15973C13.1289 8.50973 13.6089 7.96973 14.3189 7.96973H15.8089C16.4589 7.96973 16.9989 8.50973 16.9989 9.15973V11.8398Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.0002 11.8398C17.0002 14.6298 16.4802 15.0998 14.9102 16.0298"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.8602 11.8398H8.18022C7.47022 11.8398 6.99023 11.2998 6.99023 10.6498V9.15973C6.99023 8.50973 7.47022 7.96973 8.18022 7.96973H9.67023C10.3202 7.96973 10.8602 8.50973 10.8602 9.15973V11.8398Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.8595 11.8398C10.8595 14.6298 10.3395 15.0998 8.76953 16.0298"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: QuoteUpCircleBold,
  broken: QuoteUpCircleBroken,
  bulk: QuoteUpCircleBulk,
  linear: QuoteUpCircleLinear,
  outline: QuoteUpCircleOutline,
  twotone: QuoteUpCircleTwotone,
};

export const QuoteUpCircleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
