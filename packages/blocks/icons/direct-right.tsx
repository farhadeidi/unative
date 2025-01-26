import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DirectRightBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.70911 17.0192L4.44911 13.5392C4.92911 12.5692 4.92911 11.4392 4.44911 10.4692L2.70911 6.97924C1.21911 3.99924 4.42911 0.849241 7.37911 2.40924L8.91911 3.22924C9.13911 3.33924 9.30911 3.51924 9.39911 3.73924L15.0891 16.3892C15.3191 16.9092 15.1091 17.5192 14.6091 17.7792L7.36911 21.5892C4.42911 23.1492 1.21911 19.9992 2.70911 17.0192Z"
        fill="currentColor"
      />
      <Path
        d="M16.3093 15.6004L12.5793 7.32045C12.1593 6.39045 13.1593 5.45045 14.0593 5.93045L19.8293 8.97045C22.2793 10.2604 22.2793 13.7604 19.8293 15.0504L17.7893 16.1204C17.2393 16.4004 16.5693 16.1704 16.3093 15.6004Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectRightBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.70015 3.07005C4.95015 1.62005 1.96015 4.55005 3.35015 7.33005L4.97015 10.57C5.42015 11.47 5.42015 12.53 4.97015 13.43L3.35015 16.67C1.96015 19.45 4.95015 22.37 7.70015 20.93L19.2901 14.83C21.5701 13.63 21.5701 10.37 19.2901 9.17005L12.3201 5.50005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectRightBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.70911 17.0202L4.44911 13.5402C4.92911 12.5702 4.92911 11.4402 4.44911 10.4702L2.70911 6.98022C1.21911 4.00022 4.42911 0.850218 7.37911 2.41022L8.91911 3.23022C9.13911 3.34022 9.30911 3.52022 9.39911 3.74022L15.0891 16.3902C15.3191 16.9102 15.1091 17.5202 14.6091 17.7802L7.36911 21.5902C4.42911 23.1502 1.21911 20.0002 2.70911 17.0202Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.3093 15.6L12.5793 7.31996C12.1593 6.38996 13.1593 5.44996 14.0593 5.92996L19.8293 8.96996C22.2793 10.26 22.2793 13.76 19.8293 15.05L17.7893 16.12C17.2393 16.4 16.5693 16.17 16.3093 15.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectRightLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.29 9.17005L7.70002 3.07005C4.95002 1.62005 1.96002 4.55005 3.35002 7.33005L4.97002 10.57C5.42002 11.47 5.42002 12.53 4.97002 13.43L3.35002 16.67C1.96002 19.45 4.95002 22.37 7.70002 20.93L19.29 14.83C21.57 13.63 21.57 10.37 19.29 9.17005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectRightOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.19078 22.0598C5.19078 22.0598 4.22078 21.6698 3.45078 20.9198C2.20078 19.6998 1.90078 17.8998 2.68078 16.3398L4.30078 13.0998C4.64078 12.4198 4.64078 11.5998 4.30078 10.9098L2.68078 7.65985C1.90078 6.09985 2.20078 4.29985 3.45078 3.07985C4.70078 1.85985 6.50078 1.58985 8.05078 2.40985L19.6408 8.50985C20.9408 9.18985 21.7508 10.5298 21.7508 11.9998C21.7508 13.4698 20.9408 14.8098 19.6408 15.4898L8.05078 21.5898C7.45078 21.9098 6.82078 22.0598 6.19078 22.0598ZM6.20078 3.43985C5.51078 3.43985 4.91078 3.75985 4.50078 4.15985C3.88078 4.75985 3.44078 5.82985 4.02078 6.99985L5.64078 10.2398C6.19078 11.3498 6.19078 12.6598 5.64078 13.7698L4.02078 17.0098C3.43078 18.1798 3.88078 19.2498 4.50078 19.8498C5.12078 20.4498 6.19078 20.8798 7.35078 20.2698L18.9408 14.1698C19.7608 13.7398 20.2508 12.9298 20.2508 12.0098C20.2508 11.0898 19.7608 10.2798 18.9408 9.84985L7.35078 3.72985C6.95078 3.51985 6.56078 3.43985 6.20078 3.43985Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectRightTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2901 9.1698L7.70015 3.0698C4.95015 1.6198 1.96015 4.5498 3.35015 7.3298L4.97015 10.5698C5.42015 11.4698 5.42015 12.5298 4.97015 13.4298L3.35015 16.6698C1.96015 19.4498 4.95015 22.3698 7.70015 20.9298L19.2901 14.8298C21.5701 13.6298 21.5701 10.3698 19.2901 9.1698Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectRightBold,
  broken: DirectRightBroken,
  bulk: DirectRightBulk,
  linear: DirectRightLinear,
  outline: DirectRightOutline,
  twotone: DirectRightTwotone,
};

export const DirectRightIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
