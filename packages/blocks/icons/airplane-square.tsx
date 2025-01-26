import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const AirplaneSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.51 13.19C18.51 13.79 18.05 14.09 17.5 13.85L14.15 12.41C13.76 12.25 13.45 12.45 13.45 12.87V14.72C13.45 14.88 13.54 15.11 13.66 15.23L15.3 16.88C15.47 17.05 15.55 17.39 15.47 17.62L15.15 18.58C15.01 19 14.53 19.2 14.14 19L12.47 17.58C12.21 17.37 11.79 17.37 11.54 17.58L9.86 19C9.46 19.2 8.99 19 8.85 18.57L8.53 17.61C8.45 17.38 8.53 17.04 8.7 16.87L10.37 15.23C10.48 15.12 10.58 14.89 10.58 14.72V12.87C10.58 12.45 10.26 12.24 9.88 12.41L6.53 13.85C5.97 14.09 5.52 13.79 5.52 13.19V12.26C5.52 11.78 5.89 11.22 6.33 11.03L10.27 9.33C10.43 9.26 10.57 9.05 10.57 8.87V6.8C10.57 6.12 11.06 5.31 11.67 5.01C11.89 4.9 12.14 4.9 12.36 5.01C12.96 5.32 13.46 6.12 13.46 6.8V8.87C13.46 9.05 13.59 9.26 13.76 9.33L17.7 11.03C18.15 11.22 18.51 11.78 18.51 12.26V13.19Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirplaneSquareBroken = ({
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
        d="M9.85953 19L11.5395 17.58C11.7895 17.37 12.2095 17.37 12.4695 17.58L14.1395 19C14.5295 19.2 15.0095 19 15.1495 18.58L15.4695 17.62C15.5495 17.39 15.4695 17.05 15.2995 16.88L13.6595 15.23C13.5395 15.11 13.4495 14.88 13.4495 14.72V12.87C13.4495 12.45 13.7595 12.25 14.1495 12.41L17.4995 13.85C18.0495 14.09 18.5095 13.79 18.5095 13.19V12.26C18.5095 11.78 18.1495 11.22 17.6995 11.03L13.7595 9.32999C13.5895 9.25999 13.4595 9.04999 13.4595 8.86999V6.79999C13.4595 6.11999 12.9595 5.31999 12.3595 5.00999C12.1395 4.89999 11.8895 4.89999 11.6695 5.00999C11.0595 5.30999 10.5695 6.11999 10.5695 6.79999V8.86999C10.5695 9.04999 10.4295 9.25999 10.2695 9.32999L6.32953 11.03C5.88953 11.22 5.51953 11.78 5.51953 12.26V13.19C5.51953 13.79 5.96953 14.09 6.52953 13.85L9.87953 12.41C10.2595 12.24 10.5795 12.45 10.5795 12.87V14.72C10.5795 14.89 10.4795 15.12 10.3695 15.23L8.69953 16.87C8.52953 17.04 8.44953 17.38 8.52953 17.61L8.84953 18.57C8.98953 19 9.45953 19.2 9.85953 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.95V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AirplaneSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.85953 19L11.5395 17.58C11.7895 17.37 12.2095 17.37 12.4695 17.58L14.1395 19C14.5295 19.2 15.0095 19 15.1495 18.58L15.4695 17.62C15.5495 17.39 15.4695 17.05 15.2995 16.88L13.6595 15.23C13.5395 15.11 13.4495 14.88 13.4495 14.72V12.87C13.4495 12.45 13.7595 12.25 14.1495 12.41L17.4995 13.85C18.0495 14.09 18.5095 13.79 18.5095 13.19V12.26C18.5095 11.78 18.1495 11.22 17.6995 11.03L13.7595 9.32999C13.5895 9.25999 13.4595 9.04999 13.4595 8.86999V6.79999C13.4595 6.11999 12.9595 5.31999 12.3595 5.00999C12.1395 4.89999 11.8895 4.89999 11.6695 5.00999C11.0595 5.30999 10.5695 6.11999 10.5695 6.79999V8.86999C10.5695 9.04999 10.4295 9.25999 10.2695 9.32999L6.32953 11.03C5.88953 11.22 5.51953 11.78 5.51953 12.26V13.19C5.51953 13.79 5.96953 14.09 6.52953 13.85L9.87953 12.41C10.2595 12.24 10.5795 12.45 10.5795 12.87V14.72C10.5795 14.89 10.4795 15.12 10.3695 15.23L8.69953 16.87C8.52953 17.04 8.44953 17.38 8.52953 17.61L8.84953 18.57C8.98953 19 9.45953 19.2 9.85953 19Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirplaneSquareLinear = ({
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
        d="M9.86002 19L11.54 17.58C11.79 17.37 12.21 17.37 12.47 17.58L14.14 19C14.53 19.2 15.01 19 15.15 18.58L15.47 17.62C15.55 17.39 15.47 17.05 15.3 16.88L13.66 15.23C13.54 15.11 13.45 14.88 13.45 14.72V12.87C13.45 12.45 13.76 12.25 14.15 12.41L17.5 13.85C18.05 14.09 18.51 13.79 18.51 13.19V12.26C18.51 11.78 18.15 11.22 17.7 11.03L13.76 9.32999C13.59 9.25999 13.46 9.04999 13.46 8.86999V6.79999C13.46 6.11999 12.96 5.31999 12.36 5.00999C12.14 4.89999 11.89 4.89999 11.67 5.00999C11.06 5.30999 10.57 6.11999 10.57 6.79999V8.86999C10.57 9.04999 10.43 9.25999 10.27 9.32999L6.33002 11.03C5.89002 11.22 5.52002 11.78 5.52002 12.26V13.19C5.52002 13.79 5.97002 14.09 6.53002 13.85L9.88002 12.41C10.26 12.24 10.58 12.45 10.58 12.87V14.72C10.58 14.89 10.48 15.12 10.37 15.23L8.70002 16.87C8.53002 17.04 8.45002 17.38 8.53002 17.61L8.85002 18.57C8.99002 19 9.46002 19.2 9.86002 19Z"
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

const AirplaneSquareOutline = ({
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
        d="M14.4595 19.8301C14.2295 19.8301 13.9995 19.7801 13.7895 19.6701C13.7395 19.6401 13.6895 19.6101 13.6495 19.5701L11.9795 18.1501L10.3395 19.5701C10.2895 19.6101 10.2395 19.6401 10.1895 19.6701C9.79953 19.8601 9.35953 19.8801 8.96953 19.7101C8.56953 19.5401 8.26953 19.2101 8.12953 18.8001L7.80953 17.8401C7.63953 17.3401 7.78953 16.7101 8.15953 16.3301L9.82953 14.6901L9.81953 13.2401L6.80953 14.5301C6.30953 14.7401 5.78953 14.7201 5.38953 14.4501C4.99953 14.2001 4.76953 13.7301 4.76953 13.1901V12.2601C4.76953 11.4801 5.30953 10.6501 6.02953 10.3401L9.81953 8.71012V6.80012C9.81953 5.82012 10.4695 4.76012 11.3395 4.34012C11.7695 4.13012 12.2595 4.13012 12.6895 4.34012C13.5595 4.79012 14.2095 5.85012 14.2095 6.80012V8.71012L17.9995 10.3401C18.7195 10.6401 19.2595 11.4701 19.2595 12.2601V13.1901C19.2595 13.7301 19.0295 14.2001 18.6195 14.4601C18.2095 14.7201 17.6995 14.7501 17.1995 14.5401L14.1995 13.2501V14.7201L15.8295 16.3501C16.1995 16.7201 16.3495 17.3601 16.1795 17.8601L15.8595 18.8101C15.7195 19.2201 15.4195 19.5501 15.0195 19.7101C14.8395 19.7901 14.6495 19.8301 14.4595 19.8301ZM11.9995 16.6701C12.3395 16.6701 12.6695 16.7801 12.9395 16.9901L14.4895 18.3101L14.7595 17.3801L13.1295 15.7601C12.8695 15.5101 12.6995 15.0901 12.6995 14.7201V12.8701C12.6995 12.4201 12.8895 12.0301 13.2295 11.8001C13.5695 11.5701 14.0095 11.5401 14.4295 11.7201L17.7495 13.1401L17.7595 12.2601C17.7595 12.0701 17.5795 11.7901 17.4095 11.7201L13.4595 10.0201C13.0295 9.84012 12.7095 9.36012 12.7095 8.87012V6.80012C12.7095 6.41012 12.3695 5.86012 12.0195 5.68012C11.6595 5.86012 11.3195 6.40012 11.3195 6.80012V8.87012C11.3195 9.34012 11.0095 9.83012 10.5695 10.0201L6.62953 11.7201C6.45953 11.7901 6.26953 12.0801 6.26953 12.2601V13.1401L9.57953 11.7301C9.98953 11.5501 10.4195 11.5701 10.7695 11.8001C11.1195 12.0301 11.3195 12.4201 11.3195 12.8801V14.7301C11.3195 15.0901 11.1495 15.5101 10.8895 15.7701L9.20953 17.4201L9.52953 18.3001L11.0395 17.0201C11.3195 16.7901 11.6595 16.6701 11.9995 16.6701ZM14.0495 8.64012L14.0595 8.65012C14.0595 8.64012 14.0495 8.64012 14.0495 8.64012Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AirplaneSquareTwotone = ({
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
        opacity="0.34"
        d="M9.85953 19.0002L11.5395 17.5802C11.7895 17.3702 12.2095 17.3702 12.4695 17.5802L14.1395 19.0002C14.5295 19.2002 15.0095 19.0002 15.1495 18.5802L15.4695 17.6202C15.5495 17.3902 15.4695 17.0502 15.2995 16.8802L13.6595 15.2302C13.5395 15.1102 13.4495 14.8802 13.4495 14.7202V12.8702C13.4495 12.4502 13.7595 12.2502 14.1495 12.4102L17.4995 13.8502C18.0495 14.0902 18.5095 13.7902 18.5095 13.1902V12.2602C18.5095 11.7802 18.1495 11.2202 17.6995 11.0302L13.7595 9.33023C13.5895 9.26023 13.4595 9.05023 13.4595 8.87023V6.80023C13.4595 6.12023 12.9595 5.32023 12.3595 5.01023C12.1395 4.90023 11.8895 4.90023 11.6695 5.01023C11.0595 5.31023 10.5695 6.12023 10.5695 6.80023V8.87023C10.5695 9.05023 10.4295 9.26023 10.2695 9.33023L6.32953 11.0302C5.88953 11.2202 5.51953 11.7802 5.51953 12.2602V13.1902C5.51953 13.7902 5.96953 14.0902 6.52953 13.8502L9.87953 12.4102C10.2595 12.2402 10.5795 12.4502 10.5795 12.8702V14.7202C10.5795 14.8902 10.4795 15.1202 10.3695 15.2302L8.69953 16.8702C8.52953 17.0402 8.44953 17.3802 8.52953 17.6102L8.84953 18.5702C8.98953 19.0002 9.45953 19.2002 9.85953 19.0002Z"
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

const variants: IconVariants = {
  bold: AirplaneSquareBold,
  broken: AirplaneSquareBroken,
  bulk: AirplaneSquareBulk,
  linear: AirplaneSquareLinear,
  outline: AirplaneSquareOutline,
  twotone: AirplaneSquareTwotone,
};

export const AirplaneSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
