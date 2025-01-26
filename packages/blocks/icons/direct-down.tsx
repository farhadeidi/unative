import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectDownBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0192 2.71825L13.5392 4.45825C12.5692 4.93825 11.4392 4.93825 10.4692 4.45825L6.97924 2.70825C3.99924 1.21825 0.849241 4.43825 2.40924 7.38825L3.22924 8.92825C3.33924 9.13825 3.51924 9.30825 3.73924 9.40825L16.3892 15.0982C16.9092 15.3282 17.5192 15.1182 17.7792 14.6182L21.5892 7.37825C23.1392 4.43825 19.9992 1.21825 17.0192 2.71825Z"
        fill="currentColor"
      />
      <Path
        d="M15.6004 16.3093L7.32045 12.5793C6.39045 12.1593 5.45045 13.1593 5.93045 14.0593L8.97045 19.8293C10.2604 22.2793 13.7604 22.2793 15.0504 19.8293L16.1204 17.7893C16.4004 17.2393 16.1604 16.5693 15.6004 16.3093Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectDownBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.06931 7.6999C1.61931 4.9499 4.54931 1.9599 7.32931 3.3499L10.5693 4.9699C11.4693 5.4199 12.5293 5.4199 13.4293 4.9699L16.6693 3.3499C19.4493 1.9599 22.3693 4.9499 20.9293 7.6999L14.8293 19.2899C13.6293 21.5699 10.3693 21.5699 9.16931 19.2899L5.49931 12.3199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectDownBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0192 2.7202L13.5392 4.4602C12.5692 4.9402 11.4392 4.9402 10.4692 4.4602L6.97924 2.7102C3.99924 1.2202 0.849241 4.4402 2.40924 7.3902L3.22924 8.9302C3.33924 9.1402 3.51924 9.3102 3.73924 9.4102L16.3892 15.1002C16.9092 15.3302 17.5192 15.1202 17.7792 14.6202L21.5892 7.3802C23.1392 4.4402 19.9992 1.2202 17.0192 2.7202Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.6004 16.3102L7.32045 12.5802C6.39045 12.1602 5.45045 13.1602 5.93045 14.0602L8.97045 19.8302C10.2604 22.2802 13.7604 22.2802 15.0504 19.8302L16.1204 17.7902C16.4004 17.2402 16.1604 16.5702 15.6004 16.3102Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectDownLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.17005 19.2899L3.07005 7.6999C1.62005 4.9499 4.55005 1.9599 7.33005 3.3499L10.57 4.9699C11.47 5.4199 12.53 5.4199 13.43 4.9699L16.67 3.3499C19.45 1.9599 22.37 4.9499 20.93 7.6999L14.83 19.2899C13.63 21.5699 10.37 21.5699 9.17005 19.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectDownOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9998 21.7498C10.5298 21.7498 9.18985 20.9398 8.50985 19.6398L2.40985 8.04981C1.58985 6.49981 1.85985 4.69981 3.07985 3.44981C4.29985 2.19981 6.09985 1.89981 7.65985 2.67981L10.8998 4.29981C11.5798 4.63981 12.3998 4.63981 13.0898 4.29981L16.3298 2.67981C17.8998 1.89981 19.6998 2.19981 20.9198 3.44981C22.1398 4.69981 22.4098 6.49981 21.5898 8.04981L15.4898 19.6398C14.8098 20.9398 13.4698 21.7498 11.9998 21.7498ZM5.87985 3.74981C5.16985 3.74981 4.54985 4.08981 4.14985 4.49981C3.54985 5.11981 3.11985 6.18981 3.72985 7.34981L9.82985 18.9398C10.2598 19.7598 11.0698 20.2498 11.9898 20.2498C12.9098 20.2498 13.7198 19.7598 14.1498 18.9398L20.2498 7.34981C20.8598 6.18981 20.4398 5.10981 19.8298 4.49981C19.2298 3.88981 18.1698 3.43981 16.9898 4.01981L13.7498 5.63981C12.6398 6.18981 11.3298 6.18981 10.2198 5.63981L6.98985 4.01981C6.60985 3.82981 6.22985 3.74981 5.87985 3.74981Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectDownTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.16931 19.2901L3.06931 7.70015C1.61931 4.95015 4.54931 1.96015 7.32931 3.35015L10.5693 4.97015C11.4693 5.42015 12.5293 5.42015 13.4293 4.97015L16.6693 3.35015C19.4493 1.96015 22.3693 4.95015 20.9293 7.70015L14.8293 19.2901C13.6293 21.5701 10.3693 21.5701 9.16931 19.2901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectDownBold,
  broken: DirectDownBroken,
  bulk: DirectDownBulk,
  linear: DirectDownLinear,
  outline: DirectDownOutline,
  twotone: DirectDownTwotone,
};

export const DirectDownIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
