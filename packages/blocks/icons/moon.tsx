import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MoonBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoonBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.18073 5.37996C2.67073 7.29996 1.84073 9.75996 2.03073 12.42C2.39073 17.57 6.76073 21.76 11.9907 21.99C15.6807 22.15 18.9807 20.43 20.9607 17.72C21.7807 16.61 21.3407 15.87 19.9707 16.12C19.3007 16.24 18.6107 16.29 17.8907 16.26C13.0007 16.06 9.00073 11.97 8.98073 7.13996C8.97073 5.83996 9.24073 4.60996 9.73073 3.48996C10.2707 2.24996 9.62073 1.65996 8.37073 2.18996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoonBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoonLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoonOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.4604 22.7501C12.2904 22.7501 12.1204 22.7501 11.9504 22.7401C6.35044 22.4901 1.67044 17.9801 1.28044 12.4801C0.940437 7.76011 3.67044 3.35011 8.07044 1.50011C9.32044 0.980114 9.98044 1.38011 10.2604 1.67011C10.5404 1.95011 10.9304 2.60011 10.4104 3.79011C9.95044 4.85011 9.72044 5.98011 9.73044 7.14011C9.75044 11.5701 13.4304 15.3301 17.9204 15.5101C18.5704 15.5401 19.2104 15.4901 19.8304 15.3801C21.1504 15.1401 21.7004 15.6701 21.9104 16.0101C22.1204 16.3501 22.3604 17.0801 21.5604 18.1601C19.4404 21.0601 16.0704 22.7501 12.4604 22.7501ZM2.77044 12.3701C3.11044 17.1301 7.17044 21.0301 12.0104 21.2401C15.3004 21.4001 18.4204 19.9001 20.3404 17.2801C20.4904 17.0701 20.5604 16.9201 20.5904 16.8401C20.5004 16.8301 20.3404 16.8201 20.0904 16.8701C19.3604 17.0001 18.6004 17.0501 17.8504 17.0201C12.5704 16.8101 8.25044 12.3801 8.22044 7.16011C8.22044 5.78011 8.49044 4.45011 9.04044 3.20011C9.14044 2.98011 9.16044 2.83011 9.17044 2.75011C9.08044 2.75011 8.92044 2.77011 8.66044 2.88011C4.85044 4.48011 2.49044 8.30011 2.77044 12.3701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoonTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MoonBold,
  broken: MoonBroken,
  bulk: MoonBulk,
  linear: MoonLinear,
  outline: MoonOutline,
  twotone: MoonTwotone,
};

export const MoonIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
