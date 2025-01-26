import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeLow1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3284 16.7503C19.1684 16.7503 19.0184 16.7003 18.8784 16.6003C18.5484 16.3503 18.4784 15.8803 18.7284 15.5503C20.2984 13.4603 20.2984 10.5403 18.7284 8.45027C18.4784 8.12027 18.5484 7.65027 18.8784 7.40027C19.2084 7.15027 19.6784 7.22027 19.9284 7.55027C21.8984 10.1703 21.8984 13.8303 19.9284 16.4503C19.7884 16.6503 19.5584 16.7503 19.3284 16.7503Z"
        fill="currentColor"
      />
      <Path
        d="M15.3481 3.78168C14.2281 3.16168 12.7981 3.32168 11.3381 4.23168L8.41813 6.06168C8.21813 6.18168 7.98813 6.25168 7.75813 6.25168H6.82812H6.32812C3.90812 6.25168 2.57812 7.58168 2.57812 10.0017V14.0017C2.57812 16.4217 3.90812 17.7517 6.32812 17.7517H6.82812H7.75813C7.98813 17.7517 8.21813 17.8217 8.41813 17.9417L11.3381 19.7717C12.2181 20.3217 13.0781 20.5917 13.8781 20.5917C14.3981 20.5917 14.8981 20.4717 15.3481 20.2217C16.4581 19.6017 17.0781 18.3117 17.0781 16.5917V7.41168C17.0781 5.69168 16.4581 4.40168 15.3481 3.78168Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeLow1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.3301 7.40979C16.3301 4.42979 14.2601 3.28979 11.7401 4.86979L8.82008 6.69979C8.50008 6.88979 8.13008 6.99979 7.76008 6.99979H6.33008C4.33008 6.99979 3.33008 7.99979 3.33008 9.99979V13.9998C3.33008 15.9998 4.33008 16.9998 6.33008 16.9998H7.76008C8.13008 16.9998 8.50008 17.1098 8.82008 17.2998L11.7401 19.1298C14.2601 20.7098 16.3301 19.5598 16.3301 16.5898V11.6498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeLow1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3304 16.7498C19.1704 16.7498 19.0204 16.6998 18.8804 16.5998C18.5504 16.3498 18.4804 15.8798 18.7304 15.5498C20.3004 13.4598 20.3004 10.5398 18.7304 8.44978C18.4804 8.11978 18.5504 7.64978 18.8804 7.39978C19.2104 7.14978 19.6804 7.21978 19.9304 7.54978C21.9004 10.1698 21.9004 13.8298 19.9304 16.4498C19.7904 16.6498 19.5604 16.7498 19.3304 16.7498Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.0801 7.41021V16.5902C17.0801 18.3102 16.4601 19.6002 15.3501 20.2202C14.9001 20.4702 14.4001 20.5902 13.8801 20.5902C13.0801 20.5902 12.2201 20.3202 11.3401 19.7702L8.42008 17.9402C8.22008 17.8202 7.99008 17.7502 7.76008 17.7502H6.83008V6.25021H7.76008C7.99008 6.25021 8.22008 6.18021 8.42008 6.06021L11.3401 4.23021C12.8001 3.32021 14.2301 3.16021 15.3501 3.78021C16.4601 4.40021 17.0801 5.69021 17.0801 7.41021Z"
        fill="currentColor"
      />
      <Path
        d="M6.83008 6.25V17.75H6.33008C3.91008 17.75 2.58008 16.42 2.58008 14V10C2.58008 7.58 3.91008 6.25 6.33008 6.25H6.83008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeLow1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.32996 10V14C3.32996 16 4.32996 17 6.32996 17H7.75996C8.12996 17 8.49996 17.11 8.81996 17.3L11.74 19.13C14.26 20.71 16.33 19.56 16.33 16.59V7.41003C16.33 4.43003 14.26 3.29003 11.74 4.87003L8.81996 6.70003C8.49996 6.89003 8.12996 7.00003 7.75996 7.00003H6.32996C4.32996 7.00003 3.32996 8.00003 3.32996 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M19.33 8C21.11 10.37 21.11 13.63 19.33 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeLow1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.76 20.75C11.95 20.75 11.08 20.47 10.18 19.91L7.2 18.05C6.99 17.92 6.76 17.85 6.52 17.85H5.06C2.6 17.85 1.25 16.5 1.25 14.04V9.95996C1.25 7.49996 2.6 6.14996 5.06 6.14996H6.52C6.76 6.14996 7 6.07996 7.2 5.94996L10.18 4.08996C11.67 3.15996 13.11 2.98996 14.25 3.62996C15.39 4.25996 16.01 5.56996 16.01 7.32996V16.69C16.01 18.44 15.38 19.76 14.25 20.39C13.8 20.63 13.3 20.75 12.76 20.75ZM5.06 7.64996C3.44 7.64996 2.75 8.33996 2.75 9.95996V14.04C2.75 15.66 3.44 16.35 5.06 16.35H6.52C7.04 16.35 7.55 16.5 8 16.77L10.98 18.63C11.97 19.25 12.9 19.4 13.53 19.06C14.16 18.71 14.52 17.84 14.52 16.68V7.31996C14.52 6.14996 14.16 5.27996 13.53 4.93996C12.9 4.58996 11.97 4.74996 10.98 5.36996L8 7.21996C7.55 7.49996 7.04 7.64996 6.52 7.64996H5.06Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.75H18C17.59 12.75 17.25 12.41 17.25 12C17.25 11.59 17.59 11.25 18 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeLow1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.33008 9.99979V13.9998C3.33008 15.9998 4.33008 16.9998 6.33008 16.9998H7.76008C8.13008 16.9998 8.50008 17.1098 8.82008 17.2998L11.7401 19.1298C14.2601 20.7098 16.3301 19.5598 16.3301 16.5898V7.40979C16.3301 4.42979 14.2601 3.28979 11.7401 4.86979L8.82008 6.69979C8.50008 6.88979 8.13008 6.99979 7.76008 6.99979H6.33008C4.33008 6.99979 3.33008 7.99979 3.33008 9.99979Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeLow1Bold,
  broken: VolumeLow1Broken,
  bulk: VolumeLow1Bulk,
  linear: VolumeLow1Linear,
  outline: VolumeLow1Outline,
  twotone: VolumeLow1Twotone,
};

export const VolumeLow1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
