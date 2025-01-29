import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ClipboardCloseBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
        fill="currentColor"
      />
      <Path
        d="M17.2391 4.81949C17.2391 6.40949 15.9391 7.70949 14.3491 7.70949H9.64906C8.05906 7.70949 6.75906 6.40949 6.75906 4.81949C6.75906 4.25949 6.15906 3.90949 5.65906 4.16949C4.24906 4.91949 3.28906 6.40949 3.28906 8.11949V17.5295C3.28906 19.9895 5.29906 21.9995 7.75906 21.9995H16.2391C18.6991 21.9995 20.7091 19.9895 20.7091 17.5295V8.11949C20.7091 6.40949 19.7491 4.91949 18.3391 4.16949C17.8391 3.90949 17.2391 4.25949 17.2391 4.81949ZM14.5291 16.6895C14.3791 16.8395 14.1891 16.9095 13.9991 16.9095C13.8091 16.9095 13.6191 16.8395 13.4691 16.6895L12.0191 15.2395L10.5291 16.7295C10.3791 16.8795 10.1891 16.9495 9.99906 16.9495C9.80906 16.9495 9.61906 16.8795 9.46906 16.7295C9.17906 16.4395 9.17906 15.9595 9.46906 15.6695L10.9591 14.1795L9.50906 12.7295C9.21906 12.4395 9.21906 11.9595 9.50906 11.6695C9.79906 11.3795 10.2791 11.3795 10.5691 11.6695L12.0191 13.1195L13.4191 11.7195C13.7091 11.4295 14.1891 11.4295 14.4791 11.7195C14.7691 12.0095 14.7691 12.4895 14.4791 12.7795L13.0791 14.1795L14.5291 15.6295C14.8191 15.9195 14.8191 16.3895 14.5291 16.6895Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ClipboardCloseBroken = ({
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
        d="M13.9991 16.16L10.0391 12.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.96 12.24L10 16.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.96 2H10C9 2 8 2 8 4C8 6 9 6 10 6H14C16 6 16 5 16 4C16 2 15 2 14 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10C3 5.44002 4.67 4.20002 8 4.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V13.91"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ClipboardCloseBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z"
        fill="currentColor"
      />
      <Path
        d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
        fill="currentColor"
      />
      <Path
        d="M14.5295 15.6199L13.0795 14.1699L14.4795 12.7699C14.7695 12.4799 14.7695 11.9999 14.4795 11.7099C14.1895 11.4199 13.7095 11.4199 13.4195 11.7099L12.0195 13.1099L10.5695 11.6599C10.2795 11.3699 9.79945 11.3699 9.50945 11.6599C9.21945 11.9499 9.21945 12.4299 9.50945 12.7199L10.9595 14.1699L9.46945 15.6599C9.17945 15.9499 9.17945 16.4299 9.46945 16.7199C9.61945 16.8699 9.80945 16.9399 9.99945 16.9399C10.1895 16.9399 10.3795 16.8699 10.5295 16.7199L12.0195 15.2299L13.4695 16.6799C13.6195 16.8299 13.8095 16.8999 13.9995 16.8999C14.1895 16.8999 14.3795 16.8299 14.5295 16.6799C14.8195 16.3899 14.8195 15.9199 14.5295 15.6199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ClipboardCloseLinear = ({
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
        d="M14 16.16L10.04 12.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.96 12.24L10 16.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ClipboardCloseOutline = ({
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
        d="M14.0005 16.9101C13.8105 16.9101 13.6205 16.8401 13.4705 16.6901L9.51047 12.7301C9.22047 12.4401 9.22047 11.9601 9.51047 11.6701C9.80047 11.3801 10.2805 11.3801 10.5705 11.6701L14.5305 15.6301C14.8205 15.9201 14.8205 16.4001 14.5305 16.6901C14.3805 16.8301 14.1905 16.9101 14.0005 16.9101Z"
        fill="currentColor"
      />
      <Path
        d="M9.99945 16.9502C9.80945 16.9502 9.61945 16.8802 9.46945 16.7302C9.17945 16.4402 9.17945 15.9602 9.46945 15.6702L13.4295 11.7102C13.7195 11.4202 14.1995 11.4202 14.4895 11.7102C14.7795 12.0002 14.7795 12.4802 14.4895 12.7702L10.5295 16.7302C10.3795 16.8802 10.1895 16.9502 9.99945 16.9502Z"
        fill="currentColor"
      />
      <Path
        d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.7499H9C3.38 22.7499 2.25 20.1699 2.25 15.9999V9.99993C2.25 5.43993 3.9 3.48993 7.96 3.27993C8.38 3.25993 8.73 3.56993 8.75 3.98993C8.77 4.40993 8.45 4.74993 8.04 4.76993C5.2 4.92993 3.75 5.77993 3.75 9.99993V15.9999C3.75 19.6999 4.48 21.2499 9 21.2499H15C19.52 21.2499 20.25 19.6999 20.25 15.9999V9.99993C20.25 5.77993 18.8 4.92993 15.96 4.76993C15.55 4.74993 15.23 4.38993 15.25 3.97993C15.27 3.56993 15.63 3.24993 16.04 3.26993C20.1 3.48993 21.75 5.43993 21.75 9.98993V15.9899C21.75 20.1699 20.62 22.7499 15 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ClipboardCloseTwotone = ({
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
      <G opacity="0.4">
        <Path
          d="M13.9991 16.1602L10.0391 12.2002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.96 12.2402L10 16.2002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
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
  bold: ClipboardCloseBold,
  broken: ClipboardCloseBroken,
  bulk: ClipboardCloseBulk,
  linear: ClipboardCloseLinear,
  outline: ClipboardCloseOutline,
  twotone: ClipboardCloseTwotone,
};

export const ClipboardCloseIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ClipboardCloseIcon;
