import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const EraserBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12.52 15.75L11.26 17.01C10.62 17.66 9.57 17.66 8.92 17.01L6.99 15.08C6.34 14.43 6.35 13.39 6.99 12.74L8.26 11.48C8.46 11.29 8.77 11.29 8.97 11.48L12.53 15.04C12.72 15.24 12.72 15.56 12.52 15.75ZM17.01 11.26L13.93 14.34C13.73 14.54 13.42 14.54 13.22 14.34L9.66 10.78C9.46 10.58 9.46 10.27 9.66 10.07L12.74 6.99C13.38 6.34 14.43 6.34 15.08 6.99L17.01 8.92C17.66 9.57 17.66 10.62 17.01 11.26Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EraserBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.98945 15.08L8.92944 17.02C9.56944 17.66 10.6295 17.66 11.2695 17.02L17.0195 11.27C17.6595 10.63 17.6595 9.57 17.0195 8.93L15.0794 6.99001C14.4394 6.35001 13.3795 6.35001 12.7395 6.99001L6.98945 12.74C6.33945 13.38 6.33945 14.43 6.98945 15.08Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.30859 10.4199L13.5786 14.6899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EraserBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0303 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0303C21.4503 20.5 21.7803 20.84 21.7803 21.25C21.7803 21.66 21.4503 22 21.0303 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.41 16.3401L10.66 21.0901C9.54997 22.2001 7.77002 22.2601 6.59002 21.2701C6.52002 21.2101 6.46002 21.1501 6.40002 21.0901L5.53003 20.2201L3.73999 18.4301L2.88 17.5701C2.81 17.5001 2.75 17.4301 2.69 17.3601C1.71 16.1801 1.78 14.4201 2.88 13.3201L6.57 9.64008L7.63 8.58008L15.41 16.3401Z"
        fill="currentColor"
      />
      <Path
        d="M21.1208 10.6399L15.4108 16.3399L7.63086 8.57994L13.3409 2.87994C14.5109 1.70994 16.4308 1.70994 17.6008 2.87994L21.1208 6.38994C22.2908 7.55994 22.2908 9.46994 21.1208 10.6399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EraserLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.98994 15.08L8.92993 17.02C9.56993 17.66 10.6299 17.66 11.2699 17.02L17.0199 11.27C17.6599 10.63 17.6599 9.57 17.0199 8.93L15.0799 6.99001C14.4399 6.35001 13.3799 6.35001 12.7399 6.99001L6.98994 12.74C6.33994 13.38 6.33994 14.43 6.98994 15.08Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.31006 10.4199L13.5801 14.6899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EraserOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M10.0911 18.2499C9.47109 18.2499 8.8611 18.0199 8.3911 17.5499L6.45109 15.6099C5.51109 14.6699 5.51109 13.1499 6.45109 12.2099L12.2011 6.45988C13.1411 5.51988 14.6611 5.51988 15.6011 6.45988L17.5411 8.39987C18.4811 9.33987 18.4811 10.8599 17.5411 11.7999L11.7911 17.5499C11.3211 18.0099 10.7111 18.2499 10.0911 18.2499ZM7.5211 14.5499L9.4611 16.4899C9.8111 16.8399 10.3911 16.8399 10.7411 16.4899L16.4911 10.7399C16.8411 10.3899 16.8411 9.80988 16.4911 9.45988L14.5511 7.51988C14.2011 7.16988 13.6211 7.16988 13.2711 7.51988L7.5211 13.2699C7.1711 13.6199 7.1711 14.1899 7.5211 14.5499Z"
        fill="currentColor"
      />
      <Path
        d="M13.5802 15.4401C13.3902 15.4401 13.2002 15.3701 13.0502 15.2201L8.77023 10.9401C8.48023 10.6501 8.48023 10.1701 8.77023 9.8801C9.06023 9.5901 9.54023 9.5901 9.83023 9.8801L14.1102 14.1601C14.4002 14.4501 14.4002 14.9301 14.1102 15.2201C13.9702 15.3701 13.7702 15.4401 13.5802 15.4401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const EraserTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.98945 15.0798L8.92944 17.0198C9.56944 17.6598 10.6295 17.6598 11.2695 17.0198L17.0195 11.2698C17.6595 10.6298 17.6595 9.56975 17.0195 8.92975L15.0794 6.98977C14.4394 6.34977 13.3795 6.34977 12.7395 6.98977L6.98945 12.7398C6.33945 13.3798 6.33945 14.4298 6.98945 15.0798Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.30859 10.4199L13.5786 14.6899"
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
  bold: EraserBold,
  broken: EraserBroken,
  bulk: EraserBulk,
  linear: EraserLinear,
  outline: EraserOutline,
  twotone: EraserTwotone,
};

export const EraserIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
