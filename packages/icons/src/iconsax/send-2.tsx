import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Send2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1391 2.95907L7.10914 5.95907C1.03914 7.98907 1.03914 11.2991 7.10914 13.3191L9.78914 14.2091L10.6791 16.8891C12.6991 22.9591 16.0191 22.9591 18.0391 16.8891L21.0491 7.86907C22.3891 3.81907 20.1891 1.60907 16.1391 2.95907ZM16.4591 8.33907L12.6591 12.1591C12.5091 12.3091 12.3191 12.3791 12.1291 12.3791C11.9391 12.3791 11.7491 12.3091 11.5991 12.1591C11.3091 11.8691 11.3091 11.3891 11.5991 11.0991L15.3991 7.27907C15.6891 6.98907 16.1691 6.98907 16.4591 7.27907C16.7491 7.56907 16.7491 8.04907 16.4591 8.33907Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Send2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991L11.9997 4.78991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1094 13.6501L13.6894 10.0601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Send2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
        fill="currentColor"
      />
      <Path
        d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
        fill="currentColor"
      />
      <Path
        d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Send2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.11 13.6501L13.69 10.0601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Send2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2209 21.6301C13.0409 21.6301 11.3709 20.8001 10.0509 16.8301L9.33086 14.6701L7.17086 13.9501C3.21086 12.6301 2.38086 10.9601 2.38086 9.78007C2.38086 8.61007 3.21086 6.93007 7.17086 5.60007L15.6609 2.77007C17.7809 2.06007 19.5509 2.27007 20.6409 3.35007C21.7309 4.43007 21.9409 6.21007 21.2309 8.33007L18.4009 16.8201C17.0709 20.8001 15.4009 21.6301 14.2209 21.6301ZM7.64086 7.03007C4.86086 7.96007 3.87086 9.06007 3.87086 9.78007C3.87086 10.5001 4.86086 11.6001 7.64086 12.5201L10.1609 13.3601C10.3809 13.4301 10.5609 13.6101 10.6309 13.8301L11.4709 16.3501C12.3909 19.1301 13.5009 20.1201 14.2209 20.1201C14.9409 20.1201 16.0409 19.1301 16.9709 16.3501L19.8009 7.86007C20.3109 6.32007 20.2209 5.06007 19.5709 4.41007C18.9209 3.76007 17.6609 3.68007 16.1309 4.19007L7.64086 7.03007Z"
        fill="currentColor"
      />
      <Path
        d="M10.1108 14.4C9.92078 14.4 9.73078 14.33 9.58078 14.18C9.29078 13.89 9.29078 13.41 9.58078 13.12L13.1608 9.53C13.4508 9.24 13.9308 9.24 14.2208 9.53C14.5108 9.82 14.5108 10.3 14.2208 10.59L10.6408 14.18C10.5008 14.33 10.3008 14.4 10.1108 14.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Send2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M10.1094 13.6501L13.6894 10.0601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Send2Bold,
  broken: Send2Broken,
  bulk: Send2Bulk,
  linear: Send2Linear,
  outline: Send2Outline,
  twotone: Send2Twotone,
};

export const Send2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Send2Icon;
