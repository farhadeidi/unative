import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const GridEraserBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7998 20.7009L16.8998 22.6109C16.3798 23.1309 15.5198 23.1309 14.9798 22.6109L13.3998 21.0209C12.8798 20.4909 12.8798 19.6409 13.3998 19.1009L15.3098 17.2109L18.7998 20.7009Z"
        fill="currentColor"
      />
      <Path
        d="M22.6105 16.9L19.8005 19.7L16.3105 16.21L19.1105 13.39C19.6405 12.87 20.5005 12.87 21.0305 13.39L22.6105 14.98C23.1305 15.51 23.1305 16.38 22.6105 16.9Z"
        fill="currentColor"
      />
      <Path
        d="M6.74683 2.06549C7.29669 1.99425 7.75 2.45112 7.75 3.00557V6.8C7.75 7.35229 7.30228 7.8 6.75 7.8H3C2.44772 7.8 1.9918 7.35027 2.05867 6.80204C2.38633 4.11548 4.07187 2.41205 6.74683 2.06549Z"
        fill="currentColor"
      />
      <Path
        d="M20.93 7.8H17.25C16.6977 7.8 16.25 7.35228 16.25 6.8V3.00625C16.25 2.45153 16.7041 1.99459 17.2542 2.06633C19.8878 2.40978 21.5645 4.0681 21.93 6.68C22.01 7.27 21.53 7.8 20.93 7.8Z"
        fill="currentColor"
      />
      <Path
        d="M6.75 16.3008C7.30228 16.3008 7.75 16.7485 7.75 17.3008V20.9208C7.75 21.5208 7.22 22.0008 6.62 21.9208C4.05088 21.5385 2.43008 19.8918 2.07373 17.3109C1.99752 16.7589 2.4555 16.3008 3.01274 16.3008H6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.75 10.3008C7.75 9.7485 7.30228 9.30078 6.75 9.30078H3C2.44772 9.30078 2 9.7485 2 10.3008V13.8008C2 14.3531 2.44772 14.8008 3 14.8008H6.75C7.30228 14.8008 7.75 14.3531 7.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 10.3008C14.75 9.7485 14.3023 9.30078 13.75 9.30078H10.25C9.69772 9.30078 9.25 9.7485 9.25 10.3008V13.8008C9.25 14.3531 9.69772 14.8008 10.25 14.8008H13.75C14.3 14.8008 14.75 14.3508 14.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 3C14.75 2.44771 14.3023 2 13.75 2H10.25C9.69772 2 9.25 2.44772 9.25 3V6.8C9.25 7.35229 9.69772 7.8 10.25 7.8H13.75C14.3023 7.8 14.75 7.35228 14.75 6.8V3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEraserBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.0293 8.5H21.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.0293 15.5H11.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.50977 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5098 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7995 19.7L16.8995 21.6C16.3795 22.12 15.5195 22.12 14.9895 21.6L13.4095 20.01C12.8895 19.49 12.8895 18.63 13.4095 18.1L15.3095 16.21L18.7995 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6108 16.9L18.8008 19.7099L15.3008 16.2099L18.1108 13.39C18.6308 12.87 19.5008 12.87 20.0208 13.39L21.6008 14.98C22.1308 15.51 22.1308 16.38 21.6108 16.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridEraserBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z"
        fill="currentColor"
      />
      <Path
        d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0099C19.1899 2.17016 21.7698 4.75018 21.7698 7.93018Z"
        fill="currentColor"
      />
      <Path
        d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07944 21.9903 7.70944 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.39944 8.61035H1.93945V15.5504H8.39944V8.61035Z"
        fill="currentColor"
      />
      <Path
        d="M15.3306 8.61035V14.8704C15.3306 15.2504 15.0206 15.5504 14.6506 15.5504H8.39062V8.61035H15.3306Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.7998 20.7L17.8998 22.6099C17.3798 23.1299 16.5198 23.1299 15.9798 22.6099L14.3998 21.02C13.8798 20.49 13.8798 19.6399 14.3998 19.0999L16.3098 17.21L19.7998 20.7Z"
        fill="currentColor"
      />
      <Path
        d="M22.6105 17.9L19.8005 20.7L16.3105 17.21L19.1105 14.39C19.6405 13.87 20.5005 13.87 21.0305 14.39L22.6105 15.98C23.1305 16.51 23.1305 17.38 22.6105 17.9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEraserLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03 8.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03 15.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.51001 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.51 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8 19.7L16.9 21.6C16.38 22.12 15.52 22.12 14.99 21.6L13.41 20.01C12.89 19.49 12.89 18.63 13.41 18.1L15.31 16.21L18.8 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 16.9L18.8 19.7099L15.3 16.2099L18.11 13.39C18.63 12.87 19.5 12.87 20.02 13.39L21.6 14.98C22.13 15.51 22.13 16.38 21.61 16.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridEraserOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V11C22.75 11.41 22.41 11.75 22 11.75C21.59 11.75 21.25 11.41 21.25 11V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H10C10.41 21.25 10.75 21.59 10.75 22C10.75 22.41 10.41 22.75 10 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0013 9.25H2.03125C1.62125 9.25 1.28125 8.91 1.28125 8.5C1.28125 8.09 1.62125 7.75 2.03125 7.75H22.0013C22.4113 7.75 22.7513 8.09 22.7513 8.5C22.7513 8.91 22.4113 9.25 22.0013 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M12.0013 16.25H2.03125C1.62125 16.25 1.28125 15.91 1.28125 15.5C1.28125 15.09 1.62125 14.75 2.03125 14.75H12.0013C12.4113 14.75 12.7513 15.09 12.7513 15.5C12.7513 15.91 12.4113 16.25 12.0013 16.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.50977 22.74C8.09977 22.74 7.75977 22.4 7.75977 21.99V2.02002C7.75977 1.61002 8.09977 1.27002 8.50977 1.27002C8.91977 1.27002 9.25977 1.61002 9.25977 2.02002V21.99C9.25977 22.4 8.92977 22.74 8.50977 22.74Z"
        fill="currentColor"
      />
      <Path
        d="M15.5098 12.74C15.0998 12.74 14.7598 12.4 14.7598 11.99V2.02002C14.7598 1.61002 15.0998 1.27002 15.5098 1.27002C15.9198 1.27002 16.2598 1.61002 16.2598 2.02002V11.99C16.2598 12.4 15.9298 12.74 15.5098 12.74Z"
        fill="currentColor"
      />
      <Path
        d="M15.9492 22.7501C15.4092 22.7501 14.8792 22.5501 14.4592 22.1401L12.8692 20.5401C12.0592 19.7301 12.0592 18.4 12.8692 17.57L14.7792 15.6701C15.0692 15.3801 15.5492 15.3801 15.8392 15.6701L19.3392 19.1701C19.4792 19.3101 19.5592 19.5 19.5592 19.7C19.5592 19.9 19.4792 20.0901 19.3392 20.2301L17.4392 22.1301C17.0192 22.5401 16.4892 22.7501 15.9492 22.7501ZM15.2992 17.2701L13.9292 18.6401C13.6992 18.8701 13.6992 19.2601 13.9292 19.4901L15.5092 21.08C15.7392 21.31 16.1292 21.31 16.3592 21.08L17.7392 19.7101L15.2992 17.2701Z"
        fill="currentColor"
      />
      <Path
        d="M18.8002 20.4498C18.6002 20.4498 18.4102 20.3699 18.2702 20.2299L14.7702 16.7299C14.4802 16.4399 14.4802 15.9599 14.7702 15.6699L17.5802 12.8499C18.4002 12.0299 19.7402 12.0299 20.5602 12.8499L22.1403 14.4398C22.5303 14.8298 22.7502 15.3599 22.7502 15.9299C22.7502 16.4999 22.5303 17.0199 22.1403 17.4199L19.3402 20.2299C19.1902 20.3799 19.0002 20.4498 18.8002 20.4498ZM16.3702 16.2098L18.8102 18.6499L21.0802 16.3699C21.1902 16.2599 21.2502 16.1098 21.2502 15.9398C21.2502 15.7798 21.1902 15.6199 21.0802 15.5099L19.5002 13.9199C19.2702 13.6899 18.8802 13.6899 18.6502 13.9199L16.3702 16.2098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridEraserTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2.0293 8.5H21.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.0293 15.5H11.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.50977 21.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5098 11.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M18.7995 19.7L16.8995 21.6C16.3795 22.12 15.5195 22.12 14.9895 21.6L13.4095 20.01C12.8895 19.49 12.8895 18.63 13.4095 18.1L15.3095 16.21L18.7995 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6108 16.9L18.8008 19.7099L15.3008 16.2099L18.1108 13.39C18.6308 12.87 19.5008 12.87 20.0208 13.39L21.6008 14.98C22.1308 15.51 22.1308 16.38 21.6108 16.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GridEraserBold,
  broken: GridEraserBroken,
  bulk: GridEraserBulk,
  linear: GridEraserLinear,
  outline: GridEraserOutline,
  twotone: GridEraserTwotone,
};

export const GridEraserIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default GridEraserIcon;
