import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SunBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 3.75H11.25V8.5C11.25 8.91 11.59 9.25 12 9.25C12.41 9.25 12.75 8.91 12.75 8.5V3.75H14C14.41 3.75 14.75 3.41 14.75 3C14.75 2.59 14.41 2.25 14 2.25H10C9.59 2.25 9.25 2.59 9.25 3C9.25 3.41 9.59 3.75 10 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 20.25H12.75V15.5C12.75 15.09 12.41 14.75 12 14.75C11.59 14.75 11.25 15.09 11.25 15.5V20.25H10C9.59 20.25 9.25 20.59 9.25 21C9.25 21.41 9.59 21.75 10 21.75H14C14.41 21.75 14.75 21.41 14.75 21C14.75 20.59 14.41 20.25 14 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M2.83036 9.87896C2.95036 9.94896 3.08036 9.97896 3.20036 9.97896C3.46036 9.97896 3.71036 9.84896 3.85036 9.59896L4.48036 8.51896L8.60037 10.899C8.71037 10.969 8.84036 10.999 8.97037 10.999C9.23036 10.999 9.48036 10.869 9.62036 10.619C9.83036 10.269 9.70037 9.80896 9.35037 9.59896L5.23036 7.21896L5.85036 6.13896C6.06036 5.77896 5.93036 5.31896 5.58036 5.11896C5.22036 4.90896 4.76036 5.02896 4.56036 5.38896L2.56036 8.84896C2.35036 9.21896 2.47036 9.66896 2.83036 9.87896Z"
        fill="currentColor"
      />
      <Path
        d="M21.1685 14.1211C20.8085 13.9111 20.3485 14.0311 20.1485 14.3911L19.5185 15.4711L15.3985 13.1011C15.0385 12.8911 14.5785 13.0211 14.3785 13.3711C14.1685 13.7311 14.2985 14.1911 14.6485 14.3911L18.7585 16.7711L18.1385 17.8511C17.9285 18.2111 18.0585 18.6711 18.4085 18.8711C18.5285 18.9411 18.6585 18.9711 18.7785 18.9711C19.0385 18.9711 19.2885 18.8411 19.4285 18.5911L21.4285 15.1311C21.6485 14.7811 21.5285 14.3311 21.1685 14.1211Z"
        fill="currentColor"
      />
      <Path
        d="M18.7707 7.22068L14.6507 9.60068C14.2907 9.81068 14.1707 10.2707 14.3807 10.6207C14.5207 10.8607 14.7707 11.0007 15.0307 11.0007C15.1607 11.0007 15.2907 10.9707 15.4007 10.9007L19.5107 8.52068L20.1407 9.60068C20.2807 9.84068 20.5307 9.98068 20.7907 9.98068C20.9207 9.98068 21.0507 9.95068 21.1607 9.88068C21.5207 9.67068 21.6407 9.21068 21.4307 8.86068L19.4307 5.40068C19.2207 5.04068 18.7607 4.92068 18.4107 5.13068C18.0507 5.34068 17.9307 5.80068 18.1407 6.15068L18.7707 7.22068Z"
        fill="currentColor"
      />
      <Path
        d="M5.23036 16.7811L9.34036 14.4011C9.70037 14.1911 9.82036 13.7311 9.61036 13.3811C9.40036 13.0211 8.94036 12.9011 8.59036 13.1111L4.48036 15.4911L3.85036 14.4111C3.64036 14.0511 3.18036 13.9311 2.83036 14.1411C2.47036 14.3511 2.35036 14.8111 2.56036 15.1611L4.56036 18.6211C4.70036 18.8611 4.95036 19.0011 5.21036 19.0011C5.34036 19.0011 5.47036 18.9711 5.58036 18.9011C5.94036 18.6911 6.06036 18.2311 5.85036 17.8811L5.23036 16.7811Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SunBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 4V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 3H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.97094 10.25L4.21094 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.7893 16.5L15.0293 13.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.21094 9.22952L5.21094 5.76953"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7891 18.2295L20.7891 14.7695"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.7893 7.5L17.0493 9.08L15.0293 10.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.97094 13.75L4.21094 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.7891 9.22952L18.7891 5.76953"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.21094 18.2295L3.21094 14.7695"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SunBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 3.75H11.25V8.5C11.25 8.91 11.59 9.25 12 9.25C12.41 9.25 12.75 8.91 12.75 8.5V3.75H14C14.41 3.75 14.75 3.41 14.75 3C14.75 2.59 14.41 2.25 14 2.25H10C9.59 2.25 9.25 2.59 9.25 3C9.25 3.41 9.59 3.75 10 3.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14 20.25H12.75V15.5C12.75 15.09 12.41 14.75 12 14.75C11.59 14.75 11.25 15.09 11.25 15.5V20.25H10C9.59 20.25 9.25 20.59 9.25 21C9.25 21.41 9.59 21.75 10 21.75H14C14.41 21.75 14.75 21.41 14.75 21C14.75 20.59 14.41 20.25 14 20.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2.8294 9.87994C2.9494 9.94994 3.0794 9.97994 3.1994 9.97994C3.4594 9.97994 3.7094 9.84993 3.8494 9.59993L4.4794 8.51994L8.5994 10.8999C8.7094 10.9699 8.8394 10.9999 8.9694 10.9999C9.2294 10.9999 9.4794 10.8699 9.6194 10.6199C9.8294 10.2599 9.6994 9.79993 9.3494 9.59993L5.2394 7.21994L5.8594 6.13994C6.0694 5.77994 5.9394 5.31993 5.5894 5.11993C5.2294 4.90993 4.7694 5.02994 4.5694 5.38994L2.5694 8.84993C2.3494 9.21993 2.4694 9.66994 2.8294 9.87994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.1704 14.1199C20.8104 13.9099 20.3504 14.0299 20.1504 14.3899L19.5204 15.4699L15.4004 13.0999C15.0404 12.8899 14.5804 13.0199 14.3804 13.3699C14.1704 13.7299 14.3004 14.1899 14.6504 14.3899L18.7604 16.7699L18.1404 17.8499C17.9304 18.2099 18.0604 18.6699 18.4104 18.8699C18.5304 18.9399 18.6604 18.9699 18.7804 18.9699C19.0404 18.9699 19.2904 18.8399 19.4304 18.5899L21.4304 15.1299C21.6504 14.7799 21.5304 14.3299 21.1704 14.1199Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.7704 7.21994L14.6604 9.59994C14.3004 9.80994 14.1804 10.2699 14.3904 10.6199C14.5304 10.8599 14.7804 10.9999 15.0404 10.9999C15.1704 10.9999 15.3004 10.9699 15.4104 10.8999L19.5204 8.51994L20.1504 9.59994C20.2904 9.83994 20.5404 9.97994 20.8004 9.97994C20.9304 9.97994 21.0604 9.94994 21.1704 9.87994C21.5304 9.66994 21.6504 9.20994 21.4404 8.85994L19.4404 5.39994C19.2304 5.03994 18.7704 4.91994 18.4204 5.12994C18.0604 5.33994 17.9404 5.79994 18.1504 6.14995L18.7704 7.21994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.23036 16.7799L9.34036 14.3999C9.70037 14.1899 9.82036 13.7299 9.61036 13.3799C9.40036 13.0199 8.94036 12.8999 8.59036 13.1099L4.48036 15.4899L3.85036 14.4099C3.64036 14.0499 3.18036 13.9299 2.83036 14.1399C2.47036 14.3499 2.35036 14.8099 2.56036 15.1599L4.56036 18.6199C4.70036 18.8599 4.95036 18.9999 5.21036 18.9999C5.34036 18.9999 5.47036 18.9699 5.58036 18.8999C5.94036 18.6899 6.06036 18.2299 5.85036 17.8799L5.23036 16.7799Z"
        fill="currentColor"
      />
      <Path
        d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SunLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8.5V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 3H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.96996 10.25L4.20996 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.79 16.5L15.03 13.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.20996 9.23001L5.20996 5.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.79 18.23L20.79 14.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.79 7.5L15.03 10.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.96996 13.75L4.20996 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.79 9.23001L18.79 5.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.20996 18.23L3.20996 14.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SunOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9.25C11.59 9.25 11.25 8.91 11.25 8.5V3C11.25 2.59 11.59 2.25 12 2.25C12.41 2.25 12.75 2.59 12.75 3V8.5C12.75 8.91 12.41 9.25 12 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.75C11.59 21.75 11.25 21.41 11.25 21V15.5C11.25 15.09 11.59 14.75 12 14.75C12.41 14.75 12.75 15.09 12.75 15.5V21C12.75 21.41 12.41 21.75 12 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 3.75H10C9.59 3.75 9.25 3.41 9.25 3C9.25 2.59 9.59 2.25 10 2.25H14C14.41 2.25 14.75 2.59 14.75 3C14.75 3.41 14.41 3.75 14 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M14 21.75H10C9.59 21.75 9.25 21.41 9.25 21C9.25 20.59 9.59 20.25 10 20.25H14C14.41 20.25 14.75 20.59 14.75 21C14.75 21.41 14.41 21.75 14 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.97013 10.9999C8.84013 10.9999 8.71013 10.9699 8.60013 10.8999L3.84013 8.14992C3.48013 7.93992 3.36013 7.47993 3.57013 7.12993C3.78013 6.76993 4.24013 6.64992 4.59013 6.85992L9.35013 9.60992C9.71013 9.81992 9.83013 10.2799 9.62013 10.6299C9.48013 10.8699 9.23013 10.9999 8.97013 10.9999Z"
        fill="currentColor"
      />
      <Path
        d="M19.7904 17.2499C19.6604 17.2499 19.5304 17.2199 19.4204 17.1499L14.6604 14.3999C14.3004 14.1899 14.1804 13.7299 14.3904 13.3799C14.6004 13.0199 15.0604 12.8999 15.4104 13.1099L20.1704 15.8599C20.5304 16.0699 20.6504 16.5299 20.4404 16.8799C20.3004 17.1199 20.0504 17.2499 19.7904 17.2499Z"
        fill="currentColor"
      />
      <Path
        d="M3.21013 9.97994C3.08013 9.97994 2.95013 9.94995 2.84013 9.87995C2.48013 9.66995 2.36013 9.20994 2.57013 8.85994L4.57013 5.39994C4.78013 5.03994 5.24013 4.91995 5.59013 5.12995C5.95013 5.33995 6.07013 5.79994 5.86013 6.14994L3.86013 9.60994C3.72013 9.84994 3.46013 9.97994 3.21013 9.97994Z"
        fill="currentColor"
      />
      <Path
        d="M18.7902 18.9799C18.6602 18.9799 18.5302 18.9499 18.4202 18.8799C18.0602 18.6699 17.9402 18.2099 18.1502 17.8599L20.1502 14.3999C20.3602 14.0399 20.8202 13.9199 21.1702 14.1299C21.5302 14.3399 21.6502 14.7999 21.4402 15.1499L19.4402 18.6099C19.3102 18.8499 19.0502 18.9799 18.7902 18.9799Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.25C10.49 16.25 9.08 15.44 8.32 14.13C7.94 13.47 7.75 12.76 7.75 12C7.75 11.24 7.94 10.53 8.32 9.88002C9.08 8.57002 10.49 7.76001 12 7.76001C13.51 7.76001 14.92 8.57002 15.68 9.88002C16.06 10.54 16.25 11.25 16.25 12.01C16.25 12.77 16.06 13.48 15.68 14.13C14.92 15.44 13.51 16.25 12 16.25ZM12 9.25002C11.02 9.25002 10.11 9.78002 9.62 10.63C9.38 11.05 9.25 11.52 9.25 12C9.25 12.48 9.37 12.95 9.62 13.38C10.11 14.23 11.02 14.76 12 14.76C12.98 14.76 13.89 14.23 14.38 13.38C14.62 12.96 14.75 12.49 14.75 12.01C14.75 11.53 14.63 11.06 14.38 10.63C13.89 9.78002 12.98 9.25002 12 9.25002Z"
        fill="currentColor"
      />
      <Path
        d="M15.0304 11.0002C14.7704 11.0002 14.5204 10.8702 14.3804 10.6202C14.1704 10.2602 14.3004 9.80017 14.6504 9.60017L19.4104 6.85017C19.7704 6.64017 20.2304 6.77015 20.4304 7.12015C20.6404 7.48015 20.5104 7.94016 20.1604 8.14016L15.4004 10.8902C15.2904 10.9702 15.1604 11.0002 15.0304 11.0002Z"
        fill="currentColor"
      />
      <Path
        d="M4.21012 17.2502C3.95012 17.2502 3.70012 17.1202 3.56012 16.8702C3.35012 16.5102 3.48012 16.0502 3.83012 15.8502L8.59012 13.1002C8.95012 12.8902 9.41012 13.0202 9.61012 13.3702C9.82012 13.7302 9.69012 14.1902 9.34012 14.3902L4.58012 17.1402C4.47012 17.2202 4.34012 17.2502 4.21012 17.2502Z"
        fill="currentColor"
      />
      <Path
        d="M20.7902 9.97994C20.5302 9.97994 20.2802 9.84995 20.1402 9.59995L18.1402 6.13994C17.9302 5.77994 18.0602 5.31994 18.4102 5.11994C18.7702 4.90994 19.2302 5.03994 19.4302 5.38994L21.4302 8.84995C21.6402 9.20995 21.5102 9.66994 21.1602 9.86994C21.0502 9.94994 20.9202 9.97994 20.7902 9.97994Z"
        fill="currentColor"
      />
      <Path
        d="M5.21012 18.9799C4.95012 18.9799 4.70012 18.8499 4.56012 18.5999L2.56012 15.1399C2.35012 14.7799 2.48012 14.3199 2.83012 14.1199C3.19012 13.9099 3.65012 14.0399 3.85012 14.3899L5.85012 17.8499C6.06012 18.2099 5.93012 18.6699 5.58012 18.8699C5.46012 18.9499 5.33012 18.9799 5.21012 18.9799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SunTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 8.5V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 21V15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 3H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 21H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.97094 10.25L4.21094 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.7913 16.5L15.0312 13.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.21094 9.23001L5.21094 5.77002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.791 18.23L20.791 14.77"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.7913 7.5L15.0312 10.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.97094 13.75L4.21094 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.791 9.23001L18.791 5.77002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.21094 18.23L3.21094 14.77"
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
  bold: SunBold,
  broken: SunBroken,
  bulk: SunBulk,
  linear: SunLinear,
  outline: SunOutline,
  twotone: SunTwotone,
};

export const SunIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
