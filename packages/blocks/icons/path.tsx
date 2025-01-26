import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const PathBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0199 10.7004L17.8999 12.0404C17.4999 12.2904 16.9899 12.2304 16.6599 11.9004L12.1299 7.37041C11.7999 7.04041 11.7399 6.53041 11.9899 6.13041L13.3299 4.01041C14.1499 2.72041 15.7899 2.66041 16.9999 3.86041L20.1799 7.04041C21.2999 8.17041 21.2299 9.93041 20.0199 10.7004Z"
        fill="currentColor"
      />
      <Path
        d="M14.7106 19.9498L5.99064 20.9698C5.91296 20.9801 5.83629 20.9874 5.76069 20.9919C5.07556 21.0323 4.90569 20.2247 5.39099 19.7394L7.98064 17.1498C8.30064 16.8398 8.30064 16.3498 7.98064 16.0398C7.68064 15.7298 7.19064 15.7298 6.87064 16.0398L4.28099 18.6294C3.79569 19.1147 2.99556 18.9441 3.03197 18.2588C3.03579 18.1868 3.04199 18.1138 3.05064 18.0398L4.08064 9.31975C4.34064 7.13975 5.14064 6.41975 7.44064 6.55975L8.94064 6.64975C9.43064 6.67975 9.89064 6.88975 10.2406 7.23975L16.7906 13.7898C17.1406 14.1398 17.3506 14.5998 17.3706 15.0898L17.4606 16.5898C17.6906 18.8998 16.9006 19.6998 14.7106 19.9498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7901 7.27009L16.7601 4.24009C15.6101 3.09009 14.0401 3.15009 13.2701 4.38009L11.5801 7.05009L16.9801 12.4501L19.6501 10.7601C20.8001 10.0301 20.8701 8.35009 19.7901 7.27009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.64999 6.80996C5.45999 6.67996 4.68999 7.34996 4.44999 9.43996L3.46999 17.76C3.25999 19.51 4.52999 20.77 6.26999 20.56L14.59 19.58C16.68 19.33 17.44 18.57 17.22 16.38L16.99 12.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.60938 19.4199L7.63937 16.3799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PathBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0205 10.6999L17.2205 12.4699L11.5605 6.80992L13.3205 4.00992C14.1405 2.71992 15.7805 2.65992 16.9905 3.85992L20.1705 7.03992C21.3005 8.16992 21.2305 9.92992 20.0205 10.6999Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.7103 19.95L6.0003 20.98C5.4003 21.05 4.8603 20.96 4.4103 20.74C3.9203 20.5 3.5403 20.12 3.3003 19.63C3.0803 19.18 3.0003 18.64 3.0603 18.05L4.1003 9.32998C4.3503 7.14998 5.1603 6.43999 7.4603 6.56999L11.5803 6.81999L17.2403 12.48L17.4803 16.6C17.6903 18.9 16.9003 19.7 14.7103 19.95Z"
        fill="currentColor"
      />
      <Path
        d="M7.97906 17.1502L4.39906 20.7302C3.90906 20.4902 3.52906 20.1102 3.28906 19.6202L6.87906 16.0302C7.18906 15.7302 7.68906 15.7302 7.98906 16.0302C8.29906 16.3502 8.29906 16.8402 7.97906 17.1502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.79 7.27009L16.76 4.24009C15.61 3.09009 14.04 3.15009 13.27 4.38009L11.58 7.05009L16.98 12.4501L19.65 10.7601C20.8 10.0301 20.87 8.35009 19.79 7.27009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.58 7.04996L7.65 6.80996C5.46 6.67996 4.69 7.34996 4.45 9.43996L3.47 17.76C3.26 19.51 4.53 20.77 6.27 20.56L14.59 19.58C16.68 19.33 17.44 18.57 17.22 16.38L16.99 12.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.61 19.4199L7.64 16.3799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PathOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9792 13.2001C16.7892 13.2001 16.5892 13.1201 16.4492 12.9801L11.0492 7.57006C10.7992 7.32006 10.7592 6.94006 10.9492 6.64006L12.6392 3.97006C13.1092 3.23006 13.8192 2.77006 14.6492 2.68006C15.5792 2.59006 16.5392 2.95006 17.2892 3.70006L20.3192 6.73006C21.0392 7.45006 21.3992 8.42006 21.2892 9.38006C21.1992 10.2201 20.7492 10.9501 20.0492 11.3901L17.3792 13.0801C17.2592 13.1601 17.1192 13.2001 16.9792 13.2001ZM12.5292 6.94006L17.0892 11.5001L19.2592 10.1301C19.5692 9.93006 19.7692 9.61006 19.8092 9.22006C19.8692 8.72006 19.6592 8.19006 19.2692 7.80006L16.2392 4.77006C15.8092 4.34006 15.2892 4.11006 14.8192 4.18006C14.4392 4.22006 14.1292 4.43006 13.9092 4.78006L12.5292 6.94006Z"
        fill="currentColor"
      />
      <Path
        d="M5.89038 21.34C5.00038 21.34 4.20038 21.02 3.60038 20.43C2.90038 19.73 2.59038 18.76 2.72038 17.68L3.70038 9.35003C4.00038 6.83003 5.11038 5.91003 7.70038 6.06003L11.6204 6.29003C12.0304 6.32003 12.3504 6.67003 12.3204 7.08003C12.2904 7.49003 11.9404 7.81003 11.5304 7.78003L7.61038 7.56003C5.83038 7.45003 5.39038 7.80003 5.19038 9.53003L4.21038 17.85C4.14038 18.46 4.30038 19 4.66038 19.36C5.03038 19.72 5.57038 19.89 6.18038 19.81L14.5004 18.83C16.2504 18.62 16.6404 18.16 16.4704 16.44L16.2304 12.49C16.2104 12.08 16.5204 11.72 16.9304 11.7C17.3404 11.67 17.7004 11.99 17.7204 12.4L17.9504 16.32C18.1904 18.81 17.2104 20.01 14.6604 20.32L6.34038 21.3C6.20038 21.33 6.04038 21.34 5.89038 21.34Z"
        fill="currentColor"
      />
      <Path
        d="M4.61078 20.1698C4.42078 20.1698 4.23078 20.0998 4.08078 19.9498C3.79078 19.6598 3.79078 19.1798 4.08078 18.8898L7.12078 15.8498C7.41078 15.5598 7.89078 15.5598 8.18078 15.8498C8.47078 16.1398 8.47078 16.6198 8.18078 16.9098L5.14078 19.9498C4.99078 20.0998 4.80078 20.1698 4.61078 20.1698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7901 7.27009L16.7601 4.24009C15.6101 3.09009 14.0401 3.15009 13.2701 4.38009L11.5801 7.05009L16.9801 12.4501L19.6501 10.7601C20.8001 10.0301 20.8701 8.35009 19.7901 7.27009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.58 7.05045L7.64999 6.81045C5.45999 6.68045 4.68999 7.35045 4.44999 9.44045L3.46999 17.7604C3.25999 19.5104 4.52999 20.7704 6.26999 20.5604L14.59 19.5804C16.68 19.3304 17.44 18.5704 17.22 16.3804L16.99 12.4504"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.60938 19.4199L7.63937 16.3799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PathBold,
  broken: PathBroken,
  bulk: PathBulk,
  linear: PathLinear,
  outline: PathOutline,
  twotone: PathTwotone,
};

export const PathIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
