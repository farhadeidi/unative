import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MapBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.14844 7.48828C8.58844 7.48828 8.14844 7.93828 8.14844 8.48828C8.14844 9.03828 8.59844 9.48828 9.14844 9.48828C9.69844 9.48828 10.1484 9.03828 10.1484 8.48828C10.1484 7.93828 9.69844 7.48828 9.14844 7.48828Z"
        fill="currentColor"
      />
      <Path
        d="M21.46 5.04C20.62 3.09 18.77 2 16.19 2H7.81C4.6 2 2 4.6 2 7.81V16.19C2 18.77 3.09 20.62 5.04 21.46C5.23 21.54 5.45 21.49 5.59 21.35L21.35 5.59C21.5 5.44 21.55 5.22 21.46 5.04ZM10.53 12.24C10.14 12.62 9.63 12.8 9.12 12.8C8.61 12.8 8.1 12.61 7.71 12.24C6.69 11.28 5.57 9.75 6 7.93C6.38 6.28 7.84 5.54 9.12 5.54C10.4 5.54 11.86 6.28 12.24 7.94C12.66 9.75 11.54 11.28 10.53 12.24Z"
        fill="currentColor"
      />
      <Path
        d="M19.4689 20.5295C19.6889 20.7495 19.6589 21.1095 19.3889 21.2595C18.5089 21.7495 17.4389 21.9995 16.1889 21.9995H7.80892C7.51892 21.9995 7.39892 21.6595 7.59892 21.4595L13.6389 15.4195C13.8389 15.2195 14.1489 15.2195 14.3489 15.4195L19.4689 20.5295Z"
        fill="currentColor"
      />
      <Path
        d="M22.0017 7.80892V16.1889C22.0017 17.4389 21.7517 18.5189 21.2617 19.3889C21.1117 19.6589 20.7517 19.6789 20.5317 19.4689L15.4117 14.3489C15.2117 14.1489 15.2117 13.8389 15.4117 13.6389L21.4517 7.59892C21.6617 7.39892 22.0017 7.51892 22.0017 7.80892Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MapBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V12.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.23929 7.97997C6.91929 5.04997 11.3193 5.04997 11.9993 7.97997C12.3893 9.69997 11.3093 11.16 10.3593 12.06C9.66928 12.72 8.5793 12.72 7.8793 12.06C6.9293 11.16 5.83929 9.69997 6.23929 7.97997Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M9.09412 8.69995H9.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MapBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.8796 20.9401C18.9296 21.6401 17.6796 22.0001 16.1896 22.0001H7.8096C7.5696 22.0001 7.32961 21.9901 7.09961 21.9601L13.9996 15.0601L19.8796 20.9401Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0005 7.8101V16.1901C22.0005 17.6801 21.6406 18.9301 20.9406 19.8801L15.0605 14.0001L21.9605 7.1001C21.9905 7.3301 22.0005 7.5701 22.0005 7.8101Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.06 14L20.94 19.88C20.65 20.3 20.3 20.65 19.88 20.94L14 15.06L7.10001 21.96C6.46001 21.92 5.88001 21.79 5.35001 21.59C3.21001 20.81 2 18.91 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.91 2 20.81 3.21 21.59 5.35C21.79 5.88 21.92 6.46 21.96 7.1L15.06 14Z"
        fill="currentColor"
      />
      <Path
        d="M15.0596 14.0001L20.9396 19.8801C20.6496 20.3001 20.2996 20.6501 19.8796 20.9401L13.9996 15.0601L7.09961 21.9601C6.45961 21.9201 5.87961 21.7901 5.34961 21.5901L5.73959 21.2001L21.5896 5.3501C21.7896 5.8801 21.9196 6.4601 21.9596 7.1001L15.0596 14.0001Z"
        fill="currentColor"
      />
      <Path
        d="M12.2408 7.92979C11.8608 6.27979 10.4008 5.53979 9.12078 5.52979C7.84078 5.52979 6.38079 6.26978 6.00079 7.91978C5.58079 9.74978 6.70078 11.2798 7.71078 12.2398C8.11078 12.6198 8.61078 12.7998 9.12078 12.7998C9.63078 12.7998 10.1308 12.6098 10.5308 12.2398C11.5408 11.2798 12.6608 9.74979 12.2408 7.92979ZM9.15078 9.48978C8.60078 9.48978 8.15078 9.03978 8.15078 8.48978C8.15078 7.93978 8.59078 7.48978 9.15078 7.48978H9.16079C9.71079 7.48978 10.1608 7.93978 10.1608 8.48978C10.1608 9.03978 9.70078 9.48978 9.15078 9.48978Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MapLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00003C7.96003 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C9.67001 12.72 8.58003 12.72 7.88003 12.06C6.93003 11.16 5.84002 9.69997 6.24002 7.97997Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M9.0946 8.69995H9.10359"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MapOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.6491 21.4102C15.2191 21.4102 14.7891 21.3202 14.4391 21.1502L9.18906 18.5202C8.88906 18.3702 8.29906 18.3802 8.00906 18.5502L5.64906 19.9002C4.62906 20.4802 3.57906 20.5602 2.78906 20.0902C1.98906 19.6302 1.53906 18.6902 1.53906 17.5102V7.79016C1.53906 6.88016 2.13906 5.85016 2.92906 5.40016L7.25906 2.92016C7.98906 2.50016 9.09906 2.47016 9.84906 2.85016L15.0991 5.48016C15.3991 5.63016 15.9791 5.61016 16.2791 5.45016L18.6291 4.11016C19.6491 3.53016 20.6991 3.45016 21.4891 3.92016C22.2891 4.38016 22.7391 5.32016 22.7391 6.50016V16.2302C22.7391 17.1402 22.1391 18.1702 21.3491 18.6202L17.0191 21.1002C16.6391 21.3002 16.1391 21.4102 15.6491 21.4102ZM8.63906 16.9202C9.06906 16.9202 9.49906 17.0102 9.84906 17.1802L15.0991 19.8102C15.3991 19.9602 15.9791 19.9402 16.2791 19.7802L20.6091 17.3002C20.9291 17.1202 21.2391 16.5802 21.2391 16.2202V6.49016C21.2391 5.86016 21.0591 5.39016 20.7291 5.21016C20.4091 5.03016 19.9091 5.10016 19.3691 5.41016L17.0191 6.75016C16.2891 7.17016 15.1791 7.20016 14.4291 6.82016L9.17906 4.19016C8.87906 4.04016 8.29906 4.06016 7.99906 4.22016L3.66906 6.70016C3.34906 6.88016 3.03906 7.42016 3.03906 7.79016V17.5202C3.03906 18.1502 3.21906 18.6202 3.53906 18.8002C3.85906 18.9902 4.35906 18.9102 4.90906 18.6002L7.25906 17.2602C7.64906 17.0302 8.14906 16.9202 8.63906 16.9202Z"
        fill="currentColor"
      />
      <Path
        d="M8.56055 17.75C8.15055 17.75 7.81055 17.41 7.81055 17V4C7.81055 3.59 8.15055 3.25 8.56055 3.25C8.97055 3.25 9.31055 3.59 9.31055 4V17C9.31055 17.41 8.97055 17.75 8.56055 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.7305 20.7501C15.3205 20.7501 14.9805 20.4101 14.9805 20.0001V6.62012C14.9805 6.21012 15.3205 5.87012 15.7305 5.87012C16.1405 5.87012 16.4805 6.21012 16.4805 6.62012V20.0001C16.4805 20.4101 16.1405 20.7501 15.7305 20.7501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MapTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.23929 7.98021C6.91929 5.05021 11.3193 5.05021 11.9993 7.98021C12.3893 9.70021 11.3093 11.1602 10.3593 12.0602C9.66928 12.7202 8.5793 12.7202 7.8793 12.0602C6.9293 11.1602 5.83929 9.70021 6.23929 7.98021Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M9.09412 8.7002H9.1031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MapBold,
  broken: MapBroken,
  bulk: MapBulk,
  linear: MapLinear,
  outline: MapOutline,
  twotone: MapTwotone,
};

export const MapIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
