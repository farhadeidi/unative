import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const QuoteDownCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.61 14.84C11.61 15.93 10.76 16.78 9.67 16.78H8.19C7.12 16.78 6.25 15.91 6.25 14.84V12.17C6.25 9.09 6.92 8.4 8.71 7.34C8.83 7.27 8.96 7.24 9.09 7.24C9.35 7.24 9.6 7.37 9.74 7.61C9.95 7.97 9.83 8.43 9.48 8.64C8.27 9.34 7.85 9.6 7.77 11.41H9.68C10.77 11.41 11.62 12.26 11.62 13.35V14.84H11.61ZM17.75 14.84C17.75 15.93 16.9 16.78 15.81 16.78H14.32C13.25 16.78 12.38 15.91 12.38 14.84V12.17C12.38 9.09 13.05 8.4 14.84 7.34C14.96 7.27 15.09 7.24 15.22 7.24C15.48 7.24 15.73 7.37 15.87 7.61C16.08 7.97 15.96 8.43 15.61 8.64C14.4 9.36 13.98 9.62 13.9 11.43H15.81C16.9 11.43 17.75 12.28 17.75 13.37V14.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownCircleBroken = ({
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
        d="M7 12.1599H9.67999C10.39 12.1599 10.87 12.6999 10.87 13.3499V14.84C10.87 15.49 10.39 16.03 9.67999 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.1599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1406 12.1599H15.8206C16.5306 12.1599 17.0106 12.6999 17.0106 13.3499V14.84C17.0106 15.49 16.5306 16.03 15.8206 16.03H14.3306C13.6806 16.03 13.1406 15.49 13.1406 14.84V12.1599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1406 12.16C13.1406 9.36997 13.6606 8.89997 15.2306 7.96997"
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

const QuoteDownCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.19 16.78H9.67999C10.77 16.78 11.62 15.93 11.62 14.84V13.35C11.62 12.26 10.77 11.41 9.67999 11.41H7.77C7.85 9.59997 8.27 9.33 9.48 8.62C9.84 8.41 9.95001 7.95003 9.74001 7.59003C9.60001 7.35003 9.35 7.21997 9.09 7.21997C8.96 7.21997 8.83001 7.25001 8.71001 7.32001C6.92001 8.38001 6.25 9.07002 6.25 12.15V14.82C6.25 15.91 7.12 16.78 8.19 16.78Z"
        fill="currentColor"
      />
      <Path
        d="M14.3209 16.78H15.8109C16.9009 16.78 17.7509 15.93 17.7509 14.84V13.35C17.7509 12.26 16.9009 11.41 15.8109 11.41H13.9008C13.9808 9.59997 14.4009 9.33 15.6109 8.62C15.9709 8.41 16.0808 7.95003 15.8708 7.59003C15.7308 7.35003 15.4809 7.21997 15.2209 7.21997C15.0909 7.21997 14.9609 7.25001 14.8409 7.32001C13.0509 8.38001 12.3809 9.07002 12.3809 12.15V14.82C12.3909 15.91 13.2609 16.78 14.3209 16.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownCircleLinear = ({
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
        d="M7 12.1599H9.67999C10.39 12.1599 10.87 12.6999 10.87 13.3499V14.84C10.87 15.49 10.39 16.03 9.67999 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.1599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1399 12.1599H15.8199C16.5299 12.1599 17.0099 12.6999 17.0099 13.3499V14.84C17.0099 15.49 16.5299 16.03 15.8199 16.03H14.3299C13.6799 16.03 13.1399 15.49 13.1399 14.84V12.1599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1399 12.16C13.1399 9.36997 13.6599 8.89997 15.2299 7.96997"
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

const QuoteDownCircleOutline = ({
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
        d="M9.67999 16.78H8.19C7.12 16.78 6.25 15.91 6.25 14.84V12.1699C6.25 11.7599 6.59 11.4199 7 11.4199H9.67999C10.77 11.4199 11.62 12.2699 11.62 13.3599V14.8499C11.61 15.9199 10.76 16.78 9.67999 16.78ZM7.75 12.9099V14.83C7.75 15.07 7.95 15.27 8.19 15.27H9.67999C9.99999 15.27 10.12 15.03 10.12 14.83V13.34C10.12 13.14 10.01 12.9 9.67999 12.9H7.75V12.9099Z"
        fill="currentColor"
      />
      <Path
        d="M7 12.9102C6.59 12.9102 6.25 12.5702 6.25 12.1602C6.25 9.08022 6.92001 8.39027 8.71001 7.33027C9.06001 7.12027 9.53001 7.24028 9.74001 7.59028C9.95001 7.94028 9.83 8.41024 9.48 8.62024C8.12 9.43024 7.75 9.64022 7.75 12.1602C7.75 12.5802 7.41 12.9102 7 12.9102Z"
        fill="currentColor"
      />
      <Path
        d="M15.8089 16.78H14.3189C13.2489 16.78 12.3789 15.91 12.3789 14.84V12.1699C12.3789 11.7599 12.7189 11.4199 13.1289 11.4199H15.8089C16.8989 11.4199 17.7489 12.2699 17.7489 13.3599V14.8499C17.7489 15.9199 16.8989 16.78 15.8089 16.78ZM13.8889 12.9099V14.83C13.8889 15.07 14.0889 15.27 14.3289 15.27H15.8189C16.1389 15.27 16.2589 15.03 16.2589 14.83V13.34C16.2589 13.14 16.1489 12.9 15.8189 12.9H13.8889V12.9099Z"
        fill="currentColor"
      />
      <Path
        d="M13.1406 12.9102C12.7306 12.9102 12.3906 12.5702 12.3906 12.1602C12.3906 9.08022 13.0606 8.39027 14.8506 7.33027C15.2106 7.12027 15.6706 7.24028 15.8806 7.59028C16.0906 7.95028 15.9706 8.41024 15.6206 8.62024C14.2606 9.43024 13.8906 9.64022 13.8906 12.1602C13.8906 12.5802 13.5506 12.9102 13.1406 12.9102Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownCircleTwotone = ({
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
          d="M7 12.1597H9.67999C10.39 12.1597 10.87 12.6997 10.87 13.3497V14.8397C10.87 15.4897 10.39 16.0297 9.67999 16.0297H8.19C7.54 16.0297 7 15.4897 7 14.8397V12.1597Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 12.1597C7 9.36973 7.52 8.89973 9.09 7.96973"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.1406 12.1597H15.8206C16.5306 12.1597 17.0106 12.6997 17.0106 13.3497V14.8397C17.0106 15.4897 16.5306 16.0297 15.8206 16.0297H14.3306C13.6806 16.0297 13.1406 15.4897 13.1406 14.8397V12.1597Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.1406 12.1597C13.1406 9.36973 13.6606 8.89973 15.2306 7.96973"
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
  bold: QuoteDownCircleBold,
  broken: QuoteDownCircleBroken,
  bulk: QuoteDownCircleBulk,
  linear: QuoteDownCircleLinear,
  outline: QuoteDownCircleOutline,
  twotone: QuoteDownCircleTwotone,
};

export const QuoteDownCircleIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
