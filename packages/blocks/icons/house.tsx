import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HouseBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 21.2488H21V9.97875C21 9.35875 20.72 8.77875 20.23 8.39875L19 7.43875L18.98 4.98875C18.98 4.43875 18.53 3.99875 17.98 3.99875H14.57L13.23 2.95875C12.51 2.38875 11.49 2.38875 10.77 2.95875L3.77 8.39875C3.28 8.77875 3 9.35875 3 9.96875L2.95 21.2488H2C1.59 21.2488 1.25 21.5888 1.25 21.9988C1.25 22.4088 1.59 22.7488 2 22.7488H22C22.41 22.7488 22.75 22.4088 22.75 21.9988C22.75 21.5888 22.41 21.2488 22 21.2488ZM6.5 12.7487V11.2487C6.5 10.6987 6.95 10.2487 7.5 10.2487H9.5C10.05 10.2487 10.5 10.6987 10.5 11.2487V12.7487C10.5 13.2987 10.05 13.7487 9.5 13.7487H7.5C6.95 13.7487 6.5 13.2987 6.5 12.7487ZM14.5 21.2488H9.5V18.4987C9.5 17.6687 10.17 16.9987 11 16.9987H13C13.83 16.9987 14.5 17.6687 14.5 18.4987V21.2488ZM17.5 12.7487C17.5 13.2987 17.05 13.7487 16.5 13.7487H14.5C13.95 13.7487 13.5 13.2987 13.5 12.7487V11.2487C13.5 10.6987 13.95 10.2487 14.5 10.2487H16.5C17.05 10.2487 17.5 10.6987 17.5 11.2487V12.7487Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HouseBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.96999C3 9.35999 3.29 8.78004 3.77 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.94922 22L2.97922 14.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0003 7L18.9703 4H14.5703"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HouseBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9992 9.98017V22.0002H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L14.5692 4.00019L18.9992 7.4402L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z"
        fill="currentColor"
      />
      <Path
        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
        fill="currentColor"
      />
      <Path
        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.0003 7.44L14.5703 4H17.9803C18.5303 4 18.9803 4.43999 18.9803 4.98999L19.0003 7.44Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HouseLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0001 7L18.9701 4H14.5701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HouseOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M3.7002 21.9997H2.2002L2.25019 9.96971C2.25019 9.11971 2.6402 8.32974 3.3102 7.80974L10.3102 2.35973C11.3002 1.58973 12.6902 1.58973 13.6902 2.35973L20.6902 7.79973C21.3502 8.31973 21.7502 9.12971 21.7502 9.96971V21.9997H20.2502V9.97972C20.2502 9.59972 20.0702 9.22973 19.7702 8.98973L12.7702 3.54973C12.3202 3.19973 11.6902 3.19973 11.2302 3.54973L4.23019 8.99974C3.93019 9.22974 3.75019 9.59972 3.75019 9.97972L3.7002 21.9997Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V18.5C8.75 17.26 9.76 16.25 11 16.25H13C14.24 16.25 15.25 17.26 15.25 18.5V22C15.25 22.41 14.91 22.75 14.5 22.75ZM10.25 21.25H13.75V18.5C13.75 18.09 13.41 17.75 13 17.75H11C10.59 17.75 10.25 18.09 10.25 18.5V21.25Z"
        fill="currentColor"
      />
      <Path
        d="M9.5 14.5H7.5C6.54 14.5 5.75 13.71 5.75 12.75V11.25C5.75 10.29 6.54 9.5 7.5 9.5H9.5C10.46 9.5 11.25 10.29 11.25 11.25V12.75C11.25 13.71 10.46 14.5 9.5 14.5ZM7.5 11C7.36 11 7.25 11.11 7.25 11.25V12.75C7.25 12.89 7.36 13 7.5 13H9.5C9.64 13 9.75 12.89 9.75 12.75V11.25C9.75 11.11 9.64 11 9.5 11H7.5Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 14.5H14.5C13.54 14.5 12.75 13.71 12.75 12.75V11.25C12.75 10.29 13.54 9.5 14.5 9.5H16.5C17.46 9.5 18.25 10.29 18.25 11.25V12.75C18.25 13.71 17.46 14.5 16.5 14.5ZM14.5 11C14.36 11 14.25 11.11 14.25 11.25V12.75C14.25 12.89 14.36 13 14.5 13H16.5C16.64 13 16.75 12.89 16.75 12.75V11.25C16.75 11.11 16.64 11 16.5 11H14.5Z"
        fill="currentColor"
      />
      <Path
        d="M19.0001 7.75C18.5901 7.75 18.2501 7.42001 18.2501 7.01001L18.2301 4.75H14.5801C14.1701 4.75 13.8301 4.41 13.8301 4C13.8301 3.59 14.1701 3.25 14.5801 3.25H18.9801C19.3901 3.25 19.7301 3.57999 19.7301 3.98999L19.7601 6.98999C19.7501 7.40999 19.4201 7.75 19.0001 7.75C19.0101 7.75 19.0001 7.75 19.0001 7.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HouseTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.9502 22.0003L3.00019 9.97023C3.00019 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0003 7L18.9703 4H14.5703"
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
  bold: HouseBold,
  broken: HouseBroken,
  bulk: HouseBulk,
  linear: HouseLinear,
  outline: HouseOutline,
  twotone: HouseTwotone,
};

export const HouseIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
