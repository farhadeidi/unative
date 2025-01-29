import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const StatusUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15C7.63 18.56 7.29 18.9 6.88 18.9C6.47 18.9 6.13 18.56 6.13 18.15V16.08C6.13 15.67 6.47 15.33 6.88 15.33C7.29 15.33 7.63 15.67 7.63 16.08V18.15ZM12.75 18.15C12.75 18.56 12.41 18.9 12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15ZM17.87 18.15C17.87 18.56 17.53 18.9 17.12 18.9C16.71 18.9 16.37 18.56 16.37 18.15V11.93C16.37 11.52 16.71 11.18 17.12 11.18C17.53 11.18 17.87 11.52 17.87 11.93V18.15ZM17.87 8.77C17.87 9.18 17.53 9.52 17.12 9.52C16.71 9.52 16.37 9.18 16.37 8.77V7.8C13.82 10.42 10.63 12.27 7.06 13.16C7 13.18 6.94 13.18 6.88 13.18C6.54 13.18 6.24 12.95 6.15 12.61C6.05 12.21 6.29 11.8 6.7 11.7C10.07 10.86 13.07 9.09 15.45 6.59H14.2C13.79 6.59 13.45 6.25 13.45 5.84C13.45 5.43 13.79 5.09 14.2 5.09H17.13C17.17 5.09 17.2 5.11 17.24 5.11C17.29 5.12 17.34 5.12 17.39 5.14C17.44 5.16 17.48 5.19 17.53 5.22C17.56 5.24 17.59 5.25 17.62 5.27C17.63 5.28 17.63 5.29 17.64 5.29C17.68 5.33 17.71 5.37 17.74 5.41C17.77 5.45 17.8 5.48 17.81 5.52C17.83 5.56 17.83 5.6 17.84 5.65C17.85 5.7 17.87 5.75 17.87 5.81C17.87 5.82 17.88 5.83 17.88 5.84V8.77H17.87Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StatusUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.88086 18.1501V16.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M12 18.15V14.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M17.1191 18.1499V11.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M17.1209 5.8501L16.6609 6.3901C14.1109 9.3701 10.6909 11.4801 6.88086 12.4301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M14.1895 5.8501H17.1195V8.7701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StatusUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M6.88086 18.9001C6.47086 18.9001 6.13086 18.5601 6.13086 18.1501V16.0801C6.13086 15.6701 6.47086 15.3301 6.88086 15.3301C7.29086 15.3301 7.63086 15.6701 7.63086 16.0801V18.1501C7.63086 18.5701 7.29086 18.9001 6.88086 18.9001Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z"
        fill="currentColor"
      />
      <Path
        d="M17.1191 18.9002C16.7091 18.9002 16.3691 18.5602 16.3691 18.1502V11.9302C16.3691 11.5202 16.7091 11.1802 17.1191 11.1802C17.5291 11.1802 17.8691 11.5202 17.8691 11.9302V18.1502C17.8691 18.5702 17.5391 18.9002 17.1191 18.9002Z"
        fill="currentColor"
      />
      <Path
        d="M17.871 5.8201C17.871 5.7701 17.851 5.7101 17.841 5.6601C17.831 5.6201 17.821 5.5701 17.811 5.5301C17.791 5.4901 17.761 5.4601 17.741 5.4201C17.711 5.3801 17.681 5.3301 17.641 5.3001C17.631 5.2901 17.631 5.2801 17.621 5.2801C17.591 5.2601 17.561 5.2501 17.531 5.2301C17.491 5.2001 17.441 5.1701 17.391 5.1501C17.341 5.1301 17.291 5.1301 17.241 5.1201C17.201 5.1101 17.171 5.1001 17.131 5.1001H14.201C13.791 5.1001 13.451 5.4401 13.451 5.8501C13.451 6.2601 13.791 6.6001 14.201 6.6001H15.451C13.071 9.1001 10.071 10.8601 6.70096 11.7101C6.30096 11.8101 6.05096 12.2201 6.15096 12.6201C6.23096 12.9601 6.54096 13.1901 6.88096 13.1901C6.94096 13.1901 7.00096 13.1801 7.06096 13.1701C10.631 12.2801 13.821 10.4301 16.371 7.8101V8.7801C16.371 9.1901 16.711 9.5301 17.121 9.5301C17.531 9.5301 17.871 9.1901 17.871 8.7801V5.8501C17.871 5.8401 17.871 5.8301 17.871 5.8201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StatusUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.87988 18.1501V16.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M12 18.15V14.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M17.1201 18.1499V11.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M17.1199 5.8501L16.6599 6.3901C14.1099 9.3701 10.6899 11.4801 6.87988 12.4301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M14.1899 5.8501H17.1199V8.7701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StatusUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.87988 18.9001C6.46988 18.9001 6.12988 18.5601 6.12988 18.1501V16.0801C6.12988 15.6701 6.46988 15.3301 6.87988 15.3301C7.28988 15.3301 7.62988 15.6701 7.62988 16.0801V18.1501C7.62988 18.5701 7.28988 18.9001 6.87988 18.9001Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z"
        fill="currentColor"
      />
      <Path
        d="M17.1201 18.9002C16.7101 18.9002 16.3701 18.5602 16.3701 18.1502V11.9302C16.3701 11.5202 16.7101 11.1802 17.1201 11.1802C17.5301 11.1802 17.8701 11.5202 17.8701 11.9302V18.1502C17.8701 18.5702 17.5401 18.9002 17.1201 18.9002Z"
        fill="currentColor"
      />
      <Path
        d="M6.87958 13.1799C6.53958 13.1799 6.23958 12.9499 6.14958 12.6099C6.04958 12.2099 6.28958 11.7999 6.69958 11.6999C10.3796 10.7799 13.6196 8.76992 16.0896 5.89992L16.5496 5.35992C16.8196 5.04992 17.2896 5.00992 17.6096 5.27992C17.9196 5.54992 17.9596 6.01992 17.6896 6.33992L17.2296 6.87992C14.5596 9.99992 11.0396 12.1699 7.05958 13.1599C6.99958 13.1799 6.93958 13.1799 6.87958 13.1799Z"
        fill="currentColor"
      />
      <Path
        d="M17.1204 9.5201C16.7104 9.5201 16.3704 9.1801 16.3704 8.7701V6.6001H14.1904C13.7804 6.6001 13.4404 6.2601 13.4404 5.8501C13.4404 5.4401 13.7804 5.1001 14.1904 5.1001H17.1204C17.5304 5.1001 17.8704 5.4401 17.8704 5.8501V8.7801C17.8704 9.1901 17.5404 9.5201 17.1204 9.5201Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StatusUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.87988 18.1501V16.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M12 18.1498V14.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M17.1201 18.1502V11.9302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <G opacity="0.4">
        <Path
          d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M14.1904 5.84961H17.1204V8.76961"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StatusUpBold,
  broken: StatusUpBroken,
  bulk: StatusUpBulk,
  linear: StatusUpLinear,
  outline: StatusUpOutline,
  twotone: StatusUpTwotone,
};

export const StatusUpIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default StatusUpIcon;
