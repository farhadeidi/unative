import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SmileysBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 1H4C2.34 1 1 2.34 1 4V10C1 11.66 2.34 13 4 13H8.5C8.5 10.52 10.52 8.5 13 8.5V4C13 2.34 11.66 1 10 1ZM3.77 4.27C4.54 3.72 5.59 3.71 6.38 4.25C6.72 4.48 6.81 4.95 6.58 5.29C6.35 5.63 5.88 5.72 5.54 5.49C5.27 5.3 4.9 5.3 4.63 5.5C4.5 5.59 4.35 5.63 4.2 5.63C3.97 5.63 3.73 5.52 3.59 5.32C3.35 4.98 3.43 4.51 3.77 4.27ZM9.27 8.24C9.01 8.57 8.54 8.62 8.22 8.36C7.87 8.08 7.45 7.93 7 7.93C6 7.93 5.17 8.69 5.06 9.67H7.16C7.57 9.67 7.91 10.01 7.91 10.42C7.91 10.83 7.57 11.17 7.16 11.17H4.84C4.13 11.17 3.55 10.59 3.55 9.88C3.55 7.98 5.1 6.43 7 6.43C7.78 6.43 8.55 6.7 9.16 7.19C9.48 7.45 9.53 7.92 9.27 8.24ZM10.58 5.29C10.35 5.63 9.88 5.72 9.54 5.49C9.27 5.3 8.9 5.3 8.63 5.5C8.5 5.59 8.35 5.63 8.2 5.63C7.97 5.63 7.73 5.52 7.59 5.32C7.35 4.98 7.43 4.51 7.77 4.27C8.54 3.72 9.59 3.71 10.38 4.25C10.72 4.48 10.81 4.95 10.58 5.29Z"
        fill="currentColor"
      />
      <Path
        d="M18.2207 16.6786C18.1507 16.5986 18.0507 16.5586 17.9407 16.5586H14.0607C13.9507 16.5586 13.8507 16.5986 13.7807 16.6786C13.7107 16.7586 13.6707 16.8686 13.6907 16.9686C13.8207 18.1486 14.8107 19.0486 16.0007 19.0486C17.1907 19.0486 18.1807 18.1586 18.3107 16.9686C18.3207 16.8586 18.2907 16.7586 18.2207 16.6786Z"
        fill="currentColor"
      />
      <Path
        d="M19 10H13C11.35 10 10 11.35 10 13V19C10 20.65 11.35 22 13 22H19C20.65 22 22 20.65 22 19V13C22 11.35 20.65 10 19 10ZM12.59 13.17C12.83 12.83 13.3 12.75 13.64 12.99C13.91 13.18 14.27 13.18 14.54 13C14.88 12.76 15.35 12.85 15.58 13.2C15.81 13.54 15.73 14.01 15.38 14.24C14.99 14.5 14.54 14.64 14.09 14.64C13.62 14.64 13.16 14.5 12.77 14.22C12.43 13.97 12.35 13.5 12.59 13.17ZM16 20.17C14.1 20.17 12.55 18.62 12.55 16.72C12.55 16.01 13.13 15.43 13.84 15.43H18.16C18.87 15.43 19.45 16.01 19.45 16.72C19.45 18.62 17.9 20.17 16 20.17ZM19.38 14.23C18.99 14.49 18.54 14.63 18.09 14.63C17.62 14.63 17.16 14.49 16.77 14.21C16.43 13.97 16.35 13.5 16.59 13.16C16.83 12.82 17.3 12.74 17.64 12.98C17.91 13.17 18.27 13.17 18.54 12.99C18.88 12.75 19.35 12.84 19.58 13.19C19.81 13.54 19.72 14 19.38 14.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmileysBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.95922 5.86996C6.42922 5.50996 5.72922 5.50998 5.19922 5.88998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9592 5.86996C10.4292 5.50996 9.72922 5.50998 9.19922 5.88998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.16078 11.42H5.84078C5.54078 11.42 5.30078 11.18 5.30078 10.88C5.30078 9.39 6.51078 8.18005 8.00078 8.18005C8.64078 8.18005 9.23078 8.40002 9.69078 8.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9592 13.62C14.4292 13.98 13.7292 13.98 13.1992 13.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9592 13.62C18.4292 13.98 17.7292 13.98 17.1992 13.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.8408 16.1801H18.1608C18.4608 16.1801 18.7008 16.42 18.7008 16.72C18.7008 18.21 17.4908 19.42 16.0008 19.42C14.5108 19.42 13.3008 18.21 13.3008 16.72C13.3008 16.42 13.5408 16.1801 13.8408 16.1801Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmileysBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 5V10H13C11.35 10 10 11.35 10 13V14H5C3.34 14 2 12.66 2 11V5C2 3.34 3.34 2 5 2H11C12.66 2 14 3.34 14 5Z"
        fill="currentColor"
      />
      <Path
        d="M5.19952 6.63014C4.96952 6.63014 4.72952 6.52013 4.58952 6.31013C4.34952 5.97013 4.42952 5.50015 4.76952 5.26015C5.54952 4.71015 6.59951 4.70013 7.38951 5.24013C7.72951 5.47013 7.81952 5.94017 7.58952 6.28017C7.35952 6.62017 6.88951 6.71012 6.54951 6.48012C6.27951 6.30012 5.91952 6.30013 5.64952 6.49013C5.49952 6.59013 5.34952 6.63014 5.19952 6.63014Z"
        fill="currentColor"
      />
      <Path
        d="M9.19952 6.63014C8.96952 6.63014 8.72952 6.52013 8.58952 6.31013C8.34952 5.97013 8.42952 5.50015 8.76952 5.26015C9.54952 4.71015 10.5995 4.70013 11.3895 5.24013C11.7295 5.47013 11.8195 5.94017 11.5895 6.28017C11.3595 6.62017 10.8895 6.71012 10.5495 6.48012C10.2795 6.30012 9.91952 6.30013 9.64952 6.49013C9.49952 6.59013 9.34952 6.63014 9.19952 6.63014Z"
        fill="currentColor"
      />
      <Path
        d="M8.16078 12.1699H5.84078C5.13078 12.1699 4.55078 11.5899 4.55078 10.8799C4.55078 8.97994 6.10078 7.42993 8.00078 7.42993C8.78078 7.42993 9.55078 7.69994 10.1608 8.18994C10.4808 8.44994 10.5408 8.91993 10.2808 9.23993C10.0208 9.55993 9.55078 9.61992 9.23078 9.35992C8.88078 9.07992 8.46078 8.92993 8.01078 8.92993C7.01078 8.92993 6.18078 9.68992 6.07078 10.6699H8.17078C8.58078 10.6699 8.92078 11.0099 8.92078 11.4199C8.92078 11.8299 8.57078 12.1699 8.16078 12.1699Z"
        fill="currentColor"
      />
      <Path
        d="M18.2207 16.6801C18.1507 16.6001 18.0507 16.5601 17.9407 16.5601H14.0607C13.9507 16.5601 13.8507 16.6001 13.7807 16.6801C13.7107 16.7601 13.6707 16.87 13.6907 16.97C13.8207 18.15 14.8107 19.05 16.0007 19.05C17.1907 19.05 18.1807 18.16 18.3107 16.97C18.3207 16.86 18.2907 16.7601 18.2207 16.6801Z"
        fill="currentColor"
      />
      <Path
        d="M19 10H13C11.35 10 10 11.35 10 13V19C10 20.65 11.35 22 13 22H19C20.65 22 22 20.65 22 19V13C22 11.35 20.65 10 19 10ZM12.59 13.17C12.83 12.83 13.3 12.75 13.64 12.99C13.91 13.18 14.27 13.18 14.54 13C14.88 12.76 15.35 12.85 15.58 13.2C15.81 13.54 15.73 14.01 15.38 14.24C14.99 14.5 14.54 14.64 14.09 14.64C13.62 14.64 13.16 14.5 12.77 14.22C12.43 13.97 12.35 13.5 12.59 13.17ZM16 20.17C14.1 20.17 12.55 18.62 12.55 16.72C12.55 16.01 13.13 15.43 13.84 15.43H18.16C18.87 15.43 19.45 16.01 19.45 16.72C19.45 18.62 17.9 20.17 16 20.17ZM19.38 14.23C18.99 14.49 18.54 14.63 18.09 14.63C17.62 14.63 17.16 14.49 16.77 14.21C16.43 13.97 16.35 13.5 16.59 13.16C16.83 12.82 17.3 12.74 17.64 12.98C17.91 13.17 18.27 13.17 18.54 12.99C18.88 12.75 19.35 12.84 19.58 13.19C19.81 13.54 19.72 14 19.38 14.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmileysLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96001 5.86996C6.43001 5.50996 5.73001 5.50998 5.20001 5.88998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.96 5.86996C10.43 5.50996 9.73001 5.50998 9.20001 5.88998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.15999 11.42H5.83999C5.53999 11.42 5.29999 11.18 5.29999 10.88C5.29999 9.39 6.50999 8.18005 7.99999 8.18005C8.63999 8.18005 9.22999 8.40002 9.68999 8.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.96 13.62C14.43 13.98 13.73 13.98 13.2 13.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.96 13.62C18.43 13.98 17.73 13.98 17.2 13.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.84 16.1801H18.16C18.46 16.1801 18.7 16.42 18.7 16.72C18.7 18.21 17.49 19.42 16 19.42C14.51 19.42 13.3 18.21 13.3 16.72C13.3 16.42 13.54 16.1801 13.84 16.1801Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmileysOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 14.75H6.2C2.78 14.75 1.25 13.22 1.25 9.80005V6.19995C1.25 2.77995 2.78 1.25 6.2 1.25H9.8C13.22 1.25 14.75 2.77995 14.75 6.19995V10C14.75 10.41 14.42 10.74 14.01 10.75C11.61 10.79 10.79 11.62 10.75 14.01C10.74 14.42 10.41 14.75 10 14.75ZM6.2 2.75C3.62 2.75 2.75 3.61995 2.75 6.19995V9.80005C2.75 12.38 3.62 13.25 6.2 13.25H9.29C9.53 10.81 10.81 9.54004 13.25 9.29004V6.19995C13.25 3.61995 12.38 2.75 9.8 2.75H6.2Z"
        fill="currentColor"
      />
      <Path
        d="M5.19952 6.63014C4.96952 6.63014 4.72952 6.52019 4.58952 6.31019C4.34952 5.97019 4.42952 5.50015 4.76952 5.26015C5.54952 4.71015 6.59951 4.70013 7.38951 5.24013C7.72951 5.47013 7.81952 5.94017 7.58952 6.28017C7.35952 6.62017 6.88951 6.71012 6.54951 6.48012C6.27951 6.30012 5.91952 6.30013 5.64952 6.49013C5.49952 6.59013 5.34952 6.63014 5.19952 6.63014Z"
        fill="currentColor"
      />
      <Path
        d="M9.19952 6.63014C8.96952 6.63014 8.72952 6.52019 8.58952 6.31019C8.34952 5.97019 8.42952 5.50015 8.76952 5.26015C9.54952 4.71015 10.5995 4.70013 11.3895 5.24013C11.7295 5.47013 11.8195 5.94017 11.5895 6.28017C11.3595 6.62017 10.8895 6.71012 10.5495 6.48012C10.2795 6.30012 9.91952 6.30013 9.64952 6.49013C9.49952 6.59013 9.34952 6.63014 9.19952 6.63014Z"
        fill="currentColor"
      />
      <Path
        d="M8.16078 12.1702H5.84078C5.13078 12.1702 4.55078 11.5901 4.55078 10.8801C4.55078 8.98013 6.10078 7.43018 8.00078 7.43018C8.78078 7.43018 9.55078 7.70006 10.1608 8.19006C10.4808 8.45006 10.5408 8.92011 10.2808 9.24011C10.0208 9.56011 9.55078 9.61011 9.23078 9.36011C8.88078 9.08011 8.46078 8.93018 8.01078 8.93018C7.01078 8.93018 6.18078 9.69017 6.07078 10.6702H8.17078C8.58078 10.6702 8.92078 11.0102 8.92078 11.4202C8.92078 11.8302 8.57078 12.1702 8.16078 12.1702Z"
        fill="currentColor"
      />
      <Path
        d="M17.8 22.75H14.2C10.78 22.75 9.25 21.22 9.25 17.8V14C9.31 10.81 10.81 9.31 13.99 9.25H17.8C21.22 9.25 22.75 10.78 22.75 14.2V17.8C22.75 21.22 21.22 22.75 17.8 22.75ZM14 10.75C11.62 10.79 10.79 11.62 10.75 14.01V17.8C10.75 20.38 11.62 21.25 14.2 21.25H17.8C20.38 21.25 21.25 20.38 21.25 17.8V14.2C21.25 11.62 20.38 10.75 17.8 10.75H14Z"
        fill="currentColor"
      />
      <Path
        d="M14.0895 14.6301C13.6195 14.6301 13.1595 14.4901 12.7695 14.2101C12.4295 13.9701 12.3495 13.5002 12.5895 13.1602C12.8295 12.8202 13.2995 12.7401 13.6395 12.9801C13.9095 13.1701 14.2695 13.1701 14.5395 12.9901C14.8795 12.7601 15.3495 12.8401 15.5795 13.1901C15.8095 13.5301 15.7295 14.0001 15.3795 14.2301C14.9895 14.5001 14.5395 14.6301 14.0895 14.6301Z"
        fill="currentColor"
      />
      <Path
        d="M18.0895 14.6301C17.6195 14.6301 17.1595 14.4901 16.7695 14.2101C16.4295 13.9701 16.3495 13.5002 16.5895 13.1602C16.8295 12.8202 17.2995 12.7401 17.6395 12.9801C17.9095 13.1701 18.2695 13.1701 18.5395 12.9901C18.8795 12.7601 19.3495 12.8401 19.5795 13.1901C19.8095 13.5301 19.7295 14.0001 19.3795 14.2301C18.9895 14.5001 18.5395 14.6301 18.0895 14.6301Z"
        fill="currentColor"
      />
      <Path
        d="M16.0008 20.1702C14.1008 20.1702 12.5508 18.6201 12.5508 16.7201C12.5508 16.0101 13.1308 15.4302 13.8408 15.4302H18.1608C18.8708 15.4302 19.4508 16.0101 19.4508 16.7201C19.4508 18.6201 17.9008 20.1702 16.0008 20.1702ZM14.0608 16.9302C14.1608 17.9102 14.9908 18.6702 16.0008 18.6702C17.0108 18.6702 17.8308 17.9102 17.9408 16.9302H14.0608Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmileysTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.95922 5.87008C6.42922 5.51008 5.72922 5.5101 5.19922 5.8901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.9592 5.87008C10.4292 5.51008 9.72922 5.5101 9.19922 5.8901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.16078 11.4202H5.84078C5.54078 11.4202 5.30078 11.1801 5.30078 10.8801C5.30078 9.39013 6.51078 8.18018 8.00078 8.18018C8.64078 8.18018 9.23078 8.40014 9.69078 8.77014"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9592 13.6201C14.4292 13.9801 13.7292 13.9801 13.1992 13.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9592 13.6201C18.4292 13.9801 17.7292 13.9801 17.1992 13.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.8408 16.1802H18.1608C18.4608 16.1802 18.7008 16.4201 18.7008 16.7201C18.7008 18.2101 17.4908 19.4202 16.0008 19.4202C14.5108 19.4202 13.3008 18.2101 13.3008 16.7201C13.3008 16.4201 13.5408 16.1802 13.8408 16.1802Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SmileysBold,
  broken: SmileysBroken,
  bulk: SmileysBulk,
  linear: SmileysLinear,
  outline: SmileysOutline,
  twotone: SmileysTwotone,
};

export const SmileysIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
