import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Forbidden2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forbidden2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.02V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 15.5L15.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 15.5L8.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Forbidden2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
        fill="currentColor"
      />
      <Path
        d="M13.0594 11.9999L16.0295 9.02994C16.3195 8.73994 16.3195 8.25994 16.0295 7.96994C15.7395 7.67994 15.2595 7.67994 14.9695 7.96994L11.9995 10.9399L9.02945 7.96994C8.73945 7.67994 8.25945 7.67994 7.96945 7.96994C7.67945 8.25994 7.67945 8.73994 7.96945 9.02994L10.9395 11.9999L7.96945 14.9699C7.67945 15.2599 7.67945 15.7399 7.96945 16.0299C8.11945 16.1799 8.30945 16.2499 8.49945 16.2499C8.68945 16.2499 8.87945 16.1799 9.02945 16.0299L11.9995 13.0599L14.9695 16.0299C15.1195 16.1799 15.3095 16.2499 15.4995 16.2499C15.6895 16.2499 15.8795 16.1799 16.0295 16.0299C16.3195 15.7399 16.3195 15.2599 16.0295 14.9699L13.0594 11.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forbidden2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z"
        fill="currentColor"
      />
      <Path
        d="M8.49945 16.2499C8.30945 16.2499 8.11945 16.1799 7.96945 16.0299C7.67945 15.7399 7.67945 15.2599 7.96945 14.9699L14.9695 7.96994C15.2595 7.67994 15.7395 7.67994 16.0295 7.96994C16.3195 8.25994 16.3195 8.73994 16.0295 9.02994L9.02945 16.0299C8.87945 16.1799 8.68945 16.2499 8.49945 16.2499Z"
        fill="currentColor"
      />
      <Path
        d="M15.4995 16.2499C15.3095 16.2499 15.1195 16.1799 14.9695 16.0299L7.96945 9.02994C7.67945 8.73994 7.67945 8.25994 7.96945 7.96994C8.25945 7.67994 8.73945 7.67994 9.02945 7.96994L16.0295 14.9699C16.3195 15.2599 16.3195 15.7399 16.0295 16.0299C15.8795 16.1799 15.6895 16.2499 15.4995 16.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forbidden2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z"
        fill="currentColor"
      />
      <Path
        d="M8.49945 16.2499C8.30945 16.2499 8.11945 16.1799 7.96945 16.0299C7.67945 15.7399 7.67945 15.2599 7.96945 14.9699L14.9695 7.96994C15.2595 7.67994 15.7395 7.67994 16.0295 7.96994C16.3195 8.25994 16.3195 8.73994 16.0295 9.02994L9.02945 16.0299C8.87945 16.1799 8.68945 16.2499 8.49945 16.2499Z"
        fill="currentColor"
      />
      <Path
        d="M15.4995 16.2499C15.3095 16.2499 15.1195 16.1799 14.9695 16.0299L7.96945 9.02994C7.67945 8.73994 7.67945 8.25994 7.96945 7.96994C8.25945 7.67994 8.73945 7.67994 9.02945 7.96994L16.0295 14.9699C16.3195 15.2599 16.3195 15.7399 16.0295 16.0299C15.8795 16.1799 15.6895 16.2499 15.4995 16.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forbidden2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M8.5 15.5L15.5 8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5 15.5L8.5 8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Forbidden2Bold,
  broken: Forbidden2Broken,
  bulk: Forbidden2Bulk,
  linear: Forbidden2Linear,
  outline: Forbidden2Outline,
  twotone: Forbidden2Twotone,
};

export const Forbidden2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Forbidden2Icon;
