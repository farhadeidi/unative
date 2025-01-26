import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Receipt2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.5 3.67C19.5 3.66 19.5 3.65 19.48 3.64C19.26 3.36 18.97 3.21 18.63 3.21C18.1 3.21 17.46 3.56 16.77 4.3C15.95 5.18 14.69 5.11 13.97 4.15L12.96 2.81C12.56 2.27 12.03 2 11.5 2C10.97 2 10.44 2.27 10.04 2.81L9.02 4.16C8.31 5.11 7.06 5.18 6.24 4.31L6.23 4.3C5.1 3.09 4.09 2.91 3.52 3.64C3.5 3.65 3.5 3.66 3.5 3.67C3.14 4.44 3 5.52 3 7.04V16.96C3 18.48 3.14 19.56 3.5 20.33C3.5 20.34 3.51 20.36 3.52 20.37C4.1 21.09 5.1 20.91 6.23 19.7L6.24 19.69C7.06 18.82 8.31 18.89 9.02 19.84L10.04 21.19C10.44 21.73 10.97 22 11.5 22C12.03 22 12.56 21.73 12.96 21.19L13.97 19.85C14.69 18.89 15.95 18.82 16.77 19.7C17.46 20.44 18.1 20.79 18.63 20.79C18.97 20.79 19.26 20.65 19.48 20.37C19.49 20.36 19.5 20.34 19.5 20.33C19.86 19.56 20 18.48 20 16.96V7.04C20 5.52 19.86 4.44 19.5 3.67ZM14 14.5H8C7.59 14.5 7.25 14.16 7.25 13.75C7.25 13.34 7.59 13 8 13H14C14.41 13 14.75 13.34 14.75 13.75C14.75 14.16 14.41 14.5 14 14.5ZM16 11H8C7.59 11 7.25 10.66 7.25 10.25C7.25 9.84 7.59 9.5 8 9.5H16C16.41 9.5 16.75 9.84 16.75 10.25C16.75 10.66 16.41 11 16 11Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V10.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 10.25H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10.25H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Receipt2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
        fill="currentColor"
      />
      <Path
        d="M16 11H8C7.59 11 7.25 10.66 7.25 10.25C7.25 9.84 7.59 9.5 8 9.5H16C16.41 9.5 16.75 9.84 16.75 10.25C16.75 10.66 16.41 11 16 11Z"
        fill="currentColor"
      />
      <Path
        d="M14 14.5H8C7.59 14.5 7.25 14.16 7.25 13.75C7.25 13.34 7.59 13 8 13H14C14.41 13 14.75 13.34 14.75 13.75C14.75 14.16 14.41 14.5 14 14.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10.25H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Receipt2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.5002 22.7498C10.7102 22.7498 9.96025 22.3398 9.44025 21.6398L8.42023 20.2998C8.21023 20.0198 7.93025 19.8598 7.63025 19.8398C7.34025 19.8198 7.03027 19.9598 6.78027 20.2098C5.92027 21.1298 5.08022 21.5698 4.29022 21.5498C3.75022 21.5298 3.28023 21.2898 2.92023 20.8498C2.88023 20.7998 2.84024 20.7298 2.81024 20.6598C2.42024 19.8198 2.24023 18.6798 2.24023 16.9698V7.04977C2.24023 5.33977 2.42024 4.20977 2.81024 3.35977C2.84024 3.29977 2.87023 3.23977 2.92023 3.18977C3.27023 2.73977 3.74027 2.49977 4.28027 2.46977C5.08027 2.43977 5.93026 2.89977 6.77026 3.79977C7.02026 4.06977 7.32024 4.19977 7.62024 4.17977C7.92024 4.15977 8.20022 3.99977 8.41022 3.71977L9.43024 2.36977C9.95024 1.66977 10.7002 1.25977 11.4902 1.25977C12.2802 1.25977 13.0302 1.66977 13.5502 2.36977L14.5602 3.70977C14.7702 3.99977 15.0602 4.15977 15.3702 4.17977C15.6602 4.19977 15.9702 4.05977 16.2202 3.79977C17.0402 2.91977 17.8502 2.46977 18.6302 2.46977C19.1902 2.46977 19.7103 2.71977 20.0703 3.18977C20.1103 3.23977 20.1502 3.29977 20.1802 3.36977C20.5702 4.20977 20.7502 5.34977 20.7502 7.05977V16.9798C20.7502 18.6898 20.5702 19.8198 20.1802 20.6698C20.1402 20.7598 20.0903 20.8398 20.0203 20.9098C19.7103 21.3098 19.2002 21.5598 18.6302 21.5598C17.8502 21.5598 17.0402 21.1098 16.2202 20.2298C15.9802 19.9698 15.6502 19.8298 15.3702 19.8498C15.0602 19.8698 14.7802 20.0298 14.5602 20.3198L13.5502 21.6598C13.0402 22.3398 12.2902 22.7498 11.5002 22.7498ZM7.58026 18.3298C7.62026 18.3298 7.67027 18.3298 7.71027 18.3298C8.45027 18.3698 9.14023 18.7598 9.61023 19.3898L10.6302 20.7398C11.1202 21.3998 11.8602 21.3998 12.3502 20.7498L13.3602 19.4098C13.8402 18.7698 14.5403 18.3898 15.2803 18.3498C16.0203 18.3098 16.7602 18.6198 17.3002 19.1998C18.0402 19.9898 18.4902 20.0498 18.6102 20.0498C18.6902 20.0498 18.7603 20.0298 18.8303 19.9698C19.1103 19.3398 19.2302 18.3898 19.2302 16.9698V7.04977C19.2302 5.64977 19.1003 4.69977 18.8303 4.06977C18.7503 3.97977 18.6702 3.96977 18.6102 3.96977C18.4902 3.96977 18.0402 4.02977 17.3002 4.81977C16.7602 5.39977 16.0203 5.70977 15.2803 5.66977C14.5303 5.62977 13.8302 5.23977 13.3502 4.60977L12.3403 3.26977C11.8503 2.60977 11.1102 2.60977 10.6202 3.26977L9.60022 4.62977C9.13022 5.25977 8.44026 5.63977 7.70026 5.67977C6.96026 5.71977 6.22024 5.40977 5.68024 4.83977C5.07024 4.17977 4.60027 3.95977 4.34027 3.96977C4.28027 3.96977 4.21025 3.98977 4.13025 4.06977C3.86025 4.69977 3.73022 5.64977 3.73022 7.04977V16.9698C3.73022 18.3798 3.86025 19.3298 4.13025 19.9598C4.22025 20.0398 4.28027 20.0498 4.34027 20.0598C4.59027 20.0698 5.06023 19.8498 5.67023 19.1998C6.20023 18.6298 6.89026 18.3298 7.58026 18.3298Z"
        fill="currentColor"
      />
      <Path
        d="M16 11H8C7.59 11 7.25 10.66 7.25 10.25C7.25 9.84 7.59 9.5 8 9.5H16C16.41 9.5 16.75 9.84 16.75 10.25C16.75 10.66 16.41 11 16 11Z"
        fill="currentColor"
      />
      <Path
        d="M14 14.5H8C7.59 14.5 7.25 14.16 7.25 13.75C7.25 13.34 7.59 13 8 13H14C14.41 13 14.75 13.34 14.75 13.75C14.75 14.16 14.41 14.5 14 14.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Receipt2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 10.25H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 13.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Receipt2Bold,
  broken: Receipt2Broken,
  bulk: Receipt2Bulk,
  linear: Receipt2Linear,
  outline: Receipt2Outline,
  twotone: Receipt2Twotone,
};

export const Receipt2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
