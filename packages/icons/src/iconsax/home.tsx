import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HomeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985ZM11.9993 15.4998C10.6193 15.4998 9.49929 14.3798 9.49929 12.9998C9.49929 11.6198 10.6193 10.4998 11.9993 10.4998C13.3793 10.4998 14.4993 11.6198 14.4993 12.9998C14.4993 14.3798 13.3793 15.4998 11.9993 15.4998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99008 20.8593 8.37008L13.9293 2.8301C12.8593 1.9701 11.1293 1.97009 10.0693 2.82009L3.13929 8.37008C2.35929 8.99008 1.85929 10.3001 2.02929 11.2801L2.7093 15.3701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 10.5C10.62 10.5 9.5 11.62 9.5 13C9.5 14.38 10.62 15.5 12 15.5C13.38 15.5 14.5 14.38 14.5 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0693 2.8201L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83008C12.8593 1.97008 11.1293 1.9701 10.0693 2.8201Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 18V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.6009 22.5601H6.40094C4.58094 22.5601 2.92094 21.1601 2.62094 19.3701L1.29094 11.4001C1.07094 10.1601 1.68094 8.57007 2.67094 7.78007L9.60094 2.23007C10.9409 1.15007 13.0509 1.16007 14.4009 2.24007L21.3309 7.78007C22.3109 8.57007 22.9109 10.1601 22.7109 11.4001L21.3809 19.3601C21.0809 21.1301 19.3809 22.5601 17.6009 22.5601ZM11.9909 2.93007C11.4609 2.93007 10.9309 3.09007 10.5409 3.40007L3.61094 8.96007C3.05094 9.41007 2.65094 10.4501 2.77094 11.1601L4.10094 19.1201C4.28094 20.1701 5.33094 21.0601 6.40094 21.0601H17.6009C18.6709 21.0601 19.7209 20.1701 19.9009 19.1101L21.2309 11.1501C21.3409 10.4501 20.9409 9.39007 20.3909 8.95007L13.4609 3.41007C13.0609 3.09007 12.5209 2.93007 11.9909 2.93007Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0693 2.81984L3.13929 8.36983C2.35929 8.98983 1.85929 10.2999 2.02929 11.2799L3.35929 19.2398C3.59929 20.6598 4.95928 21.8098 6.39928 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2799C22.1293 10.2999 21.6293 8.98983 20.8593 8.36983L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HomeBold,
  broken: HomeBroken,
  bulk: HomeBulk,
  linear: HomeLinear,
  outline: HomeOutline,
  twotone: HomeTwotone,
};

export const HomeIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HomeIcon;
