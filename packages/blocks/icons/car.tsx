import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const CarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.75 7.99813C21.75 8.40812 21.41 8.74813 21 8.74813H3C2.59 8.74813 2.25 8.40812 2.25 7.99813C2.25 7.58813 2.59 7.24813 3 7.24813H4.02L4.4 5.43813C4.76 3.68813 5.51 2.07812 8.49 2.07812H15.51C18.49 2.07812 19.24 3.68813 19.6 5.43813L19.98 7.24813H21C21.41 7.24813 21.75 7.58813 21.75 7.99813Z"
        fill="currentColor"
      />
      <Path
        d="M22.1816 13.66C22.0316 12.01 21.5915 10.25 18.3815 10.25H5.62155C2.41155 10.25 1.98155 12.01 1.82155 13.66L1.26155 19.75C1.19155 20.51 1.44155 21.27 1.96155 21.84C2.49155 22.42 3.24155 22.75 4.04155 22.75H5.92155C7.54155 22.75 7.85155 21.82 8.05155 21.21L8.25155 20.61C8.48155 19.92 8.54155 19.75 9.44155 19.75H14.5616C15.4616 19.75 15.4916 19.85 15.7516 20.61L15.9516 21.21C16.1516 21.82 16.4616 22.75 18.0816 22.75H19.9615C20.7516 22.75 21.5116 22.42 22.0416 21.84C22.5616 21.27 22.8116 20.51 22.7416 19.75L22.1816 13.66ZM9.00155 15.75H6.00155C5.59155 15.75 5.25155 15.41 5.25155 15C5.25155 14.59 5.59155 14.25 6.00155 14.25H9.00155C9.41155 14.25 9.75155 14.59 9.75155 15C9.75155 15.41 9.41155 15.75 9.00155 15.75ZM18.0016 15.75H15.0016C14.5916 15.75 14.2516 15.41 14.2516 15C14.2516 14.59 14.5916 14.25 15.0016 14.25H18.0016C18.4116 14.25 18.7516 14.59 18.7516 15C18.7516 15.41 18.4116 15.75 18.0016 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.51 2.82996H8.49C6 2.82996 5.45 4.06996 5.13 5.58996L4 11H20L18.87 5.58996C18.55 4.06996 18 2.82996 15.51 2.82996Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.57071 13.73C2.71071 12.23 3.00071 11 5.62071 11H18.3807C21.0007 11 21.2907 12.23 21.4307 13.73L21.9907 19.82C22.1007 20.99 21.1607 22 19.9607 22H18.0807C17.0007 22 16.8507 21.54 16.6607 20.97L16.4607 20.37C16.1807 19.55 16.0007 19 14.5607 19H9.44071C8.00071 19 7.79071 19.62 7.54071 20.37L7.34071 20.97C7.15071 21.54 7.00071 22 5.92071 22H4.04071C2.84071 22 1.90071 20.99 2.01071 19.82L2.20071 17.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 5H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 15H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.1796 13.66C22.0296 12.01 21.5896 10.25 18.3796 10.25H5.6196C2.4096 10.25 1.9796 12.01 1.8196 13.66L1.2596 19.75C1.1896 20.51 1.4396 21.27 1.9596 21.84C2.4896 22.42 3.2396 22.75 4.0396 22.75H5.9196C7.5396 22.75 7.8496 21.82 8.0496 21.21L8.2496 20.61C8.4796 19.92 8.5396 19.75 9.4396 19.75H14.5596C15.4596 19.75 15.4896 19.85 15.7496 20.61L15.9496 21.21C16.1496 21.82 16.4596 22.75 18.0796 22.75H19.9596C20.7496 22.75 21.5096 22.42 22.0396 21.84C22.5596 21.27 22.8096 20.51 22.7396 19.75L22.1796 13.66Z"
        fill="currentColor"
      />
      <Path
        d="M21 7.25008H20C19.99 7.25008 19.99 7.25008 19.98 7.25008L19.6 5.44008C19.24 3.69008 18.49 2.08008 15.51 2.08008H12.75H11.25H8.49C5.51 2.08008 4.76 3.69008 4.4 5.44008L4.02 7.25008C4.01 7.25008 4.01 7.25008 4 7.25008H3C2.59 7.25008 2.25 7.59008 2.25 8.00008C2.25 8.41008 2.59 8.75008 3 8.75008H3.71L3.29 10.7501C3.83 10.4401 4.58 10.2501 5.62 10.2501H18.38C19.42 10.2501 20.17 10.4401 20.71 10.7501L20.29 8.75008H21C21.41 8.75008 21.75 8.41008 21.75 8.00008C21.75 7.59008 21.41 7.25008 21 7.25008Z"
        fill="currentColor"
      />
      <Path
        d="M9 15.75H6C5.59 15.75 5.25 15.41 5.25 15C5.25 14.59 5.59 14.25 6 14.25H9C9.41 14.25 9.75 14.59 9.75 15C9.75 15.41 9.41 15.75 9 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.51 2.82996H8.49C6 2.82996 5.45 4.06996 5.13 5.58996L4 11H20L18.87 5.58996C18.55 4.06996 18 2.82996 15.51 2.82996Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.43998C7.99998 19 7.78998 19.62 7.53998 20.37L7.33998 20.97C7.14998 21.54 6.99998 22 5.91998 22H4.03998C2.83998 22 1.89998 20.99 2.00998 19.82L2.56998 13.73C2.70998 12.23 2.99998 11 5.61998 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 5H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 15H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9994 11.7501H3.99937C3.76937 11.7501 3.55937 11.6501 3.41937 11.4701C3.27937 11.3001 3.21937 11.0601 3.26937 10.8401L4.39937 5.44008C4.76937 3.69008 5.51937 2.08008 8.48937 2.08008H15.5194C18.4894 2.08008 19.2394 3.70008 19.6094 5.44008L20.7394 10.8501C20.7894 11.0701 20.7294 11.3001 20.5894 11.4801C20.4394 11.6501 20.2294 11.7501 19.9994 11.7501ZM4.91937 10.2501H19.0694L18.1294 5.75008C17.8494 4.44008 17.5194 3.58008 15.5094 3.58008H8.48937C6.47937 3.58008 6.14937 4.44008 5.86937 5.75008L4.91937 10.2501Z"
        fill="currentColor"
      />
      <Path
        d="M19.9596 22.75H18.0796C16.4596 22.75 16.1496 21.82 15.9496 21.21L15.7496 20.61C15.4896 19.85 15.4596 19.75 14.5596 19.75H9.4396C8.5396 19.75 8.4796 19.92 8.2496 20.61L8.0496 21.21C7.8396 21.83 7.5396 22.75 5.9196 22.75H4.0396C3.2496 22.75 2.4896 22.42 1.9596 21.84C1.4396 21.27 1.1896 20.51 1.2596 19.75L1.8196 13.66C1.9696 12.01 2.4096 10.25 5.6196 10.25H18.3796C21.5896 10.25 22.0196 12.01 22.1796 13.66L22.7396 19.75C22.8096 20.51 22.5596 21.27 22.0396 21.84C21.5096 22.42 20.7496 22.75 19.9596 22.75ZM9.4396 18.25H14.5596C16.3796 18.25 16.8096 19.06 17.1696 20.12L17.3796 20.74C17.5496 21.25 17.5496 21.26 18.0896 21.26H19.9696C20.3396 21.26 20.6896 21.11 20.9396 20.84C21.1796 20.58 21.2896 20.25 21.2596 19.9L20.6996 13.81C20.5696 12.46 20.4096 11.76 18.3996 11.76H5.6196C3.5996 11.76 3.4396 12.46 3.3196 13.81L2.7596 19.9C2.7296 20.25 2.8396 20.58 3.0796 20.84C3.3196 21.11 3.6796 21.26 4.0496 21.26H5.9296C6.4696 21.26 6.4696 21.25 6.6396 20.75L6.8396 20.14C7.0896 19.34 7.4596 18.25 9.4396 18.25Z"
        fill="currentColor"
      />
      <Path
        d="M4 8.75H3C2.59 8.75 2.25 8.41 2.25 8C2.25 7.59 2.59 7.25 3 7.25H4C4.41 7.25 4.75 7.59 4.75 8C4.75 8.41 4.41 8.75 4 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M21 8.75H20C19.59 8.75 19.25 8.41 19.25 8C19.25 7.59 19.59 7.25 20 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 5.75C11.59 5.75 11.25 5.41 11.25 5V3C11.25 2.59 11.59 2.25 12 2.25C12.41 2.25 12.75 2.59 12.75 3V5C12.75 5.41 12.41 5.75 12 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.5 5.75H10.5C10.09 5.75 9.75 5.41 9.75 5C9.75 4.59 10.09 4.25 10.5 4.25H13.5C13.91 4.25 14.25 4.59 14.25 5C14.25 5.41 13.91 5.75 13.5 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 15.75H6C5.59 15.75 5.25 15.41 5.25 15C5.25 14.59 5.59 14.25 6 14.25H9C9.41 14.25 9.75 14.59 9.75 15C9.75 15.41 9.41 15.75 9 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 15.75H15C14.59 15.75 14.25 15.41 14.25 15C14.25 14.59 14.59 14.25 15 14.25H18C18.41 14.25 18.75 14.59 18.75 15C18.75 15.41 18.41 15.75 18 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.51 2.83008H8.49C6 2.83008 5.45 4.07008 5.13 5.59008L4 11.0001H20L18.87 5.59008C18.55 4.07008 18 2.83008 15.51 2.83008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9907 19.82C22.1007 20.99 21.1607 22 19.9607 22H18.0807C17.0007 22 16.8507 21.54 16.6607 20.97L16.4607 20.37C16.1807 19.55 16.0007 19 14.5607 19H9.44071C8.00071 19 7.79071 19.62 7.54071 20.37L7.34071 20.97C7.15071 21.54 7.00071 22 5.92071 22H4.04071C2.84071 22 1.90071 20.99 2.01071 19.82L2.57071 13.73C2.71071 12.23 3.00071 11 5.62071 11H18.3807C21.0007 11 21.2907 12.23 21.4307 13.73L21.9907 19.82Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 3V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.5 5H13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M6 15H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15 15H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CarBold,
  broken: CarBroken,
  bulk: CarBulk,
  linear: CarLinear,
  outline: CarOutline,
  twotone: CarTwotone,
};

export const CarIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
