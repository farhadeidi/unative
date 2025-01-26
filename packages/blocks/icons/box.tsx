import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BoxBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2083 7.82141L12.5083 12.2814C12.1983 12.4614 11.8083 12.4614 11.4883 12.2814L3.78826 7.82141C3.23826 7.50141 3.09826 6.75141 3.51826 6.28141C3.80826 5.95141 4.13826 5.68141 4.48826 5.49141L9.90826 2.49141C11.0683 1.84141 12.9483 1.84141 14.1083 2.49141L19.5283 5.49141C19.8783 5.68141 20.2083 5.96141 20.4983 6.28141C20.8983 6.75141 20.7583 7.50141 20.2083 7.82141Z"
        fill="currentColor"
      />
      <Path
        d="M11.4305 14.1389V20.9589C11.4305 21.7189 10.6605 22.2189 9.98047 21.8889C7.92047 20.8789 4.45047 18.9889 4.45047 18.9889C3.23047 18.2989 2.23047 16.5589 2.23047 15.1289V9.9689C2.23047 9.1789 3.06047 8.6789 3.74047 9.0689L10.9305 13.2389C11.2305 13.4289 11.4305 13.7689 11.4305 14.1389Z"
        fill="currentColor"
      />
      <Path
        d="M12.5703 14.1389V20.9589C12.5703 21.7189 13.3403 22.2189 14.0203 21.8889C16.0803 20.8789 19.5503 18.9889 19.5503 18.9889C20.7703 18.2989 21.7703 16.5589 21.7703 15.1289V9.9689C21.7703 9.1789 20.9403 8.6789 20.2603 9.0689L13.0703 13.2389C12.7703 13.4289 12.5703 13.7689 12.5703 14.1389Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.39062 9.17007C2.39062 7.79007 3.38061 6.11009 4.59061 5.44009L9.9306 2.47006C11.0706 1.84006 12.9406 1.84006 14.0806 2.47006L19.4206 5.44009C20.6306 6.11009 21.6206 7.79007 21.6206 9.17007V14.8201C21.6206 16.2001 20.6306 17.8801 19.4206 18.5501L14.0806 21.5201C12.9406 22.1501 11.0706 22.1501 9.9306 21.5201L4.59061 18.5501C3.38061 17.8801 2.39062 16.2001 2.39062 14.8201V14.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9998 13.2401V9.58014L10.9297 6.07013L9.87976 5.47009L7.50977 4.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.1004 6.93998C20.1004 7.47998 19.8104 7.96995 19.3504 8.21995L17.6104 9.15995L16.1304 9.94999L13.0604 11.61C12.7304 11.79 12.3704 11.88 12.0004 11.88C11.6304 11.88 11.2704 11.79 10.9404 11.61L4.65039 8.21995C4.19039 7.96995 3.90039 7.47998 3.90039 6.93998C3.90039 6.39998 4.19039 5.90995 4.65039 5.65995L6.62039 4.59996L8.1904 3.74998L10.9404 2.27C11.6004 1.91 12.4004 1.91 13.0604 2.27L19.3504 5.65995C19.8104 5.90995 20.1004 6.39998 20.1004 6.93998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9.9007 12.7899L4.05069 9.85989C3.60069 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.50069 18.4899 3.36069 18.9199L9.21069 21.8399C9.41069 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0309 11.1502V16.6801C22.0309 17.6301 21.501 18.4901 20.641 18.9201L14.791 21.8501C14.591 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.631 21.9302 13.391 21.7802C12.971 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.241 13.2201 14.101 12.7901L16.2509 11.7201L17.7509 10.9701L19.951 9.87013C20.401 9.64013 20.921 9.66012 21.351 9.93012C21.771 10.1901 22.0309 10.6502 22.0309 11.1502Z"
        fill="currentColor"
      />
      <Path
        d="M17.6091 9.15997L16.1292 9.95001L6.61914 4.59998L8.18915 3.75L17.3691 8.92999C17.4691 8.98999 17.5491 9.06997 17.6091 9.15997Z"
        fill="currentColor"
      />
      <Path
        d="M17.75 10.97V13.24C17.75 13.65 17.41 13.99 17 13.99C16.59 13.99 16.25 13.65 16.25 13.24V11.72L17.75 10.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.6099V12.5399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 13.24V9.58002L7.51001 4.09998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9994 13.2999C11.8694 13.2999 11.7394 13.2699 11.6194 13.1999L2.78936 8.0899C2.42936 7.8799 2.30934 7.41987 2.51934 7.05987C2.72934 6.69987 3.17934 6.57985 3.54934 6.78985L11.9994 11.6799L20.3993 6.81988C20.7593 6.60988 21.2193 6.7399 21.4293 7.0899C21.6393 7.4499 21.5094 7.90987 21.1594 8.11987L12.3894 13.1999C12.2594 13.2599 12.1294 13.2999 11.9994 13.2999Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.36C11.59 22.36 11.25 22.02 11.25 21.61V12.54C11.25 12.13 11.59 11.79 12 11.79C12.41 11.79 12.75 12.13 12.75 12.54V21.61C12.75 22.02 12.41 22.36 12 22.36Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 22.75C11.1206 22.75 10.2506 22.56 9.56061 22.18L4.22061 19.21C2.77061 18.41 1.64062 16.48 1.64062 14.82V9.16998C1.64062 7.50998 2.77061 5.59002 4.22061 4.78002L9.56061 1.82C10.9306 1.06 13.0706 1.06 14.4406 1.82L19.7806 4.78997C21.2306 5.58997 22.3606 7.51999 22.3606 9.17999V14.83C22.3606 16.49 21.2306 18.41 19.7806 19.22L14.4406 22.18C13.7506 22.56 12.8806 22.75 12.0006 22.75ZM12.0006 2.74999C11.3706 2.74999 10.7506 2.88 10.2906 3.13L4.95062 6.09997C3.99062 6.63997 3.14062 8.06999 3.14062 9.17999V14.83C3.14062 15.93 3.99062 17.37 4.95062 17.91L10.2906 20.88C11.2006 21.39 12.8006 21.39 13.7106 20.88L19.0506 17.91C20.0106 17.37 20.8606 15.94 20.8606 14.83V9.17999C20.8606 8.07999 20.0106 6.63997 19.0506 6.09997L13.7106 3.13C13.2506 2.88 12.6306 2.74999 12.0006 2.74999Z"
        fill="currentColor"
      />
      <Path
        d="M17.0012 13.99C16.5912 13.99 16.2512 13.65 16.2512 13.24V10.0201L7.13116 4.76007C6.77116 4.55007 6.65114 4.09005 6.86114 3.74005C7.07114 3.38005 7.52116 3.26003 7.88116 3.47003L17.3712 8.95007C17.6012 9.08007 17.7512 9.33003 17.7512 9.60003V13.2601C17.7512 13.6501 17.4112 13.99 17.0012 13.99Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 21.61V12.54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.9306 2.48L4.59061 5.45003C3.38061 6.12003 2.39062 7.80001 2.39062 9.18001V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18001C21.6206 7.80001 20.6306 6.12003 19.4206 5.45003L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M16.9998 13.2401V9.58014L7.50977 4.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BoxBold,
  broken: BoxBroken,
  bulk: BoxBulk,
  linear: BoxLinear,
  outline: BoxOutline,
  twotone: BoxTwotone,
};

export const BoxIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
