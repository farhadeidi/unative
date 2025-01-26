import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TicketDiscountBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3 10.8394C21.69 10.8394 22 10.5294 22 10.1394V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938H7.35C3.25 3.85937 2 5.10938 2 9.20938V9.67938C2 10.0694 2.31 10.3794 2.7 10.3794C3.6 10.3794 4.33 11.1094 4.33 12.0094C4.33 12.9094 3.6 13.6294 2.7 13.6294C2.31 13.6294 2 13.9394 2 14.3294V14.7994C2 18.8994 3.25 20.1494 7.35 20.1494H16.65C20.75 20.1494 22 18.8994 22 14.7994C22 14.4094 21.69 14.0994 21.3 14.0994C20.4 14.0994 19.67 13.3694 19.67 12.4694C19.67 11.5694 20.4 10.8394 21.3 10.8394ZM9 8.87938C9.55 8.87938 10 9.32938 10 9.87938C10 10.4294 9.56 10.8794 9 10.8794C8.45 10.8794 8 10.4294 8 9.87938C8 9.32938 8.44 8.87938 9 8.87938ZM15 15.8794C14.44 15.8794 13.99 15.4294 13.99 14.8794C13.99 14.3294 14.44 13.8794 14.99 13.8794C15.54 13.8794 15.99 14.3294 15.99 14.8794C15.99 15.4294 15.56 15.8794 15 15.8794ZM15.9 9.47937L9.17 16.2094C9.02 16.3594 8.83 16.4294 8.64 16.4294C8.45 16.4294 8.26 16.3594 8.11 16.2094C7.82 15.9194 7.82 15.4394 8.11 15.1494L14.84 8.41938C15.13 8.12938 15.61 8.12938 15.9 8.41938C16.19 8.70938 16.19 9.18937 15.9 9.47937Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketDiscountBroken = ({
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
        d="M22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.63086 15.68L15.3609 8.94995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9945 14.75H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99451 9.25H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TicketDiscountBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3 10.8399C21.69 10.8399 22 10.5299 22 10.1399V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V9.67986C2 10.0699 2.31 10.3799 2.7 10.3799C3.6 10.3799 4.33 11.1099 4.33 12.0099C4.33 12.9099 3.6 13.6299 2.7 13.6299C2.31 13.6299 2 13.9399 2 14.3299V14.7999C2 18.8999 3.25 20.1499 7.35 20.1499H16.65C20.75 20.1499 22 18.8999 22 14.7999C22 14.4099 21.69 14.0999 21.3 14.0999C20.4 14.0999 19.67 13.3699 19.67 12.4699C19.67 11.5699 20.4 10.8399 21.3 10.8399Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 15.8799C14.4402 15.8799 13.9902 15.4299 13.9902 14.8799C13.9902 14.3299 14.4402 13.8799 14.9902 13.8799C15.5402 13.8799 15.9902 14.3299 15.9902 14.8799C15.9902 15.4299 15.5602 15.8799 15.0002 15.8799Z"
        fill="currentColor"
      />
      <Path
        d="M9.00023 10.8799C8.44023 10.8799 7.99023 10.4299 7.99023 9.87988C7.99023 9.32988 8.44023 8.87988 8.99023 8.87988C9.54023 8.87988 9.99023 9.32988 9.99023 9.87988C9.99023 10.4299 9.56023 10.8799 9.00023 10.8799Z"
        fill="currentColor"
      />
      <Path
        d="M8.63031 16.4301C8.44031 16.4301 8.25031 16.3601 8.10031 16.2101C7.81031 15.9201 7.81031 15.4401 8.10031 15.1501L14.8303 8.42014C15.1203 8.13014 15.6003 8.13014 15.8903 8.42014C16.1803 8.71014 16.1803 9.19014 15.8903 9.48014L9.16031 16.2101C9.02031 16.3601 8.82031 16.4301 8.63031 16.4301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketDiscountLinear = ({
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
        d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 14.75L15 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9945 14.75H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99451 9.25H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TicketDiscountOutline = ({
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
        d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V14.5C1.25 14.09 1.59 13.75 2 13.75C2.96 13.75 3.75 12.96 3.75 12C3.75 11.04 2.96 10.25 2 10.25C1.59 10.25 1.25 9.91 1.25 9.5V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V10C22.75 10.41 22.41 10.75 22 10.75C21.04 10.75 20.25 11.54 20.25 12.5C20.25 13.46 21.04 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15C22.75 19.41 21.41 20.75 17 20.75ZM2.75 15.16C2.77 18.6 3.48 19.25 7 19.25H17C20.34 19.25 21.15 18.66 21.24 15.66C19.81 15.32 18.75 14.03 18.75 12.5C18.75 10.97 19.82 9.68 21.25 9.34V9C21.25 5.43 20.57 4.75 17 4.75H7C3.48 4.75 2.77 5.4 2.75 8.84C4.18 9.18 5.25 10.47 5.25 12C5.25 13.53 4.18 14.82 2.75 15.16Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 15.8799C14.4402 15.8799 13.9902 15.4299 13.9902 14.8799C13.9902 14.3299 14.4402 13.8799 14.9902 13.8799C15.5402 13.8799 15.9902 14.3299 15.9902 14.8799C15.9902 15.4299 15.5602 15.8799 15.0002 15.8799Z"
        fill="currentColor"
      />
      <Path
        d="M9.00023 10.8799C8.44023 10.8799 7.99023 10.4299 7.99023 9.87988C7.99023 9.32988 8.44023 8.87988 8.99023 8.87988C9.54023 8.87988 9.99023 9.32988 9.99023 9.87988C9.99023 10.4299 9.56023 10.8799 9.00023 10.8799Z"
        fill="currentColor"
      />
      <Path
        d="M8.63031 16.4301C8.44031 16.4301 8.25031 16.3601 8.10031 16.2101C7.81031 15.9201 7.81031 15.4401 8.10031 15.1501L14.8303 8.42014C15.1203 8.13014 15.6003 8.13014 15.8903 8.42014C16.1803 8.71014 16.1803 9.19014 15.8903 9.48014L9.16031 16.2101C9.02031 16.3601 8.82031 16.4301 8.63031 16.4301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketDiscountTwotone = ({
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
        d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 14.75L15 8.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.9945 14.75H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.99451 9.25H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TicketDiscountBold,
  broken: TicketDiscountBroken,
  bulk: TicketDiscountBulk,
  linear: TicketDiscountLinear,
  outline: TicketDiscountOutline,
  twotone: TicketDiscountTwotone,
};

export const TicketDiscountIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
