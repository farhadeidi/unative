import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const FolderOpenBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0582 11.8216L20.8982 11.6016C20.6182 11.2616 20.2882 10.9916 19.9082 10.7916C19.3982 10.5016 18.8182 10.3516 18.2182 10.3516H5.76824C5.16824 10.3516 4.59824 10.5016 4.07824 10.7916C3.68824 11.0016 3.33824 11.2916 3.04824 11.6516C2.47824 12.3816 2.20824 13.2816 2.29824 14.1816L2.66824 18.8516C2.79824 20.2616 2.96824 22.0016 6.13824 22.0016H17.8582C21.0282 22.0016 21.1882 20.2616 21.3282 18.8416L21.6982 14.1916C21.7882 13.3516 21.5682 12.5116 21.0582 11.8216ZM14.3882 17.3416H9.59824C9.20824 17.3416 8.89824 17.0216 8.89824 16.6416C8.89824 16.2616 9.20824 15.9416 9.59824 15.9416H14.3882C14.7782 15.9416 15.0882 16.2616 15.0882 16.6416C15.0882 17.0316 14.7782 17.3416 14.3882 17.3416Z"
        fill="currentColor"
      />
      <Path
        d="M20.56 8.59643C20.5976 8.97928 20.1823 9.23561 19.8175 9.11348C19.3127 8.94449 18.7814 8.86 18.2289 8.86H5.76891C5.21206 8.86 4.66381 8.95012 4.15225 9.12194C3.79185 9.24298 3.37891 8.99507 3.37891 8.61489V6.66C3.37891 3.09 4.46891 2 8.03891 2H9.21891C10.6489 2 11.0989 2.46 11.6789 3.21L12.8789 4.81C13.1289 5.15 13.1389 5.17 13.5789 5.17H15.9589C19.0846 5.17 20.3059 6.00724 20.56 8.59643Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderOpenBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3707 18.02L21.2707 19.3C21.1207 20.83 21.0007 22 18.2907 22H5.71074C3.00074 22 2.88074 20.83 2.73074 19.3L2.33074 14.3C2.25074 13.47 2.51074 12.7 2.98074 12.11C2.99074 12.1 2.99074 12.1 3.00074 12.09C3.55074 11.42 4.38074 11 5.31074 11H18.6907C19.6207 11 20.4407 11.42 20.9807 12.07C20.9907 12.08 21.0007 12.09 21.0007 12.1C21.4907 12.69 21.7607 13.46 21.6707 14.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 11.43V6.28003C3.5 2.88003 4.35 2.03003 7.75 2.03003H9.02C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.42969 17H14.5697"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FolderOpenBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M3.38086 11.31C3.60086 11.11 3.82086 10.93 4.08086 10.79C4.59086 10.5 5.17086 10.35 5.77086 10.35H18.2309C18.8309 10.35 19.4009 10.5 19.9209 10.79C20.1809 10.93 20.4109 11.11 20.6209 11.32V10.79V9.82C20.6209 6.25 19.5309 5.16 15.9609 5.16H13.5809C13.1409 5.16 13.1309 5.15 12.8709 4.81L11.6709 3.2C11.1009 2.46 10.6509 2 9.22086 2H8.04086C4.47086 2 3.38086 3.09 3.38086 6.66V10.8V11.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderOpenLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.67 14.3L21.27 19.3C21.12 20.83 21 22 18.29 22H5.71001C3.00001 22 2.88001 20.83 2.73001 19.3L2.33001 14.3C2.25001 13.47 2.51001 12.7 2.98001 12.11C2.99001 12.1 2.99001 12.1 3.00001 12.09C3.55001 11.42 4.38001 11 5.31001 11H18.69C19.62 11 20.44 11.42 20.98 12.07C20.99 12.08 21 12.09 21 12.1C21.49 12.69 21.76 13.46 21.67 14.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M3.5 11.43V6.28003C3.5 2.88003 4.35 2.03003 7.75 2.03003H9.02C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.42993 17H14.5699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FolderOpenOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.2909 22.75H5.71093C2.31093 22.75 2.13093 20.88 1.98093 19.37L1.58093 14.36C1.49093 13.39 1.77093 12.42 2.39093 11.64C3.13093 10.74 4.18093 10.25 5.31093 10.25H18.6909C19.8009 10.25 20.8509 10.74 21.5609 11.59L21.7309 11.82C22.2709 12.56 22.5109 13.46 22.4209 14.37L22.0209 19.36C21.8709 20.88 21.6909 22.75 18.2909 22.75ZM5.31093 11.75C4.64093 11.75 4.00093 12.05 3.58093 12.57L3.51093 12.64C3.19093 13.05 3.02093 13.63 3.08093 14.23L3.48093 19.24C3.62093 20.7 3.68093 21.25 5.71093 21.25H18.2909C20.3309 21.25 20.3809 20.7 20.5209 19.23L20.9209 14.22C20.9809 13.63 20.8109 13.04 20.4209 12.58L20.3209 12.46C19.8709 11.99 19.3009 11.75 18.6809 11.75H5.31093Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 12.22C20.09 12.22 19.75 11.88 19.75 11.47V9.68003C19.75 6.70003 19.23 6.18003 16.25 6.18003H13.7C12.57 6.18003 12.18 5.78003 11.75 5.21003L10.46 3.50003C10.02 2.92003 9.92 2.78003 9.02 2.78003H7.75C4.77 2.78003 4.25 3.30003 4.25 6.28003V11.43C4.25 11.84 3.91 12.18 3.5 12.18C3.09 12.18 2.75 11.84 2.75 11.43V6.28003C2.75 2.45003 3.92 1.28003 7.75 1.28003H9.03C10.57 1.28003 11.05 1.78003 11.67 2.60003L12.95 4.30003C13.22 4.66003 13.24 4.68003 13.71 4.68003H16.26C20.09 4.68003 21.26 5.85003 21.26 9.68003V11.47C21.25 11.88 20.91 12.22 20.5 12.22Z"
        fill="currentColor"
      />
      <Path
        d="M14.5697 17.75H9.42969C9.01969 17.75 8.67969 17.41 8.67969 17C8.67969 16.59 9.01969 16.25 9.42969 16.25H14.5697C14.9797 16.25 15.3197 16.59 15.3197 17C15.3197 17.41 14.9897 17.75 14.5697 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderOpenTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6707 14.3L21.2707 19.3C21.1207 20.83 21.0007 22 18.2907 22H5.71074C3.00074 22 2.88074 20.83 2.73074 19.3L2.33074 14.3C2.25074 13.47 2.51074 12.7 2.98074 12.11C2.99074 12.1 2.99074 12.1 3.00074 12.09C3.55074 11.42 4.38074 11 5.31074 11H18.6907C19.6207 11 20.4407 11.42 20.9807 12.07C20.9907 12.08 21.0007 12.09 21.0007 12.1C21.4907 12.69 21.7607 13.46 21.6707 14.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        opacity="0.4"
        d="M3.5 11.4298V6.27979C3.5 2.87979 4.35 2.02979 7.75 2.02979H9.02C10.29 2.02979 10.58 2.40979 11.06 3.04979L12.33 4.74979C12.65 5.16979 12.84 5.42979 13.69 5.42979H16.24C19.64 5.42979 20.49 6.27979 20.49 9.67979V11.4698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.42969 17H14.5697"
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
  bold: FolderOpenBold,
  broken: FolderOpenBroken,
  bulk: FolderOpenBulk,
  linear: FolderOpenLinear,
  outline: FolderOpenOutline,
  twotone: FolderOpenTwotone,
};

export const FolderOpenIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
