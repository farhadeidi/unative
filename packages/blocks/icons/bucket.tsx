import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BucketBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0408 10.6406L9.69083 3.29062L8.82083 2.42063C8.53083 2.13063 8.05083 2.13063 7.76083 2.42063C7.47083 2.71062 7.47083 3.19062 7.76083 3.48062L8.63083 4.35062L3.00083 9.98062C2.36083 10.6206 2.02083 11.2706 2.00083 11.9206C1.98083 12.6106 2.32083 13.3006 3.00083 13.9906L7.01083 18.0006C8.35083 19.3306 9.69083 19.3306 11.0208 18.0006L17.0408 11.9806C17.2408 11.7806 17.3308 11.5106 17.3108 11.2506C17.3008 11.0306 17.2008 10.8006 17.0408 10.6406Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.35 14.7803C19.09 14.5003 18.61 14.5003 18.35 14.7803C18.04 15.1203 16.5 16.8503 16.5 18.1703C16.5 19.4703 17.55 20.5203 18.85 20.5203C20.15 20.5203 21.2 19.4703 21.2 18.1703C21.2 16.8603 19.66 15.1203 19.35 14.7803Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.68914 3.29004L17.0391 10.6401C17.4091 11.0101 17.4091 11.61 17.0391 11.98L11.0191 18.0001C9.67914 19.3401 8.34914 19.3401 7.00914 18.0001L2.99914 13.9901C1.65914 12.6501 1.65914 11.32 2.99914 9.98004L7.30914 5.67004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.34961 1.9502L9.68961 3.29016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.07031 11.9197L17.1903 11.2598"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BucketBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.3108 11.25C17.3308 11.51 17.2408 11.78 17.0408 11.98L11.0208 18C9.69083 19.33 8.35083 19.33 7.01083 18L3.00083 13.99C2.32083 13.3 1.98083 12.61 2.00083 11.92H2.07083L17.1908 11.26L17.3108 11.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.04 10.6402L9.69 3.29013L8.82 2.42014C8.53 2.13014 8.05 2.13014 7.76 2.42014C7.47 2.71014 7.47 3.19013 7.76 3.48013L8.63 4.35013L3 9.98013C2.36 10.6201 2.02 11.2701 2 11.9201H2.07L17.19 11.2602L17.31 11.2502C17.3 11.0302 17.2 10.8002 17.04 10.6402Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.35 14.7798C19.09 14.4998 18.61 14.4998 18.35 14.7798C18.04 15.1198 16.5 16.8598 16.5 18.1698C16.5 19.4698 17.55 20.5198 18.85 20.5198C20.15 20.5198 21.2 19.4698 21.2 18.1698C21.2 16.8598 19.66 15.1198 19.35 14.7798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 19.7502C8.16 19.7502 7.3 19.3403 6.48 18.5203L2.47 14.5103C1.66 13.7003 1.25 12.8502 1.25 11.9702C1.25 11.1002 1.66 10.2402 2.47 9.43024L9.15 2.75024C9.29 2.61024 9.48 2.53027 9.68 2.53027C9.88 2.53027 10.07 2.61024 10.21 2.75024L17.56 10.1002C17.88 10.4202 18.06 10.8402 18.06 11.3002C18.06 11.7502 17.88 12.1802 17.56 12.5002L11.54 18.5203C10.74 19.3403 9.88 19.7502 9.02 19.7502ZM9.69 4.35022L3.54 10.5002C3.02 11.0202 2.76 11.5202 2.76 11.9802C2.76 12.4402 3.02 12.9402 3.54 13.4502L7.55 17.4602C8.6 18.5102 9.45 18.5102 10.5 17.4602L16.52 11.4402C16.58 11.3802 16.59 11.2302 16.52 11.1602L9.69 4.35022Z"
        fill="currentColor"
      />
      <Path
        d="M9.68906 4.03964C9.49906 4.03964 9.30906 3.96967 9.15906 3.81967L7.81906 2.47965C7.52906 2.18965 7.52906 1.70965 7.81906 1.41965C8.10906 1.12965 8.58906 1.12965 8.87906 1.41965L10.2191 2.75968C10.5091 3.04968 10.5091 3.52967 10.2191 3.81967C10.0691 3.96967 9.87906 4.03964 9.68906 4.03964Z"
        fill="currentColor"
      />
      <Path
        d="M2.0712 12.6697C1.6712 12.6697 1.3412 12.3597 1.3212 11.9497C1.3012 11.5397 1.6212 11.1897 2.0412 11.1697L17.1712 10.5097C17.5812 10.4897 17.9312 10.8096 17.9512 11.2296C17.9712 11.6396 17.6512 11.9897 17.2312 12.0097L2.1012 12.6697C2.0912 12.6697 2.0812 12.6697 2.0712 12.6697Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.85 20.83C17.42 20.83 16.25 19.6601 16.25 18.2301C16.25 16.7801 17.96 14.8601 18.3 14.4801C18.58 14.1701 19.12 14.1701 19.4 14.4801C19.74 14.8501 21.45 16.77 21.45 18.22C21.45 19.67 20.28 20.83 18.85 20.83ZM18.85 16.1701C18.3 16.8901 17.75 17.7701 17.75 18.2401C17.75 18.8501 18.24 19.34 18.85 19.34C19.46 19.34 19.95 18.8501 19.95 18.2401C19.95 17.7601 19.4 16.8801 18.85 16.1701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 19.7502C8.16 19.7502 7.3 19.3403 6.48 18.5203L2.47 14.5103C1.66 13.7003 1.25 12.8502 1.25 11.9702C1.25 11.1002 1.66 10.2402 2.47 9.43024L9.15 2.75024C9.29 2.61024 9.48 2.53027 9.68 2.53027C9.88 2.53027 10.07 2.61024 10.21 2.75024L17.56 10.1002C17.88 10.4202 18.06 10.8402 18.06 11.3002C18.06 11.7502 17.88 12.1802 17.56 12.5002L11.54 18.5203C10.74 19.3403 9.88 19.7502 9.02 19.7502ZM9.69 4.35022L3.54 10.5002C3.02 11.0202 2.76 11.5202 2.76 11.9802C2.76 12.4402 3.02 12.9402 3.54 13.4502L7.55 17.4602C8.6 18.5102 9.45 18.5102 10.5 17.4602L16.52 11.4402C16.58 11.3802 16.59 11.2302 16.52 11.1602L9.69 4.35022Z"
        fill="currentColor"
      />
      <Path
        d="M9.68906 4.03964C9.49906 4.03964 9.30906 3.96967 9.15906 3.81967L7.81906 2.47965C7.52906 2.18965 7.52906 1.70965 7.81906 1.41965C8.10906 1.12965 8.58906 1.12965 8.87906 1.41965L10.2191 2.75968C10.5091 3.04968 10.5091 3.52967 10.2191 3.81967C10.0691 3.96967 9.87906 4.03964 9.68906 4.03964Z"
        fill="currentColor"
      />
      <Path
        d="M2.0712 12.6697C1.6712 12.6697 1.3412 12.3597 1.3212 11.9497C1.3012 11.5397 1.6212 11.1897 2.0412 11.1697L17.1712 10.5097C17.5812 10.4897 17.9312 10.8096 17.9512 11.2296C17.9712 11.6396 17.6512 11.9897 17.2312 12.0097L2.1012 12.6697C2.0912 12.6697 2.0812 12.6697 2.0712 12.6697Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.85 20.83C17.42 20.83 16.25 19.6601 16.25 18.2301C16.25 16.7801 17.96 14.8601 18.3 14.4801C18.58 14.1701 19.12 14.1701 19.4 14.4801C19.74 14.8501 21.45 16.77 21.45 18.22C21.45 19.67 20.28 20.83 18.85 20.83ZM18.85 16.1701C18.3 16.8901 17.75 17.7701 17.75 18.2401C17.75 18.8501 18.24 19.34 18.85 19.34C19.46 19.34 19.95 18.8501 19.95 18.2401C19.95 17.7601 19.4 16.8801 18.85 16.1701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.00914 17.9998L2.99914 13.9898C1.65914 12.6498 1.65914 11.3198 2.99914 9.9798L9.67914 3.2998L17.0291 10.6498C17.3991 11.0198 17.3991 11.6198 17.0291 11.9898L11.0091 18.0098C9.68914 19.3298 8.34914 19.3298 7.00914 17.9998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.34961 1.9502L9.68961 3.29016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2.07031 11.9197L17.1903 11.2598"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BucketBold,
  broken: BucketBroken,
  bulk: BucketBulk,
  linear: BucketLinear,
  outline: BucketOutline,
  twotone: BucketTwotone,
};

export const BucketIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
