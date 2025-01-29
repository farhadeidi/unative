import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MusicCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.58158 9.41928C2.50158 9.41928 2.41158 9.40928 2.33158 9.37928C1.94158 9.23928 1.74158 8.80928 1.87158 8.41928C2.54158 6.53928 3.70158 4.88928 5.25158 3.63928C5.57158 3.37928 6.04158 3.42928 6.30158 3.74928C6.56158 4.06928 6.51158 4.53928 6.19158 4.80928C4.87158 5.87928 3.86158 7.29928 3.29158 8.91928C3.18158 9.22928 2.89158 9.41928 2.58158 9.41928Z"
        fill="currentColor"
      />
      <Path
        d="M2.58 16.08C2.27 16.08 1.98 15.89 1.87 15.58C1.46 14.42 1.25 13.21 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 13.04 2.93 14.08 3.29 15.08C3.43 15.47 3.22 15.9 2.83 16.04C2.75 16.07 2.66 16.08 2.58 16.08Z"
        fill="currentColor"
      />
      <Path
        d="M11.9986 22.7515C10.9386 22.7515 9.88864 22.5915 8.86864 22.2815C8.46864 22.1615 8.24864 21.7415 8.36864 21.3415C8.48864 20.9415 8.90864 20.7215 9.30864 20.8415C10.1786 21.1115 11.0886 21.2415 11.9986 21.2415C17.0986 21.2415 21.2486 17.0915 21.2486 11.9915C21.2486 11.4715 21.1986 10.9315 21.0986 10.3615C21.0286 9.95151 21.2986 9.56151 21.7086 9.49151C22.1086 9.42151 22.5086 9.69151 22.5786 10.1015C22.6986 10.7615 22.7586 11.3815 22.7586 12.0015C22.7486 17.9315 17.9286 22.7515 11.9986 22.7515Z"
        fill="currentColor"
      />
      <Path
        d="M5.71826 20.4981C5.54826 20.4981 5.38826 20.4481 5.24826 20.3281C4.67826 19.8681 4.21826 19.4281 3.82826 18.9781C3.55826 18.6681 3.59826 18.1881 3.90826 17.9181C4.22826 17.6481 4.69826 17.6881 4.96826 17.9981C5.29826 18.3781 5.69826 18.7581 6.18826 19.1581C6.50826 19.4181 6.55826 19.8881 6.29826 20.2081C6.15826 20.3981 5.93826 20.4981 5.71826 20.4981Z"
        fill="currentColor"
      />
      <Path
        d="M20.2384 7.09C19.9984 7.09 19.7684 6.98 19.6184 6.76C17.8984 4.25 15.0384 2.75 11.9984 2.75C11.0884 2.75 10.1784 2.88 9.30845 3.15C8.91845 3.27 8.49845 3.05 8.36845 2.65C8.23845 2.25 8.46845 1.83 8.86845 1.71C9.88845 1.41 10.9384 1.25 11.9984 1.25C15.5384 1.25 18.8484 3 20.8584 5.92C21.0884 6.26 21.0084 6.73 20.6684 6.96C20.5384 7.05 20.3884 7.09 20.2384 7.09Z"
        fill="currentColor"
      />
      <Path
        d="M16.03 6.49851C15.7 6.24851 15.1 5.99851 14.14 6.25851L10.95 7.11851C10.03 7.37851 9.43 8.15851 9.43 9.11851V10.7585V13.3385C9.17 13.2385 8.89 13.1785 8.59 13.1785C7.3 13.1785 6.25 14.2285 6.25 15.5185C6.25 16.8085 7.3 17.8585 8.59 17.8585C9.87 17.8585 10.9 16.8285 10.92 15.5585C10.92 15.5485 10.93 15.5385 10.93 15.5185V11.3285L15.25 10.1485V12.2785C14.99 12.1785 14.71 12.1185 14.41 12.1185C13.12 12.1185 12.07 13.1685 12.07 14.4585C12.07 15.7485 13.12 16.7985 14.41 16.7985C15.7 16.7985 16.75 15.7485 16.75 14.4585V9.16851V8.24851C16.75 7.44851 16.51 6.85851 16.03 6.49851ZM8.59 16.3585C8.13 16.3585 7.75 15.9785 7.75 15.5185C7.75 15.0585 8.13 14.6785 8.59 14.6785C9.05 14.6785 9.43 15.0585 9.43 15.5185C9.43 15.9785 9.05 16.3585 8.59 16.3585ZM14.41 15.2985C13.95 15.2985 13.57 14.9185 13.57 14.4585C13.57 13.9985 13.95 13.6185 14.41 13.6185C14.87 13.6185 15.25 13.9985 15.25 14.4585C15.25 14.9185 14.87 15.2985 14.41 15.2985Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.58008 8.66998C3.20008 6.90998 4.30009 5.37998 5.72009 4.22998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.08984 21.57C10.0098 21.85 10.9898 22 11.9998 22C17.5198 22 21.9998 17.52 21.9998 12C21.9998 11.4 21.9398 10.81 21.8398 10.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.7204 19.75C5.2504 19.37 4.80039 18.95 4.40039 18.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2398 6.34003C18.4398 3.72003 15.4198 2 11.9998 2C10.9898 2 10.0098 2.14999 9.08984 2.42999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9999 14.4602V8.25015C15.9999 6.93015 15.1699 6.74012 14.3299 6.97012L11.1499 7.84018C10.5699 8.00018 10.1699 8.45015 10.1699 9.12015V10.2301V10.9701V15.5202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4103 16.0501C15.2884 16.0501 16.0003 15.3383 16.0003 14.4601C16.0003 13.582 15.2884 12.8701 14.4103 12.8701C13.5322 12.8701 12.8203 13.582 12.8203 14.4601C12.8203 15.3383 13.5322 16.0501 14.4103 16.0501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1797 10.7602L15.9997 9.17017"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.57962 9.42023C2.49962 9.42023 2.40962 9.41025 2.32962 9.38025C1.93962 9.24025 1.73963 8.81023 1.86963 8.42023C2.53963 6.54023 3.69964 4.89026 5.24964 3.64026C5.56964 3.38026 6.03962 3.43025 6.29962 3.75025C6.55962 4.07025 6.50964 4.54025 6.18964 4.81025C4.85964 5.88025 3.85964 7.30023 3.28964 8.92023C3.17964 9.23023 2.88962 9.42023 2.57962 9.42023Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2.57999 16.08C2.26999 16.08 1.98 15.89 1.87 15.58C1.46 14.41 1.25 13.21 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 13.04 2.93001 14.08 3.29001 15.08C3.43001 15.47 3.21999 15.9 2.82999 16.04C2.74999 16.07 2.65999 16.08 2.57999 16.08Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12.0006 22.7501C10.9406 22.7501 9.89059 22.5901 8.87059 22.2801C8.47059 22.1601 8.25059 21.7401 8.37059 21.3401C8.49059 20.9401 8.9106 20.7201 9.3106 20.8401C10.1806 21.1101 11.0906 21.24 12.0006 21.24C17.1006 21.24 21.2506 17.09 21.2506 11.99C21.2506 11.47 21.2006 10.93 21.1006 10.36C21.0306 9.95004 21.3006 9.56004 21.7106 9.49004C22.1106 9.42004 22.5106 9.69003 22.5806 10.1C22.7006 10.76 22.7606 11.3801 22.7606 12.0001C22.7506 17.9301 17.9306 22.7501 12.0006 22.7501Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.72022 20.5001C5.55022 20.5001 5.39022 20.4501 5.25022 20.3301C4.68022 19.8701 4.22021 19.43 3.83021 18.98C3.56021 18.67 3.60022 18.19 3.91022 17.92C4.23022 17.65 4.70022 17.6901 4.97022 18.0001C5.30022 18.3801 5.70022 18.76 6.19022 19.16C6.51022 19.42 6.56021 19.8901 6.30021 20.2101C6.16021 20.4001 5.94022 20.5001 5.72022 20.5001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.2404 7.09003C20.0004 7.09003 19.7704 6.98001 19.6204 6.76001C17.8904 4.24001 15.0404 2.73999 12.0004 2.73999C11.0904 2.73999 10.1804 2.87001 9.3104 3.14001C8.9204 3.26001 8.5004 3.04001 8.3704 2.64001C8.2404 2.24001 8.4704 1.82001 8.8704 1.70001C9.8904 1.39001 10.9404 1.22998 12.0004 1.22998C15.5404 1.22998 18.8504 2.98002 20.8604 5.90002C21.0904 6.24002 21.0104 6.71 20.6704 6.94C20.5404 7.05 20.3904 7.09003 20.2404 7.09003Z"
        fill="currentColor"
      />
      <Path
        d="M16.03 6.49996C15.7 6.24996 15.1 5.99997 14.14 6.25997L10.95 7.11996C10.03 7.37996 9.42999 8.15996 9.42999 9.11996V10.76V13.34C9.16999 13.24 8.89 13.18 8.59 13.18C7.3 13.18 6.25 14.23 6.25 15.52C6.25 16.81 7.3 17.86 8.59 17.86C9.87 17.86 10.9 16.83 10.92 15.56C10.92 15.55 10.93 15.54 10.93 15.52V11.33L15.25 10.15V12.28C14.99 12.18 14.71 12.12 14.41 12.12C13.12 12.12 12.07 13.17 12.07 14.46C12.07 15.75 13.12 16.8 14.41 16.8C15.7 16.8 16.75 15.75 16.75 14.46V9.16995V8.24996C16.75 7.44996 16.51 6.85996 16.03 6.49996ZM8.59 16.36C8.13 16.36 7.75 15.98 7.75 15.52C7.75 15.06 8.13 14.68 8.59 14.68C9.05 14.68 9.42999 15.06 9.42999 15.52C9.42999 15.98 9.05 16.36 8.59 16.36ZM14.41 15.3C13.95 15.3 13.57 14.92 13.57 14.46C13.57 14 13.95 13.62 14.41 13.62C14.87 13.62 15.25 14 15.25 14.46C15.25 14.92 14.87 15.3 14.41 15.3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.57996 8.66998C3.19996 6.90998 4.29997 5.37998 5.71997 4.22998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.08997 21.57C10.01 21.85 10.99 22 12 22C17.52 22 22 17.52 22 12C22 11.4 21.94 10.81 21.84 10.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.72003 19.75C5.25003 19.37 4.80002 18.95 4.40002 18.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.24 6.34003C18.44 3.72003 15.42 2 12 2C10.99 2 10.01 2.14999 9.08997 2.42999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 14.4602V8.25015C16 6.93015 15.17 6.74012 14.33 6.97012L11.15 7.84018C10.57 8.00018 10.17 8.45015 10.17 9.12015V10.2301V10.9701V15.5202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4101 16.0501C15.2882 16.0501 16.0001 15.3383 16.0001 14.4601C16.0001 13.582 15.2882 12.8701 14.4101 12.8701C13.5319 12.8701 12.8201 13.582 12.8201 14.4601C12.8201 15.3383 13.5319 16.0501 14.4101 16.0501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1799 10.7602L15.9999 9.17017"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.57962 9.42023C2.49962 9.42023 2.40962 9.41025 2.32962 9.38025C1.93962 9.24025 1.73963 8.81023 1.86963 8.42023C2.53963 6.54023 3.69964 4.89026 5.24964 3.64026C5.56964 3.38026 6.03962 3.43025 6.29962 3.75025C6.55962 4.07025 6.50964 4.54025 6.18964 4.81025C4.85964 5.88025 3.85964 7.30023 3.28964 8.92023C3.17964 9.23023 2.88962 9.42023 2.57962 9.42023Z"
        fill="currentColor"
      />
      <Path
        d="M2.57999 16.08C2.26999 16.08 1.98 15.89 1.87 15.58C1.46 14.41 1.25 13.21 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 13.04 2.93001 14.08 3.29001 15.08C3.43001 15.47 3.21999 15.9 2.82999 16.04C2.74999 16.07 2.65999 16.08 2.57999 16.08Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 22.7501C10.9406 22.7501 9.89059 22.5901 8.87059 22.2801C8.47059 22.1601 8.25059 21.7401 8.37059 21.3401C8.49059 20.9401 8.9106 20.7201 9.3106 20.8401C10.1806 21.1101 11.0906 21.24 12.0006 21.24C17.1006 21.24 21.2506 17.09 21.2506 11.99C21.2506 11.47 21.2006 10.93 21.1006 10.36C21.0306 9.95004 21.3006 9.56004 21.7106 9.49004C22.1206 9.42004 22.5106 9.69003 22.5806 10.1C22.7006 10.76 22.7606 11.3801 22.7606 12.0001C22.7506 17.9301 17.9306 22.7501 12.0006 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M5.72022 20.5001C5.55022 20.5001 5.39022 20.4501 5.25022 20.3301C4.68022 19.8701 4.22021 19.43 3.83021 18.98C3.56021 18.67 3.60022 18.19 3.91022 17.92C4.22022 17.65 4.70022 17.6901 4.97022 18.0001C5.30022 18.3801 5.70022 18.76 6.19022 19.16C6.51022 19.42 6.56021 19.8901 6.30021 20.2101C6.16021 20.4001 5.94022 20.5001 5.72022 20.5001Z"
        fill="currentColor"
      />
      <Path
        d="M20.2404 7.09003C20.0004 7.09003 19.7704 6.98001 19.6204 6.76001C17.8904 4.24001 15.0404 2.73999 12.0004 2.73999C11.0904 2.73999 10.1804 2.87001 9.3104 3.14001C8.9204 3.26001 8.5004 3.04001 8.3704 2.64001C8.2404 2.24001 8.4704 1.82001 8.8704 1.70001C9.8904 1.39001 10.9404 1.22998 12.0004 1.22998C15.5404 1.22998 18.8504 2.98002 20.8604 5.90002C21.0904 6.24002 21.0104 6.71 20.6704 6.94C20.5404 7.05 20.3904 7.09003 20.2404 7.09003Z"
        fill="currentColor"
      />
      <Path
        d="M8.59 17.8597C7.3 17.8597 6.25 16.8097 6.25 15.5197C6.25 14.2297 7.3 13.1797 8.59 13.1797C9.88 13.1797 10.93 14.2297 10.93 15.5197C10.93 16.8097 9.88 17.8597 8.59 17.8597ZM8.59 14.6797C8.13 14.6797 7.75 15.0597 7.75 15.5197C7.75 15.9797 8.13 16.3597 8.59 16.3597C9.05 16.3597 9.42999 15.9797 9.42999 15.5197C9.42999 15.0597 9.05 14.6797 8.59 14.6797Z"
        fill="currentColor"
      />
      <Path
        d="M10.1797 16.2697C9.76969 16.2697 9.42969 15.9297 9.42969 15.5197V9.11972C9.42969 8.15972 10.0297 7.36972 10.9597 7.11972L14.1397 6.24972C15.0997 5.98972 15.6997 6.23971 16.0297 6.48971C16.5097 6.85971 16.7497 7.44972 16.7497 8.24972V14.4597C16.7497 14.8697 16.4097 15.2097 15.9997 15.2097C15.5897 15.2097 15.2497 14.8697 15.2497 14.4597V8.24972C15.2497 7.90972 15.1797 7.72972 15.1097 7.68972C15.0397 7.63972 14.8297 7.61973 14.5197 7.69973L11.3397 8.56973C11.0597 8.64973 10.9197 8.82972 10.9197 9.11972V15.5197C10.9297 15.9297 10.5897 16.2697 10.1797 16.2697Z"
        fill="currentColor"
      />
      <Path
        d="M14.4103 16.8001C13.1203 16.8001 12.0703 15.7501 12.0703 14.4601C12.0703 13.1701 13.1203 12.1201 14.4103 12.1201C15.7003 12.1201 16.7503 13.1701 16.7503 14.4601C16.7503 15.7501 15.7003 16.8001 14.4103 16.8001ZM14.4103 13.6201C13.9503 13.6201 13.5703 14.0001 13.5703 14.4601C13.5703 14.9201 13.9503 15.3001 14.4103 15.3001C14.8703 15.3001 15.2503 14.9201 15.2503 14.4601C15.2503 14.0001 14.8703 13.6201 14.4103 13.6201Z"
        fill="currentColor"
      />
      <Path
        d="M10.1803 11.4998C9.85031 11.4998 9.55031 11.2798 9.46031 10.9498C9.35031 10.5498 9.59031 10.1398 9.99031 10.0298L15.8103 8.43981C16.2103 8.32981 16.6203 8.56977 16.7303 8.96977C16.8403 9.36977 16.6003 9.77982 16.2003 9.88982L10.3803 11.4798C10.3103 11.4998 10.2403 11.4998 10.1803 11.4998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.58008 8.66998C3.20008 6.90998 4.30009 5.37998 5.72009 4.22998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.08984 21.5703C10.0098 21.8503 10.9898 22.0002 11.9998 22.0002C17.5198 22.0002 21.9998 17.5202 21.9998 12.0002C21.9998 11.4002 21.9398 10.8102 21.8398 10.2402"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.7204 19.7502C5.2504 19.3702 4.80039 18.9502 4.40039 18.4902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2398 6.34003C18.4398 3.72003 15.4198 2 11.9998 2C10.9898 2 10.0098 2.14999 9.08984 2.42999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.9999 14.4602V8.25015C15.9999 6.93015 15.1699 6.74012 14.3299 6.97012L11.1499 7.84018C10.5699 8.00018 10.1699 8.45015 10.1699 9.12015V10.2301V10.9701V15.5202"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.4103 16.0501C15.2884 16.0501 16.0003 15.3383 16.0003 14.4601C16.0003 13.582 15.2884 12.8701 14.4103 12.8701C13.5322 12.8701 12.8203 13.582 12.8203 14.4601C12.8203 15.3383 13.5322 16.0501 14.4103 16.0501Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.1797 10.7599L15.9997 9.16992"
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
  bold: MusicCircleBold,
  broken: MusicCircleBroken,
  bulk: MusicCircleBulk,
  linear: MusicCircleLinear,
  outline: MusicCircleOutline,
  twotone: MusicCircleTwotone,
};

export const MusicCircleIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MusicCircleIcon;
