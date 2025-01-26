import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const RepeatBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.4181 4.41141H5.38812L7.26813 2.53141C7.55813 2.24141 7.55813 1.76141 7.26813 1.47141C6.97813 1.18141 6.49813 1.18141 6.20813 1.47141L3.04813 4.63141C2.97813 4.70141 2.92813 4.78141 2.88813 4.87141C2.84813 4.96141 2.82812 5.06141 2.82812 5.16141C2.82812 5.26141 2.84813 5.36141 2.88813 5.45141C2.92813 5.54141 2.97813 5.62141 3.04813 5.69141L6.20813 8.85141C6.35813 9.00141 6.54812 9.07141 6.73812 9.07141C6.92812 9.07141 7.11812 9.00141 7.26813 8.85141C7.55813 8.56141 7.55813 8.08141 7.26813 7.79141L5.38812 5.91141H17.4181C18.6581 5.91141 19.6681 6.92141 19.6681 8.16141V11.4814C19.6681 11.8914 20.0081 12.2314 20.4181 12.2314C20.8281 12.2314 21.1681 11.8914 21.1681 11.4814V8.16141C21.1681 6.09141 19.4881 4.41141 17.4181 4.41141Z"
        fill="currentColor"
      />
      <Path
        d="M21.1681 18.8395C21.1681 18.7395 21.1481 18.6395 21.1081 18.5495C21.0681 18.4595 21.0181 18.3795 20.9481 18.3095L17.7881 15.1495C17.4981 14.8595 17.0181 14.8595 16.7281 15.1495C16.4381 15.4395 16.4381 15.9195 16.7281 16.2095L18.6081 18.0895H6.57812C5.33812 18.0895 4.32812 17.0795 4.32812 15.8395V12.5195C4.32812 12.1095 3.98812 11.7695 3.57812 11.7695C3.16813 11.7695 2.82812 12.1095 2.82812 12.5195V15.8395C2.82812 17.9095 4.50813 19.5895 6.57812 19.5895H18.6081L16.7281 21.4695C16.4381 21.7595 16.4381 22.2395 16.7281 22.5295C16.8781 22.6795 17.0681 22.7495 17.2581 22.7495C17.4481 22.7495 17.6381 22.6795 17.7881 22.5295L20.9481 19.3695C21.0181 19.2995 21.0681 19.2195 21.1081 19.1295C21.1481 19.0395 21.1681 18.9395 21.1681 18.8395Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.4199 5.15991C19.0799 5.15991 20.4199 6.49991 20.4199 8.15991V11.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.58008 5.15991H12.9901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.74008 2L3.58008 5.15997L6.74008 8.32001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4201 18.84H6.58008C4.92008 18.84 3.58008 17.5 3.58008 15.84V12.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2598 21.9999L20.4198 18.84L17.2598 15.6799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeatBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.4201 4.40994H5.39011L7.27008 2.53C7.56008 2.24 7.56008 1.75994 7.27008 1.46994C6.98008 1.17994 6.50008 1.17994 6.21008 1.46994L3.05008 4.62998C2.98008 4.69998 2.93011 4.77997 2.89011 4.86997C2.85011 4.95997 2.83008 5.05994 2.83008 5.15994C2.83008 5.25994 2.85011 5.35998 2.89011 5.44998C2.93011 5.53998 2.98008 5.61997 3.05008 5.68997L6.21008 8.84995C6.36008 8.99995 6.55008 9.06998 6.74008 9.06998C6.93008 9.06998 7.12008 8.99995 7.27008 8.84995C7.56008 8.55995 7.56008 8.07995 7.27008 7.78995L5.39011 5.90994H17.4201C18.6601 5.90994 19.6701 6.91994 19.6701 8.15994V11.48C19.6701 11.89 20.0101 12.23 20.4201 12.23C20.8301 12.23 21.1701 11.89 21.1701 11.48V8.15994C21.1701 6.08994 19.4901 4.40994 17.4201 4.40994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.1701 18.84C21.1701 18.74 21.1501 18.64 21.1101 18.55C21.0701 18.46 21.0201 18.38 20.9501 18.31L17.7901 15.15C17.5001 14.86 17.0201 14.86 16.7301 15.15C16.4401 15.44 16.4401 15.92 16.7301 16.21L18.6101 18.09H6.58008C5.34008 18.09 4.33008 17.08 4.33008 15.84V12.52C4.33008 12.11 3.99008 11.77 3.58008 11.77C3.17008 11.77 2.83008 12.11 2.83008 12.52V15.84C2.83008 17.91 4.51008 19.59 6.58008 19.59H18.6101L16.7301 21.47C16.4401 21.76 16.4401 22.24 16.7301 22.53C16.8801 22.68 17.0701 22.75 17.2601 22.75C17.4501 22.75 17.6401 22.68 17.7901 22.53L20.9501 19.37C21.0201 19.3 21.0701 19.22 21.1101 19.13C21.1501 19.04 21.1701 18.94 21.1701 18.84Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.57996 5.15991H17.42C19.08 5.15991 20.42 6.49991 20.42 8.15991V11.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.73996 2L3.57996 5.15997L6.73996 8.32001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.42 18.84H6.57996C4.91996 18.84 3.57996 17.5 3.57996 15.84V12.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.26 21.9999L20.42 18.84L17.26 15.6799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeatOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4201 12.2198C20.0101 12.2198 19.6701 11.8798 19.6701 11.4698V8.1499C19.6701 6.9099 18.6601 5.8999 17.4201 5.8999H3.58008C3.17008 5.8999 2.83008 5.5599 2.83008 5.1499C2.83008 4.7399 3.17008 4.3999 3.58008 4.3999H17.4201C19.4901 4.3999 21.1701 6.0799 21.1701 8.1499V11.4698C21.1701 11.8898 20.8301 12.2198 20.4201 12.2198Z"
        fill="currentColor"
      />
      <Path
        d="M6.74008 9.06998C6.55008 9.06998 6.36008 8.99995 6.21008 8.84995L3.05008 5.68997C2.91008 5.54997 2.83008 5.35994 2.83008 5.15994C2.83008 4.95994 2.91008 4.76998 3.05008 4.62998L6.21008 1.46994C6.50008 1.17994 6.98008 1.17994 7.27008 1.46994C7.56008 1.75994 7.56008 2.24 7.27008 2.53L4.64011 5.15994L7.27008 7.78995C7.56008 8.07995 7.56008 8.55995 7.27008 8.84995C7.12008 8.98995 6.93008 9.06998 6.74008 9.06998Z"
        fill="currentColor"
      />
      <Path
        d="M20.4201 19.59H6.58008C4.51008 19.59 2.83008 17.91 2.83008 15.84V12.52C2.83008 12.11 3.17008 11.77 3.58008 11.77C3.99008 11.77 4.33008 12.11 4.33008 12.52V15.84C4.33008 17.08 5.34008 18.09 6.58008 18.09H20.4201C20.8301 18.09 21.1701 18.43 21.1701 18.84C21.1701 19.25 20.8301 19.59 20.4201 19.59Z"
        fill="currentColor"
      />
      <Path
        d="M17.2592 22.7501C17.0692 22.7501 16.8792 22.6801 16.7292 22.5301C16.4392 22.2401 16.4392 21.7601 16.7292 21.4701L19.3592 18.8401L16.7292 16.2101C16.4392 15.9201 16.4392 15.4401 16.7292 15.1501C17.0192 14.8601 17.4992 14.8601 17.7892 15.1501L20.9492 18.3101C21.0892 18.4501 21.1692 18.6401 21.1692 18.8401C21.1692 19.0401 21.0892 19.2301 20.9492 19.3701L17.7892 22.5301C17.6492 22.6801 17.4592 22.7501 17.2592 22.7501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeatTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M3.58008 5.16016H17.4201C19.0801 5.16016 20.4201 6.50016 20.4201 8.16016V11.4802"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.74008 2L3.58008 5.15997L6.74008 8.32001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M20.4201 18.84H6.58008C4.92008 18.84 3.58008 17.5 3.58008 15.84V12.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2598 22.0002L20.4198 18.8402L17.2598 15.6802"
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
  bold: RepeatBold,
  broken: RepeatBroken,
  bulk: RepeatBulk,
  linear: RepeatLinear,
  outline: RepeatOutline,
  twotone: RepeatTwotone,
};

export const RepeatIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
