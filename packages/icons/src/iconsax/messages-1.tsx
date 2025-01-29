import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Messages1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.19 6H6.79C6.53 6 6.28 6.01 6.04 6.04C3.35 6.27 2 7.86 2 10.79V14.79C2 18.79 3.6 19.58 6.79 19.58H7.19C7.41 19.58 7.7 19.73 7.83 19.9L9.03 21.5C9.56 22.21 10.42 22.21 10.95 21.5L12.15 19.9C12.3 19.7 12.54 19.58 12.79 19.58H13.19C16.12 19.58 17.71 18.24 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.6 16.38 6 13.19 6ZM6.5 14C5.94 14 5.5 13.55 5.5 13C5.5 12.45 5.95 12 6.5 12C7.05 12 7.5 12.45 7.5 13C7.5 13.55 7.05 14 6.5 14ZM9.99 14C9.43 14 8.99 13.55 8.99 13C8.99 12.45 9.44 12 9.99 12C10.54 12 10.99 12.45 10.99 13C10.99 13.55 10.55 14 9.99 14ZM13.49 14C12.93 14 12.49 13.55 12.49 13C12.49 12.45 12.94 12 13.49 12C14.04 12 14.49 12.45 14.49 13C14.49 13.55 14.04 14 13.49 14Z"
        fill="currentColor"
      />
      <Path
        d="M21.9802 6.79V10.79C21.9802 12.79 21.3602 14.15 20.1202 14.9C19.8202 15.08 19.4702 14.84 19.4702 14.49L19.4802 10.79C19.4802 6.79 17.1902 4.5 13.1902 4.5L7.10025 4.51C6.75025 4.51 6.51025 4.16 6.69025 3.86C7.44025 2.62 8.80025 2 10.7902 2H17.1902C20.3802 2 21.9802 3.6 21.9802 6.79Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Messages1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9791 6.79001C21.9791 3.60001 20.3791 2 17.1891 2H10.7891C7.85906 2 6.26906 3.35001 6.03906 6.04001C6.27906 6.01001 6.52906 6 6.78906 6H13.1891C16.3791 6 17.9791 7.60001 17.9791 10.79V14.79C17.9791 15.05 17.9691 15.3 17.9391 15.54C20.6291 15.31 21.9791 13.73 21.9791 10.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4955 13.25H13.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9955 13.25H10.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.4955 13.25H6.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Messages1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
        fill="currentColor"
      />
      <Path
        d="M9.99023 14C9.43023 14 8.99023 13.55 8.99023 13C8.99023 12.45 9.44023 12 9.99023 12C10.5402 12 10.9902 12.45 10.9902 13C10.9902 13.55 10.5502 14 9.99023 14Z"
        fill="currentColor"
      />
      <Path
        d="M13.4902 14C12.9302 14 12.4902 13.55 12.4902 13C12.4902 12.45 12.9402 12 13.4902 12C14.0402 12 14.4902 12.45 14.4902 13C14.4902 13.55 14.0402 14 13.4902 14Z"
        fill="currentColor"
      />
      <Path
        d="M6.5 14C5.94 14 5.5 13.55 5.5 13C5.5 12.45 5.95 12 6.5 12C7.05 12 7.5 12.45 7.5 13C7.5 13.55 7.05 14 6.5 14Z"
        fill="currentColor"
      />
      <Path
        d="M21.9791 6.79001V10.79C21.9791 13.73 20.6291 15.31 17.9391 15.54C17.9691 15.3 17.9791 15.05 17.9791 14.79V10.79C17.9791 7.60001 16.3791 6 13.1891 6H6.78906C6.52906 6 6.27906 6.01001 6.03906 6.04001C6.26906 3.35001 7.85906 2 10.7891 2H17.1891C20.3791 2 21.9791 3.60001 21.9791 6.79001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Messages1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4955 13.25H13.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9955 13.25H10.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.4955 13.25H6.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Messages1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.25999 18.8898C7.17999 18.8898 7.1 18.8798 7.02 18.8698C6.42 18.7898 5.91 18.4098 5.66 17.8698L4.39999 15.0997C2.39999 13.6197 1.25 11.4098 1.25 9.00977C1.25 4.73977 4.95 1.25977 9.5 1.25977C12.71 1.25977 15.64 3.01976 16.97 5.74976C17.48 6.75976 17.75 7.85977 17.75 9.00977C17.75 13.1698 14.24 16.5798 9.86 16.7498L8.60001 18.2698C8.26001 18.6598 7.76999 18.8898 7.25999 18.8898ZM9.5 2.74976C5.78 2.74976 2.75 5.54976 2.75 8.99976C2.75 10.9698 3.72999 12.7897 5.42999 13.9897C5.53999 14.0697 5.62999 14.1697 5.67999 14.2897L7.02 17.2397C7.07 17.3497 7.17 17.3798 7.22 17.3798C7.27 17.3898 7.37 17.3797 7.44 17.2997L8.92 15.5198C9.06 15.3498 9.27 15.2498 9.5 15.2498C13.22 15.2498 16.25 12.4498 16.25 8.99976C16.25 8.08976 16.04 7.21973 15.63 6.40973C14.55 4.17973 12.14 2.74976 9.5 2.74976Z"
        fill="currentColor"
      />
      <Path
        d="M16.7401 22.7501C16.2201 22.7501 15.7401 22.5201 15.4001 22.1201L14.1401 20.6101C11.7201 20.5101 9.44008 19.4001 7.98008 17.6001C7.75008 17.3201 7.76009 16.9201 7.99009 16.6501L8.92008 15.5301C9.06008 15.3601 9.27008 15.2601 9.50008 15.2601C13.2201 15.2601 16.2501 12.4601 16.2501 9.01012C16.2501 8.10012 16.0401 7.23009 15.6301 6.42009C15.5001 6.16009 15.5301 5.8501 15.7101 5.6201C15.8901 5.3901 16.1901 5.29008 16.4701 5.35008C20.1701 6.20008 22.7501 9.2901 22.7501 12.8701C22.7501 15.2701 21.6001 17.4801 19.6001 18.9601L18.3401 21.7301C18.0801 22.2901 17.5701 22.6701 16.9601 22.7401C16.8901 22.7501 16.8101 22.7501 16.7401 22.7501ZM9.56008 17.1001C10.8101 18.3701 12.6101 19.1101 14.5001 19.1101C14.7201 19.1101 14.9301 19.2101 15.0801 19.3801L16.5601 21.1601C16.6301 21.2501 16.7201 21.2601 16.7801 21.2501C16.8201 21.2501 16.9301 21.2201 16.9901 21.1001L18.3301 18.1501C18.3901 18.0301 18.4701 17.9201 18.5801 17.8501C20.2801 16.6501 21.2601 14.8301 21.2601 12.8601C21.2601 10.4601 19.7901 8.33014 17.5501 7.28014C17.6901 7.84014 17.7601 8.41011 17.7601 9.00011C17.7601 13.1601 14.2501 16.5701 9.87008 16.7401L9.56008 17.1001Z"
        fill="currentColor"
      />
      <Path
        d="M12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Messages1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.9791 6.79001V10.79C21.9791 13.73 20.6291 15.31 17.9391 15.54C17.9691 15.3 17.9791 15.05 17.9791 14.79V10.79C17.9791 7.60001 16.3791 6 13.1891 6H6.78906C6.52906 6 6.27906 6.01001 6.03906 6.04001C6.26906 3.35001 7.85906 2 10.7891 2H17.1891C20.3791 2 21.9791 3.60001 21.9791 6.79001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.4955 13.25H13.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.9955 13.25H10.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.4955 13.25H6.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Messages1Bold,
  broken: Messages1Broken,
  bulk: Messages1Bulk,
  linear: Messages1Linear,
  outline: Messages1Outline,
  twotone: Messages1Twotone,
};

export const Messages1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Messages1Icon;
