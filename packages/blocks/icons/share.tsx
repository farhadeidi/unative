import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ShareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.3591 12.7315C19.9891 12.7315 19.6791 12.4515 19.6391 12.0815C19.3991 9.88154 18.2191 7.90154 16.3991 6.64154C16.0691 6.41154 15.9891 5.96154 16.2191 5.63154C16.4491 5.30154 16.8991 5.22154 17.2291 5.45154C19.3991 6.96154 20.7991 9.32154 21.0891 11.9315C21.1291 12.3315 20.8391 12.6915 20.4391 12.7315C20.4091 12.7315 20.3891 12.7315 20.3591 12.7315Z"
        fill="currentColor"
      />
      <Path
        d="M3.73931 12.7812C3.71931 12.7812 3.68931 12.7812 3.66931 12.7812C3.26931 12.7412 2.97931 12.3812 3.01931 11.9812C3.28931 9.37118 4.66931 7.01118 6.81931 5.49118C7.13931 5.26118 7.59931 5.34118 7.82931 5.66118C8.05931 5.99118 7.97931 6.44118 7.65931 6.67118C5.85931 7.95118 4.68931 9.93118 4.46931 12.1212C4.42931 12.5012 4.10931 12.7812 3.73931 12.7812Z"
        fill="currentColor"
      />
      <Path
        d="M15.9906 21.1003C14.7606 21.6903 13.4406 21.9903 12.0606 21.9903C10.6206 21.9903 9.25059 21.6703 7.97059 21.0203C7.61059 20.8503 7.47059 20.4103 7.65059 20.0503C7.82059 19.6903 8.26059 19.5503 8.62059 19.7203C9.25059 20.0403 9.92059 20.2603 10.6006 20.3903C11.5206 20.5703 12.4606 20.5803 13.3806 20.4203C14.0606 20.3003 14.7306 20.0903 15.3506 19.7903C15.7206 19.6203 16.1606 19.7603 16.3206 20.1303C16.5006 20.4903 16.3606 20.9303 15.9906 21.1003Z"
        fill="currentColor"
      />
      <Path
        d="M12.0505 2.01172C10.5005 2.01172 9.23047 3.27172 9.23047 4.83172C9.23047 6.39172 10.4905 7.65172 12.0505 7.65172C13.6105 7.65172 14.8705 6.39172 14.8705 4.83172C14.8705 3.27172 13.6105 2.01172 12.0505 2.01172Z"
        fill="currentColor"
      />
      <Path
        d="M5.05047 13.8711C3.50047 13.8711 2.23047 15.1311 2.23047 16.6911C2.23047 18.2511 3.49047 19.5111 5.05047 19.5111C6.61047 19.5111 7.87047 18.2511 7.87047 16.6911C7.87047 15.1311 6.60047 13.8711 5.05047 13.8711Z"
        fill="currentColor"
      />
      <Path
        d="M18.9509 13.8711C17.4009 13.8711 16.1309 15.1311 16.1309 16.6911C16.1309 18.2511 17.3909 19.5111 18.9509 19.5111C20.5109 19.5111 21.7709 18.2511 21.7709 16.6911C21.7709 15.1311 20.5109 13.8711 18.9509 13.8711Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9609 6.16992C18.9609 7.55992 20.3409 9.76992 20.6209 12.3199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.49023 12.37C3.75023 9.82997 5.11023 7.61997 7.09023 6.21997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.18945 20.9399C9.34945 21.5299 10.6695 21.8599 12.0595 21.8599C13.3995 21.8599 14.6595 21.5599 15.7895 21.0099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.2793 4.91989C9.2793 6.44989 10.5193 7.69989 12.0593 7.69989C13.5993 7.69989 14.8393 6.45989 14.8393 4.91989C14.8393 3.37989 13.5993 2.13989 12.0593 2.13989"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.83078 19.9201C6.36613 19.9201 7.61078 18.6755 7.61078 17.1401C7.61078 15.6048 6.36613 14.3601 4.83078 14.3601C3.29543 14.3601 2.05078 15.6048 2.05078 17.1401C2.05078 18.6755 3.29543 19.9201 4.83078 19.9201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9409 17.1401C21.9409 15.6101 20.7009 14.3601 19.1609 14.3601C17.6209 14.3601 16.3809 15.6001 16.3809 17.1401C16.3809 18.6801 17.6209 19.9201 19.1609 19.9201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.3591 12.7301C19.9891 12.7301 19.6791 12.4501 19.6391 12.0801C19.3991 9.88007 18.2191 7.90007 16.3991 6.64007C16.0691 6.41007 15.9891 5.96007 16.2191 5.63007C16.4491 5.30007 16.8991 5.22007 17.2291 5.45007C19.3991 6.96007 20.7991 9.32007 21.0891 11.9301C21.1291 12.3301 20.8391 12.6901 20.4391 12.7301C20.4091 12.7301 20.3891 12.7301 20.3591 12.7301Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M3.73931 12.78C3.71931 12.78 3.68931 12.78 3.66931 12.78C3.26931 12.74 2.97931 12.38 3.01931 11.98C3.28931 9.36996 4.66931 7.00996 6.81931 5.48996C7.13931 5.25996 7.59931 5.33996 7.82931 5.65996C8.05931 5.98996 7.97931 6.43996 7.65931 6.66996C5.85931 7.94996 4.68931 9.92996 4.46931 12.12C4.42931 12.5 4.10931 12.78 3.73931 12.78Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.9906 21.1001C14.7606 21.6901 13.4406 21.9901 12.0606 21.9901C10.6206 21.9901 9.25059 21.6701 7.97059 21.0201C7.61059 20.8501 7.47059 20.4101 7.65059 20.0501C7.82059 19.6901 8.26059 19.5501 8.62059 19.7201C9.25059 20.0401 9.92059 20.2601 10.6006 20.3901C11.5206 20.5701 12.4606 20.5801 13.3806 20.4201C14.0606 20.3001 14.7306 20.0901 15.3506 19.7901C15.7206 19.6201 16.1606 19.7601 16.3206 20.1301C16.5006 20.4901 16.3606 20.9301 15.9906 21.1001Z"
        fill="currentColor"
      />
      <Path
        d="M12.0505 2.01001C10.5005 2.01001 9.23047 3.27001 9.23047 4.83001C9.23047 6.39001 10.4905 7.65001 12.0505 7.65001C13.6105 7.65001 14.8705 6.39001 14.8705 4.83001C14.8705 3.27001 13.6105 2.01001 12.0505 2.01001Z"
        fill="currentColor"
      />
      <Path
        d="M5.05047 13.8701C3.50047 13.8701 2.23047 15.1301 2.23047 16.6901C2.23047 18.2501 3.49047 19.5101 5.05047 19.5101C6.61047 19.5101 7.87047 18.2501 7.87047 16.6901C7.87047 15.1301 6.60047 13.8701 5.05047 13.8701Z"
        fill="currentColor"
      />
      <Path
        d="M18.9509 13.8701C17.4009 13.8701 16.1309 15.1301 16.1309 16.6901C16.1309 18.2501 17.3909 19.5101 18.9509 19.5101C20.5109 19.5101 21.7709 18.2501 21.7709 16.6901C21.7709 15.1301 20.5109 13.8701 18.9509 13.8701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.82999 19.92C6.36534 19.92 7.60999 18.6753 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6753 3.29464 19.92 4.82999 19.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6196 13.0701C20.2396 13.0701 19.9196 12.7801 19.8696 12.4001C19.6296 10.1401 18.4096 8.0901 16.5296 6.7901C16.1896 6.5501 16.1096 6.0901 16.3396 5.7501C16.5796 5.4101 17.0496 5.3301 17.3796 5.5601C19.6196 7.1101 21.0596 9.5501 21.3496 12.2401C21.3896 12.6501 21.0996 13.0201 20.6796 13.0701C20.6696 13.0701 20.6396 13.0701 20.6196 13.0701Z"
        fill="currentColor"
      />
      <Path
        d="M3.48991 13.12C3.45991 13.12 3.43991 13.12 3.40991 13.12C2.99991 13.07 2.69991 12.7 2.73991 12.29C3.00991 9.60001 4.43991 7.17001 6.64991 5.60001C6.98991 5.36001 7.45991 5.44001 7.69991 5.78001C7.93991 6.12001 7.85991 6.59001 7.51991 6.83001C5.65991 8.14001 4.45991 10.19 4.22991 12.45C4.19991 12.83 3.86991 13.12 3.48991 13.12Z"
        fill="currentColor"
      />
      <Path
        d="M12.06 22.61C10.58 22.61 9.16997 22.27 7.84997 21.61C7.47997 21.42 7.32997 20.97 7.51997 20.6C7.70997 20.23 8.15997 20.08 8.52997 20.27C10.69 21.36 13.29 21.38 15.47 20.33C15.84 20.15 16.29 20.31 16.47 20.68C16.65 21.05 16.49 21.5 16.12 21.68C14.84 22.3 13.48 22.61 12.06 22.61Z"
        fill="currentColor"
      />
      <Path
        d="M12.0593 8.43988C10.1093 8.43988 8.5293 6.85988 8.5293 4.90988C8.5293 2.95988 10.1093 1.37988 12.0593 1.37988C14.0093 1.37988 15.5893 2.95988 15.5893 4.90988C15.5893 6.85988 13.9993 8.43988 12.0593 8.43988ZM12.0593 2.88988C10.9393 2.88988 10.0293 3.79988 10.0293 4.91988C10.0293 6.03988 10.9393 6.94988 12.0593 6.94988C13.1793 6.94988 14.0893 6.03988 14.0893 4.91988C14.0893 3.79988 13.1693 2.88988 12.0593 2.88988Z"
        fill="currentColor"
      />
      <Path
        d="M4.83078 20.6701C2.88078 20.6701 1.30078 19.0901 1.30078 17.1401C1.30078 15.2001 2.88078 13.6101 4.83078 13.6101C6.78078 13.6101 8.36078 15.1901 8.36078 17.1401C8.36078 19.0801 6.78078 20.6701 4.83078 20.6701ZM4.83078 15.1101C3.71078 15.1101 2.80078 16.0201 2.80078 17.1401C2.80078 18.2601 3.71078 19.1701 4.83078 19.1701C5.95078 19.1701 6.86078 18.2601 6.86078 17.1401C6.86078 16.0201 5.95078 15.1101 4.83078 15.1101Z"
        fill="currentColor"
      />
      <Path
        d="M19.1706 20.6701C17.2206 20.6701 15.6406 19.0901 15.6406 17.1401C15.6406 15.2001 17.2206 13.6101 19.1706 13.6101C21.1206 13.6101 22.7006 15.1901 22.7006 17.1401C22.6906 19.0801 21.1106 20.6701 19.1706 20.6701ZM19.1706 15.1101C18.0506 15.1101 17.1406 16.0201 17.1406 17.1401C17.1406 18.2601 18.0506 19.1701 19.1706 19.1701C20.2906 19.1701 21.2006 18.2601 21.2006 17.1401C21.1906 16.0201 20.2906 15.1101 19.1706 15.1101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M16.9609 6.16992C18.9609 7.55992 20.3409 9.76992 20.6209 12.3199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M3.49023 12.3702C3.75023 9.83021 5.11023 7.62021 7.09023 6.22021"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M8.18945 20.9399C9.34945 21.5299 10.6695 21.8599 12.0595 21.8599C13.3995 21.8599 14.6595 21.5599 15.7895 21.0099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0593 7.70014C13.5946 7.70014 14.8393 6.45549 14.8393 4.92014C14.8393 3.38479 13.5946 2.14014 12.0593 2.14014C10.5239 2.14014 9.2793 3.38479 9.2793 4.92014C9.2793 6.45549 10.5239 7.70014 12.0593 7.70014Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.83078 19.9199C6.36613 19.9199 7.61078 18.6752 7.61078 17.1399C7.61078 15.6045 6.36613 14.3599 4.83078 14.3599C3.29543 14.3599 2.05078 15.6045 2.05078 17.1399C2.05078 18.6752 3.29543 19.9199 4.83078 19.9199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.1706 19.9199C20.706 19.9199 21.9506 18.6752 21.9506 17.1399C21.9506 15.6045 20.706 14.3599 19.1706 14.3599C17.6353 14.3599 16.3906 15.6045 16.3906 17.1399C16.3906 18.6752 17.6353 19.9199 19.1706 19.9199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShareBold,
  broken: ShareBroken,
  bulk: ShareBulk,
  linear: ShareLinear,
  outline: ShareOutline,
  twotone: ShareTwotone,
};

export const ShareIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
