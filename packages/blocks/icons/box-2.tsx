import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Box2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.32914 19.4213C5.21914 19.4213 5.09914 19.3913 4.99914 19.3413L2.77914 18.2312C2.52914 18.1012 2.36914 17.8412 2.36914 17.5612V14.7812C2.36914 14.3713 2.70914 14.0312 3.11914 14.0312C3.52914 14.0312 3.86914 14.3713 3.86914 14.7812V17.0913L5.66914 18.0013C6.03914 18.1813 6.18914 18.6313 5.99914 19.0013C5.86914 19.2613 5.60914 19.4213 5.32914 19.4213Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 22.7488C11.9395 22.7488 11.8795 22.7388 11.8295 22.7288C11.7695 22.7188 11.7095 22.6888 11.6495 22.6588L9.43947 21.5588C9.06947 21.3688 8.91947 20.9187 9.09947 20.5487C9.28947 20.1787 9.73947 20.0287 10.1095 20.2087L11.2495 20.7788V19.2188C11.2495 18.8088 11.5895 18.4688 11.9995 18.4688C12.4095 18.4688 12.7495 18.8088 12.7495 19.2188V20.7788L13.8895 20.2087C14.2595 20.0287 14.7095 20.1787 14.8995 20.5487C15.0895 20.9187 14.9395 21.3688 14.5595 21.5588L12.3495 22.6588C12.2895 22.6888 12.2295 22.7088 12.1695 22.7288C12.1095 22.7388 12.0595 22.7488 11.9995 22.7488Z"
        fill="currentColor"
      />
      <Path
        d="M18.6702 19.4191C18.4002 19.4191 18.1302 19.2691 18.0002 19.0091C17.8102 18.6391 17.9602 18.1891 18.3402 17.9991L20.1502 17.0991V14.7891C20.1502 14.3791 20.4902 14.0391 20.9002 14.0391C21.3102 14.0391 21.6502 14.3791 21.6502 14.7891V17.5691C21.6502 17.8491 21.4902 18.1091 21.2402 18.2391L19.0002 19.3391C18.8902 19.3891 18.7802 19.4191 18.6702 19.4191Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 14.4191C11.5895 14.4191 11.2495 14.0791 11.2495 13.6691V11.3591L9.43947 10.4591C9.06947 10.2691 8.91947 9.81907 9.09947 9.44907C9.28947 9.07907 9.73947 8.92907 10.1095 9.10907L11.9995 10.0491L13.8895 9.10907C14.2595 8.92907 14.7095 9.06907 14.8995 9.44907C15.0895 9.81907 14.9395 10.2691 14.5595 10.4591L12.7495 11.3591V13.6691C12.7495 14.0791 12.4095 14.4191 11.9995 14.4191Z"
        fill="currentColor"
      />
      <Path
        d="M3.10938 9.96807C2.69938 9.96807 2.35938 9.62807 2.35938 9.21807V6.45807V6.44807C2.35938 6.38807 2.36938 6.32807 2.37938 6.27807C2.39938 6.18807 2.42938 6.11807 2.46938 6.04807C2.49938 5.99807 2.53938 5.95807 2.57938 5.91807C2.61938 5.87807 2.66938 5.83807 2.71938 5.80807C2.73938 5.79807 2.76938 5.77807 2.78938 5.76807L4.99938 4.65807C5.36938 4.47807 5.81938 4.62807 5.99938 4.99807C6.18938 5.36807 6.03938 5.81807 5.66938 5.99807L4.78938 6.43807L5.66938 6.87807C6.03938 7.06807 6.18938 7.51807 5.99938 7.88807C5.81938 8.25807 5.36938 8.40807 4.99938 8.22807L3.85938 7.65807V9.21807C3.85938 9.63807 3.52937 9.96807 3.10938 9.96807Z"
        fill="currentColor"
      />
      <Path
        d="M14.2198 3.85859C14.1098 3.85859 13.9898 3.82859 13.8898 3.77859L11.9998 2.83859L10.1098 3.77859C9.73981 3.96859 9.28981 3.81859 9.10981 3.44859C8.91981 3.07859 9.06981 2.62859 9.43981 2.43859L11.6598 1.32859C11.8698 1.21859 12.1198 1.21859 12.3298 1.32859L14.5498 2.43859C14.9198 2.62859 15.0698 3.07859 14.8898 3.44859C14.7598 3.70859 14.4998 3.85859 14.2198 3.85859Z"
        fill="currentColor"
      />
      <Path
        d="M20.8904 9.96807C20.4804 9.96807 20.1404 9.62807 20.1404 9.21807V7.65807L19.0004 8.22807C18.6304 8.40807 18.1804 8.25807 18.0004 7.88807C17.8104 7.51807 17.9604 7.06807 18.3404 6.87807L19.2204 6.43807L18.3304 5.99807C17.9604 5.81807 17.8104 5.36807 18.0004 4.99807C18.1904 4.62807 18.6304 4.47807 19.0004 4.65807L21.2104 5.75807C21.2304 5.76807 21.2604 5.77807 21.2804 5.79807C21.3404 5.82807 21.3904 5.87807 21.4404 5.92807C21.4704 5.96807 21.5004 6.00807 21.5304 6.04807C21.5704 6.11807 21.6004 6.18807 21.6204 6.26807C21.6304 6.32807 21.6404 6.38807 21.6404 6.43807V6.44807V9.20807C21.6404 9.63807 21.3004 9.96807 20.8904 9.96807Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6694 18.67L20.8894 17.56V14.78M14.2194 9.78L11.9994 10.89L14.2194 9.78ZM11.9994 10.89L9.77937 9.78L11.9994 10.89ZM11.9994 10.89V13.67V10.89ZM20.8894 6.44L18.6694 7.55L20.8894 6.44ZM20.8894 6.44L18.6694 5.33L20.8894 6.44ZM20.8894 6.44V9.22V6.44ZM14.2194 3.11L11.9994 2L9.77937 3.11H14.2194ZM3.10938 6.44L5.32938 5.33L3.10938 6.44ZM3.10938 6.44L5.32938 7.55L3.10938 6.44ZM3.10938 6.44V9.22V6.44ZM11.9994 22L9.77937 20.89L11.9994 22ZM11.9994 22L14.2194 20.89L11.9994 22ZM11.9994 22V19.22V22ZM5.32938 18.67L3.10938 17.56V14.78L5.32938 18.67Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Box2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.32914 19.42C5.21914 19.42 5.09914 19.39 4.99914 19.34L2.77914 18.23C2.52914 18.1 2.36914 17.84 2.36914 17.56V14.78C2.36914 14.37 2.70914 14.03 3.11914 14.03C3.52914 14.03 3.86914 14.37 3.86914 14.78V17.09L5.67914 17.99C6.04914 18.18 6.19913 18.63 6.01913 19C5.86913 19.26 5.60914 19.42 5.32914 19.42Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 22.75C11.9395 22.75 11.8795 22.74 11.8295 22.73C11.7695 22.72 11.7095 22.69 11.6495 22.66L9.43948 21.56C9.06948 21.37 8.91947 20.92 9.09947 20.55C9.28947 20.18 9.73947 20.03 10.1095 20.21L11.2495 20.78V19.22C11.2495 18.81 11.5895 18.47 11.9995 18.47C12.4095 18.47 12.7495 18.81 12.7495 19.22V20.78L13.8895 20.21C14.2595 20.03 14.7095 20.18 14.8995 20.55C15.0895 20.92 14.9395 21.37 14.5595 21.56L12.3495 22.66C12.2895 22.69 12.2295 22.71 12.1695 22.73C12.1095 22.74 12.0595 22.75 11.9995 22.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.6702 19.42C18.4002 19.42 18.1302 19.27 18.0002 19.01C17.8102 18.64 17.9602 18.19 18.3402 18L20.1502 17.1001V14.79C20.1502 14.38 20.4902 14.04 20.9002 14.04C21.3102 14.04 21.6502 14.38 21.6502 14.79V17.5701C21.6502 17.8501 21.4902 18.1101 21.2402 18.2401L19.0202 19.3501C18.8902 19.3901 18.7802 19.42 18.6702 19.42Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 14.42C11.5895 14.42 11.2495 14.08 11.2495 13.67V11.36L9.43948 10.4601C9.06948 10.2701 8.91947 9.82004 9.09947 9.45004C9.28947 9.08004 9.73947 8.93005 10.1095 9.11005L11.9995 10.05L13.8895 9.11005C14.2595 8.93005 14.7095 9.07004 14.8995 9.45004C15.0895 9.82004 14.9395 10.2701 14.5595 10.4601L12.7495 11.36V13.67C12.7495 14.08 12.4095 14.42 11.9995 14.42Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M3.10938 9.96988C2.69938 9.96988 2.35938 9.62988 2.35938 9.21988V6.45988V6.44987C2.35938 6.38987 2.36937 6.32987 2.37937 6.27987C2.39937 6.19987 2.42938 6.12987 2.46938 6.05987C2.49938 6.00987 2.52937 5.96987 2.56937 5.92987C2.60937 5.88987 2.65937 5.84988 2.70937 5.81988C2.72937 5.80988 2.75937 5.78987 2.77937 5.77987L4.98937 4.67987C5.35937 4.49987 5.80937 4.63988 5.99937 5.01988C6.18937 5.38988 6.03938 5.83987 5.65938 6.02987L4.77937 6.46988L5.65938 6.90988C6.02938 7.09988 6.17937 7.54987 5.99937 7.91987C5.81937 8.28987 5.35937 8.43987 4.98937 8.25987L3.84937 7.68988V9.24987C3.85937 9.63987 3.52937 9.96988 3.10938 9.96988Z"
        fill="currentColor"
      />
      <Path
        d="M14.2198 3.86004C14.1098 3.86004 13.9898 3.83004 13.8898 3.78004L11.9998 2.84004L10.1098 3.78004C9.73979 3.97004 9.28979 3.82004 9.09979 3.44004C8.90979 3.07004 9.05979 2.62003 9.43979 2.43003L11.6598 1.32005C11.8698 1.21005 12.1198 1.21005 12.3298 1.32005L14.5498 2.43003C14.9198 2.62003 15.0698 3.07004 14.8898 3.44004C14.7598 3.71004 14.4998 3.86004 14.2198 3.86004Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.8904 9.97002C20.4804 9.97002 20.1404 9.63001 20.1404 9.22002V7.66002L19.0004 8.23001C18.6304 8.42001 18.1804 8.27001 17.9904 7.89001C17.8004 7.52001 17.9504 7.07002 18.3304 6.88002L19.2104 6.44002L18.3304 6.00001C17.9604 5.81001 17.8104 5.36002 17.9904 4.99002C18.1704 4.62002 18.6304 4.47001 19.0004 4.65001L21.2104 5.75001C21.2304 5.76001 21.2604 5.77001 21.2804 5.79001C21.3404 5.82001 21.3904 5.87001 21.4404 5.92001C21.4704 5.96001 21.5004 6.00001 21.5304 6.04001C21.5704 6.11001 21.6004 6.18001 21.6204 6.26001C21.6304 6.32001 21.6404 6.38001 21.6404 6.43001V6.44002V9.20001C21.6404 9.64001 21.3004 9.97002 20.8904 9.97002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.67 18.67L20.89 17.56V14.78M14.22 9.78L12 10.89L14.22 9.78ZM12 10.89L9.77998 9.78L12 10.89ZM12 10.89V13.67V10.89ZM20.89 6.44L18.67 7.55L20.89 6.44ZM20.89 6.44L18.67 5.33L20.89 6.44ZM20.89 6.44V9.22V6.44ZM14.22 3.11L12 2L9.77998 3.11H14.22ZM3.10999 6.44L5.32999 5.33L3.10999 6.44ZM3.10999 6.44L5.32999 7.55L3.10999 6.44ZM3.10999 6.44V9.22V6.44ZM12 22L9.77998 20.89L12 22ZM12 22L14.22 20.89L12 22ZM12 22V19.22V22ZM5.32999 18.67L3.10999 17.56V14.78L5.32999 18.67Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Box2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9994 22.75C11.9394 22.75 11.8794 22.74 11.8294 22.73C11.7694 22.72 11.7094 22.69 11.6494 22.66L9.43938 21.56C9.06938 21.37 8.91937 20.92 9.09937 20.55C9.28937 20.18 9.73938 20.03 10.1094 20.21L11.2494 20.78V19.22C11.2494 18.81 11.5894 18.47 11.9994 18.47C12.4094 18.47 12.7494 18.81 12.7494 19.22V20.78L13.8894 20.21C14.2594 20.03 14.7094 20.18 14.8994 20.55C15.0894 20.92 14.9394 21.37 14.5594 21.56L12.3494 22.66C12.2894 22.69 12.2294 22.71 12.1694 22.73C12.1094 22.74 12.0594 22.75 11.9994 22.75ZM18.6694 19.42C18.3994 19.42 18.1294 19.27 17.9994 19.01C17.8094 18.64 17.9594 18.19 18.3394 18L20.1494 17.1V14.79C20.1494 14.38 20.4894 14.04 20.8994 14.04C21.3094 14.04 21.6494 14.38 21.6494 14.79V17.57C21.6494 17.85 21.4894 18.11 21.2394 18.24L19.0194 19.35C18.8894 19.39 18.7794 19.42 18.6694 19.42ZM5.32938 19.42C5.21938 19.42 5.09937 19.39 4.99937 19.34L2.77937 18.23C2.52937 18.1 2.36938 17.84 2.36938 17.56V14.78C2.36938 14.37 2.70938 14.03 3.11938 14.03C3.52938 14.03 3.86938 14.37 3.86938 14.78V17.09L5.67937 17.99C6.04937 18.18 6.19937 18.63 6.01937 19C5.86937 19.26 5.60938 19.42 5.32938 19.42ZM11.9994 14.42C11.5894 14.42 11.2494 14.08 11.2494 13.67V11.36L9.43938 10.46C9.06938 10.27 8.91937 9.82004 9.09937 9.45004C9.28937 9.08004 9.73938 8.93004 10.1094 9.11004L11.9994 10.05L13.8894 9.11004C14.2594 8.93004 14.7094 9.07004 14.8994 9.45004C15.0894 9.83004 14.9394 10.27 14.5594 10.46L12.7494 11.36V13.67C12.7494 14.08 12.4094 14.42 11.9994 14.42ZM20.8894 9.97004C20.4794 9.97004 20.1394 9.63004 20.1394 9.22004V7.66005L18.9994 8.23004C18.6294 8.42004 18.1794 8.27004 17.9894 7.89004C17.7994 7.52004 17.9494 7.07005 18.3294 6.88005L19.2094 6.44004L18.3294 6.00004C17.9594 5.81004 17.8094 5.36005 17.9894 4.99005C18.1794 4.62005 18.6294 4.47004 18.9994 4.65004L21.2094 5.75004C21.2294 5.76004 21.2594 5.77003 21.2794 5.79003C21.3394 5.82003 21.3894 5.87004 21.4394 5.92004C21.4694 5.96004 21.4994 6.00003 21.5294 6.04003C21.5694 6.11003 21.5994 6.18004 21.6194 6.26004C21.6294 6.32004 21.6394 6.38003 21.6394 6.43003V6.44004V9.20004C21.6394 9.64004 21.2994 9.97004 20.8894 9.97004ZM3.10938 9.97004C2.69938 9.97004 2.35938 9.63004 2.35938 9.22004V6.46005V6.45004C2.35938 6.39004 2.36937 6.33004 2.37937 6.28004C2.39937 6.20004 2.42938 6.13004 2.46938 6.06004C2.49938 6.01004 2.52937 5.97003 2.56937 5.93003C2.60937 5.89003 2.65937 5.85005 2.70937 5.82005C2.72937 5.81005 2.75937 5.79004 2.77937 5.78004L4.98937 4.68003C5.35937 4.50003 5.80937 4.64005 5.99937 5.02005C6.18937 5.40005 6.03938 5.84004 5.65938 6.03004L4.77937 6.47004L5.65938 6.91005C6.02938 7.10005 6.17937 7.55004 5.99937 7.92004C5.80937 8.29004 5.36937 8.44004 4.98937 8.26004L3.84937 7.69004V9.25004C3.85937 9.64004 3.52937 9.97004 3.10938 9.97004ZM14.2194 3.86004C14.1094 3.86004 13.9894 3.83004 13.8894 3.78004L11.9994 2.84004L10.1094 3.78004C9.73938 3.97004 9.28937 3.82004 9.09937 3.44004C8.90937 3.07004 9.05938 2.62003 9.43938 2.43003L11.6594 1.32005C11.8694 1.21005 12.1194 1.21005 12.3294 1.32005L14.5494 2.43003C14.9194 2.62003 15.0694 3.07004 14.8894 3.44004C14.7594 3.71004 14.4994 3.86004 14.2194 3.86004Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2194 9.78L11.9994 10.89M11.9994 10.89L9.77937 9.78M11.9994 10.89V13.67M14.2194 3.11L11.9994 2L9.77937 3.11M5.32938 18.67L3.10938 17.56V14.78M18.6694 18.67L20.8894 17.56V14.78"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M20.8899 6.90967L18.6699 8.01967"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.8899 6.90981L18.6699 5.7998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.8906 6.90967V9.68967"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.10938 6.90981L5.32938 5.7998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.10938 6.90967L5.32938 8.01967"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.10938 6.90967V9.68967"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.9993 22.4699L9.7793 21.3599"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 22.4699L14.22 21.3599"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 22.4699V19.6899"
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
  bold: Box2Bold,
  broken: Box2Broken,
  bulk: Box2Bulk,
  linear: Box2Linear,
  outline: Box2Outline,
  twotone: Box2Twotone,
};

export const Box2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
