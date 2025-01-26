import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const BucketCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.63 16.25C10.78 17.1 9.92 17.1 9.06 16.25L6.5 13.68C6.06 13.24 5.85 12.8 5.86 12.35C5.87 11.93 6.09 11.52 6.5 11.11L10.1 7.51L9.54 6.96C9.35 6.77 9.35 6.47 9.54 6.28C9.73 6.09 10.03 6.09 10.22 6.28L10.77 6.83L15.47 11.53C15.57 11.63 15.64 11.78 15.64 11.92C15.65 12.09 15.6 12.26 15.47 12.39L11.63 16.25ZM16.64 17.86C15.81 17.86 15.14 17.19 15.14 16.36C15.14 15.52 16.13 14.41 16.33 14.19C16.49 14.01 16.8 14.01 16.97 14.19C17.17 14.4 18.16 15.52 18.16 16.36C18.14 17.19 17.47 17.86 16.64 17.86Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.40994 15.9499L7.01992 13.56C6.21992 12.76 6.21992 11.9599 7.01992 11.1699L11.0099 7.17993L15.3999 11.5699C15.6199 11.7899 15.6199 12.1499 15.3999 12.3699L11.8099 15.9599C11.0099 16.7499 10.2099 16.7499 9.40994 15.9499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.209 6.37988L11.009 7.17987"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.45898 12.3299L15.489 11.9399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4691 14.1699C16.4691 14.1699 15.3691 15.3699 15.3691 16.0999C15.3691 16.7099 15.8691 17.1998 16.4691 17.1998C17.0791 17.1998 17.5692 16.6999 17.5692 16.0999C17.5792 15.3599 16.4691 14.1699 16.4691 14.1699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BucketCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M15.6595 11.93C15.6495 11.79 15.5895 11.64 15.4895 11.54L10.7895 6.84001L10.2395 6.28996C10.0495 6.09996 9.74948 6.09996 9.55948 6.28996C9.36948 6.47996 9.36948 6.77995 9.55948 6.96995L10.1095 7.52L6.5095 11.12C6.0995 11.53 5.87948 11.95 5.86948 12.36C5.85948 12.8 6.0695 13.24 6.5095 13.68L9.07947 16.25C9.93947 17.1 10.7995 17.1 11.6495 16.25L15.4995 12.4C15.6095 12.27 15.6695 12.09 15.6595 11.93Z"
        fill="currentColor"
      />
      <Path
        d="M16.9589 14.1902C16.7989 14.0102 16.4889 14.0102 16.3189 14.1902C16.1189 14.4002 15.1289 15.5202 15.1289 16.3602C15.1289 17.1902 15.7989 17.8602 16.6289 17.8602C17.4589 17.8602 18.1289 17.1902 18.1289 16.3602C18.1389 15.5202 17.1589 14.4102 16.9589 14.1902Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.41 15.9499L7.01998 13.56C6.21998 12.76 6.21998 11.9599 7.01998 11.1699L11.01 7.17993L15.4 11.5699C15.62 11.7899 15.62 12.1499 15.4 12.3699L11.81 15.9599C11.01 16.7499 10.21 16.7499 9.41 15.9499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.21 6.37988L11.01 7.17987"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.45999 12.3299L15.49 11.9399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.47 14.1699C16.47 14.1699 15.37 15.3699 15.37 16.0999C15.37 16.7099 15.87 17.1998 16.47 17.1998C17.08 17.1998 17.57 16.6999 17.57 16.0999C17.58 15.3599 16.47 14.1699 16.47 14.1699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BucketCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.6091 17.31C10.0191 17.31 9.42908 17.0399 8.87908 16.4899L6.48906 14.0999C5.38906 12.9999 5.38906 11.74 6.48906 10.65L10.4791 6.65991C10.6191 6.51991 10.8091 6.43994 11.0091 6.43994C11.2091 6.43994 11.3991 6.51991 11.5391 6.65991L15.9291 11.0499C16.1791 11.2999 16.3091 11.6299 16.3091 11.9799C16.3091 12.3299 16.1691 12.66 15.9191 12.91L12.3291 16.4999C11.7891 17.0299 11.1991 17.31 10.6091 17.31ZM11.0091 8.23993L7.54906 11.7C7.37906 11.87 7.16909 12.1299 7.16909 12.3699C7.16909 12.6099 7.37906 12.86 7.54906 13.04L9.93907 15.43C10.1091 15.6 10.3691 15.81 10.6091 15.81C10.8491 15.81 11.0991 15.6 11.2791 15.43L14.7391 11.9699L11.0091 8.23993Z"
        fill="currentColor"
      />
      <Path
        d="M11.0104 7.92984C10.8204 7.92984 10.6304 7.85987 10.4804 7.70987L9.68039 6.90982C9.39039 6.61982 9.39039 6.13982 9.68039 5.84982C9.97039 5.55982 10.4504 5.55982 10.7404 5.84982L11.5404 6.64987C11.8304 6.93987 11.8304 7.41987 11.5404 7.70987C11.3904 7.85987 11.2004 7.92984 11.0104 7.92984Z"
        fill="currentColor"
      />
      <Path
        d="M6.45987 13.0798C6.05987 13.0798 5.72987 12.7699 5.70987 12.3599C5.68987 11.9499 6.00987 11.5999 6.42987 11.5799L15.4599 11.1899C15.8699 11.1599 16.2199 11.4899 16.2399 11.9099C16.2599 12.3299 15.9399 12.6698 15.5199 12.6898L6.48987 13.0798C6.47987 13.0798 6.46987 13.0798 6.45987 13.0798Z"
        fill="currentColor"
      />
      <Path
        d="M16.4711 17.9502C15.4511 17.9502 14.6211 17.1202 14.6211 16.1002C14.6211 15.1502 15.6211 13.9902 15.9211 13.6602C16.2011 13.3502 16.7411 13.3502 17.0211 13.6602C17.3211 13.9902 18.3211 15.1502 18.3211 16.1002C18.3311 17.1202 17.5011 17.9502 16.4711 17.9502ZM16.4711 15.3802C16.2611 15.6902 16.1211 15.9702 16.1211 16.1002C16.1211 16.2902 16.2811 16.4502 16.4711 16.4502C16.6611 16.4502 16.8211 16.2902 16.8211 16.1002C16.8311 15.9702 16.6811 15.6902 16.4711 15.3802Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BucketCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M9.40994 15.9496L7.01992 13.5598C6.21992 12.7598 6.21992 11.9597 7.01992 11.1697L11.0099 7.17969L15.3999 11.5697C15.6199 11.7897 15.6199 12.1497 15.3999 12.3697L11.8099 15.9597C11.0099 16.7497 10.2099 16.7496 9.40994 15.9496Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.2109 6.37988L11.011 7.17987"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.46094 12.3299L15.4909 11.9399"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.4711 14.1699C16.4711 14.1699 15.3711 15.3699 15.3711 16.0999C15.3711 16.7099 15.8711 17.1998 16.4711 17.1998C17.0811 17.1998 17.5711 16.6999 17.5711 16.0999C17.5811 15.3599 16.4711 14.1699 16.4711 14.1699Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BucketCircleBold,
  broken: BucketCircleBroken,
  bulk: BucketCircleBulk,
  linear: BucketCircleLinear,
  outline: BucketCircleOutline,
  twotone: BucketCircleTwotone,
};

export const BucketCircleIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
