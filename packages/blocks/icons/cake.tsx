import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const CakeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8894 13V14H20.0194C19.2794 14 18.6794 14.6 18.6794 15.35V15.65C18.6794 16.4 18.0794 17 17.3294 17C16.5894 17 15.9894 16.4 15.9894 15.65V15.35C15.9894 14.6 15.3794 14 14.6394 14C13.8994 14 13.2994 14.6 13.2994 15.35V15.65C13.2994 16.4 12.6894 17 11.9494 17C11.2094 17 10.5994 16.4 10.5994 15.65V15.35C10.5994 14.6 9.99938 14 9.25938 14C8.51938 14 7.90938 14.6 7.90938 15.35V15.65C7.90938 16.4 7.30938 17 6.56938 17C5.81938 17 5.21937 16.4 5.21937 15.65V15.33C5.21937 14.59 4.62938 13.99 3.89938 13.98H3.10938V13C3.10938 11.62 4.14938 10.45 5.55938 10.11C5.83938 10.04 6.12938 10 6.43938 10H17.5594C17.8694 10 18.1594 10.04 18.4394 10.11C19.8494 10.45 20.8894 11.62 20.8894 13Z"
        fill="currentColor"
      />
      <Path
        d="M18.4405 7.17V8.58C18.1505 8.52 17.8605 8.5 17.5605 8.5H6.44055C6.14055 8.5 5.85055 8.53 5.56055 8.59V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0205C17.3605 5 18.4405 5.97 18.4405 7.17Z"
        fill="currentColor"
      />
      <Path
        d="M8.75 3.54844V5.00844H7.98C7.72 5.00844 7.48 5.03844 7.25 5.09844V3.54844C7.25 3.19844 7.59 2.89844 8 2.89844C8.41 2.89844 8.75 3.19844 8.75 3.54844Z"
        fill="currentColor"
      />
      <Path
        d="M16.75 3.32812V5.09812C16.52 5.02813 16.28 4.99813 16.02 4.99813H15.25V3.32812C15.25 2.91813 15.59 2.57812 16 2.57812C16.41 2.57812 16.75 2.91813 16.75 3.32812Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 2.82V5H11.25V2.82C11.25 2.37 11.59 2 12 2C12.41 2 12.75 2.37 12.75 2.82Z"
        fill="currentColor"
      />
      <Path
        d="M22 21.2505C22 21.6605 21.66 22.0005 21.25 22.0005H2.75C2.34 22.0005 2 21.6605 2 21.2505C2 20.8405 2.34 20.5005 2.75 20.5005H3.11V15.4805H3.72V15.5505C3.72 16.8905 4.6 18.1305 5.91 18.4205C6.93 18.6605 7.9 18.3305 8.56 17.6805C8.94 17.3005 9.56 17.2905 9.94 17.6705C10.46 18.1805 11.17 18.5005 11.95 18.5005C12.73 18.5005 13.44 18.1905 13.96 17.6705C14.34 17.3005 14.95 17.3005 15.34 17.6805C15.99 18.3305 16.96 18.6605 17.99 18.4205C19.3 18.1305 20.18 16.8905 20.18 15.5505V15.5005H20.89V20.5005H21.25C21.66 20.5005 22 20.8405 22 21.2505Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CakeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5605 10C19.4005 10 20.8905 11.34 20.8905 13V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.10938 22V13C3.10938 11.34 4.59938 10 6.43938 10H13.2994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56055 10V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0305C17.3605 5 18.4405 5.97 18.4405 7.17V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4702 14H20.0202C19.2802 14 18.6702 14.6 18.6702 15.35V15.66C18.6702 16.4 18.0702 17.01 17.3202 17.01C16.5802 17.01 15.9702 16.41 15.9702 15.66V15.35C15.9702 14.61 15.3702 14 14.6202 14C13.8802 14 13.2702 14.6 13.2702 15.35V15.66C13.2702 16.4 12.6702 17.01 11.9202 17.01C11.1802 17.01 10.5702 16.41 10.5702 15.66V15.35C10.6002 14.6 10.0002 14 9.26016 14C8.52016 14 7.91016 14.6 7.91016 15.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5293 13.98L3.8993 13.99C4.6393 14 5.2293 14.6 5.2293 15.34V15.67C5.2293 16.41 5.8293 17.02 6.5793 17.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CakeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8894 13V14H20.0194C19.2794 14 18.6794 14.6 18.6794 15.35V15.65C18.6794 16.4 18.0794 17 17.3294 17C16.5894 17 15.9894 16.4 15.9894 15.65V15.35C15.9894 14.6 15.3794 14 14.6394 14C13.8994 14 13.2994 14.6 13.2994 15.35V15.65C13.2994 16.4 12.6894 17 11.9494 17C11.2094 17 10.5994 16.4 10.5994 15.65V15.35C10.5994 14.6 9.99938 14 9.25938 14C8.51938 14 7.90938 14.6 7.90938 15.35V15.65C7.90938 16.4 7.30938 17 6.56938 17C5.81938 17 5.21937 16.4 5.21937 15.65V15.33C5.21937 14.59 4.62938 13.99 3.89938 13.98H3.10938V13C3.10938 11.62 4.14938 10.45 5.55938 10.11C5.83938 10.04 6.12938 10 6.43938 10H17.5594C17.8694 10 18.1594 10.04 18.4394 10.11C19.8494 10.45 20.8894 11.62 20.8894 13Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.4405 7.17V10.11C18.1605 10.04 17.8705 10 17.5605 10H6.44055C6.13055 10 5.84055 10.04 5.56055 10.11V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0205C17.3605 5 18.4405 5.97 18.4405 7.17Z"
        fill="currentColor"
      />
      <Path
        d="M8.75 3.5499V5.0099H7.98C7.72 5.0099 7.48 5.0399 7.25 5.0999V3.5499C7.25 3.1999 7.59 2.8999 8 2.8999C8.41 2.8999 8.75 3.1999 8.75 3.5499Z"
        fill="currentColor"
      />
      <Path
        d="M16.75 3.33008V5.10008C16.52 5.03008 16.28 5.00008 16.02 5.00008H15.25V3.33008C15.25 2.92008 15.59 2.58008 16 2.58008C16.41 2.58008 16.75 2.92008 16.75 3.33008Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 2.82V5H11.25V2.82C11.25 2.37 11.59 2 12 2C12.41 2 12.75 2.37 12.75 2.82Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.25 20.5H20.89V14H20.02C19.28 14 18.68 14.6 18.68 15.35V15.65C18.68 16.4 18.08 17 17.33 17C16.59 17 15.99 16.4 15.99 15.65V15.35C15.99 14.6 15.38 14 14.64 14C13.9 14 13.3 14.6 13.3 15.35V15.65C13.3 16.4 12.69 17 11.95 17C11.21 17 10.6 16.4 10.6 15.65V15.35C10.6 14.6 10 14 9.26 14C8.52 14 7.91 14.6 7.91 15.35V15.65C7.91 16.4 7.31 17 6.57 17C5.82 17 5.22 16.4 5.22 15.65V15.33C5.22 14.59 4.63 13.99 3.9 13.98H3.11V20.5H2.75C2.34 20.5 2 20.84 2 21.25C2 21.66 2.34 22 2.75 22H3.11H20.89H21.25C21.66 22 22 21.66 22 21.25C22 20.84 21.66 20.5 21.25 20.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CakeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.10999 22V13C3.10999 11.34 4.59999 10 6.43999 10H17.55C19.39 10 20.88 11.34 20.88 13V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56006 10V7.17C5.56006 5.97 6.64006 5 7.98006 5H16.0301C17.3601 5 18.4401 5.97 18.4401 7.17V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.53003 13.98L3.90003 13.99C4.64003 14 5.23003 14.6 5.23003 15.34V15.67C5.23003 16.41 5.83003 17.02 6.58003 17.02C7.32003 17.02 7.93003 16.42 7.93003 15.67V15.36C7.93003 14.62 8.53003 14.01 9.28003 14.01C10.02 14.01 10.63 14.61 10.63 15.36V15.67C10.63 16.41 11.23 17.02 11.98 17.02C12.72 17.02 13.33 16.42 13.33 15.67V15.36C13.33 14.62 13.93 14.01 14.68 14.01C15.42 14.01 16.03 14.61 16.03 15.36V15.67C16.03 16.41 16.63 17.02 17.38 17.02C18.12 17.02 18.73 16.42 18.73 15.67V15.36C18.73 14.62 19.33 14.01 20.08 14.01H20.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CakeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.8894 22.75C20.4794 22.75 20.1394 22.41 20.1394 22V13C20.1394 11.76 18.9794 10.75 17.5594 10.75H6.43937C5.01937 10.75 3.85938 11.76 3.85938 13V22C3.85938 22.41 3.51937 22.75 3.10938 22.75C2.69938 22.75 2.35938 22.41 2.35938 22V13C2.35938 10.93 4.18937 9.25 6.43937 9.25H17.5494C19.7994 9.25 21.6294 10.93 21.6294 13V22C21.6394 22.41 21.2994 22.75 20.8894 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.4405 10.75C18.0305 10.75 17.6905 10.41 17.6905 10V7.17C17.6905 6.39 16.9405 5.75 16.0305 5.75H7.98055C7.06055 5.75 6.32055 6.39 6.32055 7.17V10C6.32055 10.41 5.98055 10.75 5.57055 10.75C5.16055 10.75 4.81055 10.41 4.81055 10V7.17C4.81055 5.56 6.23055 4.25 7.97055 4.25H16.0205C17.7605 4.25 19.1805 5.56 19.1805 7.17V10C19.1905 10.41 18.8505 10.75 18.4405 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.3307 17.75C16.1707 17.75 15.2307 16.81 15.2307 15.65V15.34C15.2307 15.01 14.9607 14.74 14.6307 14.74C14.3007 14.74 14.0307 15.01 14.0307 15.34V15.65C14.0307 16.81 13.0907 17.75 11.9307 17.75C10.7707 17.75 9.83068 16.81 9.83068 15.65V15.34C9.83068 15.01 9.56068 14.74 9.23068 14.74C8.90068 14.74 8.63068 15.01 8.63068 15.34V15.65C8.63068 16.81 7.69068 17.75 6.53068 17.75C5.37068 17.75 4.43068 16.81 4.43068 15.65V15.32C4.43068 15 4.17068 14.73 3.84068 14.72H3.47068C3.06068 14.71 2.72068 14.37 2.73068 13.96C2.74068 13.55 3.07068 13.22 3.48068 13.22H3.49068H3.86068C5.00068 13.24 5.93068 14.18 5.93068 15.32V15.65C5.93068 15.98 6.20068 16.25 6.53068 16.25C6.86068 16.25 7.13068 15.98 7.13068 15.65V15.34C7.13068 14.18 8.07068 13.24 9.23068 13.24C10.3907 13.24 11.3307 14.18 11.3307 15.34V15.65C11.3307 15.98 11.6007 16.25 11.9307 16.25C12.2607 16.25 12.5307 15.98 12.5307 15.65V15.34C12.5307 14.18 13.4707 13.24 14.6307 13.24C15.7907 13.24 16.7307 14.18 16.7307 15.34V15.65C16.7307 15.98 17.0007 16.25 17.3307 16.25C17.6607 16.25 17.9307 15.98 17.9307 15.65V15.34C17.9307 14.18 18.8707 13.24 20.0307 13.24H20.4807C20.8907 13.24 21.2307 13.58 21.2307 13.99C21.2307 14.4 20.8907 14.74 20.4807 14.74H20.0307C19.7007 14.74 19.4307 15.01 19.4307 15.34V15.65C19.4307 16.81 18.4907 17.75 17.3307 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V3C7.25 2.59 7.59 2.25 8 2.25C8.41 2.25 8.75 2.59 8.75 3V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V3C15.25 2.59 15.59 2.25 16 2.25C16.41 2.25 16.75 2.59 16.75 3V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 5.75C11.59 5.75 11.25 5.41 11.25 5V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V5C12.75 5.41 12.41 5.75 12 5.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CakeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.10938 22V13C3.10938 11.34 4.59938 10 6.43938 10H17.5494C19.3894 10 20.8794 11.34 20.8794 13V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56055 10V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0305C17.3605 5 18.4405 5.97 18.4405 7.17V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M3.5293 13.98L3.8993 13.99C4.6393 14 5.2293 14.6 5.2293 15.34V15.67C5.2293 16.41 5.8293 17.02 6.5793 17.02C7.3193 17.02 7.9293 16.42 7.9293 15.67V15.36C7.9293 14.62 8.5293 14.01 9.2793 14.01C10.0193 14.01 10.6293 14.61 10.6293 15.36V15.67C10.6293 16.41 11.2293 17.02 11.9793 17.02C12.7193 17.02 13.3293 16.42 13.3293 15.67V15.36C13.3293 14.62 13.9293 14.01 14.6793 14.01C15.4193 14.01 16.0293 14.61 16.0293 15.36V15.67C16.0293 16.41 16.6293 17.02 17.3793 17.02C18.1193 17.02 18.7293 16.42 18.7293 15.67V15.36C18.7293 14.62 19.3293 14.01 20.0793 14.01H20.5293"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M8 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M16 5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M12 5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CakeBold,
  broken: CakeBroken,
  bulk: CakeBulk,
  linear: CakeLinear,
  outline: CakeOutline,
  twotone: CakeTwotone,
};

export const CakeIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
