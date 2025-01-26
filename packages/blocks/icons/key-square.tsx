import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const KeySquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.25 12C13.9404 12 14.5 11.4404 14.5 10.75C14.5 10.0596 13.9404 9.5 13.25 9.5C12.5596 9.5 12 10.0596 12 10.75C12 11.4404 12.5596 12 13.25 12Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.89 13.47C14.86 14.49 13.39 14.81 12.09 14.4L11.03 15.45C10.94 15.54 10.78 15.54 10.68 15.45L9.71 14.48C9.57 14.34 9.33 14.34 9.18 14.48C9.03 14.62 9.04 14.86 9.18 15.01L10.15 15.98C10.25 16.08 10.25 16.24 10.15 16.33L9.74 16.74C9.57 16.92 9.24 17.03 9 17L7.91 16.85C7.55 16.8 7.22 16.46 7.16 16.1L7.01 15.01C6.97 14.77 7.09 14.44 7.25 14.27L9.6 11.92C9.2 10.62 9.51 9.15 10.54 8.12C12.01 6.65 14.41 6.65 15.89 8.12C17.37 9.59 17.37 11.99 15.89 13.47Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeySquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2792 13.61C15.1492 14.74 13.5292 15.09 12.0992 14.64L9.50922 17.22C9.32922 17.41 8.95922 17.53 8.68922 17.49L7.48922 17.33C7.08922 17.28 6.72922 16.9 6.66922 16.51L6.50922 15.31C6.46922 15.05 6.59922 14.68 6.77922 14.49L9.35922 11.91C8.91922 10.48 9.25922 8.86001 10.3892 7.73001C12.0092 6.11001 14.6492 6.11001 16.2792 7.73001C17.8992 9.34001 17.8992 11.98 16.2792 13.61Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4496 16.28L9.59961 15.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3949 10.7H13.4039"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeySquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M15.8897 8.11007C14.4097 6.64007 12.0097 6.64007 10.5397 8.11007C9.50971 9.13007 9.19971 10.6101 9.59971 11.9101L7.24971 14.2601C7.08971 14.4301 6.96971 14.7601 7.00971 15.0001L7.15971 16.0901C7.20971 16.4501 7.54971 16.7901 7.90971 16.8401L8.99971 17.0001C9.23971 17.0301 9.56971 16.9301 9.73971 16.7501L10.1497 16.3401C10.2497 16.2501 10.2497 16.0901 10.1497 15.9901L9.17971 15.0201C9.03971 14.8801 9.03971 14.6401 9.17971 14.4901C9.31971 14.3501 9.55971 14.3501 9.70971 14.4901L10.6797 15.4601C10.7697 15.5501 10.9297 15.5501 11.0297 15.4601L12.0897 14.4101C13.3797 14.8101 14.8597 14.5001 15.8897 13.4801C17.3697 11.9901 17.3697 9.59007 15.8897 8.11007ZM13.2497 12.0001C12.5597 12.0001 11.9997 11.4401 11.9997 10.7501C11.9997 10.0601 12.5597 9.50007 13.2497 9.50007C13.9397 9.50007 14.4997 10.0601 14.4997 10.7501C14.4997 11.4401 13.9397 12.0001 13.2497 12.0001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeySquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.45 16.28L9.59998 15.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3945 10.7H13.4035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeySquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.80974 18.2501C8.73974 18.2501 8.65974 18.2501 8.58974 18.2301L7.39974 18.0701C6.67974 17.9701 6.04974 17.3501 5.93974 16.6101L5.76974 15.4001C5.69974 14.9201 5.89974 14.3101 6.24974 13.9501L8.52974 11.6701C8.18974 10.0501 8.67974 8.37007 9.86974 7.19007C11.7797 5.28007 14.8997 5.28007 16.8097 7.19007C17.7397 8.12007 18.2497 9.35007 18.2497 10.6601C18.2497 11.9701 17.7397 13.2101 16.8097 14.1301C15.6197 15.3101 13.9397 15.8001 12.3297 15.4601L10.0397 17.7401C9.74974 18.0501 9.25974 18.2501 8.80974 18.2501ZM13.3397 7.25007C12.4697 7.25007 11.5897 7.58007 10.9297 8.25007C10.0297 9.15007 9.70974 10.4601 10.0797 11.6801C10.1597 11.9501 10.0897 12.2301 9.88974 12.4301L7.30974 15.0101C7.28974 15.0401 7.24974 15.1501 7.24974 15.1901L7.41974 16.3901C7.42974 16.4501 7.53974 16.5601 7.59974 16.5701L8.79974 16.7401C8.84974 16.7301 8.94974 16.7101 8.97974 16.6801L11.5697 14.0901C11.7697 13.8901 12.0597 13.8301 12.3197 13.9101C13.5297 14.2901 14.8397 13.9701 15.7397 13.0701C16.3797 12.4301 16.7397 11.5701 16.7397 10.6601C16.7397 9.75007 16.3897 8.89007 15.7397 8.25007C15.0897 7.59007 14.2097 7.25007 13.3397 7.25007Z"
        fill="currentColor"
      />
      <Path
        d="M10.4493 17.0301C10.2593 17.0301 10.0693 16.9601 9.9193 16.8101L9.0593 15.9501C8.7693 15.6601 8.7693 15.1801 9.0593 14.8901C9.3493 14.6001 9.8293 14.6001 10.1193 14.8901L10.9793 15.7501C11.2693 16.0401 11.2693 16.5201 10.9793 16.8101C10.8393 16.9601 10.6493 17.0301 10.4493 17.0301Z"
        fill="currentColor"
      />
      <Path
        d="M13.3791 11.8001C13.2391 11.8001 13.1091 11.7801 12.9891 11.7301C12.8691 11.6801 12.7591 11.6001 12.6691 11.5101C12.4791 11.3201 12.3691 11.0701 12.3691 10.8001C12.3691 10.5401 12.4791 10.2801 12.6691 10.1001C12.8991 9.86012 13.2491 9.75012 13.5691 9.82012C13.6291 9.84012 13.6991 9.85012 13.7591 9.88012C13.8191 9.91012 13.8791 9.94012 13.9291 9.97012C13.9791 10.0101 14.0391 10.0501 14.0791 10.1001C14.2691 10.2801 14.3791 10.5401 14.3791 10.8001C14.3791 10.9401 14.3491 11.0601 14.2991 11.1901C14.2491 11.3101 14.1791 11.4201 14.0791 11.5101C13.8891 11.7001 13.6391 11.8001 13.3791 11.8001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeySquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M16.2792 13.6096C15.1492 14.7396 13.5292 15.0896 12.0992 14.6396L9.50922 17.2196C9.32922 17.4096 8.95922 17.5296 8.68922 17.4896L7.48922 17.3296C7.08922 17.2796 6.72922 16.8996 6.66922 16.5096L6.50922 15.3096C6.46922 15.0496 6.59922 14.6796 6.77922 14.4896L9.35922 11.9096C8.91922 10.4796 9.25922 8.85965 10.3892 7.72965C12.0092 6.10965 14.6492 6.10965 16.2792 7.72965C17.8992 9.33965 17.8992 11.9796 16.2792 13.6096Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.4496 16.2799L9.59961 15.4199"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.3949 10.7002H13.4039"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: KeySquareBold,
  broken: KeySquareBroken,
  bulk: KeySquareBulk,
  linear: KeySquareLinear,
  outline: KeySquareOutline,
  twotone: KeySquareTwotone,
};

export const KeySquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
