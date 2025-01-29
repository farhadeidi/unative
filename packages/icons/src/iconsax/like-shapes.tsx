import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LikeShapesBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.6809 11.9986L15.5109 15.5586C15.3609 16.1486 14.7309 16.6286 14.0909 16.6286H12.2409C11.9209 16.6286 11.4709 16.5186 11.2709 16.3186L9.80086 15.1686C9.77086 15.8086 9.48086 16.0786 8.77086 16.0786H8.29086C7.55086 16.0786 7.25086 15.7886 7.25086 15.0886V10.3086C7.25086 9.60859 7.55086 9.31859 8.29086 9.31859H8.78086C9.52086 9.31859 9.82086 9.60859 9.82086 10.3086V10.6686L11.7609 7.78859C11.9609 7.47859 12.4709 7.25859 12.9009 7.42859C13.3709 7.58859 13.6709 8.10859 13.5709 8.56859L13.3309 10.1286C13.3109 10.2686 13.3409 10.3986 13.4309 10.4986C13.5109 10.5886 13.6309 10.6486 13.7609 10.6486H15.7109C16.0909 10.6486 16.4109 10.7986 16.6009 11.0686C16.7709 11.3286 16.8009 11.6586 16.6809 11.9986Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeShapesBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.88916 14.82L11.3391 15.94C11.5291 16.13 11.9492 16.22 12.2292 16.22H13.9991C14.5591 16.22 15.1691 15.8 15.3091 15.24L16.4291 11.82C16.6591 11.17 16.2392 10.6 15.5392 10.6H13.6692C13.3892 10.6 13.1592 10.3701 13.1992 10.0401L13.4291 8.54008C13.5191 8.12008 13.2392 7.65005 12.8192 7.51005C12.4492 7.37005 11.9792 7.56 11.7892 7.84L9.86914 10.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M7.5 14.8199V10.24C7.5 9.57999 7.78 9.34998 8.44 9.34998H8.91C9.56 9.34998 9.85001 9.57999 9.85001 10.24V14.8199C9.85001 15.4699 9.57 15.71 8.91 15.71H8.44C7.78 15.71 7.5 15.4799 7.5 14.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.6604 20.01L13.1404 21.53C12.5204 22.15 11.5004 22.15 10.8804 21.53L9.36039 20.01C9.10039 19.75 8.59041 19.54 8.23041 19.54H6.08039C5.20039 19.54 4.48041 18.8199 4.48041 17.9399V15.79C4.48041 15.43 4.27041 14.92 4.01041 14.66L2.49039 13.14C1.87039 12.52 1.87039 11.5 2.49039 10.88L4.01041 9.35999C4.27041 9.09999 4.48041 8.58998 4.48041 8.22998V6.07996C4.48041 5.19996 5.20039 4.47998 6.08039 4.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.33984 3.99002L10.8598 2.47C11.4798 1.85 12.4998 1.85 13.1198 2.47L14.6399 3.99002C14.8999 4.25002 15.4098 4.46 15.7698 4.46H17.9199C18.7999 4.46 19.5198 5.18009 19.5198 6.06009V8.21C19.5198 8.57 19.7298 9.08 19.9898 9.34L21.5099 10.86C22.1299 11.48 22.1299 12.5 21.5099 13.12L19.9898 14.64C19.7298 14.9 19.5198 15.4101 19.5198 15.7701V17.9201C19.5198 18.8001 18.7999 19.5201 17.9199 19.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeShapesBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7509 2.45007C11.4409 1.86007 12.5708 1.86007 13.2708 2.45007L14.8509 3.81005C15.1509 4.07005 15.7108 4.28009 16.1108 4.28009H17.8109C18.8709 4.28009 19.7408 5.15008 19.7408 6.21008V7.91003C19.7408 8.30003 19.9508 8.87004 20.2108 9.17004L21.5709 10.7501C22.1609 11.4401 22.1609 12.5701 21.5709 13.2701L20.2108 14.85C19.9508 15.15 19.7408 15.71 19.7408 16.11V17.8101C19.7408 18.8701 18.8709 19.74 17.8109 19.74H16.1108C15.7208 19.74 15.1509 19.9501 14.8509 20.2101L13.2708 21.5701C12.5808 22.1601 11.4509 22.1601 10.7509 21.5701L9.17087 20.2101C8.87087 19.9501 8.31086 19.74 7.91086 19.74H6.18085C5.12085 19.74 4.25086 18.8701 4.25086 17.8101V16.1C4.25086 15.71 4.04087 15.15 3.79087 14.85L2.44086 13.2601C1.86086 12.5701 1.86086 11.4501 2.44086 10.7601L3.79087 9.17004C4.04087 8.87004 4.25086 8.31004 4.25086 7.92004V6.21008C4.25086 5.15008 5.12085 4.28009 6.18085 4.28009H7.91086C8.30086 4.28009 8.87087 4.07005 9.17087 3.81005L10.7509 2.45007Z"
        fill="currentColor"
      />
      <Path
        d="M16.5804 11.07C16.3904 10.8 16.0705 10.65 15.6905 10.65H13.7404C13.6104 10.65 13.4905 10.6 13.4105 10.5C13.3305 10.4 13.2905 10.27 13.3105 10.13L13.5504 8.56998C13.6504 8.10998 13.3405 7.57997 12.8805 7.42997C12.4505 7.26997 11.9404 7.48995 11.7404 7.78995L9.80045 10.67V10.31C9.80045 9.60997 9.50047 9.31998 8.76047 9.31998H8.27045C7.53045 9.31998 7.23047 9.60997 7.23047 10.31V15.09C7.23047 15.79 7.53045 16.08 8.27045 16.08H8.76047C9.46047 16.08 9.76047 15.81 9.79047 15.17L11.2605 16.3C11.4605 16.5 11.9105 16.61 12.2305 16.61H14.0804C14.7204 16.61 15.3605 16.13 15.5005 15.54L16.6705 11.98C16.8005 11.66 16.7704 11.33 16.5804 11.07Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeShapesLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.81005C15.15 4.07005 15.71 4.28002 16.11 4.28002H17.81C18.87 4.28002 19.74 5.14996 19.74 6.20996V7.91003C19.74 8.30003 19.95 8.87004 20.21 9.17004L21.57 10.75C22.16 11.44 22.16 12.57 21.57 13.27L20.21 14.85C19.95 15.15 19.74 15.71 19.74 16.11V17.8101C19.74 18.8701 18.87 19.74 17.81 19.74H16.11C15.72 19.74 15.15 19.95 14.85 20.21L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17002 20.21C8.87002 19.95 8.31001 19.74 7.91001 19.74H6.18C5.12 19.74 4.25 18.8701 4.25 17.8101V16.1C4.25 15.71 4.04001 15.15 3.79001 14.85L2.44 13.26C1.86 12.57 1.86 11.45 2.44 10.76L3.79001 9.17004C4.04001 8.87004 4.25 8.31004 4.25 7.92004V6.20996C4.25 5.14996 5.12 4.28002 6.18 4.28002H7.91001C8.30001 4.28002 8.87002 4.07005 9.17002 3.81005L10.75 2.44995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.89001 14.82L11.34 15.94C11.53 16.13 11.95 16.22 12.23 16.22H14C14.56 16.22 15.17 15.8 15.31 15.24L16.43 11.82C16.66 11.17 16.24 10.6 15.54 10.6H13.67C13.39 10.6 13.16 10.3701 13.2 10.0401L13.43 8.54008C13.52 8.12008 13.24 7.65005 12.82 7.51005C12.45 7.37005 11.98 7.56 11.79 7.84L9.87 10.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M7.5 14.8199V10.24C7.5 9.57999 7.78 9.34998 8.44 9.34998H8.91C9.56 9.34998 9.85001 9.57999 9.85001 10.24V14.8199C9.85001 15.4699 9.57 15.71 8.91 15.71H8.44C7.78 15.71 7.5 15.4799 7.5 14.8199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeShapesOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0089 22.75C11.3789 22.75 10.7489 22.54 10.2589 22.12L8.6789 20.76C8.5189 20.62 8.11891 20.48 7.90891 20.48H6.1789C4.6989 20.48 3.49891 19.28 3.49891 17.8V16.09C3.49891 15.88 3.35891 15.49 3.21891 15.33L1.86891 13.74C1.04891 12.77 1.04891 11.24 1.86891 10.27L3.21891 8.68005C3.35891 8.52005 3.49891 8.13004 3.49891 7.92004V6.20996C3.49891 4.72996 4.6989 3.53002 6.1789 3.53002H7.90891C8.11891 3.53002 8.5189 3.38 8.6789 3.25L10.2589 1.89001C11.2389 1.05001 12.7689 1.05001 13.7489 1.89001L15.3289 3.25C15.4889 3.39 15.8889 3.53002 16.0989 3.53002H17.7989C19.2789 3.53002 20.4789 4.72996 20.4789 6.20996V7.91003C20.4789 8.12003 20.6289 8.52005 20.7689 8.68005L22.1189 10.26C22.9589 11.24 22.9589 12.77 22.1189 13.75L20.7689 15.33C20.6289 15.49 20.4889 15.89 20.4889 16.1V17.8C20.4889 19.28 19.2889 20.48 17.8089 20.48H16.1089C15.8989 20.48 15.4989 20.63 15.3389 20.76L13.7589 22.12C13.2589 22.54 12.6289 22.75 12.0089 22.75ZM6.1789 5.02001C5.5289 5.02001 4.99891 5.54995 4.99891 6.19995V7.91003C4.99891 8.48003 4.72891 9.21001 4.36891 9.64001L3.0189 11.23C2.6689 11.64 2.6689 12.35 3.0189 12.76L4.36891 14.35C4.73891 14.79 5.00892 15.52 5.00892 16.08V17.79C5.00892 18.44 5.53891 18.97 6.18891 18.97H7.91892C8.49892 18.97 9.22892 19.24 9.66892 19.62L11.2489 20.98C11.6589 21.33 12.3789 21.33 12.7889 20.98L14.3689 19.62C14.8089 19.25 15.5389 18.97 16.1189 18.97H17.8189C18.4689 18.97 18.9989 18.44 18.9989 17.79V16.09C18.9989 15.51 19.2689 14.78 19.6489 14.34L20.9989 12.76C21.3489 12.35 21.3489 11.63 20.9989 11.22L19.6489 9.64001C19.2789 9.20001 18.9989 8.47001 18.9989 7.89001V6.18994C18.9989 5.53994 18.4689 5.01 17.8189 5.01H16.1189C15.5489 5.01 14.8089 4.73998 14.3689 4.35998L12.7889 3C12.3789 2.65 11.6589 2.65 11.2489 3L9.66892 4.35998C9.22892 4.72998 8.49892 5.01 7.91892 5.01H6.1789V5.02001Z"
        fill="currentColor"
      />
      <Path
        d="M13.9998 16.9698H12.2198C11.7998 16.9698 11.1697 16.8398 10.7997 16.4698L9.41977 15.4099L10.3398 14.2198L11.7898 15.3398C11.8898 15.4098 12.0698 15.4598 12.2198 15.4598H13.9998C14.2398 15.4598 14.5297 15.2499 14.5797 15.0399L15.7198 11.5698C15.7498 11.4798 15.7497 11.4199 15.7397 11.3999C15.7197 11.3699 15.6497 11.3398 15.5497 11.3398H13.6797C13.3197 11.3398 12.9898 11.1899 12.7498 10.9199C12.5198 10.6499 12.4097 10.2899 12.4597 9.9199L12.6998 8.40989C12.7198 8.32989 12.6598 8.22982 12.5998 8.20982C12.5398 8.19982 12.4498 8.21986 12.4198 8.24986L10.5098 11.0898L9.25977 10.2499L11.1797 7.39988C11.5797 6.79988 12.4198 6.5399 13.0998 6.7899C13.8598 7.0399 14.3497 7.89991 14.1797 8.67991L13.9998 9.8198H15.5497C16.1397 9.8198 16.6598 10.0699 16.9698 10.5099C17.2698 10.9399 17.3397 11.4999 17.1497 12.0299L16.0298 15.4299C15.8198 16.2899 14.9298 16.9698 13.9998 16.9698Z"
        fill="currentColor"
      />
      <Path
        d="M8.90024 16.4601H8.43024C6.96024 16.4601 6.74023 15.4301 6.74023 14.8201V10.2401C6.74023 9.63011 6.96024 8.6001 8.43024 8.6001H8.90024C10.3702 8.6001 10.5902 9.63011 10.5902 10.2401V14.8201C10.5902 15.4301 10.3702 16.4601 8.90024 16.4601ZM8.26025 14.9501C8.30025 14.9601 8.36025 14.9601 8.44025 14.9601H8.91025C8.99025 14.9601 9.05024 14.9601 9.09024 14.9501C9.09024 14.9201 9.10025 14.8801 9.10025 14.8201V10.2401C9.10025 10.1801 9.10024 10.1401 9.09024 10.1101C9.05024 10.1001 8.99025 10.1001 8.91025 10.1001H8.44025C8.36025 10.1001 8.30025 10.1001 8.26025 10.1101C8.26025 10.1401 8.25024 10.1801 8.25024 10.2401V14.8201C8.25024 14.8801 8.25025 14.9201 8.26025 14.9501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeShapesTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7509 2.44982C11.4409 1.85982 12.5708 1.85982 13.2708 2.44982L14.8509 3.80993C15.1509 4.06993 15.7108 4.2799 16.1108 4.2799H17.8109C18.8709 4.2799 19.7408 5.14983 19.7408 6.20983V7.90991C19.7408 8.29991 19.9508 8.86992 20.2108 9.16992L21.5709 10.7499C22.1609 11.4399 22.1609 12.5699 21.5709 13.2699L20.2108 14.8498C19.9508 15.1498 19.7408 15.7099 19.7408 16.1099V17.8099C19.7408 18.8699 18.8709 19.7399 17.8109 19.7399H16.1108C15.7208 19.7399 15.1509 19.9498 14.8509 20.2098L13.2708 21.5698C12.5808 22.1598 11.4509 22.1598 10.7509 21.5698L9.17087 20.2098C8.87087 19.9498 8.31086 19.7399 7.91086 19.7399H6.18085C5.12085 19.7399 4.25086 18.8699 4.25086 17.8099V16.0998C4.25086 15.7098 4.04087 15.1498 3.79087 14.8498L2.44086 13.2599C1.86086 12.5699 1.86086 11.4499 2.44086 10.7599L3.79087 9.16992C4.04087 8.86992 4.25086 8.30992 4.25086 7.91992V6.20983C4.25086 5.14983 5.12085 4.2799 6.18085 4.2799H7.91086C8.30086 4.2799 8.87087 4.06993 9.17087 3.80993L10.7509 2.44982Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9.89111 14.82L11.3411 15.94C11.5311 16.13 11.9511 16.22 12.2311 16.22H14.0011C14.5611 16.22 15.1711 15.8 15.3111 15.24L16.4311 11.82C16.6611 11.17 16.2411 10.6 15.5411 10.6H13.6711C13.3911 10.6 13.1611 10.3701 13.2011 10.0401L13.4311 8.54008C13.5211 8.12008 13.2411 7.65005 12.8211 7.51005C12.4511 7.37005 11.9811 7.56 11.7911 7.84L9.87109 10.69"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <Path
          d="M7.5 14.8201V10.2401C7.5 9.58011 7.78 9.3501 8.44 9.3501H8.91C9.56 9.3501 9.85001 9.58011 9.85001 10.2401V14.8201C9.85001 15.4701 9.57 15.7101 8.91 15.7101H8.44C7.78 15.7101 7.5 15.4801 7.5 14.8201Z"
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
  bold: LikeShapesBold,
  broken: LikeShapesBroken,
  bulk: LikeShapesBulk,
  linear: LikeShapesLinear,
  outline: LikeShapesOutline,
  twotone: LikeShapesTwotone,
};

export const LikeShapesIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LikeShapesIcon;
