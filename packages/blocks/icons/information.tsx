import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const InformationBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5609 10.7381L20.2109 9.15812C19.9609 8.85812 19.7509 8.29813 19.7509 7.89813V6.19812C19.7509 5.13812 18.8809 4.26812 17.8209 4.26812H16.1209C15.7209 4.26812 15.1509 4.05813 14.8509 3.80812L13.2709 2.45812C12.5809 1.86813 11.4509 1.86813 10.7609 2.45812L9.16086 3.80812C8.86086 4.05813 8.30086 4.26812 7.90086 4.26812H6.17086C5.11086 4.26812 4.24086 5.13812 4.24086 6.19812V7.89813C4.24086 8.28813 4.04086 8.84812 3.79086 9.14812L2.44086 10.7381C1.86086 11.4381 1.86086 12.5581 2.44086 13.2381L3.79086 14.8281C4.04086 15.1181 4.24086 15.6881 4.24086 16.0781V17.7881C4.24086 18.8481 5.11086 19.7181 6.17086 19.7181H7.91086C8.30086 19.7181 8.87086 19.9281 9.17086 20.1781L10.7509 21.5281C11.4409 22.1181 12.5709 22.1181 13.2609 21.5281L14.8409 20.1781C15.1409 19.9281 15.7009 19.7181 16.1009 19.7181H17.8009C18.8609 19.7181 19.7309 18.8481 19.7309 17.7881V16.0881C19.7309 15.6881 19.9409 15.1281 20.1909 14.8281L21.5409 13.2481C22.1509 12.5681 22.1509 11.4381 21.5609 10.7381ZM11.2509 8.12813C11.2509 7.71813 11.5909 7.37813 12.0009 7.37813C12.4109 7.37813 12.7509 7.71813 12.7509 8.12813V12.9581C12.7509 13.3681 12.4109 13.7081 12.0009 13.7081C11.5909 13.7081 11.2509 13.3681 11.2509 12.9581V8.12813ZM12.0009 16.8681C11.4509 16.8681 11.0009 16.4181 11.0009 15.8681C11.0009 15.3181 11.4409 14.8681 12.0009 14.8681C12.5509 14.8681 13.0009 15.3181 13.0009 15.8681C13.0009 16.4181 12.5609 16.8681 12.0009 16.8681Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InformationBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8.12988V12.9599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.24086 6.20008C4.24086 5.14008 5.11086 4.27008 6.17086 4.27008H7.90086C8.30086 4.27008 8.86086 4.06008 9.16086 3.81008L10.7409 2.46008C11.4409 1.87008 12.5709 1.87008 13.2509 2.46008L14.8309 3.81008C15.1309 4.06008 15.7009 4.27008 16.1009 4.27008H17.8009C18.8609 4.27008 19.7309 5.14008 19.7309 6.20008V7.90008C19.7309 8.30008 19.9409 8.86008 20.1909 9.16008L21.5409 10.7401C22.1309 11.4401 22.1309 12.5701 21.5409 13.2501L20.1909 14.8301C19.9409 15.1301 19.7309 15.6901 19.7309 16.0901V17.7901C19.7309 18.8501 18.8609 19.7201 17.8009 19.7201H16.1009C15.7009 19.7201 15.1409 19.9301 14.8409 20.1801L13.2609 21.5301C12.5609 22.1201 11.4309 22.1201 10.7509 21.5301L9.17086 20.1801C8.87086 19.9301 8.30086 19.7201 7.91086 19.7201H6.17086C5.11086 19.7201 4.24086 18.8501 4.24086 17.7901V16.0801C4.24086 15.6901 4.04086 15.1201 3.79086 14.8301L2.44086 13.2401C1.86086 12.5501 1.86086 11.4301 2.44086 10.7401L3.00086 10.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9941 16H12.0031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const InformationBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7509 2.45007C11.4509 1.86007 12.5809 1.86007 13.2609 2.45007L14.8409 3.80007C15.1409 4.05007 15.7109 4.26007 16.1109 4.26007H17.8109C18.8709 4.26007 19.7409 5.13007 19.7409 6.19007V7.89007C19.7409 8.29007 19.9509 8.85007 20.2009 9.15007L21.5509 10.7301C22.1409 11.4301 22.1409 12.5601 21.5509 13.2401L20.2009 14.8201C19.9509 15.1201 19.7409 15.6801 19.7409 16.0801V17.7801C19.7409 18.8401 18.8709 19.7101 17.8109 19.7101H16.1109C15.7109 19.7101 15.1509 19.9201 14.8509 20.1701L13.2709 21.5201C12.5709 22.1101 11.4409 22.1101 10.7609 21.5201L9.18086 20.1701C8.88086 19.9201 8.31086 19.7101 7.92086 19.7101H6.17086C5.11086 19.7101 4.24086 18.8401 4.24086 17.7801V16.0701C4.24086 15.6801 4.04086 15.1101 3.79086 14.8201L2.44086 13.2301C1.86086 12.5401 1.86086 11.4201 2.44086 10.7301L3.79086 9.14007C4.04086 8.84007 4.24086 8.28007 4.24086 7.89007V6.20007C4.24086 5.14007 5.11086 4.27007 6.17086 4.27007H7.90086C8.30086 4.27007 8.86086 4.06007 9.16086 3.81007L10.7509 2.45007Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InformationLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.75 2.44995C11.45 1.85995 12.58 1.85995 13.26 2.44995L14.84 3.79995C15.14 4.04995 15.71 4.25995 16.11 4.25995H17.81C18.87 4.25995 19.74 5.12995 19.74 6.18995V7.88995C19.74 8.28995 19.95 8.84995 20.2 9.14995L21.55 10.7299C22.14 11.4299 22.14 12.5599 21.55 13.2399L20.2 14.8199C19.95 15.1199 19.74 15.6799 19.74 16.0799V17.7799C19.74 18.8399 18.87 19.7099 17.81 19.7099H16.11C15.71 19.7099 15.15 19.9199 14.85 20.1699L13.27 21.5199C12.57 22.1099 11.44 22.1099 10.76 21.5199L9.18001 20.1699C8.88001 19.9199 8.31 19.7099 7.92 19.7099H6.17C5.11 19.7099 4.24 18.8399 4.24 17.7799V16.0699C4.24 15.6799 4.04 15.1099 3.79 14.8199L2.44 13.2299C1.86 12.5399 1.86 11.4199 2.44 10.7299L3.79 9.13995C4.04 8.83995 4.24 8.27995 4.24 7.88995V6.19995C4.24 5.13995 5.11 4.26995 6.17 4.26995H7.9C8.3 4.26995 8.86 4.05995 9.16 3.80995L10.75 2.44995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8.13V12.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 16H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const InformationOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0091 22.7401C11.3791 22.7401 10.7591 22.5301 10.2691 22.1101L8.68914 20.7601C8.52914 20.6201 8.12914 20.4801 7.91914 20.4801H6.16914C4.68914 20.4801 3.48914 19.2801 3.48914 17.8001V16.0901C3.48914 15.8801 3.34914 15.4801 3.21914 15.3301L1.85914 13.7301C1.03914 12.7601 1.03914 11.2401 1.85914 10.2601L3.21914 8.66007C3.34914 8.51007 3.48914 8.11007 3.48914 7.90007V6.20007C3.48914 4.72007 4.68914 3.52007 6.16914 3.52007H7.89914C8.10914 3.52007 8.49914 3.37007 8.66914 3.23007L10.2491 1.88007C11.2291 1.05007 12.7591 1.05007 13.7391 1.88007L15.3191 3.23007C15.4791 3.37007 15.8891 3.51007 16.0991 3.51007H17.7991C19.2791 3.51007 20.4791 4.71007 20.4791 6.19007V7.89007C20.4791 8.10007 20.6291 8.49007 20.7691 8.66007L22.1191 10.2401C22.9591 11.2301 22.9491 12.7601 22.1191 13.7301L20.7691 15.3101C20.6291 15.4801 20.4891 15.8701 20.4891 16.0801V17.7801C20.4891 19.2601 19.2891 20.4601 17.8091 20.4601H16.1091C15.8991 20.4601 15.5091 20.6101 15.3291 20.7501L13.7491 22.1001C13.2591 22.5301 12.6291 22.7401 12.0091 22.7401ZM6.16914 5.02007C5.51914 5.02007 4.98914 5.55007 4.98914 6.20007V7.90007C4.98914 8.47007 4.72914 9.19007 4.35914 9.63007L2.99914 11.2301C2.65914 11.6401 2.65914 12.3601 2.99914 12.7601L4.34914 14.3501C4.70914 14.7601 4.97914 15.5101 4.97914 16.0801V17.7901C4.97914 18.4401 5.50914 18.9701 6.15914 18.9701H7.89914C8.45914 18.9701 9.19914 19.2401 9.63914 19.6101L11.2291 20.9701C11.6391 21.3201 12.3591 21.3201 12.7691 20.9701L14.3491 19.6201C14.7991 19.2401 15.5291 18.9801 16.0891 18.9801H17.7891C18.4391 18.9801 18.9691 18.4501 18.9691 17.8001V16.1001C18.9691 15.5401 19.2391 14.8101 19.6091 14.3601L20.9691 12.7701C21.3191 12.3601 21.3191 11.6401 20.9691 11.2301L19.6191 9.65007C19.2391 9.20007 18.9791 8.47007 18.9791 7.91007V6.20007C18.9791 5.55007 18.4491 5.02007 17.7991 5.02007H16.0991C15.5291 5.02007 14.7891 4.75007 14.3491 4.38007L12.7591 3.02007C12.3491 2.67007 11.6391 2.67007 11.2191 3.02007L9.64914 4.38007C9.19914 4.75007 8.46914 5.02007 7.89914 5.02007H6.16914Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.8701C11.45 16.8701 11 16.4201 11 15.8701C11 15.3201 11.44 14.8701 12 14.8701C12.55 14.8701 13 15.3201 13 15.8701C13 16.4201 12.56 16.8701 12 16.8701Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.7199C11.59 13.7199 11.25 13.3799 11.25 12.9699V8.12988C11.25 7.71988 11.59 7.37988 12 7.37988C12.41 7.37988 12.75 7.71988 12.75 8.12988V12.9599C12.75 13.3799 12.42 13.7199 12 13.7199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const InformationTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7509 2.44982C11.4509 1.85982 12.5809 1.85982 13.2609 2.44982L14.8409 3.79982C15.1409 4.04982 15.7109 4.25982 16.1109 4.25982H17.8109C18.8709 4.25982 19.7409 5.12982 19.7409 6.18982V7.88982C19.7409 8.28982 19.9509 8.84982 20.2009 9.14982L21.5509 10.7298C22.1409 11.4298 22.1409 12.5598 21.5509 13.2398L20.2009 14.8198C19.9509 15.1198 19.7409 15.6798 19.7409 16.0798V17.7798C19.7409 18.8398 18.8709 19.7098 17.8109 19.7098H16.1109C15.7109 19.7098 15.1509 19.9198 14.8509 20.1698L13.2709 21.5198C12.5709 22.1098 11.4409 22.1098 10.7609 21.5198L9.18086 20.1698C8.88086 19.9198 8.31086 19.7098 7.92086 19.7098H6.17086C5.11086 19.7098 4.24086 18.8398 4.24086 17.7798V16.0698C4.24086 15.6798 4.04086 15.1098 3.79086 14.8198L2.44086 13.2298C1.86086 12.5398 1.86086 11.4198 2.44086 10.7298L3.79086 9.13982C4.04086 8.83982 4.24086 8.27982 4.24086 7.88982V6.19982C4.24086 5.13982 5.11086 4.26982 6.17086 4.26982H7.90086C8.30086 4.26982 8.86086 4.05982 9.16086 3.80982L10.7509 2.44982Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 8.12988V12.9599"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.9941 16H12.0031"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: InformationBold,
  broken: InformationBroken,
  bulk: InformationBulk,
  linear: InformationLinear,
  outline: InformationOutline,
  twotone: InformationTwotone,
};

export const InformationIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
