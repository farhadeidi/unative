import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const SmartCarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7089 9.49049C18.6089 9.49049 18.5089 9.47049 18.4089 9.43049C18.0289 9.26049 17.8589 8.82049 18.0189 8.44049C18.2089 8.01049 18.0989 7.38049 17.7489 6.86049C17.3989 6.33049 16.8689 5.97049 16.3889 6.00049C15.9489 6.00049 15.6389 5.67049 15.6289 5.26049C15.6289 4.84049 15.9589 4.51049 16.3689 4.50049C17.3989 4.48049 18.3689 5.07049 18.9989 6.02049C19.6389 6.98049 19.7889 8.13049 19.3989 9.03049C19.2789 9.32049 18.9989 9.49049 18.7089 9.49049Z"
        fill="currentColor"
      />
      <Path
        d="M21.8201 10.4794C21.7501 10.4794 21.6901 10.4694 21.6201 10.4494C21.2201 10.3394 20.9901 9.92937 21.1001 9.52937C21.4801 8.16937 21.1601 6.54937 20.2501 5.18937C19.3401 3.82937 17.9601 2.91937 16.5501 2.74937C16.1401 2.69937 15.8501 2.32937 15.9001 1.91937C15.9501 1.50937 16.3301 1.20937 16.7301 1.26937C18.5601 1.48937 20.3401 2.64937 21.4901 4.36937C22.6401 6.08937 23.0301 8.16937 22.5401 9.94937C22.4501 10.2594 22.1501 10.4794 21.8201 10.4794Z"
        fill="currentColor"
      />
      <Path
        d="M17.1189 11.7809C17.1189 12.0809 16.8689 12.3309 16.5689 12.3309H3.42891C3.12891 12.3309 2.87891 12.0809 2.87891 11.7809C2.87891 11.4809 3.12891 11.2309 3.42891 11.2309H4.16891L4.44891 9.91094C4.70891 8.63094 5.25891 7.46094 7.43891 7.46094H12.5689C14.7489 7.46094 15.2889 8.64094 15.5589 9.91094L15.8389 11.2309H16.5789C16.8689 11.2309 17.1189 11.4809 17.1189 11.7809Z"
        fill="currentColor"
      />
      <Path
        d="M17.4305 15.9119C17.3205 14.7119 17.0005 13.4219 14.6605 13.4219H5.34053C3.00054 13.4219 2.68053 14.7119 2.57053 15.9119L2.16053 20.3619C2.11053 20.9119 2.29053 21.4719 2.67053 21.8919C3.06053 22.3119 3.60053 22.5519 4.19053 22.5519H5.56053C6.74053 22.5519 6.97053 21.8719 7.12053 21.4319L7.27053 20.9919C7.44054 20.4919 7.48054 20.3619 8.14054 20.3619H11.8805C12.5405 20.3619 12.5605 20.4319 12.7505 20.9919L12.9005 21.4319C13.0505 21.8819 13.2705 22.5519 14.4605 22.5519H15.8305C16.4105 22.5519 16.9605 22.3119 17.3505 21.8919C17.7305 21.4719 17.9105 20.9219 17.8605 20.3619L17.4305 15.9119ZM7.81053 17.4319H5.62053C5.32053 17.4319 5.07053 17.1819 5.07053 16.8819C5.07053 16.5819 5.32053 16.3319 5.62053 16.3319H7.81053C8.11054 16.3319 8.36053 16.5819 8.36053 16.8819C8.36053 17.1819 8.11054 17.4319 7.81053 17.4319ZM14.3805 17.4319H12.1905C11.8905 17.4319 11.6405 17.1819 11.6405 16.8819C11.6405 16.5819 11.8905 16.3319 12.1905 16.3319H14.3805C14.6805 16.3319 14.9305 16.5819 14.9305 16.8819C14.9305 17.1819 14.6805 17.4319 14.3805 17.4319Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartCarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.38977 7.62H6.86977C5.00977 7.62 4.58977 8.55001 4.35977 9.70001L3.50977 13.75H15.5098L14.6598 9.70001C14.4198 8.56001 14.0098 7.62 12.1498 7.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8899 19.19L16.9999 20.36C17.0799 21.24 16.3799 22 15.4799 22H14.0699C13.2599 22 13.1499 21.65 12.9999 21.23L12.8499 20.78C12.6399 20.17 12.4999 19.75 11.4199 19.75H7.5799C6.49989 19.75 6.33989 20.22 6.14989 20.78L5.99989 21.23C5.85989 21.66 5.74989 22 4.92989 22H3.5199C2.6199 22 1.90989 21.24 1.99989 20.36L2.41989 15.79C2.52989 14.66 2.7399 13.74 4.7099 13.74H14.2799C16.2499 13.74 16.4599 14.66 16.5699 15.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 11.5H2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 11.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16.75H7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.75 16.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7092 8.73992C18.9892 8.08992 18.8891 7.20993 18.3691 6.43993C17.8591 5.66993 17.0791 5.23993 16.3691 5.24993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3806 2.53998C17.8106 2.25998 17.2206 2.07 16.6406 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8192 9.72998C22.2392 8.21998 21.9391 6.37002 20.8691 4.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmartCarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7092 9.49C18.6092 9.49 18.5091 9.47 18.4091 9.43C18.0291 9.26 17.8591 8.82001 18.0191 8.44001C18.2091 8.01001 18.0991 7.37999 17.7491 6.85999C17.3991 6.32999 16.8692 5.98 16.3792 6C15.9392 6 15.6291 5.67001 15.6191 5.26001C15.6191 4.84001 15.9491 4.51 16.3591 4.5C17.3891 4.48 18.3592 5.07002 18.9892 6.02002C19.6292 6.98002 19.7791 8.13003 19.3891 9.03003C19.2791 9.32003 18.9992 9.49 18.7092 9.49Z"
        fill="currentColor"
      />
      <Path
        d="M21.8201 10.4801C21.7501 10.4801 21.6901 10.4701 21.6201 10.4501C21.2201 10.3401 20.9901 9.93011 21.1001 9.53011C21.4801 8.17011 21.1601 6.55009 20.2501 5.19009C19.3401 3.83009 17.9601 2.92008 16.5501 2.75008C16.1401 2.70008 15.8501 2.33007 15.9001 1.92007C15.9501 1.51007 16.3301 1.2101 16.7301 1.2701C18.5601 1.4901 20.3401 2.65008 21.4901 4.37008C22.6401 6.09008 23.0301 8.1701 22.5401 9.9501C22.4501 10.2601 22.1501 10.4801 21.8201 10.4801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.5203 15.8401C17.4103 14.6201 17.0803 13.3101 14.7003 13.3101H5.23028C2.85028 13.3101 2.53029 14.6201 2.41029 15.8401L1.99029 20.36C1.94029 20.92 2.13028 21.49 2.51028 21.91C2.90028 22.34 3.46029 22.5901 4.05029 22.5901H5.44029C6.64029 22.5901 6.87029 21.9001 7.02029 21.4501L7.17028 21.0101C7.34028 20.5001 7.38029 20.3701 8.05029 20.3701H11.8503C12.5103 20.3701 12.5403 20.4401 12.7303 21.0101L12.8803 21.4601C13.0303 21.9101 13.2603 22.6 14.4603 22.6H15.8503C16.4403 22.6 17.0003 22.35 17.3903 21.92C17.7703 21.5 17.9603 20.9301 17.9103 20.3701L17.5203 15.8401Z"
        fill="currentColor"
      />
      <Path
        d="M16.6502 11.09H15.9102C15.9002 11.09 15.9002 11.09 15.8902 11.09L15.6102 9.73999C15.3402 8.43999 14.7902 7.25 12.5802 7.25H10.5302H9.42023H7.37022C5.16022 7.25 4.60023 8.43999 4.34023 9.73999L4.06023 11.09C4.05023 11.09 4.05022 11.09 4.04022 11.09H3.30023C2.99023 11.09 2.74023 11.34 2.74023 11.65C2.74023 11.96 2.99023 12.21 3.30023 12.21H3.83023L3.52023 13.69C3.92023 13.46 4.48023 13.32 5.25023 13.32H14.7202C15.4902 13.32 16.0502 13.46 16.4502 13.69L16.1402 12.21H16.6702C16.9802 12.21 17.2302 11.96 17.2302 11.65C17.2102 11.34 16.9602 11.09 16.6502 11.09Z"
        fill="currentColor"
      />
      <Path
        d="M7.75093 17.39H5.52094C5.21094 17.39 4.96094 17.14 4.96094 16.83C4.96094 16.52 5.21094 16.27 5.52094 16.27H7.75093C8.06093 16.27 8.31093 16.52 8.31093 16.83C8.30093 17.14 8.06093 17.39 7.75093 17.39Z"
        fill="currentColor"
      />
      <Path
        d="M14.4306 17.39H12.2006C11.8906 17.39 11.6406 17.14 11.6406 16.83C11.6406 16.52 11.8906 16.27 12.2006 16.27H14.4306C14.7406 16.27 14.9906 16.52 14.9906 16.83C14.9806 17.14 14.7306 17.39 14.4306 17.39Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartCarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.14 7.62H6.87001C5.01001 7.62 4.59002 8.55001 4.36002 9.70001L3.51001 13.75H15.51L14.66 9.70001C14.41 8.55001 14 7.62 12.14 7.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.99 20.36C17.07 21.24 16.37 22 15.47 22H14.06C13.25 22 13.14 21.65 12.99 21.23L12.84 20.78C12.63 20.17 12.49 19.75 11.41 19.75H7.57001C6.49001 19.75 6.33 20.22 6.14 20.78L5.99001 21.23C5.85001 21.66 5.74 22 4.92 22H3.50999C2.60999 22 1.90001 21.24 1.99001 20.36L2.41 15.79C2.52 14.66 2.73 13.74 4.7 13.74H14.27C16.24 13.74 16.45 14.66 16.56 15.79L16.99 20.36Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 11.5H2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 11.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 16.75H7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.75 16.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.71 8.73992C18.99 8.08992 18.89 7.20993 18.37 6.43993C17.86 5.66993 17.08 5.23993 16.37 5.24993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.82 9.72998C22.24 8.21998 21.94 6.37002 20.87 4.77002C19.8 3.17002 18.2 2.19 16.64 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmartCarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.4994 14.5001H3.49936C3.26936 14.5001 3.05936 14.4001 2.91936 14.2201C2.77936 14.0501 2.71937 13.8101 2.76937 13.5901L3.61936 9.5401C3.89936 8.2201 4.49936 6.87012 6.86936 6.87012H12.1394C14.5094 6.87012 15.1094 8.2201 15.3894 9.5401L16.2394 13.5901C16.2894 13.8101 16.2294 14.0401 16.0894 14.2201C15.9394 14.4001 15.7294 14.5001 15.4994 14.5001ZM4.41936 13.0001H14.5694L13.9094 9.8501C13.6994 8.8401 13.4494 8.37012 12.1294 8.37012H6.85937C5.53937 8.37012 5.28937 8.8401 5.07937 9.8501L4.41936 13.0001Z"
        fill="currentColor"
      />
      <Path
        d="M15.4698 22.75H14.0598C12.7098 22.75 12.4298 21.92 12.2898 21.47L12.1398 21.02C11.9598 20.51 11.9598 20.51 11.4298 20.51H7.58984C7.04984 20.51 7.03985 20.53 6.87985 21.02L6.72984 21.47C6.57984 21.92 6.29984 22.76 4.94984 22.76H3.53984C2.88984 22.76 2.27984 22.49 1.83984 22.01C1.41984 21.55 1.20985 20.92 1.26985 20.3L1.68985 15.73C1.81985 14.31 2.27985 13 4.71985 13H14.2898C16.7298 13 17.1899 14.31 17.3199 15.73L17.7399 20.3C17.7999 20.92 17.5898 21.54 17.1698 22.01C16.7298 22.48 16.1198 22.75 15.4698 22.75ZM13.7998 21.23C13.8198 21.23 13.8998 21.25 14.0598 21.25H15.4698C15.6998 21.25 15.9098 21.16 16.0598 20.99C16.1998 20.83 16.2698 20.64 16.2498 20.43L15.8298 15.86C15.7398 14.92 15.6998 14.49 14.2898 14.49H4.71985C3.30985 14.49 3.26984 14.92 3.17984 15.86L2.75984 20.43C2.73984 20.64 2.80984 20.84 2.94984 20.99C3.09984 21.16 3.30984 21.25 3.53984 21.25H4.94984C5.16984 21.25 5.22985 21.22 5.23985 21.22C5.23985 21.21 5.27984 21.09 5.30984 21L5.45985 20.55C5.65985 19.94 5.96985 19.01 7.59985 19.01H11.4398C13.0498 19.01 13.3499 19.89 13.5699 20.54L13.7298 21C13.7398 21.08 13.7698 21.19 13.7998 21.23Z"
        fill="currentColor"
      />
      <Path
        d="M3.5 12.25H2.75C2.34 12.25 2 11.91 2 11.5C2 11.09 2.34 10.75 2.75 10.75H3.5C3.91 10.75 4.25 11.09 4.25 11.5C4.25 11.91 3.91 12.25 3.5 12.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.25 12.25H15.5C15.09 12.25 14.75 11.91 14.75 11.5C14.75 11.09 15.09 10.75 15.5 10.75H16.25C16.66 10.75 17 11.09 17 11.5C17 11.91 16.66 12.25 16.25 12.25Z"
        fill="currentColor"
      />
      <Path
        d="M7.25 17.5H5C4.59 17.5 4.25 17.16 4.25 16.75C4.25 16.34 4.59 16 5 16H7.25C7.66 16 8 16.34 8 16.75C8 17.16 7.66 17.5 7.25 17.5Z"
        fill="currentColor"
      />
      <Path
        d="M14 17.5H11.75C11.34 17.5 11 17.16 11 16.75C11 16.34 11.34 16 11.75 16H14C14.41 16 14.75 16.34 14.75 16.75C14.75 17.16 14.41 17.5 14 17.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.7111 9.49C18.6111 9.49 18.5111 9.47 18.4111 9.43C18.0311 9.26 17.8611 8.82001 18.0211 8.44001C18.2111 8.01001 18.1011 7.37999 17.7511 6.85999C17.4011 6.32999 16.8711 5.98 16.3811 6H16.3711C15.9611 6 15.6311 5.67001 15.6211 5.26001C15.6211 4.84001 15.9511 4.51 16.3611 4.5C17.3911 4.48 18.3611 5.07002 18.9911 6.02002C19.6311 6.98002 19.7811 8.13003 19.3911 9.03003C19.2811 9.32003 19.0011 9.49 18.7111 9.49Z"
        fill="currentColor"
      />
      <Path
        d="M21.8201 10.4801C21.7501 10.4801 21.6901 10.4701 21.6201 10.4501C21.2201 10.3401 20.9901 9.93011 21.1001 9.53011C21.4801 8.17011 21.1601 6.55009 20.2501 5.19009C19.3401 3.83009 17.9601 2.92008 16.5501 2.75008C16.1401 2.70008 15.8501 2.33007 15.9001 1.92007C15.9501 1.51007 16.3301 1.2101 16.7301 1.2701C18.5601 1.4901 20.3401 2.65008 21.4901 4.37008C22.6401 6.09008 23.0301 8.1701 22.5401 9.9501C22.4501 10.2601 22.1501 10.4801 21.8201 10.4801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartCarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1398 7.62012H6.86977C5.00977 7.62012 4.58977 8.55013 4.35977 9.70013L3.50977 13.7501H15.5098L14.6598 9.70013C14.4098 8.55013 13.9998 7.62012 12.1398 7.62012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9901 20.3602C17.0701 21.2402 16.3701 22.0002 15.4701 22.0002H14.0601C13.2501 22.0002 13.1401 21.6502 12.9901 21.2302L12.8401 20.7803C12.6301 20.1703 12.4901 19.7502 11.4101 19.7502H7.57013C6.49013 19.7502 6.33012 20.2203 6.14012 20.7803L5.99013 21.2302C5.85013 21.6602 5.74012 22.0002 4.92012 22.0002H3.51012C2.61012 22.0002 1.90013 21.2402 1.99013 20.3602L2.41013 15.7902C2.52013 14.6602 2.73012 13.7402 4.70012 13.7402H14.2701C16.2401 13.7402 16.4501 14.6602 16.5601 15.7902L16.9901 20.3602Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 11.5H2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.25 11.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 16.75H7.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.75 16.75H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.7092 8.74016C18.9892 8.09016 18.8891 7.21017 18.3691 6.44017C17.8591 5.67017 17.0791 5.24017 16.3691 5.25017"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.8206 9.72998C22.2406 8.21998 21.9406 6.37002 20.8706 4.77002C19.8006 3.17002 18.2006 2.19 16.6406 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SmartCarBold,
  broken: SmartCarBroken,
  bulk: SmartCarBulk,
  linear: SmartCarLinear,
  outline: SmartCarOutline,
  twotone: SmartCarTwotone,
};

export const SmartCarIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
