import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Brush3Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.49 16.72C10.15 17.06 9.7 17.29 9.15 17.36L7.8 17.51C7.06 17.59 6.43 16.96 6.51 16.21L6.66 14.85C6.79 13.64 7.8 12.87 8.87 12.85C8.97 12.84 9.09 12.85 9.2 12.86C9.67 12.92 10.12 13.14 10.5 13.51C10.87 13.88 11.08 14.32 11.14 14.77C11.15 14.88 11.16 14.99 11.16 15.09C11.16 15.71 10.93 16.28 10.49 16.72ZM17.44 7.55C16.72 9.35 15.07 11.71 13.5 13.25C13.27 11.83 12.14 10.71 10.7 10.51C12.24 8.93 14.62 7.26 16.43 6.53C16.75 6.41 17.07 6.5 17.27 6.7C17.47 6.92 17.57 7.23 17.44 7.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush3Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0198 3.01011C18.6898 2.65011 19.3498 2.34011 19.9598 2.10011C20.5498 1.88011 21.1198 2.04011 21.4798 2.41011C21.8598 2.79011 22.0398 3.36011 21.7998 3.95011C20.2598 7.79011 16.3998 13.0101 13.1698 15.6001L11.1998 17.1801C10.9498 17.3601 10.6998 17.5201 10.4198 17.6301C10.4198 17.4501 10.4098 17.2501 10.3798 17.0601C10.2698 16.2201 9.88977 15.4401 9.21977 14.7701C8.53977 14.0901 7.70977 13.6901 6.85977 13.5801C6.65977 13.5701 6.45977 13.5501 6.25977 13.5701C6.36977 13.2601 6.53977 12.9701 6.74977 12.7301L8.30977 10.7601C9.65977 9.07011 11.7498 7.20011 13.9698 5.58011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4293 17.6198C10.4293 18.7198 10.0093 19.7698 9.2193 20.5698C8.6093 21.1798 7.7793 21.5998 6.7893 21.7298L4.3293 21.9998C2.9893 22.1498 1.8393 21.0098 1.9993 19.6498L2.2693 17.1898C2.5093 14.9998 4.3393 13.5998 6.2793 13.5598C6.4793 13.5498 6.6893 13.5598 6.8793 13.5698C7.7293 13.6798 8.5593 14.0698 9.2393 14.7598C9.9093 15.4298 10.2893 16.2098 10.3993 17.0498C10.4093 17.2398 10.4293 17.4298 10.4293 17.6198Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2398 14.4702C14.2398 11.8602 12.1198 9.74023 9.50977 9.74023"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Brush3Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8098 3.94009C20.4998 7.21009 17.5098 11.4801 14.6598 14.2701C14.2498 11.6901 12.1898 9.67009 9.58984 9.31009C12.3898 6.45009 16.6898 3.42009 19.9698 2.10009C20.5498 1.88009 21.1298 2.05009 21.4898 2.41009C21.8698 2.79009 22.0498 3.36009 21.8098 3.94009Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.6595 14.2701C14.1595 14.7601 13.6595 15.2101 13.1795 15.5901L11.2095 17.1701C10.9595 17.3501 10.7095 17.5001 10.4295 17.6201C10.4295 17.4301 10.4095 17.2401 10.3895 17.0401C10.2795 16.2101 9.89953 15.4201 9.22953 14.7501C8.53953 14.0701 7.71953 13.6801 6.86953 13.5701C6.66953 13.5501 6.45953 13.5401 6.26953 13.5501C6.37953 13.2401 6.54953 12.9501 6.75953 12.7101L8.31953 10.7401C8.68953 10.2701 9.11953 9.79006 9.58953 9.31006C12.1895 9.67006 14.2495 11.6901 14.6595 14.2701Z"
        fill="currentColor"
      />
      <Path
        d="M10.4298 17.6198C10.4298 18.7198 10.0098 19.7698 9.20976 20.5598C8.59976 21.1798 7.77977 21.5998 6.77977 21.7198L4.32976 21.9898C2.98976 22.1398 1.83976 20.9898 1.98976 19.6398L2.25976 17.1798C2.49976 14.9898 4.32976 13.5898 6.26976 13.5498C6.45976 13.5398 6.66976 13.5498 6.86976 13.5698C7.71976 13.6798 8.53976 14.0698 9.22976 14.7498C9.89976 15.4198 10.2798 16.2098 10.3898 17.0398C10.4098 17.2398 10.4298 17.4298 10.4298 17.6198Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush3Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 16C10 14.34 10 13 13 13H17C20 13 20 12 20 10V8C20 6 20 5 17 5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2H8C7.35 3.95 7.35 6.05 8 8H12C12.65 6.05 12.65 3.95 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 2H7C5 2 4 3 4 5C4 7 5 8 7 8H8C7 6 7 4 8 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 2H12C13 4 13 6 12 8H13C15 8 16 7 16 5C16 3 15 2 13 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 22H10.5C12 22 12 21 12 20.5V17.5C12 17 12 16 10.5 16H9.5C8 16 8 17 8 17.5V20.5C8 21 8 22 9.5 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Brush3Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 9.07001H4C3.59 9.07001 3.25 8.73001 3.25 8.32001V4C3.25 2.48 4.48 1.25 6 1.25H18C19.52 1.25 20.75 2.48 20.75 4V8.32001C20.75 8.73001 20.41 9.07001 20 9.07001ZM4.75 7.57001H19.25V4C19.25 3.31 18.69 2.75 18 2.75H6C5.31 2.75 4.75 3.31 4.75 4V7.57001Z"
        fill="currentColor"
      />
      <Path
        d="M12.5002 22.7501H11.5002C9.98024 22.7501 8.75024 21.5201 8.75024 20.0001V17.9001C8.75024 17.4501 8.51023 17.0301 8.11023 16.8101L5.15027 15.1401C3.97027 14.4801 3.24023 13.2301 3.24023 11.8701V8.31006C3.24023 7.90006 3.58023 7.56006 3.99023 7.56006H19.9902C20.4002 7.56006 20.7402 7.90006 20.7402 8.31006V11.8701C20.7402 13.2201 20.0103 14.4701 18.8303 15.1401L15.8702 16.8101C15.4802 17.0301 15.2302 17.4501 15.2302 17.9001V20.0001C15.2502 21.5201 14.0202 22.7501 12.5002 22.7501ZM4.75024 9.07007V11.8801C4.75024 12.6901 5.19026 13.4401 5.89026 13.8401L8.85022 15.5101C9.71022 16.0001 10.2502 16.9101 10.2502 17.9001V20.0001C10.2502 20.6901 10.8102 21.2501 11.5002 21.2501H12.5002C13.1902 21.2501 13.7502 20.6901 13.7502 20.0001V17.9001C13.7502 16.9101 14.2903 15.9901 15.1503 15.5101L18.1102 13.8401C18.8202 13.4401 19.2502 12.6901 19.2502 11.8801V9.07007H4.75024Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush3Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.99023 2V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 2V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Brush3Bold,
  broken: Brush3Broken,
  bulk: Brush3Bulk,
  linear: Brush3Linear,
  outline: Brush3Outline,
  twotone: Brush3Twotone,
};

export const Brush3Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
