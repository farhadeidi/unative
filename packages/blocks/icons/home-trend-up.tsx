import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HomeTrendUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM16.8802 13.4016C16.8802 13.7916 16.5702 14.1016 16.1802 14.1016C15.7902 14.1016 15.4802 13.7916 15.4802 13.4016V13.2216L12.7602 15.9416C12.6102 16.0916 12.4102 16.1616 12.2002 16.1416C12.0002 16.1216 11.8102 16.0016 11.7002 15.8316L10.6802 14.3116L8.30023 16.6916C8.16023 16.8316 7.99023 16.8916 7.81023 16.8916C7.63023 16.8916 7.45023 16.8216 7.32023 16.6916C7.05023 16.4216 7.05023 15.9816 7.32023 15.7016L10.3002 12.7216C10.4502 12.5716 10.6502 12.5016 10.8602 12.5216C11.0702 12.5416 11.2602 12.6516 11.3702 12.8316L12.3902 14.3516L14.5002 12.2416H14.3202C13.9302 12.2416 13.6202 11.9316 13.6202 11.5416C13.6202 11.1516 13.9302 10.8416 14.3202 10.8416H16.1802C16.2702 10.8416 16.3602 10.8616 16.4502 10.8916C16.6202 10.9616 16.7602 11.1016 16.8302 11.2716C16.8702 11.3616 16.8802 11.4516 16.8802 11.5416V13.4016Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V14.6799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.17 14L10.7 13.3L7.5 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 11.5L14.99 13.01L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 11.5H16.5V13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeTrendUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.82018L14.2802 2.79018C12.7102 1.69018 10.3002 1.75018 8.79023 2.92018L3.78023 6.83018C2.78023 7.61018 1.99023 9.21018 1.99023 10.4702V17.3702C1.99023 19.9202 4.06023 22.0002 6.61023 22.0002H17.3902C19.9402 22.0002 22.0102 19.9302 22.0102 17.3802V10.6002C22.0102 9.25018 21.1402 7.59018 20.0402 6.82018Z"
        fill="currentColor"
      />
      <Path
        d="M16.8297 11.2703C16.7597 11.1003 16.6197 10.9603 16.4497 10.8903C16.3597 10.8503 16.2697 10.8403 16.1797 10.8403H14.3197C13.9297 10.8403 13.6197 11.1503 13.6197 11.5403C13.6197 11.9303 13.9297 12.2403 14.3197 12.2403H14.4997L12.3897 14.3503L11.3697 12.8303C11.2497 12.6603 11.0697 12.5403 10.8597 12.5203C10.6397 12.5003 10.4497 12.5703 10.2997 12.7203L7.31969 15.7003C7.04969 15.9703 7.04969 16.4103 7.31969 16.6903C7.45969 16.8303 7.62969 16.8903 7.80969 16.8903C7.98969 16.8903 8.16969 16.8203 8.29969 16.6903L10.6797 14.3103L11.6997 15.8303C11.8197 16.0003 11.9997 16.1203 12.2097 16.1403C12.4297 16.1603 12.6197 16.0903 12.7697 15.9403L15.4897 13.2203V13.4003C15.4897 13.7903 15.7997 14.1003 16.1897 14.1003C16.5797 14.1003 16.8897 13.7903 16.8897 13.4003V11.5403C16.8797 11.4403 16.8697 11.3503 16.8297 11.2703Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 11.5H16.5V13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeTrendUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.79 22.7402H6.21C3.47 22.7402 1.25 20.5102 1.25 17.7702V10.3602C1.25 9.00021 2.09 7.29021 3.17 6.45021L8.56 2.25021C10.18 0.990208 12.77 0.930208 14.45 2.11021L20.63 6.44021C21.82 7.27021 22.75 9.05021 22.75 10.5002V17.7802C22.75 20.5102 20.53 22.7402 17.79 22.7402ZM9.48 3.43021L4.09 7.63021C3.38 8.19021 2.75 9.46021 2.75 10.3602V17.7702C2.75 19.6802 4.3 21.2402 6.21 21.2402H17.79C19.7 21.2402 21.25 19.6902 21.25 17.7802V10.5002C21.25 9.54021 20.56 8.21021 19.77 7.67021L13.59 3.34021C12.45 2.54021 10.57 2.58021 9.48 3.43021Z"
        fill="currentColor"
      />
      <Path
        d="M7.50043 17.2499C7.31043 17.2499 7.12043 17.1799 6.97043 17.0299C6.68043 16.7399 6.68043 16.2599 6.97043 15.9699L10.1704 12.7699C10.3304 12.6099 10.5404 12.5299 10.7704 12.5499C10.9904 12.5699 11.1904 12.6899 11.3204 12.8799L12.4104 14.5199L15.9604 10.9699C16.2504 10.6799 16.7304 10.6799 17.0204 10.9699C17.3104 11.2599 17.3104 11.7399 17.0204 12.0299L12.8204 16.2299C12.6604 16.3899 12.4504 16.4699 12.2204 16.4499C12.0004 16.4299 11.8004 16.3099 11.6704 16.1199L10.5804 14.4799L8.03043 17.0299C7.88043 17.1799 7.69043 17.2499 7.50043 17.2499Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 14.25C16.09 14.25 15.75 13.91 15.75 13.5V12.25H14.5C14.09 12.25 13.75 11.91 13.75 11.5C13.75 11.09 14.09 10.75 14.5 10.75H16.5C16.91 10.75 17.25 11.09 17.25 11.5V13.5C17.25 13.91 16.91 14.25 16.5 14.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5 11.5H16.5V13.5"
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
  bold: HomeTrendUpBold,
  broken: HomeTrendUpBroken,
  bulk: HomeTrendUpBulk,
  linear: HomeTrendUpLinear,
  outline: HomeTrendUpOutline,
  twotone: HomeTrendUpTwotone,
};

export const HomeTrendUpIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
