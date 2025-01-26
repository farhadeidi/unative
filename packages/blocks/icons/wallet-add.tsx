import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const WalletAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5 15C2.79 15 1 16.79 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.46 23 7.73 22.22 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.49 19.73H5.75V20.51C5.75 20.92 5.41 21.26 5 21.26C4.59 21.26 4.25 20.92 4.25 20.51V19.73H3.51C3.1 19.73 2.76 19.39 2.76 18.98C2.76 18.57 3.1 18.23 3.51 18.23H4.25V17.52C4.25 17.11 4.59 16.77 5 16.77C5.41 16.77 5.75 17.11 5.75 17.52V18.23H6.49C6.9 18.23 7.24 18.57 7.24 18.98C7.24 19.39 6.91 19.73 6.49 19.73Z"
        fill="currentColor"
      />
      <Path
        d="M21.5 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H21.5C21.78 16.5 22 16.28 22 16V13C22 12.72 21.78 12.5 21.5 12.5Z"
        fill="currentColor"
      />
      <Path
        d="M16.5292 5.40016C16.8292 5.69016 16.5792 6.14016 16.1592 6.14016L7.87923 6.13016C7.39923 6.13016 7.15923 5.55016 7.49923 5.21016L9.24923 3.45016C10.7292 1.98016 13.1192 1.98016 14.5992 3.45016L16.4892 5.36016C16.4992 5.37016 16.5192 5.39016 16.5292 5.40016Z"
        fill="currentColor"
      />
      <Path
        d="M21.8694 18.66C21.2594 20.72 19.4994 22 17.0994 22H10.5994C10.2094 22 9.95938 21.57 10.1194 21.21C10.4194 20.51 10.6094 19.72 10.6094 19C10.6094 15.97 8.13938 13.5 5.10938 13.5C4.34938 13.5 3.60938 13.66 2.92938 13.96C2.55938 14.12 2.10938 13.87 2.10938 13.47V12C2.10938 9.28 3.74938 7.38 6.29938 7.06C6.54938 7.02 6.81937 7 7.09937 7H17.0994C17.3594 7 17.6094 7.01 17.8494 7.05C19.8694 7.28 21.3294 8.51 21.8694 10.34C21.9694 10.67 21.7294 11 21.3894 11H19.0994C16.9294 11 15.2094 12.98 15.6794 15.23C16.0094 16.87 17.5294 18 19.1994 18H21.3894C21.7394 18 21.9694 18.34 21.8694 18.66Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 11.13 2.17 10.34 2.48 9.66998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.48977 18.98H3.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 17.52V20.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z"
        fill="currentColor"
      />
      <Path
        d="M5 15C2.79 15 1 16.79 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.46 23 7.73 22.22 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.49 19.73H5.75V20.51C5.75 20.92 5.41 21.26 5 21.26C4.59 21.26 4.25 20.92 4.25 20.51V19.73H3.51C3.1 19.73 2.76 19.39 2.76 18.98C2.76 18.57 3.1 18.23 3.51 18.23H4.25V17.52C4.25 17.11 4.59 16.77 5 16.77C5.41 16.77 5.75 17.11 5.75 17.52V18.23H6.49C6.9 18.23 7.24 18.57 7.24 18.98C7.24 19.39 6.91 19.73 6.49 19.73Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.49172 18.9795H3.51172"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 17.5195V20.5095"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.19005 7.80995C5.95005 7.80995 5.73005 7.69995 5.58005 7.49995C5.41005 7.26995 5.39005 6.96992 5.52005 6.71992C5.69005 6.37992 5.93005 6.04995 6.24005 5.74995L9.49005 2.48994C11.15 0.839941 13.85 0.839941 15.51 2.48994L17.26 4.26997C18 4.99997 18.45 5.97997 18.5 7.01997C18.51 7.24997 18.42 7.46995 18.25 7.61995C18.08 7.76995 17.85 7.83994 17.63 7.79994C17.43 7.76994 17.22 7.75996 17 7.75996H7.00005C6.76005 7.75996 6.53005 7.77995 6.30005 7.80995C6.27005 7.80995 6.23005 7.80995 6.19005 7.80995ZM7.86005 6.24995H16.82C16.69 5.90995 16.48 5.59996 16.2 5.31996L14.44 3.53993C13.37 2.47993 11.62 2.47993 10.54 3.53993L7.86005 6.24995Z"
        fill="currentColor"
      />
      <Path
        d="M5 23.75C3.34 23.75 1.78 22.87 0.94 21.44C0.49 20.72 0.25 19.87 0.25 19C0.25 16.38 2.38 14.25 5 14.25C7.62 14.25 9.75 16.38 9.75 19C9.75 19.87 9.51 20.72 9.06 21.45C8.22 22.87 6.66 23.75 5 23.75ZM5 15.75C3.21 15.75 1.75 17.21 1.75 19C1.75 19.59 1.91 20.17 2.22 20.67C2.81 21.67 3.85 22.25 5 22.25C6.15 22.25 7.19 21.66 7.78 20.68C8.09 20.17 8.25 19.6 8.25 19C8.25 17.21 6.79 15.75 5 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.48977 19.73H3.50977C3.09977 19.73 2.75977 19.39 2.75977 18.98C2.75977 18.57 3.09977 18.23 3.50977 18.23H6.49977C6.90977 18.23 7.24977 18.57 7.24977 18.98C7.24977 19.39 6.90977 19.73 6.48977 19.73Z"
        fill="currentColor"
      />
      <Path
        d="M5 21.26C4.59 21.26 4.25 20.92 4.25 20.51V17.52C4.25 17.11 4.59 16.77 5 16.77C5.41 16.77 5.75 17.11 5.75 17.52V20.51C5.75 20.93 5.41 21.26 5 21.26Z"
        fill="currentColor"
      />
      <Path
        d="M17.0005 22.75H7.63047C7.31047 22.75 7.03047 22.55 6.92047 22.26C6.81047 21.96 6.90047 21.63 7.14047 21.43C7.38047 21.23 7.60047 20.97 7.76047 20.69C8.08047 20.18 8.24047 19.6 8.24047 19.01C8.24047 17.22 6.78047 15.76 4.99047 15.76C4.06047 15.76 3.17047 16.16 2.55047 16.87C2.34047 17.1 2.01047 17.19 1.72047 17.08C1.43047 16.97 1.23047 16.69 1.23047 16.38V12C1.23047 8.92 3.13047 6.69001 6.08047 6.32001C6.35047 6.28001 6.66047 6.25 6.98047 6.25H16.9805C17.2205 6.25 17.5305 6.26 17.8505 6.31C20.8005 6.65 22.7305 8.89 22.7305 12V17C22.7505 20.44 20.4405 22.75 17.0005 22.75ZM9.18047 21.25H17.0005C19.5805 21.25 21.2505 19.58 21.2505 17V12C21.2505 9.66 19.8805 8.04998 17.6605 7.78998C17.4205 7.74998 17.2105 7.75 17.0005 7.75H7.00047C6.76047 7.75 6.53047 7.76999 6.30047 7.79999C4.10047 8.07999 2.75047 9.68 2.75047 12V14.82C3.43047 14.45 4.21047 14.25 5.00047 14.25C7.62047 14.25 9.75047 16.38 9.75047 19C9.75047 19.79 9.55047 20.57 9.18047 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M14.2617 15.4385H9.26172"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.7617 12.998V17.998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M12.6609 2.51814L12.6309 2.58814L9.73094 9.31814H6.88094C6.20094 9.31814 5.55094 9.45814 4.96094 9.70814L6.71094 5.52814L6.75094 5.42814L6.82094 5.26814C6.84094 5.20814 6.86094 5.14814 6.89094 5.09814C8.20094 2.06814 9.68094 1.37814 12.6609 2.51814Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0505 9.51807C17.6005 9.37807 17.1205 9.31807 16.6405 9.31807H9.73047L12.6305 2.58807L12.6605 2.51807C12.8105 2.56807 12.9505 2.63807 13.1005 2.69807L15.3105 3.62807C16.5405 4.13807 17.4005 4.66807 17.9205 5.30807C18.0205 5.42807 18.1005 5.53807 18.1705 5.66807C18.2605 5.80807 18.3305 5.94807 18.3705 6.09807C18.4105 6.18807 18.4405 6.27807 18.4605 6.35807C18.7305 7.19807 18.5705 8.22807 18.0505 9.51807Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.71 5.52832L4.96 9.70832C3.22 10.4583 2 12.1883 2 14.1983V11.2683C2 8.42832 4.02 6.05832 6.71 5.52832Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WalletAddBold,
  broken: WalletAddBroken,
  bulk: WalletAddBulk,
  linear: WalletAddLinear,
  outline: WalletAddOutline,
  twotone: WalletAddTwotone,
};

export const WalletAddIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
