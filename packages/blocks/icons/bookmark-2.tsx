import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Bookmark2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z"
        fill="currentColor"
      />
      <Path
        d="M22 11.9008V14.9308C22 19.9808 20 22.0008 15 22.0008H9C4 22.0008 2 19.9808 2 14.9308V11.9008C2 9.21083 2.57 7.38083 3.85 6.26083C4.5 5.71083 5.5 6.19083 5.5 7.04083V12.0808C5.5 13.5708 6.11 14.7708 7.17 15.3708C8.24 15.9808 9.6 15.8708 10.92 15.0808L12 14.4308L13.09 15.0808C13.83 15.5308 14.6 15.7608 15.32 15.7608C15.86 15.7608 16.37 15.6308 16.83 15.3708C17.89 14.7708 18.5 13.5708 18.5 12.0808V7.03083C18.5 6.18083 19.51 5.70083 20.15 6.26083C21.43 7.38083 22 9.21083 22 11.9008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bookmark2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14.93C2 19.98 4 22 9 22H15C20 22 22 19.98 22 14.93V11.9C22 7.58996 20.54 5.47996 17 4.95996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.81914 4.98999C3.97914 5.45999 2.52914 6.99999 2.11914 9.93999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bookmark2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 11.9V14.93C22 19.98 20 22 15 22H9C4 22 2 19.98 2 14.93V11.9C2 7.65996 3.41 5.55996 6.82 4.98996H7V12.08C7 14.07 8.41 14.84 10.14 13.8L11.46 13C11.76 12.82 12.24 12.82 12.54 13L13.86 13.8C15.59 14.84 17 14.07 17 12.08V4.95996C20.54 5.47996 22 7.58996 22 11.9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bookmark2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.82 4.98996C3.41 5.55996 2 7.65996 2 11.9V14.93C2 19.98 4 22 9 22H15C20 22 22 19.98 22 14.93V11.9C22 7.58996 20.54 5.47996 17 4.95996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bookmark2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.31 15.02C14.73 15.02 14.1 14.83 13.47 14.44L12.15 13.64C12.09 13.6 11.91 13.6 11.85 13.64L10.53 14.44C9.45 15.1 8.39 15.2 7.54 14.72C6.71 14.25 6.25 13.31 6.25 12.08V5.03C6.25 2.59 7.58 1.25 10 1.25H14C16.42 1.25 17.75 2.59 17.75 5.03V12.08C17.75 13.32 17.29 14.26 16.46 14.72C16.11 14.92 15.72 15.02 15.31 15.02ZM12 12.11C12.33 12.11 12.66 12.19 12.93 12.35L14.25 13.15C14.84 13.51 15.38 13.6 15.72 13.41C16.05 13.22 16.24 12.73 16.24 12.07V5.03C16.24 3.43 15.57 2.75 13.99 2.75H9.99C8.41 2.75 7.74 3.43 7.74 5.03V12.08C7.74 12.74 7.93 13.23 8.26 13.42C8.6 13.61 9.14 13.52 9.73 13.16L11.05 12.36C11.34 12.19 11.67 12.11 12 12.11Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.41 1.25 14.93V11.9C1.25 7.24001 2.93 4.88001 6.69 4.25001C7.09 4.18001 7.48 4.46001 7.55 4.87001C7.62 5.28001 7.34 5.66001 6.93 5.73001C3.92 6.23001 2.74 7.96001 2.74 11.9V14.93C2.74 19.54 4.43 21.25 8.99 21.25H14.99C19.55 21.25 21.24 19.54 21.24 14.93V11.9C21.24 7.90001 20.02 6.17001 16.88 5.70001C16.47 5.64001 16.19 5.26001 16.25 4.85001C16.31 4.44001 16.69 4.16001 17.1 4.22001C21 4.80001 22.74 7.16001 22.74 11.9V14.93C22.75 20.41 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bookmark2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.82 4.98996C3.41 5.55996 2 7.65996 2 11.9V14.93C2 19.98 4 22 9 22H15C20 22 22 19.98 22 14.93V11.9C22 7.58996 20.54 5.47996 17 4.95996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Bookmark2Bold,
  broken: Bookmark2Broken,
  bulk: Bookmark2Bulk,
  linear: Bookmark2Linear,
  outline: Bookmark2Outline,
  twotone: Bookmark2Twotone,
};

export const Bookmark2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
