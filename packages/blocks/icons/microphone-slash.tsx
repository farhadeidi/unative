import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MicrophoneSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4181 6.4216V7.5816L9.13813 14.8616C8.17813 13.9916 7.57812 12.7116 7.57812 11.3416V6.4216C7.57812 4.3616 8.97813 2.6516 10.8781 2.1616C11.0681 2.1116 11.2481 2.2716 11.2481 2.4616V4.0016C11.2481 4.4116 11.5881 4.7516 11.9981 4.7516C12.4081 4.7516 12.7481 4.4116 12.7481 4.0016V2.4616C12.7481 2.2716 12.9281 2.1116 13.1181 2.1616C15.0181 2.6516 16.4181 4.3616 16.4181 6.4216Z"
        fill="currentColor"
      />
      <Path
        d="M19.8117 9.81109V11.4011C19.8117 15.4711 16.6817 18.8211 12.7017 19.1711V21.3011C12.7017 21.6911 12.3917 22.0011 12.0017 22.0011C11.6117 22.0011 11.3017 21.6911 11.3017 21.3011V19.1711C10.2117 19.0711 9.18172 18.7511 8.26172 18.2411L9.29172 17.2111C10.1117 17.5911 11.0317 17.8111 12.0017 17.8111C15.5417 17.8111 18.4217 14.9311 18.4217 11.4011V9.81109C18.4217 9.43109 18.7317 9.12109 19.1217 9.12109C19.5017 9.12109 19.8117 9.43109 19.8117 9.81109Z"
        fill="currentColor"
      />
      <Path
        d="M16.4183 10.0781V11.5281C16.4183 14.1081 14.1983 16.1781 11.5583 15.9281C11.2783 15.8981 10.9983 15.8481 10.7383 15.7581L16.4183 10.0781Z"
        fill="currentColor"
      />
      <Path
        d="M21.7711 2.22891C21.4711 1.92891 20.9811 1.92891 20.6811 2.22891L7.23109 15.6789C6.20109 14.5489 5.58109 13.0489 5.58109 11.3989V9.80891C5.58109 9.42891 5.27109 9.11891 4.88109 9.11891C4.50109 9.11891 4.19109 9.42891 4.19109 9.80891V11.3989C4.19109 13.4289 4.97109 15.2789 6.24109 16.6689L2.22109 20.6889C1.92109 20.9889 1.92109 21.4789 2.22109 21.7789C2.38109 21.9189 2.57109 21.9989 2.77109 21.9989C2.97109 21.9989 3.16109 21.9189 3.31109 21.7689L21.7711 3.30891C22.0811 3.00891 22.0811 2.52891 21.7711 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlashBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M6 12V13C6 14.46 6.52 15.8 7.39 16.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.85938 19.58C7.46938 21.08 9.62937 22 11.9994 22C16.9694 22 20.9994 17.97 20.9994 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 2.99023L2.5 21.9902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5508 5.49977V2.25977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 3.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicrophoneSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4201 6.42014V7.58014L9.14008 14.8601C8.18008 13.9901 7.58008 12.7101 7.58008 11.3401V6.42014C7.58008 4.36014 8.98008 2.65014 10.8801 2.16014C11.0701 2.11014 11.2501 2.27014 11.2501 2.46014V4.00014C11.2501 4.41014 11.5901 4.75014 12.0001 4.75014C12.4101 4.75014 12.7501 4.41014 12.7501 4.00014V2.46014C12.7501 2.27014 12.9301 2.11014 13.1201 2.16014C15.0201 2.65014 16.4201 4.36014 16.4201 6.42014Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.77945 16.2201L6.78945 17.2101C5.19945 15.7801 4.18945 13.7101 4.18945 11.4001V9.81012C4.18945 9.43012 4.49945 9.12012 4.87945 9.12012C5.26945 9.12012 5.57945 9.43012 5.57945 9.81012V11.4001C5.57945 13.3201 6.42945 15.0501 7.77945 16.2201Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.8098 9.81012V11.4001C19.8098 15.4701 16.6798 18.8201 12.6998 19.1701V21.3001C12.6998 21.6901 12.3898 22.0001 11.9998 22.0001C11.6098 22.0001 11.2998 21.6901 11.2998 21.3001V19.1701C10.2098 19.0701 9.17977 18.7501 8.25977 18.2401L9.28977 17.2101C10.1098 17.5901 11.0298 17.8101 11.9998 17.8101C15.5398 17.8101 18.4198 14.9301 18.4198 11.4001V9.81012C18.4198 9.43012 18.7298 9.12012 19.1198 9.12012C19.4998 9.12012 19.8098 9.43012 19.8098 9.81012Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.4202 10.0801V11.5301C16.4202 14.1101 14.2002 16.1801 11.5602 15.9301C11.2802 15.9001 11.0002 15.8501 10.7402 15.7601L16.4202 10.0801Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlashLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.04004 14.19C9.77004 15 10.83 15.5 12 15.5C14.21 15.5 16 13.71 16 11.5V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.78003 16.9499C8.15003 18.2199 9.98003 18.9999 12 18.9999C16.22 18.9999 19.65 15.5699 19.65 11.3499V9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.34998 9.6499V11.3499C4.34998 12.4099 4.55998 13.4099 4.94998 14.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0701 2.84009L3.93005 18.9901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 3V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicrophoneSlashOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M7.39 17.59C7.18 17.59 6.96 17.5 6.81 17.32C5.8 16.11 5.25 14.58 5.25 13V8C5.25 4.28 8.28 1.25 12 1.25C15.1 1.25 17.79 3.35 18.55 6.35C18.65 6.75 18.41 7.16 18.01 7.26C17.62 7.36 17.2 7.12 17.1 6.72C16.5 4.38 14.41 2.75 12 2.75C9.11 2.75 6.75 5.1 6.75 8V13C6.75 14.23 7.18 15.42 7.96 16.36C8.23 16.68 8.18 17.15 7.86 17.42C7.73 17.53 7.56 17.59 7.39 17.59Z"
        fill="currentColor"
      />
      <Path
        d="M11.9998 19.75C11.1898 19.75 10.3998 19.61 9.65984 19.33C9.26984 19.19 9.06984 18.75 9.21984 18.37C9.35984 17.98 9.79984 17.78 10.1798 17.93C10.7598 18.15 11.3798 18.26 11.9998 18.26C14.8898 18.26 17.2498 15.91 17.2498 13.01V9.97998C17.2498 9.56998 17.5898 9.22998 17.9998 9.22998C18.4098 9.22998 18.7498 9.56998 18.7498 9.97998V13C18.7498 16.72 15.7198 19.75 11.9998 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9994 22.7502C9.51941 22.7502 7.15941 21.8202 5.34941 20.1302C5.04941 19.8502 5.02941 19.3702 5.30941 19.0702C5.58941 18.7702 6.06941 18.7502 6.36941 19.0302C7.89941 20.4602 9.89941 21.2402 11.9894 21.2402C16.5394 21.2402 20.2394 17.5402 20.2394 12.9902V10.9902C20.2394 10.5802 20.5794 10.2402 20.9894 10.2402C21.3994 10.2402 21.7394 10.5802 21.7394 10.9902V12.9902C21.7494 18.3802 17.3794 22.7502 11.9994 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M2.49945 22.7402C2.30945 22.7402 2.11945 22.6702 1.96945 22.5202C1.67945 22.2302 1.67945 21.7502 1.96945 21.4602L20.9695 2.46018C21.2595 2.17018 21.7395 2.17018 22.0295 2.46018C22.3195 2.75018 22.3195 3.23018 22.0295 3.52018L3.02945 22.5202C2.87945 22.6702 2.68945 22.7402 2.49945 22.7402Z"
        fill="currentColor"
      />
      <Path
        d="M11.5508 6.24977C11.1408 6.24977 10.8008 5.90977 10.8008 5.49977V2.25977C10.8008 1.84977 11.1408 1.50977 11.5508 1.50977C11.9608 1.50977 12.3008 1.84977 12.3008 2.25977V5.49977C12.3008 5.91977 11.9608 6.24977 11.5508 6.24977Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 8.25C8.09 8.25 7.75 7.91 7.75 7.5V3.5C7.75 3.09 8.09 2.75 8.5 2.75C8.91 2.75 9.25 3.09 9.25 3.5V7.5C9.25 7.91 8.91 8.25 8.5 8.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlashTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.34961 9.6499V11.3499C4.34961 12.4099 4.55961 13.4099 4.94961 14.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0697 2.83984L3.92969 18.9898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 3V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9.03906 14.19C9.76906 15 10.8291 15.5 11.9991 15.5C14.2091 15.5 15.9991 13.71 15.9991 11.5V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.7793 16.9504C8.1493 18.2204 9.9793 19.0004 11.9993 19.0004C16.2193 19.0004 19.6493 15.5704 19.6493 11.3504V9.65039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 19V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MicrophoneSlashBold,
  broken: MicrophoneSlashBroken,
  bulk: MicrophoneSlashBulk,
  linear: MicrophoneSlashLinear,
  outline: MicrophoneSlashOutline,
  twotone: MicrophoneSlashTwotone,
};

export const MicrophoneSlashIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
