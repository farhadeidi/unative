import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const I3DCubeScanBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.4002 8.21094L12.6402 6.18094C12.2402 5.97094 11.7702 5.97094 11.3702 6.18094L7.60016 8.21094C7.33016 8.36094 7.16016 8.65094 7.16016 8.97094C7.16016 9.30094 7.33016 9.59094 7.60016 9.74094L11.3602 11.7709C11.5602 11.8809 11.7802 11.9309 12.0002 11.9309C12.2202 11.9309 12.4402 11.8809 12.6402 11.7709L16.4002 9.74094C16.6702 9.59094 16.8402 9.30094 16.8402 8.97094C16.8402 8.65094 16.6702 8.36094 16.4002 8.21094Z"
        fill="currentColor"
      />
      <Path
        d="M10.74 12.4685L7.24 10.7185C6.97 10.5885 6.66 10.5985 6.4 10.7585C6.15 10.9185 6 11.1885 6 11.4885V14.7985C6 15.3685 6.32 15.8885 6.83 16.1385L10.33 17.8885C10.45 17.9485 10.58 17.9785 10.72 17.9785C10.88 17.9785 11.03 17.9385 11.17 17.8485C11.43 17.6885 11.58 17.4185 11.58 17.1185V13.8085C11.57 13.2385 11.26 12.7285 10.74 12.4685Z"
        fill="currentColor"
      />
      <Path
        d="M17.5919 10.7585C17.3319 10.5985 17.0219 10.5885 16.7519 10.7185L13.2519 12.4685C12.7419 12.7285 12.4219 13.2385 12.4219 13.8085V17.1185C12.4219 17.4185 12.5719 17.6885 12.8319 17.8485C12.9719 17.9385 13.1219 17.9785 13.2819 17.9785C13.4119 17.9785 13.5419 17.9485 13.6719 17.8885L17.1719 16.1385C17.6819 15.8785 18.0019 15.3685 18.0019 14.7985V11.4885C18.0019 11.1885 17.8519 10.9185 17.5919 10.7585Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DCubeScanBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 2C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V7C2 4 4 2 7 2H12.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0007 15V17C22.0007 20 20.0007 22 17.0007 22H11.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69922 9.26001L11.9992 12.33L17.2592 9.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7701V12.3201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7602 6.29006L7.56023 8.07009C6.84023 8.47009 6.24023 9.48008 6.24023 10.3101V13.7001C6.24023 14.5301 6.83023 15.5401 7.56023 15.9401L10.7602 17.7201C11.4402 18.1001 12.5602 18.1001 13.2502 17.7201L16.4502 15.9401C17.1702 15.5401 17.7702 14.5301 17.7702 13.7001V10.3101C17.7702 9.48008 17.1802 8.47009 16.4502 8.07009L13.2502 6.29006C12.5602 5.90006 11.4402 5.90006 10.7602 6.29006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3DCubeScanBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.3999 8.20999L12.6399 6.17996C12.2399 5.96996 11.7699 5.96996 11.3699 6.17996L7.60992 8.20999C7.33992 8.35999 7.16992 8.64995 7.16992 8.97995C7.16992 9.30995 7.33992 9.59997 7.60992 9.74997L11.3699 11.78C11.5699 11.89 11.7899 11.94 12.0099 11.94C12.2299 11.94 12.4499 11.89 12.6499 11.78L16.4099 9.74997C16.6799 9.59997 16.8499 9.30995 16.8499 8.97995C16.8399 8.64995 16.6699 8.35999 16.3999 8.20999Z"
        fill="currentColor"
      />
      <Path
        d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66022 10.6 6.40022 10.76C6.14022 10.92 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31024 15.89 6.82024 16.14L10.3202 17.89C10.4402 17.95 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5702 17.4199 11.5702 17.1199V13.8099C11.5702 13.2399 11.2602 12.7299 10.7402 12.4699Z"
        fill="currentColor"
      />
      <Path
        d="M17.5899 10.76C17.3299 10.6 17.0199 10.5899 16.7499 10.7199L13.2499 12.4699C12.7399 12.7299 12.4199 13.2399 12.4199 13.8099V17.1199C12.4199 17.4199 12.5699 17.6899 12.8299 17.8499C12.9699 17.9399 13.1199 17.9799 13.2799 17.9799C13.4099 17.9799 13.5399 17.95 13.6699 17.89L17.1699 16.14C17.6799 15.88 17.9999 15.3699 17.9999 14.7999V11.4899C17.9999 11.1899 17.8499 10.92 17.5899 10.76Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DCubeScanLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69995 9.26001L12 12.33L17.2599 9.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7701V12.3201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.29006L7.55998 8.07009C6.83998 8.47009 6.23999 9.48008 6.23999 10.3101V13.7001C6.23999 14.5301 6.82998 15.5401 7.55998 15.9401L10.76 17.7201C11.44 18.1001 12.56 18.1001 13.25 17.7201L16.45 15.9401C17.17 15.5401 17.77 14.5301 17.77 13.7001V10.3101C17.77 9.48008 17.18 8.47009 16.45 8.07009L13.25 6.29006C12.56 5.90006 11.44 5.90006 10.76 6.29006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3DCubeScanOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 13.08C11.8706 13.08 11.7406 13.0499 11.6206 12.9799L6.3206 9.91992C5.9606 9.70992 5.8406 9.24995 6.0506 8.88995C6.2606 8.52995 6.7206 8.40993 7.0706 8.61993L11.9906 11.4699L16.8806 8.63995C17.2406 8.42995 17.7006 8.55991 17.9006 8.90991C18.1106 9.26991 17.9806 9.72994 17.6306 9.93994L12.3706 12.9799C12.2606 13.0399 12.1306 13.08 12.0006 13.08Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 18.7501C11.4202 18.7501 10.8502 18.62 10.3902 18.37L7.19023 16.5901C6.23023 16.0601 5.49023 14.7901 5.49023 13.6901V10.3C5.49023 9.21004 6.24023 7.94008 7.19023 7.40008L10.3902 5.62005C11.3102 5.11005 12.6902 5.11005 13.6102 5.62005L16.8102 7.40008C17.7702 7.93008 18.5102 9.20004 18.5102 10.3V13.6901C18.5102 14.7801 17.7602 16.0501 16.8102 16.5901L13.6102 18.37C13.1502 18.62 12.5802 18.7501 12.0002 18.7501ZM11.1202 6.94006L7.92023 8.72002C7.43023 8.99002 6.99023 9.75004 6.99023 10.3V13.6901C6.99023 14.2501 7.43023 15.0001 7.92023 15.2701L11.1202 17.05C11.5802 17.3 12.4202 17.3 12.8802 17.05L16.0802 15.2701C16.5702 15.0001 17.0102 14.2401 17.0102 13.6901V10.3C17.0102 9.74004 16.5702 8.99002 16.0802 8.72002L12.8802 6.94006C12.4202 6.69006 11.5802 6.69006 11.1202 6.94006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DCubeScanTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.69922 9.26025L11.9992 12.3303L17.2592 9.28027"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 17.7703V12.3203"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.7602 6.29006L7.56023 8.07009C6.84023 8.47009 6.24023 9.48008 6.24023 10.3101V13.7001C6.24023 14.5301 6.83023 15.5401 7.56023 15.9401L10.7602 17.7201C11.4402 18.1001 12.5602 18.1001 13.2502 17.7201L16.4502 15.9401C17.1702 15.5401 17.7702 14.5301 17.7702 13.7001V10.3101C17.7702 9.48008 17.1802 8.47009 16.4502 8.07009L13.2502 6.29006C12.5602 5.90006 11.4402 5.90006 10.7602 6.29006Z"
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
  bold: I3DCubeScanBold,
  broken: I3DCubeScanBroken,
  bulk: I3DCubeScanBulk,
  linear: I3DCubeScanLinear,
  outline: I3DCubeScanOutline,
  twotone: I3DCubeScanTwotone,
};

export const I3DCubeScanIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
