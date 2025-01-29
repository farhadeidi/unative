import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ShoppingBagBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.00082 17.78C7.59082 17.78 7.25082 17.44 7.25082 17.03C7.25082 16.61 7.59082 16.28 8.00082 16.28H19.7608C20.0608 16.28 20.2908 16.02 20.2608 15.72L19.5808 10.03C19.3408 8.09 19.0008 6.5 15.6008 6.5H8.40082C5.00082 6.5 4.66082 8.09 4.43082 10.03L3.53082 17.53C3.24082 19.99 4.00082 22 7.51082 22H16.4908C19.6508 22 20.5808 20.37 20.5308 18.25C20.5208 17.98 20.3008 17.78 20.0308 17.78H8.00082Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShoppingBagBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4108 17.03H3.62084L3.53084 17.53C3.24084 19.99 4.00084 22 7.50084 22H16.4908C20.0008 22 20.7608 19.99 20.4608 17.53L19.5608 10.03C19.3308 8.09 18.9908 6.5 15.5908 6.5H8.39084C4.99084 6.5 4.65084 8.09 4.42084 10.03L4.10085 12.7L4.01084 13.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShoppingBagBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4908 22H7.51082C4.00082 22 3.24082 19.99 3.53082 17.53L4.43081 10.03C4.66081 8.09 5.00082 6.5 8.40082 6.5H15.6008C19.0008 6.5 19.3408 8.09 19.5708 10.03L20.3208 16.28L20.4708 17.53C20.4808 17.61 20.4908 17.69 20.5008 17.77C20.7108 20.12 19.8908 22 16.4908 22Z"
        fill="currentColor"
      />
      <Path
        d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 17.77C20.47 17.78 20.44 17.78 20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.61 7.59 16.28 8 16.28H20.32L20.47 17.53C20.48 17.61 20.49 17.69 20.5 17.77Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShoppingBagLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.41 17.03H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShoppingBagOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4904 22.75H7.50042C5.78042 22.75 4.49043 22.29 3.69043 21.38C2.89043 20.47 2.58042 19.15 2.79042 17.44L3.69043 9.94C3.95043 7.73 4.51043 5.75 8.41043 5.75H15.6104C19.5004 5.75 20.0604 7.73 20.3304 9.94L21.2304 17.44C21.4304 19.15 21.1304 20.48 20.3304 21.38C19.5004 22.29 18.2204 22.75 16.4904 22.75ZM8.40042 7.25C5.52042 7.25 5.38042 8.38999 5.17042 10.11L4.27043 17.61C4.12043 18.88 4.30042 19.81 4.81042 20.38C5.32042 20.95 6.22042 21.24 7.50042 21.24H16.4904C17.7704 21.24 18.6704 20.95 19.1804 20.38C19.6904 19.81 19.8704 18.88 19.7204 17.61L18.8204 10.11C18.6104 8.37999 18.4804 7.25 15.5904 7.25H8.40042Z"
        fill="currentColor"
      />
      <Path
        d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.62 7.59 16.28 8 16.28H20.41C20.82 16.28 21.16 16.62 21.16 17.03C21.16 17.44 20.82 17.78 20.41 17.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShoppingBagTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.41 17.0298H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShoppingBagBold,
  broken: ShoppingBagBroken,
  bulk: ShoppingBagBulk,
  linear: ShoppingBagLinear,
  outline: ShoppingBagOutline,
  twotone: ShoppingBagTwotone,
};

export const ShoppingBagIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ShoppingBagIcon;
