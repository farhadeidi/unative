import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ConvertBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0312 2.03125C10.0813 2.03125 8.26125 2.59125 6.73125 3.55125L13.5913 10.4213L13.6013 7.68125C13.6013 7.27125 13.9413 6.93125 14.3513 6.93125C14.7713 6.93125 15.1013 7.27125 15.1013 7.68125L15.0913 12.2312C15.0913 12.5413 14.9012 12.8113 14.6213 12.9213C14.5312 12.9613 14.4313 12.9812 14.3413 12.9812C14.1413 12.9812 13.9513 12.9013 13.8113 12.7613L5.62125 4.56125C5.58125 4.52125 5.55125 4.48125 5.52125 4.44125C3.38125 6.28125 2.03125 9.00125 2.03125 12.0312C2.03125 17.5513 6.51125 22.0312 12.0312 22.0312C13.9812 22.0312 15.8013 21.4712 17.3313 20.5112L10.4713 13.6413L10.4613 16.3812C10.4613 16.7912 10.1213 17.1312 9.71125 17.1312C9.29125 17.1312 8.96125 16.7912 8.96125 16.3812L8.97125 11.8313C8.97125 11.5212 9.16125 11.2513 9.44125 11.1413C9.71125 11.0213 10.0413 11.0813 10.2513 11.3013L18.4412 19.5012C18.4813 19.5413 18.5112 19.5812 18.5413 19.6213C20.6812 17.7812 22.0312 15.0612 22.0312 12.0312C22.0312 6.51125 17.5513 2.03125 12.0312 2.03125Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.11914 4L14.3091 12.2L14.3191 7.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8797 20L9.68969 11.8L9.67969 16.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 6C21.25 7.67 22 9.75 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C13.43 2 14.8 2.3 16.03 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ConvertBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0293 12.03C22.0293 15.06 20.6793 17.78 18.5393 19.62C18.1593 19.94 17.7593 20.24 17.3293 20.51C15.7993 21.47 13.9793 22.03 12.0293 22.03C6.5093 22.03 2.0293 17.55 2.0293 12.03C2.0293 9.00003 3.3793 6.28003 5.5193 4.44003C5.8993 4.12003 6.2993 3.82003 6.7293 3.55003C8.2593 2.59003 10.0793 2.03003 12.0293 2.03003C17.5493 2.03003 22.0293 6.51003 22.0293 12.03Z"
        fill="currentColor"
      />
      <Path
        d="M15.0995 7.68005L15.0895 12.23C15.0895 12.54 14.8995 12.81 14.6195 12.92C14.5295 12.96 14.4295 12.98 14.3395 12.98C14.1395 12.98 13.9495 12.9 13.8095 12.76L5.61953 4.56005C5.57953 4.52005 5.54953 4.48005 5.51953 4.44005C5.89953 4.12005 6.29953 3.82005 6.72953 3.55005L13.5895 10.42L13.5995 7.68005C13.5995 7.27005 13.9395 6.93005 14.3495 6.93005C14.7695 6.93005 15.0995 7.27005 15.0995 7.68005Z"
        fill="currentColor"
      />
      <Path
        d="M18.5409 19.6201C18.1609 19.9401 17.7609 20.2401 17.3309 20.5101L10.4709 13.6401L10.4609 16.3801C10.4609 16.7901 10.1209 17.1301 9.71094 17.1301C9.29094 17.1301 8.96094 16.7901 8.96094 16.3801L8.97094 11.8301C8.97094 11.5201 9.16094 11.2501 9.44094 11.1401C9.71094 11.0201 10.0409 11.0801 10.2509 11.3001L18.4409 19.5001C18.4809 19.5401 18.5109 19.5801 18.5409 19.6201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0051 21.9843C17.5165 21.9843 21.9843 17.5165 21.9843 12.0051C21.9843 6.49372 17.5165 2.02588 12.0051 2.02588C6.49372 2.02588 2.02588 6.49372 2.02588 12.0051C2.02588 17.5165 6.49372 21.9843 12.0051 21.9843Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.13721 4.02173L14.3002 12.2047L14.3202 7.66414"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8629 19.9784L9.69989 11.8054L9.67993 16.336"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ConvertOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.005 22.7326C6.08732 22.7326 1.27734 17.9227 1.27734 12.005C1.27734 6.08732 6.08732 1.27734 12.005 1.27734C17.9227 1.27734 22.7326 6.08732 22.7326 12.005C22.7326 17.9227 17.9127 22.7326 12.005 22.7326ZM12.005 2.77423C6.9156 2.77423 2.77423 6.9156 2.77423 12.005C2.77423 17.0944 6.9156 21.2358 12.005 21.2358C17.0944 21.2358 21.2358 17.0944 21.2358 12.005C21.2358 6.9156 17.0944 2.77423 12.005 2.77423Z"
        fill="currentColor"
      />
      <Path
        d="M14.2996 12.9532C14.1 12.9532 13.9104 12.8734 13.7707 12.7337L5.60767 4.55072C5.31828 4.26133 5.31828 3.78232 5.60767 3.49293C5.89707 3.20353 6.37607 3.20353 6.66547 3.49293L13.5611 10.3985L13.5711 7.66424C13.5711 7.25509 13.9104 6.9158 14.3195 6.9158C14.7287 6.88586 15.068 7.25509 15.068 7.66424L15.058 12.2048C15.058 12.5042 14.8784 12.7836 14.5989 12.8933C14.4991 12.9333 14.3994 12.9532 14.2996 12.9532Z"
        fill="currentColor"
      />
      <Path
        d="M17.863 20.7267C17.6734 20.7267 17.4838 20.6568 17.3341 20.5072L10.4385 13.6015L10.4285 16.3358C10.4285 16.745 10.0892 17.0843 9.68008 17.0843C9.27093 17.0843 8.93164 16.745 8.93164 16.3358L8.94162 11.7953C8.94162 11.4959 9.12125 11.2165 9.40066 11.1067C9.68008 10.987 9.99942 11.0568 10.219 11.2664L18.382 19.4494C18.6714 19.7388 18.6714 20.2178 18.382 20.5072C18.2522 20.6568 18.0526 20.7267 17.863 20.7267Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0046 21.9843C17.516 21.9843 21.9838 17.5165 21.9838 12.0051C21.9838 6.49372 17.516 2.02588 12.0046 2.02588C6.49324 2.02588 2.02539 6.49372 2.02539 12.0051C2.02539 17.5165 6.49324 21.9843 12.0046 21.9843Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.13672 4.02148L14.2997 12.2044L14.3197 7.6639"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.8626 19.9786L9.69965 11.8057L9.67969 16.3362"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ConvertBold,
  broken: ConvertBroken,
  bulk: ConvertBulk,
  linear: ConvertLinear,
  outline: ConvertOutline,
  twotone: ConvertTwotone,
};

export const ConvertIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
