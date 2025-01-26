import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BookSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.5 17.25C11.5 17.61 11.14 17.85 10.81 17.71C9.6 17.19 8.02 16.71 6.92 16.57L6.73 16.55C6.12 16.47 5.62 15.9 5.62 15.28V7.58C5.62 6.81 6.24 6.24 7 6.3C8.25 6.4 10.1 7 11.26 7.66C11.42 7.75 11.5 7.92 11.5 8.09V17.25ZM18.38 15.27C18.38 15.89 17.88 16.46 17.27 16.54L17.06 16.56C15.97 16.71 14.4 17.18 13.19 17.69C12.86 17.83 12.5 17.59 12.5 17.23V8.08C12.5 7.9 12.59 7.73 12.75 7.64C13.91 6.99 15.72 6.41 16.95 6.3H16.99C17.76 6.3 18.38 6.92 18.38 7.69V15.27Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3792 15.27V7.57999C18.3792 6.80999 17.7591 6.25 16.9991 6.31H16.9592C15.6192 6.42 13.5892 7.11001 12.4492 7.82001L12.3392 7.89002C12.1592 8.00002 11.8491 8.00002 11.6591 7.89002L11.4991 7.79001C10.3691 7.08001 8.33915 6.40999 6.99915 6.29999C6.23915 6.23999 5.61914 6.81001 5.61914 7.57001V15.27C5.61914 15.88 6.11913 16.46 6.72913 16.53L6.90912 16.56C8.28912 16.74 10.4292 17.45 11.6492 18.12L11.6791 18.13C11.8491 18.23 12.1291 18.23 12.2891 18.13C13.5091 17.45 15.6591 16.75 17.0491 16.56L17.2592 16.53C17.8792 16.46 18.3792 15.89 18.3792 15.27Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8.1001V17.6601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BookSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.4991 8.09V17.25C11.4991 17.61 11.1391 17.85 10.8091 17.71C9.59914 17.19 8.01913 16.71 6.91913 16.57L6.72913 16.55C6.11913 16.47 5.61914 15.9 5.61914 15.28V7.57999C5.61914 6.81999 6.23915 6.25 6.99915 6.31C8.24915 6.41 10.0992 7.01001 11.2592 7.67001C11.4092 7.74001 11.4991 7.91 11.4991 8.09Z"
        fill="currentColor"
      />
      <Path
        d="M18.38 7.69983V15.2698C18.38 15.8898 17.88 16.4598 17.27 16.5398L17.06 16.5598C15.97 16.7098 14.4 17.1798 13.19 17.6898C12.86 17.8298 12.5 17.5898 12.5 17.2298V8.0798C12.5 7.8998 12.59 7.72983 12.75 7.63983C13.91 6.98983 15.72 6.4098 16.95 6.2998H16.99C17.76 6.3098 18.38 6.92983 18.38 7.69983Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3801 15.27V7.57999C18.3801 6.80999 17.7601 6.25 17.0001 6.31H16.9601C15.6201 6.42 13.5901 7.11001 12.4501 7.82001L12.3401 7.89002C12.1601 8.00002 11.8501 8.00002 11.6601 7.89002L11.5001 7.79001C10.3701 7.08001 8.34012 6.40999 7.00012 6.29999C6.24012 6.23999 5.62012 6.81001 5.62012 7.57001V15.27C5.62012 15.88 6.1201 16.46 6.7301 16.53L6.9101 16.56C8.2901 16.74 10.4301 17.45 11.6501 18.12L11.6801 18.13C11.8501 18.23 12.1301 18.23 12.2901 18.13C13.5101 17.45 15.6601 16.75 17.0501 16.56L17.2601 16.53C17.8801 16.46 18.3801 15.89 18.3801 15.27Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8.1001V17.6601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BookSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0001 18.9501C11.7601 18.9501 11.5201 18.8901 11.3201 18.7801C10.1601 18.1501 8.11013 17.4701 6.82013 17.3001L6.63013 17.2701C5.65013 17.1501 4.87012 16.2701 4.87012 15.2601V7.56009C4.87012 6.99009 5.11014 6.44009 5.52014 6.06009C5.94014 5.68009 6.48012 5.4901 7.06012 5.5401C8.52012 5.6601 10.6401 6.3601 11.8901 7.1401L11.9901 7.2001L12.0302 7.1701C13.2902 6.3801 15.4101 5.6701 16.8801 5.5401C16.9001 5.5401 16.9601 5.5401 16.9801 5.5401C17.5001 5.4901 18.0601 5.69009 18.4701 6.06009C18.8901 6.44009 19.1201 6.97008 19.1201 7.55008V15.2401C19.1201 16.2401 18.3401 17.1201 17.3501 17.2501L17.1401 17.2801C15.8601 17.4501 13.8001 18.1301 12.6601 18.7601C12.4701 18.9001 12.2401 18.9501 12.0001 18.9501ZM6.89014 7.05008C6.75014 7.05008 6.6301 7.10008 6.5401 7.18008C6.4301 7.28008 6.38013 7.4201 6.38013 7.5701V15.2701C6.38013 15.5101 6.60014 15.7601 6.83014 15.7901L7.02014 15.8201C8.48014 16.0201 10.7201 16.7501 12.0201 17.4601C13.2301 16.7601 15.4801 16.0101 16.9501 15.8201L17.1701 15.7901C17.4001 15.7601 17.6201 15.5101 17.6201 15.2701V7.58007C17.6201 7.42007 17.5601 7.29009 17.4601 7.19009C17.3501 7.09009 17.2101 7.05009 17.0501 7.06009C17.0301 7.06009 16.9701 7.06009 16.9501 7.06009C15.7901 7.16009 13.8801 7.80008 12.8401 8.46008L12.7401 8.52008C12.3001 8.79008 11.6801 8.79009 11.2601 8.53009L11.1101 8.44009C10.0601 7.78009 8.15012 7.15008 6.94012 7.05008C6.92012 7.05008 6.91014 7.05008 6.89014 7.05008Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.4101C11.59 18.4101 11.25 18.0701 11.25 17.6601V8.1001C11.25 7.6901 11.59 7.3501 12 7.3501C12.41 7.3501 12.75 7.6901 12.75 8.1001V17.6601C12.75 18.0801 12.41 18.4101 12 18.4101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M18.3801 15.2702V7.58023C18.3801 6.81023 17.7601 6.25024 17.0001 6.31024H16.9601C15.6201 6.42024 13.5901 7.11025 12.4501 7.82025L12.3401 7.89026C12.1601 8.00026 11.8501 8.00026 11.6601 7.89026L11.5001 7.79025C10.3701 7.08025 8.34012 6.41023 7.00012 6.30023C6.24012 6.24023 5.62012 6.81025 5.62012 7.57025V15.2702C5.62012 15.8802 6.1201 16.4602 6.7301 16.5302L6.9101 16.5602C8.2901 16.7402 10.4301 17.4502 11.6501 18.1202L11.6801 18.1302C11.8501 18.2302 12.1301 18.2302 12.2901 18.1302C13.5101 17.4502 15.6601 16.7502 17.0501 16.5602L17.2601 16.5302C17.8801 16.4602 18.3801 15.8902 18.3801 15.2702Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 8.1001V17.6601"
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
  bold: BookSquareBold,
  broken: BookSquareBroken,
  bulk: BookSquareBulk,
  linear: BookSquareLinear,
  outline: BookSquareOutline,
  twotone: BookSquareTwotone,
};

export const BookSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
