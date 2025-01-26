import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Gemini2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23.5295 6.47L21.5295 4.47C21.3895 4.33 21.1995 4.25 20.9995 4.25C20.7995 4.25 20.6095 4.33 20.4695 4.47L18.4695 6.47C18.1795 6.76 18.1795 7.24 18.4695 7.53C18.7595 7.82 19.2395 7.82 19.5295 7.53L20.2495 6.81V11C20.2495 14.58 18.5795 16.25 14.9995 16.25H12.7495V3.81L14.7695 5.83C14.9195 5.98 15.1095 6.05 15.2995 6.05C15.4895 6.05 15.6795 5.98 15.8295 5.83C16.1195 5.54 16.1195 5.06 15.8295 4.77L12.5295 1.47C12.3895 1.33 12.1995 1.25 11.9995 1.25C11.7995 1.25 11.6095 1.33 11.4695 1.47L8.16945 4.77C7.87945 5.06 7.87945 5.54 8.16945 5.83C8.45945 6.12 8.93945 6.12 9.22945 5.83L11.2495 3.81V16.25H8.99945C5.41945 16.25 3.74945 14.58 3.74945 11V6.81L4.46945 7.53C4.61945 7.68 4.80945 7.75 4.99945 7.75C5.18945 7.75 5.37945 7.68 5.52945 7.53C5.81945 7.24 5.81945 6.76 5.52945 6.47L3.52945 4.47C3.38945 4.33 3.19945 4.25 2.99945 4.25C2.79945 4.25 2.60945 4.33 2.46945 4.47L0.469453 6.47C0.179453 6.76 0.179453 7.24 0.469453 7.53C0.759453 7.82 1.23945 7.82 1.52945 7.53L2.24945 6.81V11C2.24945 15.42 4.57945 17.75 8.99945 17.75H11.2495V22C11.2495 22.41 11.5895 22.75 11.9995 22.75C12.4095 22.75 12.7495 22.41 12.7495 22V17.75H14.9995C19.4195 17.75 21.7495 15.42 21.7495 11V6.81L22.4695 7.53C22.6195 7.68 22.8095 7.75 22.9995 7.75C23.1895 7.75 23.3795 7.68 23.5295 7.53C23.8195 7.24 23.8195 6.76 23.5295 6.47Z"
        fill="currentColor"
      />
      <Path
        d="M15 20.75H9C8.59 20.75 8.25 20.41 8.25 20C8.25 19.59 8.59 19.25 9 19.25H15C15.41 19.25 15.75 19.59 15.75 20C15.75 20.41 15.41 20.75 15 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Gemini2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 6V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2992 5.29999L11.9992 2L8.69922 5.29999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 7L3 5L1 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 7L21 5L19 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 6.04004V11.0001C3 15.0001 5 17.0001 9 17.0001H15C19 17.0001 21 15.0001 21 11.0001V6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 20H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Gemini2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23.5295 6.46997L21.5295 4.46997C21.3895 4.32997 21.1995 4.25 20.9995 4.25C20.7995 4.25 20.6095 4.32997 20.4695 4.46997L18.4695 6.46997C18.1795 6.75997 18.1795 7.24003 18.4695 7.53003C18.7595 7.82003 19.2395 7.82003 19.5295 7.53003L20.2495 6.81V11C20.2495 14.58 18.5795 16.25 14.9995 16.25H12.7495V3.81L14.7694 5.83002C14.9194 5.98002 15.1095 6.04999 15.2995 6.04999C15.4895 6.04999 15.6795 5.98002 15.8295 5.83002C16.1195 5.54002 16.1195 5.06002 15.8295 4.77002L12.5295 1.46997C12.3895 1.32997 12.1995 1.25 11.9995 1.25C11.7995 1.25 11.6095 1.32997 11.4695 1.46997L8.16945 4.77002C7.87945 5.06002 7.87945 5.54002 8.16945 5.83002C8.45945 6.12002 8.93946 6.12002 9.22945 5.83002L11.2495 3.81V16.25H8.99945C5.41945 16.25 3.74945 14.58 3.74945 11V6.81L4.46945 7.53003C4.61945 7.68003 4.80945 7.75 4.99945 7.75C5.18945 7.75 5.37945 7.68003 5.52945 7.53003C5.81945 7.24003 5.81945 6.75997 5.52945 6.46997L3.52945 4.46997C3.38945 4.32997 3.19945 4.25 2.99945 4.25C2.79945 4.25 2.60945 4.32997 2.46945 4.46997L0.469453 6.46997C0.179453 6.75997 0.179453 7.24003 0.469453 7.53003C0.759453 7.82003 1.23945 7.82003 1.52945 7.53003L2.24945 6.81V11C2.24945 15.42 4.57945 17.75 8.99945 17.75H11.2495V22C11.2495 22.41 11.5895 22.75 11.9995 22.75C12.4095 22.75 12.7495 22.41 12.7495 22V17.75H14.9995C19.4195 17.75 21.7495 15.42 21.7495 11V6.81L22.4695 7.53003C22.6195 7.68003 22.8095 7.75 22.9995 7.75C23.1895 7.75 23.3795 7.68003 23.5295 7.53003C23.8195 7.24003 23.8195 6.75997 23.5295 6.46997Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15 20.75H9C8.59 20.75 8.25 20.41 8.25 20C8.25 19.59 8.59 19.25 9 19.25H15C15.41 19.25 15.75 19.59 15.75 20C15.75 20.41 15.41 20.75 15 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Gemini2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3 5.29999L12 2L8.69995 5.29999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 7L3 5L1 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 7L21 5L19 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 6.04004V11.0001C3 15.0001 5 17.0001 9 17.0001H15C19 17.0001 21 15.0001 21 11.0001V6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 20H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Gemini2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V3C11.25 2.59 11.59 2.25 12 2.25C12.41 2.25 12.75 2.59 12.75 3V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.3006 6.04999C15.1106 6.04999 14.9206 5.98002 14.7706 5.83002L12.0006 3.06L9.23063 5.83002C8.94063 6.12002 8.46062 6.12002 8.17063 5.83002C7.88063 5.54002 7.88063 5.06002 8.17063 4.77002L11.4706 1.46997C11.6106 1.32997 11.8006 1.25 12.0006 1.25C12.2006 1.25 12.3906 1.32997 12.5306 1.46997L15.8306 4.77002C16.1206 5.06002 16.1206 5.54002 15.8306 5.83002C15.6906 5.98002 15.4906 6.04999 15.3006 6.04999Z"
        fill="currentColor"
      />
      <Path
        d="M4.99945 7.75C4.80945 7.75 4.61945 7.68003 4.46945 7.53003L2.99945 6.06L1.52945 7.53003C1.23945 7.82003 0.759453 7.82003 0.469453 7.53003C0.179453 7.24003 0.179453 6.75997 0.469453 6.46997L2.46945 4.46997C2.60945 4.32997 2.79945 4.25 2.99945 4.25C3.19945 4.25 3.38945 4.32997 3.52945 4.46997L5.52945 6.46997C5.81945 6.75997 5.81945 7.24003 5.52945 7.53003C5.37945 7.68003 5.18945 7.75 4.99945 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.9995 7.75C22.8095 7.75 22.6195 7.68003 22.4695 7.53003L20.9995 6.06L19.5295 7.53003C19.2395 7.82003 18.7595 7.82003 18.4695 7.53003C18.1795 7.24003 18.1795 6.75997 18.4695 6.46997L20.4695 4.46997C20.6095 4.32997 20.7995 4.25 20.9995 4.25C21.1995 4.25 21.3895 4.32997 21.5295 4.46997L23.5295 6.46997C23.8195 6.75997 23.8195 7.24003 23.5295 7.53003C23.3795 7.68003 23.1895 7.75 22.9995 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 17.7501H9C4.58 17.7501 2.25 15.4201 2.25 11.0001V6.04004C2.25 5.63004 2.59 5.29004 3 5.29004C3.41 5.29004 3.75 5.63004 3.75 6.04004V11.0001C3.75 14.5801 5.42 16.2501 9 16.2501H15C18.58 16.2501 20.25 14.5801 20.25 11.0001V6.04004C20.25 5.63004 20.59 5.29004 21 5.29004C21.41 5.29004 21.75 5.63004 21.75 6.04004V11.0001C21.75 15.4201 19.42 17.7501 15 17.7501Z"
        fill="currentColor"
      />
      <Path
        d="M15 20.75H9C8.59 20.75 8.25 20.41 8.25 20C8.25 19.59 8.59 19.25 9 19.25H15C15.41 19.25 15.75 19.59 15.75 20C15.75 20.41 15.41 20.75 15 20.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Gemini2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3002 5.29999L12.0002 2L8.7002 5.29999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 7L3 5L1 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 7L21 5L19 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 6.04004V11.0001C3 15.0001 5 17.0001 9 17.0001H15C19 17.0001 21 15.0001 21 11.0001V6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 20H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Gemini2Bold,
  broken: Gemini2Broken,
  bulk: Gemini2Bulk,
  linear: Gemini2Linear,
  outline: Gemini2Outline,
  twotone: Gemini2Twotone,
};

export const Gemini2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
