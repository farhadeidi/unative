import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MusicSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5406 13.6719C14.1806 13.6719 13.8906 13.9619 13.8906 14.3219C13.8906 14.6819 14.1806 14.9719 14.5406 14.9719C14.9006 14.9719 15.1906 14.6819 15.1906 14.3219C15.1806 13.9619 14.8906 13.6719 14.5406 13.6719Z"
        fill="currentColor"
      />
      <Path
        d="M9.06016 14.6602C8.70016 14.6602 8.41016 14.9502 8.41016 15.3102C8.41016 15.6702 8.70016 15.9602 9.06016 15.9602C9.42016 15.9602 9.71016 15.6702 9.71016 15.3102C9.71016 14.9502 9.42016 14.6602 9.06016 14.6602Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 9.55V14.31C16.88 15.6 15.83 16.65 14.54 16.65C13.25 16.65 12.2 15.6 12.2 14.31C12.2 13.02 13.25 11.97 14.54 11.97C14.77 11.97 14.98 12.01 15.19 12.07V10.65L11.41 11.68V15.3C11.41 15.31 11.4 15.32 11.4 15.33C11.39 16.61 10.34 17.64 9.06 17.64C7.77 17.64 6.72 16.59 6.72 15.3C6.72 14.01 7.77 12.96 9.06 12.96C9.29 12.96 9.5 13 9.71 13.06V11.03V9.29C9.71 8.32 10.31 7.53 11.25 7.28L14.24 6.46C15.2 6.2 15.8 6.45 16.14 6.71C16.47 6.97 16.88 7.48 16.88 8.48V9.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41962 17.11C9.2867 17.11 9.98962 16.4071 9.98962 15.54C9.98962 14.6729 9.2867 13.97 8.41962 13.97C7.55253 13.97 6.84961 14.6729 6.84961 15.54C6.84961 16.4071 7.55253 17.11 8.41962 17.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 14.49V8.34997C15.75 7.03997 14.93 6.86002 14.1 7.09002L10.96 7.95001C10.39 8.11001 10 8.56002 10 9.21002V10.31V11.05V15.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1794 16.0599C15.0465 16.0599 15.7494 15.357 15.7494 14.4899C15.7494 13.6228 15.0465 12.9199 14.1794 12.9199C13.3123 12.9199 12.6094 13.6228 12.6094 14.4899C12.6094 15.357 13.3123 16.0599 14.1794 16.0599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99023 11.04L15.7502 9.46997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.1407 6.7099C15.8007 6.4499 15.2007 6.1999 14.2407 6.4599L11.2507 7.27991C10.3207 7.52991 9.71075 8.31986 9.71075 9.28986V11.0399V13.0699C9.50075 13.0099 9.29073 12.9698 9.06073 12.9698C7.77073 12.9698 6.7207 14.0199 6.7207 15.3099C6.7207 16.5999 7.77073 17.6499 9.06073 17.6499C10.3407 17.6499 11.3808 16.6099 11.4008 15.3399C11.4008 15.3299 11.4107 15.3199 11.4107 15.3099V11.6899L15.1907 10.6599V12.0799C14.9807 12.0199 14.7707 11.9799 14.5407 11.9799C13.2507 11.9799 12.2007 13.0299 12.2007 14.3199C12.2007 15.6099 13.2507 16.6599 14.5407 16.6599C15.8307 16.6599 16.8807 15.6099 16.8807 14.3199V9.55988V8.48987C16.8807 7.48987 16.4707 6.9699 16.1407 6.7099ZM9.06073 15.9599C8.70073 15.9599 8.41071 15.6699 8.41071 15.3099C8.41071 14.9499 8.70073 14.6599 9.06073 14.6599C9.42073 14.6599 9.71075 14.9499 9.71075 15.3099C9.71075 15.6699 9.42073 15.9599 9.06073 15.9599ZM14.5407 14.9599C14.1807 14.9599 13.8907 14.6699 13.8907 14.3099C13.8907 13.9499 14.1807 13.6599 14.5407 13.6599C14.9007 13.6599 15.1907 13.9499 15.1907 14.3099C15.1807 14.6699 14.8907 14.9599 14.5407 14.9599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41998 17.11C9.28707 17.11 9.98999 16.4071 9.98999 15.54C9.98999 14.6729 9.28707 13.97 8.41998 13.97C7.5529 13.97 6.84998 14.6729 6.84998 15.54C6.84998 16.4071 7.5529 17.11 8.41998 17.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 14.49V8.34997C15.75 7.03997 14.93 6.86002 14.1 7.09002L10.96 7.95001C10.39 8.11001 10 8.56002 10 9.21002V10.31V11.05V15.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.18 16.0599C15.0471 16.0599 15.75 15.357 15.75 14.4899C15.75 13.6228 15.0471 12.9199 14.18 12.9199C13.3129 12.9199 12.61 13.6228 12.61 14.4899C12.61 15.357 13.3129 16.0599 14.18 16.0599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.98999 11.04L15.75 9.46997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M8.41962 17.8597C7.13962 17.8597 6.09961 16.8197 6.09961 15.5397C6.09961 14.2597 7.13962 13.2197 8.41962 13.2197C9.69962 13.2197 10.7396 14.2597 10.7396 15.5397C10.7396 16.8197 9.69962 17.8597 8.41962 17.8597ZM8.41962 14.7197C7.96962 14.7197 7.59961 15.0897 7.59961 15.5397C7.59961 15.9897 7.96962 16.3597 8.41962 16.3597C8.86962 16.3597 9.23962 15.9897 9.23962 15.5397C9.23962 15.0897 8.86962 14.7197 8.41962 14.7197Z"
        fill="currentColor"
      />
      <Path
        d="M9.99023 16.2901C9.58023 16.2901 9.24023 15.9501 9.24023 15.5401V9.21011C9.24023 8.25011 9.84025 7.47006 10.7603 7.22006L13.9003 6.36007C14.8503 6.10007 15.4503 6.35006 15.7803 6.60006C16.2603 6.97006 16.5002 7.55011 16.5002 8.34011V14.4801C16.5002 14.8901 16.1602 15.2301 15.7502 15.2301C15.3402 15.2301 15.0002 14.8901 15.0002 14.4801V8.34011C15.0002 8.01011 14.9302 7.83006 14.8702 7.79006C14.8202 7.75006 14.6402 7.71007 14.2902 7.80007L11.1503 8.66006C10.8703 8.74006 10.7402 8.9101 10.7402 9.2001V15.5301C10.7402 15.9501 10.4002 16.2901 9.99023 16.2901Z"
        fill="currentColor"
      />
      <Path
        d="M14.1794 16.8099C12.8994 16.8099 11.8594 15.7699 11.8594 14.4899C11.8594 13.2099 12.8994 12.1699 14.1794 12.1699C15.4594 12.1699 16.4994 13.2099 16.4994 14.4899C16.4994 15.7699 15.4594 16.8099 14.1794 16.8099ZM14.1794 13.6699C13.7294 13.6699 13.3594 14.0399 13.3594 14.4899C13.3594 14.9399 13.7294 15.3099 14.1794 15.3099C14.6294 15.3099 14.9994 14.9399 14.9994 14.4899C14.9994 14.0399 14.6294 13.6699 14.1794 13.6699Z"
        fill="currentColor"
      />
      <Path
        d="M9.98888 11.7903C9.65888 11.7903 9.35891 11.5703 9.26891 11.2403C9.15891 10.8403 9.39888 10.4304 9.79888 10.3204L15.5589 8.75035C15.9689 8.64035 16.3689 8.88038 16.4789 9.28038C16.5889 9.68038 16.3489 10.0904 15.9489 10.2004L10.1889 11.7704C10.1189 11.7804 10.0489 11.7903 9.98888 11.7903Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M8.41962 17.1097C9.2867 17.1097 9.98962 16.4068 9.98962 15.5397C9.98962 14.6726 9.2867 13.9697 8.41962 13.9697C7.55253 13.9697 6.84961 14.6726 6.84961 15.5397C6.84961 16.4068 7.55253 17.1097 8.41962 17.1097Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.75 14.4897V8.34973C15.75 7.03973 14.93 6.85978 14.1 7.08978L10.96 7.94976C10.39 8.10976 10 8.55977 10 9.20977V10.3097V11.0497V15.5497"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.1794 16.0599C15.0465 16.0599 15.7494 15.357 15.7494 14.4899C15.7494 13.6228 15.0465 12.9199 14.1794 12.9199C13.3123 12.9199 12.6094 13.6228 12.6094 14.4899C12.6094 15.357 13.3123 16.0599 14.1794 16.0599Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.99023 11.0397L15.7502 9.46973"
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
  bold: MusicSquareBold,
  broken: MusicSquareBroken,
  bulk: MusicSquareBulk,
  linear: MusicSquareLinear,
  outline: MusicSquareOutline,
  twotone: MusicSquareTwotone,
};

export const MusicSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
