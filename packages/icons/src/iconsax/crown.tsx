import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CrownBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
        fill="currentColor"
      />
      <Path
        d="M20.3502 5.51906L16.3502 8.37906C15.8202 8.75906 15.0602 8.52906 14.8302 7.91906L12.9402 2.87906C12.6202 2.00906 11.3902 2.00906 11.0702 2.87906L9.17022 7.90906C8.94022 8.52906 8.19022 8.75906 7.66022 8.36906L3.66022 5.50906C2.86022 4.94906 1.80022 5.73906 2.13022 6.66906L6.29022 18.3191C6.43022 18.7191 6.81022 18.9791 7.23022 18.9791H16.7602C17.1802 18.9791 17.5602 18.7091 17.7002 18.3191L21.8602 6.66906C22.2002 5.73906 21.1402 4.94906 20.3502 5.51906ZM14.5002 14.7491H9.50022C9.09022 14.7491 8.75022 14.4091 8.75022 13.9991C8.75022 13.5891 9.09022 13.2491 9.50022 13.2491H14.5002C14.9102 13.2491 15.2502 13.5891 15.2502 13.9991C15.2502 14.4091 14.9102 14.7491 14.5002 14.7491Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CrownBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0992 5.69011C21.6592 4.57011 22.4092 5.14011 21.7692 6.95011L17.7292 18.2601C17.5892 18.6601 17.1192 18.9901 16.6992 18.9901H7.29922C6.87922 18.9901 6.40922 18.6601 6.26922 18.2601L2.12922 6.67011C1.53922 5.01011 2.22922 4.50011 3.64922 5.52011L7.54922 8.31011C8.19922 8.76011 8.93922 8.53011 9.21922 7.80011L10.9792 3.11011C11.5392 1.61011 12.4692 1.61011 13.0292 3.11011L14.7892 7.80011C15.0692 8.53011 15.8092 8.76011 16.4492 8.31011L17.0792 7.86011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 22H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 14H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CrownBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7702 18.98H7.23024C6.81024 18.98 6.43024 18.71 6.29024 18.32L2.13024 6.67004C1.80024 5.74004 2.86024 4.95004 3.65024 5.52004L7.65024 8.38004C8.18024 8.76004 8.94024 8.53004 9.17024 7.92004L11.0602 2.88004C11.3802 2.01004 12.6102 2.01004 12.9302 2.88004L14.8202 7.92004C15.0502 8.54004 15.8002 8.76004 16.3402 8.38004L20.3402 5.52004C21.1402 4.95004 22.1902 5.75004 21.8602 6.67004L17.7002 18.32C17.5702 18.71 17.1902 18.98 16.7702 18.98Z"
        fill="currentColor"
      />
      <Path
        d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CrownLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CrownOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 21.0401H7C3.83 21.0401 1.25 18.4601 1.25 15.2901V5.7101C1.25 4.4101 1.85 3.9601 2.21 3.8101C2.57 3.6601 3.31 3.5501 4.23 4.4701L6.82 7.0601C6.92 7.1601 7.08 7.1601 7.17 7.0601L10.76 3.4701C11.42 2.8101 12.58 2.8101 13.23 3.4701L16.82 7.0601C16.92 7.1601 17.08 7.1601 17.17 7.0601L19.76 4.4701C20.68 3.5501 21.42 3.6701 21.78 3.8101C22.14 3.9601 22.74 4.4001 22.74 5.7101V15.3001C22.75 18.7301 20.44 21.0401 17 21.0401ZM2.81 5.2401C2.78 5.3201 2.75 5.4701 2.75 5.7101V15.3001C2.75 17.6401 4.66 19.5501 7 19.5501H17C19.58 19.5501 21.25 17.8801 21.25 15.3001V5.7101C21.25 5.4701 21.22 5.3301 21.19 5.2501C21.11 5.2901 20.99 5.3701 20.82 5.5401L18.23 8.1301C17.57 8.7901 16.41 8.7901 15.76 8.1301L12.17 4.5401C12.07 4.4401 11.91 4.4401 11.82 4.5401L8.24 8.1201C7.58 8.7801 6.42 8.7801 5.77 8.1201L3.18 5.5301C3.01 5.3601 2.88 5.2801 2.81 5.2401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CrownTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CrownBold,
  broken: CrownBroken,
  bulk: CrownBulk,
  linear: CrownLinear,
  outline: CrownOutline,
  twotone: CrownTwotone,
};

export const CrownIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CrownIcon;
