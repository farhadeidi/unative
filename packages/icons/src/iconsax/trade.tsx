import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const TradeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.85 9.01 9.02 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        fill="currentColor"
      />
      <Path
        d="M22.0001 8.5C22.0001 11.76 19.6001 14.45 16.4801 14.92V14.86C16.1701 10.98 13.0201 7.83 9.11008 7.52H9.08008C9.55008 4.4 12.2401 2 15.5001 2C19.0901 2 22.0001 4.91 22.0001 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.08 6.93 3.71 6.3L6.3 3.71C6.92 3.08 6.48 2 5.59 2Z"
        fill="currentColor"
      />
      <Path
        d="M18.4097 22.0003H20.9997C21.5497 22.0003 21.9997 21.5503 21.9997 21.0003V18.4103C21.9997 17.5203 20.9197 17.0703 20.2897 17.7003L17.6997 20.2903C17.0797 20.9203 17.5197 22.0003 18.4097 22.0003Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TradeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.67999 20.76C3.05999 19.58 2 17.66 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5C15 19.09 12.09 22 8.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.92999 3.70999 6.29999L6.29999 3.70999C6.91999 3.07999 6.48 2 5.59 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4097 22H20.9997C21.5497 22 21.9997 21.55 21.9997 21V18.41C21.9997 17.52 20.9197 17.07 20.2897 17.7L17.6997 20.29C17.0797 20.92 17.5197 22 18.4097 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TradeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.01 9.01999 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.93 3.70999 6.3L6.29999 3.71001C6.91999 3.08001 6.48 2 5.59 2Z"
        fill="currentColor"
      />
      <Path
        d="M18.4097 22H20.9997C21.5497 22 21.9997 21.55 21.9997 21V18.41C21.9997 17.52 20.9197 17.07 20.2897 17.7L17.6997 20.29C17.0797 20.92 17.5197 22 18.4097 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TradeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.92999 3.70999 6.29999L6.29999 3.70999C6.91999 3.07999 6.48 2 5.59 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.41 22H21C21.55 22 22 21.55 22 21V18.41C22 17.52 20.92 17.07 20.29 17.7L17.7 20.29C17.08 20.92 17.52 22 18.41 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TradeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5 15.75C15.32 15.75 15.12 15.74 14.93 15.73C14.56 15.71 14.26 15.41 14.23 15.04C14.01 12.25 11.74 9.98999 8.95999 9.76999C8.58999 9.73999 8.28999 9.44001 8.26999 9.07001C8.25999 8.88001 8.25 8.69 8.25 8.5C8.25 4.5 11.5 1.25 15.5 1.25C19.5 1.25 22.75 4.5 22.75 8.5C22.75 12.5 19.5 15.75 15.5 15.75ZM9.75 8.35999C12.73 8.87999 15.12 11.27 15.64 14.25C18.75 14.17 21.25 11.63 21.25 8.5C21.25 5.33 18.67 2.75 15.5 2.75C12.38 2.75 9.83 5.24999 9.75 8.35999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 22.75C4.5 22.75 1.25 19.5 1.25 15.5C1.25 11.5 4.5 8.25 8.5 8.25C8.68 8.25 8.88001 8.25999 9.07001 8.26999C12.6 8.54999 15.46 11.41 15.73 14.92C15.74 15.12 15.75 15.31 15.75 15.5C15.75 19.5 12.5 22.75 8.5 22.75ZM8.5 9.75C5.33 9.75 2.75 12.33 2.75 15.5C2.75 18.67 5.33 21.25 8.5 21.25C11.67 21.25 14.25 18.67 14.25 15.5C14.25 15.34 14.24 15.18 14.23 15.03C14.01 12.26 11.75 9.98999 8.95999 9.76999C8.81999 9.75999 8.66 9.75 8.5 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M3 7.34C2.77 7.34 2.54999 7.29999 2.32999 7.20999C1.66999 6.93999 1.25 6.3 1.25 5.59V3C1.25 2.04 2.04 1.25 3 1.25H5.59C6.3 1.25 6.92999 1.66999 7.20999 2.32999C7.47999 2.98999 7.32999 3.73999 6.82999 4.23999L4.23999 6.82999C3.89999 7.15999 3.46 7.34 3 7.34ZM3 2.75C2.86 2.75 2.75 2.86 2.75 3V5.59C2.75 5.74 2.84999 5.80001 2.89999 5.82001C2.95999 5.84001 3.07001 5.86999 3.17001 5.76999L5.76001 3.17999C5.86001 3.07999 5.84 2.97 5.81 2.91C5.78 2.85 5.71999 2.76001 5.57999 2.76001H3V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.9988 22.7501H18.4088C17.6988 22.7501 17.0689 22.3301 16.7889 21.6701C16.5189 21.0101 16.6689 20.2601 17.1689 19.7601L19.7589 17.1701C20.2589 16.6701 21.0089 16.5201 21.6689 16.7901C22.3289 17.0601 22.7488 17.7001 22.7488 18.4101V21.0001C22.7488 21.9601 21.9588 22.7501 20.9988 22.7501ZM20.9888 18.1601C20.9388 18.1601 20.8788 18.1801 20.8188 18.2401L18.2289 20.83C18.1289 20.93 18.1488 21.0401 18.1788 21.1001C18.2088 21.1601 18.2688 21.2501 18.4088 21.2501H20.9988C21.1388 21.2501 21.2488 21.1401 21.2488 21.0001V18.4101C21.2488 18.2601 21.1488 18.2001 21.0988 18.1801C21.0688 18.1701 21.0288 18.1601 20.9888 18.1601Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TradeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.92999 3.70999 6.29999L6.29999 3.70999C6.91999 3.07999 6.48 2 5.59 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.4097 22.0003H20.9997C21.5497 22.0003 21.9997 21.5503 21.9997 21.0003V18.4103C21.9997 17.5203 20.9197 17.0703 20.2897 17.7003L17.6997 20.2903C17.0797 20.9203 17.5197 22.0003 18.4097 22.0003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TradeBold,
  broken: TradeBroken,
  bulk: TradeBulk,
  linear: TradeLinear,
  outline: TradeOutline,
  twotone: TradeTwotone,
};

export const TradeIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default TradeIcon;
