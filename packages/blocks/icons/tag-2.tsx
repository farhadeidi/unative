import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Tag2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.8305 8.6998L15.3005 4.1698C14.3505 3.2198 13.0405 2.7098 11.7005 2.7798L6.70046 3.0198C4.70046 3.1098 3.11046 4.6998 3.01046 6.6898L2.77046 11.6898C2.71046 13.0298 3.21046 14.3398 4.16046 15.2898L8.69046 19.8198C10.5505 21.6798 13.5705 21.6798 15.4405 19.8198L19.8305 15.4298C21.7005 13.5798 21.7005 10.5598 19.8305 8.6998ZM9.50046 12.3798C7.92046 12.3798 6.62046 11.0898 6.62046 9.4998C6.62046 7.9098 7.92046 6.6198 9.50046 6.6198C11.0805 6.6198 12.3805 7.9098 12.3805 9.4998C12.3805 11.0898 11.0805 12.3798 9.50046 12.3798ZM17.5305 13.5298L13.5305 17.5298C13.3805 17.6798 13.1905 17.7498 13.0005 17.7498C12.8105 17.7498 12.6205 17.6798 12.4705 17.5298C12.1805 17.2398 12.1805 16.7598 12.4705 16.4698L16.4705 12.4698C16.7605 12.1798 17.2405 12.1798 17.5305 12.4698C17.8205 12.7598 17.8205 13.2398 17.5305 13.5298Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Tag2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.3005 4.17005C14.3505 3.22005 13.0405 2.71005 11.7005 2.78005L6.70046 3.02005C4.70046 3.11005 3.11046 4.70005 3.01046 6.69005L2.77046 11.69C2.71046 13.03 3.21046 14.34 4.16046 15.29L8.69046 19.82C10.5505 21.68 13.5705 21.68 15.4405 19.82L19.8305 15.43C21.6905 13.57 21.6905 10.55 19.8305 8.68005L18.7005 7.55005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.51 11.8C8.81 11.93 9.15 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7C8.12 7 7 8.12 7 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M13 17L17 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Tag2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.17038 15.2998L8.70038 19.8298C10.5604 21.6898 13.5804 21.6898 15.4504 19.8298L19.8404 15.4398C21.7004 13.5798 21.7004 10.5598 19.8404 8.6898L15.3004 4.1698C14.3504 3.2198 13.0404 2.7098 11.7004 2.7798L6.70038 3.0198C4.70038 3.1098 3.11038 4.6998 3.01038 6.6898L2.77038 11.6898C2.71038 13.0398 3.22038 14.3498 4.17038 15.2998Z"
        fill="currentColor"
      />
      <Path
        d="M9.49914 12.3801C11.0897 12.3801 12.3791 11.0907 12.3791 9.50012C12.3791 7.90954 11.0897 6.62012 9.49914 6.62012C7.90856 6.62012 6.61914 7.90954 6.61914 9.50012C6.61914 11.0907 7.90856 12.3801 9.49914 12.3801Z"
        fill="currentColor"
      />
      <Path
        d="M12.9995 17.7499C12.8095 17.7499 12.6195 17.6799 12.4695 17.5299C12.1795 17.2399 12.1795 16.7599 12.4695 16.4699L16.4695 12.4699C16.7595 12.1799 17.2395 12.1799 17.5295 12.4699C17.8195 12.7599 17.8195 13.2399 17.5295 13.5299L13.5295 17.5299C13.3795 17.6799 13.1895 17.7499 12.9995 17.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Tag2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.73486 12.2263C11.1156 12.2263 12.2349 11.107 12.2349 9.72632C12.2349 8.34561 11.1156 7.22632 9.73486 7.22632C8.35415 7.22632 7.23486 8.34561 7.23486 9.72632C7.23486 11.107 8.35415 12.2263 9.73486 12.2263Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M13.2349 17.2263L17.2349 13.2263"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Tag2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0691 21.9798C10.6591 21.9798 9.23911 21.4398 8.16911 20.3698L3.63911 15.8398C2.53911 14.7398 1.95911 13.2198 2.02911 11.6698L2.26911 6.65983C2.37911 4.26983 4.26911 2.37983 6.66911 2.25983L11.6691 2.01983C13.2291 1.94983 14.7391 2.52983 15.8391 3.62983L20.3691 8.15983C22.5191 10.3098 22.5191 13.8198 20.3691 15.9698L15.9791 20.3598C14.8991 21.4398 13.4891 21.9798 12.0691 21.9798ZM4.69911 14.7698L9.22911 19.2998C10.7991 20.8698 13.3491 20.8698 14.9191 19.2998L19.3091 14.9098C20.8791 13.3398 20.8791 10.7898 19.3091 9.21983L14.7691 4.69983C13.9691 3.89983 12.8791 3.47983 11.7291 3.52983L6.72911 3.76983C5.10911 3.83983 3.83911 5.10983 3.75911 6.72983L3.51911 11.7398C3.46911 12.8598 3.89911 13.9698 4.69911 14.7698Z"
        fill="currentColor"
      />
      <Path
        d="M9.5 12.75C7.71 12.75 6.25 11.29 6.25 9.5C6.25 7.71 7.71 6.25 9.5 6.25C11.29 6.25 12.75 7.71 12.75 9.5C12.75 11.29 11.29 12.75 9.5 12.75ZM9.5 7.75C8.54 7.75 7.75 8.54 7.75 9.5C7.75 10.46 8.54 11.25 9.5 11.25C10.46 11.25 11.25 10.46 11.25 9.5C11.25 8.54 10.46 7.75 9.5 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.9995 17.7499C12.8095 17.7499 12.6195 17.6799 12.4695 17.5299C12.1795 17.2399 12.1795 16.7599 12.4695 16.4699L16.4695 12.4699C16.7595 12.1799 17.2395 12.1799 17.5295 12.4699C17.8195 12.7599 17.8195 13.2399 17.5295 13.5299L13.5295 17.5299C13.3795 17.6799 13.1895 17.7499 12.9995 17.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Tag2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.73438 12.2266C11.1151 12.2266 12.2344 11.1073 12.2344 9.72656C12.2344 8.34585 11.1151 7.22656 9.73438 7.22656C8.35366 7.22656 7.23438 8.34585 7.23438 9.72656C7.23438 11.1073 8.35366 12.2266 9.73438 12.2266Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M13.2344 17.2266L17.2344 13.2266"
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
  bold: Tag2Bold,
  broken: Tag2Broken,
  bulk: Tag2Bulk,
  linear: Tag2Linear,
  outline: Tag2Outline,
  twotone: Tag2Twotone,
};

export const Tag2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
