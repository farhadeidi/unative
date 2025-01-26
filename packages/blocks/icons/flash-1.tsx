import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Flash1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9105 10.7209H14.8205V3.52087C14.8205 1.84087 13.9105 1.50087 12.8005 2.76087L12.0005 3.67087L5.2305 11.3709C4.3005 12.4209 4.6905 13.2809 6.0905 13.2809H9.1805V20.4809C9.1805 22.1609 10.0905 22.5009 11.2005 21.2409L12.0005 20.3309L18.7705 12.6309C19.7005 11.5809 19.3105 10.7209 17.9105 10.7209Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Flash1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.82 7.0199V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L5.23 11.3599C4.3 12.4099 4.69 13.2799 6.1 13.2799H9.19V20.4799C9.19 22.1599 10.1 22.4999 11.21 21.2399L18.78 12.6399C19.71 11.5899 19.32 10.7199 17.91 10.7199H14.82"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Flash1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.31994 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32994 13.28 9.31994 13.28Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Flash1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Flash1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.99057 22.7499C9.79057 22.7499 9.63057 22.7099 9.51057 22.6599C9.11057 22.5099 8.43057 22.0199 8.43057 20.4699V14.0199H6.09057C4.75057 14.0199 4.27057 13.3899 4.10057 13.0199C3.93057 12.6399 3.78057 11.8699 4.66057 10.8599L12.2306 2.25988C13.2506 1.09988 14.0806 1.17988 14.4806 1.32988C14.8806 1.47988 15.5606 1.96988 15.5606 3.51988V9.96988H17.9006C19.2406 9.96988 19.7206 10.5999 19.8906 10.9699C20.0606 11.3499 20.2106 12.1199 19.3306 13.1299L11.7606 21.7299C11.0506 22.5399 10.4306 22.7499 9.99057 22.7499ZM13.9306 2.73988C13.9006 2.77988 13.6906 2.87988 13.3606 3.25988L5.79057 11.8599C5.51057 12.1799 5.47057 12.3799 5.47057 12.4199C5.49057 12.4299 5.67057 12.5299 6.09057 12.5299H9.18057C9.59057 12.5299 9.93057 12.8699 9.93057 13.2799V20.4799C9.93057 20.9799 10.0206 21.1999 10.0606 21.2599C10.0906 21.2199 10.3006 21.1199 10.6306 20.7399L18.2006 12.1399C18.4806 11.8199 18.5206 11.6199 18.5206 11.5799C18.5006 11.5699 18.3206 11.4699 17.9006 11.4699H14.8106C14.4006 11.4699 14.0606 11.1299 14.0606 10.7199V3.51988C14.0706 3.01988 13.9706 2.80988 13.9306 2.73988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Flash1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.08913 13.2799H9.17913V20.4799C9.17913 22.1599 10.0891 22.4999 11.1991 21.2399L18.7691 12.6399C19.6991 11.5899 19.3091 10.7199 17.8991 10.7199H14.8091V3.5199C14.8091 1.8399 13.8991 1.4999 12.7891 2.7599L5.21913 11.3599C4.29913 12.4199 4.68913 13.2799 6.08913 13.2799Z"
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
  bold: Flash1Bold,
  broken: Flash1Broken,
  bulk: Flash1Bulk,
  linear: Flash1Linear,
  outline: Flash1Outline,
  twotone: Flash1Twotone,
};

export const Flash1Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
