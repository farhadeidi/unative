import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const RepeatCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.19 15.94C17.15 16.03 17.1 16.11 17.03 16.18L15.34 17.87C15.19 18.02 15 18.09 14.81 18.09C14.62 18.09 14.43 18.02 14.28 17.87C13.99 17.58 13.99 17.1 14.28 16.81L14.69 16.4H9.1C7.8 16.4 6.75 15.34 6.75 14.05V12.28C6.75 11.87 7.09 11.53 7.5 11.53C7.91 11.53 8.25 11.87 8.25 12.28V14.05C8.25 14.52 8.63 14.9 9.1 14.9H14.69L14.28 14.49C13.99 14.2 13.99 13.72 14.28 13.43C14.57 13.14 15.05 13.14 15.34 13.43L17.03 15.12C17.1 15.19 17.15 15.27 17.19 15.36C17.27 15.55 17.27 15.76 17.19 15.94ZM17.25 11.72C17.25 12.13 16.91 12.47 16.5 12.47C16.09 12.47 15.75 12.13 15.75 11.72V9.95C15.75 9.48 15.37 9.1 14.9 9.1H9.31L9.72 9.5C10.01 9.79 10.01 10.27 9.72 10.56C9.57 10.71 9.38 10.78 9.19 10.78C9 10.78 8.81 10.71 8.66 10.56L6.97 8.87C6.9 8.8 6.85 8.72 6.81 8.63C6.73 8.45 6.73 8.24 6.81 8.06C6.85 7.97 6.9 7.88 6.97 7.81L8.66 6.12C8.95 5.83 9.43 5.83 9.72 6.12C10.01 6.41 10.01 6.89 9.72 7.18L9.31 7.59H14.9C16.2 7.59 17.25 8.65 17.25 9.94V11.72Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 8.33984H14.9C15.79 8.33984 16.5 9.05982 16.5 9.93982V11.7098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.19 6.65991L7.5 8.33997L9.19 10.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.9401 7.5 14.0601V12.29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8105 17.34L16.5005 15.66L14.8105 13.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const RepeatCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 7.58988H9.31L9.72 7.17984C10.01 6.88984 10.01 6.40984 9.72 6.11984C9.43 5.82984 8.95001 5.82984 8.66001 6.11984L6.97 7.80985C6.9 7.87985 6.85 7.95984 6.81 8.04984C6.73 8.22984 6.73 8.43984 6.81 8.61984C6.85 8.70984 6.9 8.78983 6.97 8.85983L8.66001 10.5498C8.81001 10.6998 9 10.7699 9.19 10.7699C9.38 10.7699 9.57 10.6998 9.72 10.5498C10.01 10.2598 10.01 9.77984 9.72 9.48984L9.31 9.07987H14.9C15.37 9.07987 15.75 9.45984 15.75 9.92984V11.6999C15.75 12.1099 16.09 12.4499 16.5 12.4499C16.91 12.4499 17.25 12.1099 17.25 11.6999V9.92984C17.25 8.64984 16.19 7.58988 14.9 7.58988Z"
        fill="currentColor"
      />
      <Path
        d="M17.19 15.3698C17.15 15.2798 17.1 15.1998 17.03 15.1298L15.34 13.4398C15.05 13.1498 14.57 13.1498 14.28 13.4398C13.99 13.7298 13.99 14.2098 14.28 14.4998L14.69 14.9098H9.10001C8.63001 14.9098 8.25 14.5298 8.25 14.0598V12.2898C8.25 11.8798 7.91 11.5398 7.5 11.5398C7.09 11.5398 6.75 11.8798 6.75 12.2898V14.0598C6.75 15.3598 7.81001 16.4098 9.10001 16.4098H14.69L14.28 16.8198C13.99 17.1098 13.99 17.5898 14.28 17.8798C14.43 18.0298 14.62 18.0998 14.81 18.0998C15 18.0998 15.19 18.0298 15.34 17.8798L17.03 16.1898C17.1 16.1198 17.15 16.0398 17.19 15.9498C17.27 15.7598 17.27 15.5498 17.19 15.3698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 8.33997H14.9C15.79 8.33997 16.5 9.05994 16.5 9.93994V11.71"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.19 6.65991L7.5 8.33997L9.19 10.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 15.6599H9.10001C8.21001 15.6599 7.5 14.9399 7.5 14.0599V12.2899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8101 17.34L16.5001 15.66L14.8101 13.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeatCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5 12.4701C16.09 12.4701 15.75 12.1301 15.75 11.7201V9.95013C15.75 9.48013 15.37 9.1001 14.9 9.1001H7.5C7.09 9.1001 6.75 8.7601 6.75 8.3501C6.75 7.9401 7.09 7.6001 7.5 7.6001H14.9C16.2 7.6001 17.25 8.66013 17.25 9.95013V11.7201C17.25 12.1301 16.91 12.4701 16.5 12.4701Z"
        fill="currentColor"
      />
      <Path
        d="M9.18945 10.7799C8.99945 10.7799 8.80946 10.7098 8.65946 10.5598L6.96945 8.86984C6.67945 8.57984 6.67945 8.09985 6.96945 7.80985L8.65946 6.11984C8.94946 5.82984 9.42945 5.82984 9.71945 6.11984C10.0095 6.40984 10.0095 6.88984 9.71945 7.17984L8.55945 8.33988L9.71945 9.49985C10.0095 9.78985 10.0095 10.2698 9.71945 10.5598C9.56945 10.7098 9.37945 10.7799 9.18945 10.7799Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 16.41H9.10001C7.80001 16.41 6.75 15.3501 6.75 14.0601V12.29C6.75 11.88 7.09 11.54 7.5 11.54C7.91 11.54 8.25 11.88 8.25 12.29V14.0601C8.25 14.5301 8.63001 14.91 9.10001 14.91H16.5C16.91 14.91 17.25 15.25 17.25 15.66C17.25 16.07 16.91 16.41 16.5 16.41Z"
        fill="currentColor"
      />
      <Path
        d="M14.81 18.0899C14.62 18.0899 14.43 18.0199 14.28 17.8699C13.99 17.5799 13.99 17.0999 14.28 16.8099L15.44 15.6499L14.28 14.4899C13.99 14.1999 13.99 13.7199 14.28 13.4299C14.57 13.1399 15.05 13.1399 15.34 13.4299L17.03 15.1199C17.32 15.4099 17.32 15.8899 17.03 16.1799L15.34 17.8699C15.2 18.0199 15 18.0899 14.81 18.0899Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M7.5 8.34033H14.9C15.79 8.34033 16.5 9.06031 16.5 9.94031V11.7103"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.19 6.66016L7.5 8.34021L9.19 10.0302"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.5 15.66H9.10001C8.21001 15.66 7.5 14.9401 7.5 14.0601V12.29"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8105 17.3403L16.5005 15.6602L14.8105 13.9702"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RepeatCircleBold,
  broken: RepeatCircleBroken,
  bulk: RepeatCircleBulk,
  linear: RepeatCircleLinear,
  outline: RepeatCircleOutline,
  twotone: RepeatCircleTwotone,
};

export const RepeatCircleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
