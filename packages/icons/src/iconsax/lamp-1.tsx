import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Lamp1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5007 5.48125C12.5807 5.48125 12.6607 5.48125 12.7507 5.49125V2.53125C12.7507 2.12125 12.4107 1.78125 12.0007 1.78125C11.5907 1.78125 11.2507 2.12125 11.2507 2.53125V5.49125C11.3307 5.48125 11.4107 5.48125 11.5007 5.48125C6.8907 5.71125 3.2207 9.51125 3.2207 14.1813V16.1213C3.2207 17.2213 4.1207 18.1213 5.2207 18.1213H18.7807C19.8807 18.1213 20.7807 17.2213 20.7807 16.1213V14.1813C20.7807 9.51125 17.1107 5.71125 12.5007 5.48125Z"
        fill="currentColor"
      />
      <Path
        d="M14.7292 19.1094C15.0592 19.1094 15.2992 19.4194 15.2192 19.7394C14.8392 21.1694 13.5392 22.2194 11.9992 22.2194C10.4592 22.2194 9.15915 21.1694 8.77915 19.7394C8.69915 19.4194 8.93916 19.1094 9.26916 19.1094H14.7292Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lamp1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.5307 9.03993C6.0707 6.56993 8.8107 4.92993 11.9407 4.92993H12.0607C16.8807 4.92993 20.7807 8.82993 20.7807 13.6499V18.5899H3.2207V13.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2V4.92999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6496 18.5901C15.5196 20.5001 13.9296 22.0001 11.9996 22.0001C10.0696 22.0001 8.47961 20.5001 8.34961 18.5901H15.6496Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Lamp1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7807 14.18V17.12C20.7807 18.22 19.8807 19.12 18.7807 19.12H5.2207C4.1207 19.12 3.2207 18.22 3.2207 17.12V14.18C3.2207 9.35998 7.1207 5.45998 11.9407 5.45998H12.0607C16.8807 5.44998 20.7807 9.35998 20.7807 14.18Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 2.53003V5.49003C12.52 5.47003 12.29 5.46003 12.06 5.46003H11.94C11.71 5.46003 11.48 5.47003 11.25 5.49003V2.53003C11.25 2.12003 11.59 1.78003 12 1.78003C12.41 1.78003 12.75 2.12003 12.75 2.53003Z"
        fill="currentColor"
      />
      <Path
        d="M15.3197 19.1101C15.1997 20.8501 13.7597 22.2201 11.9997 22.2201C10.2397 22.2201 8.78969 20.8501 8.67969 19.1101H15.3197Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lamp1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.78 13.6499V18.5899H3.21997V13.6499C3.21997 8.82993 7.11997 4.92993 11.94 4.92993H12.06C16.88 4.92993 20.78 8.82993 20.78 13.6499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2V4.92999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.65 18.59C15.52 20.5 13.93 22 12 22C10.07 22 8.47998 20.5 8.34998 18.59H15.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Lamp1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7787 19.3399H3.21875C2.80875 19.3399 2.46875 18.9999 2.46875 18.5899V13.6499C2.46875 8.42993 6.71875 4.17993 11.9388 4.17993H12.0587C17.2787 4.17993 21.5287 8.42993 21.5287 13.6499V18.5899C21.5287 18.9999 21.1887 19.3399 20.7787 19.3399ZM3.96875 17.8399H20.0287V13.6499C20.0287 9.24993 16.4487 5.67993 12.0587 5.67993H11.9388C7.53875 5.67993 3.96875 9.25993 3.96875 13.6499V17.8399Z"
        fill="currentColor"
      />
      <Path
        d="M12 5.67999C11.59 5.67999 11.25 5.33999 11.25 4.92999V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4.92999C12.75 5.33999 12.41 5.67999 12 5.67999Z"
        fill="currentColor"
      />
      <Path
        d="M12.0005 22.7498C9.69054 22.7498 7.76055 20.9398 7.60055 18.6398C7.59055 18.4298 7.66053 18.2298 7.80053 18.0798C7.94053 17.9298 8.14055 17.8398 8.35055 17.8398H15.6505C15.8605 17.8398 16.0606 17.9298 16.2006 18.0798C16.3406 18.2298 16.4105 18.4398 16.4005 18.6398C16.2405 20.9398 14.3105 22.7498 12.0005 22.7498ZM9.27053 19.3398C9.68053 20.4598 10.7605 21.2498 12.0005 21.2498C13.2405 21.2498 14.3206 20.4598 14.7306 19.3398H9.27053Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Lamp1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7807 13.6502V18.5902H3.2207V13.6502C3.2207 8.83018 7.1207 4.93018 11.9407 4.93018H12.0607C16.8807 4.93018 20.7807 8.83018 20.7807 13.6502Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 2V4.92999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.6496 18.5898C15.5196 20.4998 13.9296 21.9998 11.9996 21.9998C10.0696 21.9998 8.47961 20.4998 8.34961 18.5898H15.6496Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Lamp1Bold,
  broken: Lamp1Broken,
  bulk: Lamp1Bulk,
  linear: Lamp1Linear,
  outline: Lamp1Outline,
  twotone: Lamp1Twotone,
};

export const Lamp1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Lamp1Icon;
