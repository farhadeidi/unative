import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DrivingBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V21C11.25 20.59 11.59 20.25 12 20.25C12.41 20.25 12.75 20.59 12.75 21V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M1.99814 22.7481C1.93814 22.7481 1.87814 22.7381 1.81814 22.7281C1.41814 22.6281 1.16814 22.2181 1.26814 21.8181L2.26814 17.8181C2.36814 17.4181 2.76814 17.1681 3.17814 17.2681C3.57814 17.3681 3.82814 17.7781 3.72814 18.1781L2.72814 22.1781C2.63814 22.5181 2.33814 22.7481 1.99814 22.7481Z"
        fill="currentColor"
      />
      <Path
        d="M21.7526 22.5026C21.4126 22.5026 21.1126 22.2726 21.0226 21.9326L20.0226 17.9326C19.9226 17.5326 20.1626 17.1226 20.5726 17.0226C20.9726 16.9226 21.3826 17.1626 21.4826 17.5726L22.4826 21.5726C22.5826 21.9726 22.3426 22.3826 21.9326 22.4826C21.8726 22.4926 21.8126 22.5026 21.7526 22.5026Z"
        fill="currentColor"
      />
      <Path
        d="M19.1383 5.3C19.1383 5.6 18.8883 5.84 18.5983 5.84H5.52828C5.22828 5.84 4.98828 5.59 4.98828 5.3C4.98828 5 5.23828 4.76 5.52828 4.76H6.26828L6.54828 3.45C6.80828 2.17 7.34828 1 9.50828 1H14.5983C16.7583 1 17.3083 2.17 17.5683 3.44L17.8483 4.75H18.5883C18.8883 4.75 19.1383 5 19.1383 5.3Z"
        fill="currentColor"
      />
      <Path
        d="M19.4482 9.39969C19.3382 8.19969 19.0182 6.92969 16.6882 6.92969H7.42819C5.09819 6.92969 4.78819 8.20969 4.66819 9.39969L4.25819 13.8197C4.20819 14.3697 4.38819 14.9197 4.76819 15.3397C5.15819 15.7597 5.69819 15.9997 6.27819 15.9997H7.63819C8.81819 15.9997 9.03819 15.3297 9.18819 14.8797L9.33819 14.4397C9.50819 13.9397 9.54819 13.8197 10.1982 13.8197H13.9182C14.5682 13.8197 14.5882 13.8897 14.7782 14.4397L14.9282 14.8797C15.0682 15.3297 15.2982 15.9997 16.4682 15.9997H17.8282C18.3982 15.9997 18.9482 15.7597 19.3382 15.3397C19.7182 14.9297 19.8982 14.3697 19.8482 13.8197L19.4482 9.39969ZM9.87819 10.9197H7.70819C7.40819 10.9197 7.16819 10.6697 7.16819 10.3797C7.16819 10.0897 7.41819 9.83969 7.70819 9.83969H9.88819C10.1882 9.83969 10.4282 10.0897 10.4282 10.3797C10.4282 10.6697 10.1782 10.9197 9.87819 10.9197ZM16.4082 10.9197H14.2282C13.9282 10.9197 13.6882 10.6697 13.6882 10.3797C13.6882 10.0897 13.9382 9.83969 14.2282 9.83969H16.4082C16.7082 9.83969 16.9482 10.0897 16.9482 10.3797C16.9482 10.6697 16.7082 10.9197 16.4082 10.9197Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DrivingBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.2812 2H9.45117C7.65117 2 7.25118 2.90001 7.02118 4.01001L6.20117 7.92999H17.8012L16.9812 4.01001C16.7512 2.91001 16.3512 2 14.5512 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.1605 13.4299L19.2405 14.3199C19.3205 15.1699 18.6405 15.9 17.7705 15.9H16.4105C15.6305 15.9 15.5205 15.57 15.3805 15.15L15.2305 14.7199C15.0305 14.1299 14.9005 13.7299 13.8505 13.7299H10.1405C9.10054 13.7299 8.94054 14.1799 8.76054 14.7199L8.61054 15.15C8.47054 15.56 8.36054 15.9 7.58054 15.9H6.22054C5.35054 15.9 4.67054 15.1699 4.75054 14.3199L5.16055 9.89996C5.26055 8.80996 5.47054 7.91992 7.37054 7.91992H16.6205C18.5205 7.91992 18.7305 8.80996 18.8305 9.89996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.2007 5.75H5.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5308 5.75H17.8008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.65039 10.8301H9.8204"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1797 10.8301H16.3497"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 18L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 18L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DrivingBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V21C11.25 20.59 11.59 20.25 12 20.25C12.41 20.25 12.75 20.59 12.75 21V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M2.00009 22.7501C1.94009 22.7501 1.8801 22.7401 1.8201 22.7301C1.4201 22.6301 1.1701 22.2201 1.2701 21.8201L2.2701 17.8201C2.3701 17.4201 2.77009 17.1701 3.18009 17.2701C3.58009 17.3701 3.83009 17.7801 3.73009 18.1801L2.73009 22.1801C2.64009 22.5201 2.34009 22.7501 2.00009 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M22.0007 22.7499C21.6607 22.7499 21.3607 22.5199 21.2707 22.1799L20.2707 18.1799C20.1707 17.7799 20.4107 17.3699 20.8207 17.2699C21.2207 17.1699 21.6307 17.4099 21.7307 17.8199L22.7307 21.8199C22.8307 22.2199 22.5907 22.6299 22.1807 22.7299C22.1207 22.7399 22.0607 22.7499 22.0007 22.7499Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.2602 9.52008C19.1502 8.34008 18.8402 7.09009 16.5502 7.09009H7.45024C5.16024 7.09009 4.85024 8.35008 4.74024 9.52008L4.34024 13.86C4.29024 14.4 4.47024 14.94 4.84024 15.35C5.22024 15.76 5.76025 16.0001 6.32025 16.0001H7.66024C8.81024 16.0001 9.03023 15.3401 9.18023 14.9001L9.32025 14.47C9.48025 13.98 9.52024 13.86 10.1702 13.86H13.8202C14.4602 13.86 14.4802 13.93 14.6702 14.47L14.8102 14.9001C14.9602 15.3401 15.1802 16.0001 16.3302 16.0001H17.6702C18.2302 16.0001 18.7702 15.76 19.1502 15.35C19.5202 14.95 19.7002 14.4 19.6502 13.86L19.2602 9.52008Z"
        fill="currentColor"
      />
      <Path
        d="M18.4208 4.94H17.7108C17.7008 4.94 17.7008 4.94 17.7008 4.94L17.4308 3.65002C17.1708 2.40002 16.6408 1.25 14.5108 1.25H12.5408H11.4708H9.50078C7.37078 1.25 6.84078 2.40002 6.58078 3.65002L6.31078 4.94C6.30078 4.94 6.30078 4.94 6.30078 4.94H5.59077C5.29077 4.94 5.05078 5.17998 5.05078 5.47998C5.05078 5.77998 5.29077 6.02002 5.59077 6.02002H6.10078L5.80078 7.45001C6.19078 7.23001 6.72078 7.09003 7.46078 7.09003H16.5608C17.3008 7.09003 17.8408 7.23001 18.2208 7.45001L17.9208 6.02002H18.4308C18.7308 6.02002 18.9708 5.77998 18.9708 5.47998C18.9608 5.17998 18.7208 4.94 18.4208 4.94Z"
        fill="currentColor"
      />
      <Path
        d="M9.8597 11.0099H7.7197C7.4197 11.0099 7.17969 10.7699 7.17969 10.4699C7.17969 10.1699 7.4197 9.92993 7.7197 9.92993H9.8597C10.1597 9.92993 10.3997 10.1699 10.3997 10.4699C10.3897 10.7699 10.1497 11.0099 9.8597 11.0099Z"
        fill="currentColor"
      />
      <Path
        d="M16.2796 11.0099H14.1396C13.8396 11.0099 13.5996 10.7699 13.5996 10.4699C13.5996 10.1699 13.8396 9.92993 14.1396 9.92993H16.2796C16.5796 9.92993 16.8196 10.1699 16.8196 10.4699C16.8196 10.7699 16.5796 11.0099 16.2796 11.0099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DrivingLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5501 2H9.45007C7.65007 2 7.25008 2.90001 7.02008 4.01001L6.20007 7.92999H17.8001L16.9801 4.01001C16.7501 2.90001 16.3501 2 14.5501 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2401 14.3199C19.3201 15.1699 18.6401 15.9 17.7701 15.9H16.4101C15.6301 15.9 15.5201 15.57 15.3801 15.15L15.23 14.7199C15.03 14.1299 14.9001 13.7299 13.8501 13.7299H10.1401C9.10005 13.7299 8.94005 14.1799 8.76005 14.7199L8.61005 15.15C8.47005 15.56 8.36006 15.9 7.58006 15.9H6.22005C5.35005 15.9 4.67005 15.1699 4.75005 14.3199L5.16006 9.89996C5.26006 8.80996 5.47005 7.91992 7.37005 7.91992H16.62C18.52 7.91992 18.7301 8.80996 18.8301 9.89996L19.2401 14.3199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.20009 5.75H5.47009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.53 5.75H17.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.65002 10.8301H9.82004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1801 10.8301H16.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 18L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 18L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DrivingOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.8005 8.67999H6.20054C5.97054 8.67999 5.76053 8.58002 5.62053 8.40002C5.48053 8.22002 5.42054 7.99002 5.47054 7.77002L6.29053 3.84998C6.56053 2.55998 7.15054 1.25 9.45054 1.25H14.5505C16.8605 1.25 17.4505 2.56998 17.7105 3.84998L18.5305 7.77002C18.5805 7.99002 18.5205 8.22002 18.3805 8.40002C18.2405 8.58002 18.0305 8.67999 17.8005 8.67999ZM7.12053 7.17999H16.8705L16.2405 4.16998C16.0405 3.20998 15.8105 2.76001 14.5405 2.76001H9.44054C8.18054 2.76001 7.94055 3.20998 7.74055 4.16998L7.12053 7.17999Z"
        fill="currentColor"
      />
      <Path
        d="M17.7703 16.65H16.4103C15.0903 16.65 14.8203 15.83 14.6703 15.39L14.5203 14.95C14.3603 14.47 14.3603 14.4699 13.8503 14.4699H10.1403C9.63033 14.4699 9.63033 14.48 9.47033 14.95L9.32034 15.39C9.17034 15.83 8.90033 16.65 7.58033 16.65H6.22033C5.59033 16.65 4.98033 16.3799 4.56033 15.9199C4.15033 15.4699 3.94033 14.8599 4.00033 14.2499L4.41034 9.83997C4.54034 8.45997 4.99033 7.17993 7.37033 7.17993H16.6203C19.0003 7.17993 19.4503 8.45997 19.5803 9.83997L19.9903 14.2599C20.0503 14.8699 19.8403 15.4799 19.4303 15.9299C19.0103 16.3899 18.4003 16.65 17.7703 16.65ZM16.1803 15.14C16.2003 15.14 16.2803 15.15 16.4103 15.15H17.7703C17.9803 15.15 18.1803 15.0699 18.3203 14.9099C18.4503 14.7699 18.5103 14.58 18.5003 14.39L18.0903 9.96991C18.0103 9.07991 17.9703 8.66992 16.6303 8.66992H7.38034C6.04034 8.66992 6.00033 9.07991 5.92033 9.96991L5.51033 14.39C5.49033 14.58 5.55034 14.7699 5.69034 14.9099C5.83034 15.0599 6.03034 15.15 6.24034 15.15H7.60034C7.80034 15.15 7.86033 15.1199 7.87033 15.1199C7.86033 15.1199 7.89033 14.9999 7.92033 14.9199L8.07034 14.4799C8.26034 13.9199 8.57034 12.9699 10.1603 12.9699H13.8703C15.3203 12.9699 15.6903 13.68 15.9503 14.46L16.1003 14.9099C16.1203 14.9999 16.1503 15.1 16.1803 15.14C16.1703 15.14 16.1803 15.14 16.1803 15.14Z"
        fill="currentColor"
      />
      <Path
        d="M6.2007 6.5H5.4707C5.0607 6.5 4.7207 6.16 4.7207 5.75C4.7207 5.34 5.0607 5 5.4707 5H6.2007C6.6107 5 6.9507 5.34 6.9507 5.75C6.9507 6.16 6.6107 6.5 6.2007 6.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.5308 6.5H17.8008C17.3908 6.5 17.0508 6.16 17.0508 5.75C17.0508 5.34 17.3908 5 17.8008 5H18.5308C18.9408 5 19.2808 5.34 19.2808 5.75C19.2808 6.16 18.9408 6.5 18.5308 6.5Z"
        fill="currentColor"
      />
      <Path
        d="M9.82063 11.5801H7.64062C7.23063 11.5801 6.89062 11.2401 6.89062 10.8301C6.89062 10.4201 7.23063 10.0801 7.64062 10.0801H9.82063C10.2306 10.0801 10.5706 10.4201 10.5706 10.8301C10.5706 11.2401 10.2406 11.5801 9.82063 11.5801Z"
        fill="currentColor"
      />
      <Path
        d="M16.3499 11.5801H14.1699C13.7599 11.5801 13.4199 11.2401 13.4199 10.8301C13.4199 10.4201 13.7599 10.0801 14.1699 10.0801H16.3499C16.7599 10.0801 17.0999 10.4201 17.0999 10.8301C17.0999 11.2401 16.7599 11.5801 16.3499 11.5801Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V21C11.25 20.59 11.59 20.25 12 20.25C12.41 20.25 12.75 20.59 12.75 21V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M2.00009 22.7501C1.94009 22.7501 1.8801 22.7401 1.8201 22.7301C1.4201 22.6301 1.1701 22.2201 1.2701 21.8201L2.2701 17.8201C2.3701 17.4201 2.77009 17.1701 3.18009 17.2701C3.58009 17.3701 3.83009 17.7801 3.73009 18.1801L2.73009 22.1801C2.64009 22.5201 2.34009 22.7501 2.00009 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M22.0007 22.7499C21.6607 22.7499 21.3607 22.5199 21.2707 22.1799L20.2707 18.1799C20.1707 17.7799 20.4107 17.3699 20.8207 17.2699C21.2207 17.1699 21.6307 17.4099 21.7307 17.8199L22.7307 21.8199C22.8307 22.2199 22.5907 22.6299 22.1807 22.7299C22.1207 22.7399 22.0607 22.7499 22.0007 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DrivingTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5512 2H9.45117C7.65117 2 7.25118 2.90001 7.02118 4.01001L6.20117 7.92999H17.8012L16.9812 4.01001C16.7512 2.90001 16.3512 2 14.5512 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2405 14.3199C19.3205 15.1699 18.6405 15.9 17.7705 15.9H16.4105C15.6305 15.9 15.5205 15.57 15.3805 15.15L15.2305 14.7199C15.0305 14.1299 14.9005 13.7299 13.8505 13.7299H10.1405C9.10054 13.7299 8.94054 14.1799 8.76054 14.7199L8.61054 15.15C8.47054 15.56 8.36054 15.9 7.58054 15.9H6.22054C5.35054 15.9 4.67054 15.1699 4.75054 14.3199L5.16055 9.89996C5.26055 8.80996 5.47054 7.91992 7.37054 7.91992H16.6205C18.5205 7.91992 18.7305 8.80996 18.8305 9.89996L19.2405 14.3199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.2007 5.75H5.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5308 5.75H17.8008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.65039 10.8301H9.8204"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.1797 10.8301H16.3497"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 17V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 21V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 18L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21 18L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DrivingBold,
  broken: DrivingBroken,
  bulk: DrivingBulk,
  linear: DrivingLinear,
  outline: DrivingOutline,
  twotone: DrivingTwotone,
};

export const DrivingIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DrivingIcon;
