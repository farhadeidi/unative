import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const TranslateBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.93 2H5.02C3 2 2 3 2 5.02V8.94C2 11 3 12 5.02 11.95H8.94C11 12 12 11 11.95 8.93V5.02C12 3 11 2 8.93 2ZM9.01 9.76C8.33 9.76 7.67 9.5 7.12 9.04C6.5 9.49 5.75 9.76 4.94 9.76C4.53 9.76 4.19 9.42 4.19 9.01C4.19 8.6 4.53 8.26 4.94 8.26C5.96 8.26 6.81 7.56 7.12 6.6H4.94C4.53 6.6 4.19 6.26 4.19 5.85C4.19 5.44 4.53 5.1 4.94 5.1H6.23C6.27 4.72 6.58 4.42 6.97 4.42C7.36 4.42 7.67 4.72 7.71 5.1H7.97C7.98 5.1 7.99 5.1 7.99 5.1H8.01H9C9.41 5.1 9.75 5.44 9.75 5.85C9.75 6.26 9.42 6.6 9 6.6H8.67C8.58 7.08 8.39 7.53 8.14 7.94C8.41 8.14 8.7 8.26 9.01 8.26C9.42 8.26 9.76 8.6 9.76 9.01C9.76 9.42 9.42 9.76 9.01 9.76Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21 19.82 7.57 19.61C7.92 19.4 8.39 19.51 8.6 19.87L9.65 21.62C9.79 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.9985 9.75C21.5885 9.75 21.2485 9.41 21.2485 9C21.2485 6.04 19.1885 3.56 16.4185 2.91L16.6885 3.36C16.8985 3.72 16.7885 4.18 16.4285 4.39C16.0785 4.6 15.6085 4.49 15.3985 4.13L14.3485 2.38C14.2085 2.15 14.2085 1.86 14.3385 1.63C14.4785 1.4 14.7285 1.25 14.9985 1.25C19.2685 1.25 22.7485 4.73 22.7485 9C22.7485 9.41 22.4085 9.75 21.9985 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.9198 11.8516C14.1198 11.8516 11.8398 14.1216 11.8398 16.9316C11.8398 19.7316 14.1098 22.0116 16.9198 22.0116C19.7198 22.0116 21.9998 19.7416 21.9998 16.9316C21.9998 14.1216 19.7298 11.8516 16.9198 11.8516ZM19.3998 19.3416C19.0298 19.5216 18.5798 19.3816 18.3898 19.0016L18.2198 18.6616H15.6298L15.4598 19.0016C15.3298 19.2616 15.0598 19.4116 14.7898 19.4116C14.6798 19.4116 14.5598 19.3816 14.4598 19.3316C14.0898 19.1416 13.9398 18.6916 14.1198 18.3216L16.2598 14.0516C16.3898 13.8016 16.6498 13.6416 16.9298 13.6416C17.2098 13.6416 17.4698 13.8016 17.5998 14.0616L19.7398 18.3316C19.9198 18.7016 19.7698 19.1516 19.3998 19.3416Z"
        fill="currentColor"
      />
      <Path
        d="M16.3789 17.1603H17.4689L16.9189 16.0703L16.3789 17.1603Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TranslateBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1699 17.9099H18.6899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.9196 21.0201C19.0796 21.6301 18.0496 22.0001 16.9296 22.0001C14.1296 22.0001 11.8496 19.73 11.8496 16.92C11.8496 14.12 14.1196 11.8401 16.9296 11.8401C19.7296 11.8401 22.0096 14.11 22.0096 16.92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.95 8.92999C12 11 11 12 8.92999 11.95H5.00999C2.99999 12 2 11 2 8.92999V5.01001C2 2.99001 3 1.98999 5.02 1.98999H8.94C11.01 1.98999 12.01 2.99001 11.96 5.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00922 5.84985H4.94922"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96875 5.16992V5.84991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TranslateBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9198 22.0001C14.1198 22.0001 11.8398 19.7301 11.8398 16.9201C11.8398 14.1201 14.1098 11.8401 16.9198 11.8401C19.7198 11.8401 21.9998 14.1101 21.9998 16.9201C21.9998 19.7301 19.7298 22.0001 16.9198 22.0001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.02 2H8.94C11.01 2 12.01 2.99999 11.96 5.01999V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        fill="currentColor"
      />
      <Path
        d="M9.00969 8.25992C8.69969 8.25992 8.40969 8.13991 8.13969 7.93991C8.38969 7.53991 8.5697 7.08991 8.6597 6.59991H8.99969C9.40969 6.59991 9.74969 6.25991 9.74969 5.84991C9.74969 5.43991 9.40969 5.09991 8.99969 5.09991H8.00969C7.99969 5.09991 7.9897 5.09991 7.9897 5.09991H7.9697H7.7097C7.6697 4.71991 7.3597 4.41992 6.9697 4.41992C6.5797 4.41992 6.26969 4.71991 6.22969 5.09991H4.9397C4.5297 5.09991 4.1897 5.43991 4.1897 5.84991C4.1897 6.25991 4.5297 6.59991 4.9397 6.59991H7.1097C6.8097 7.55991 5.94969 8.25992 4.92969 8.25992C4.51969 8.25992 4.17969 8.59992 4.17969 9.00992C4.17969 9.41992 4.51969 9.75992 4.92969 9.75992C5.73969 9.75992 6.4897 9.48992 7.1097 9.03992C7.6597 9.49992 8.31969 9.75992 8.99969 9.75992C9.40969 9.75992 9.74969 9.41992 9.74969 9.00992C9.74969 8.59992 9.41969 8.25992 9.00969 8.25992Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.56 16.4204 2.91L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.7296 18.3301L17.5896 14.0601C17.4596 13.8101 17.1996 13.6401 16.9196 13.6401C16.6396 13.6401 16.3796 13.8001 16.2496 14.0501L14.1096 18.3201C13.9196 18.6901 14.0696 19.1401 14.4496 19.3301C14.5596 19.3801 14.6696 19.4101 14.7796 19.4101C15.0496 19.4101 15.3196 19.2601 15.4496 19.0001L15.6196 18.6601H18.2096L18.3796 19.0001C18.5696 19.3701 19.0196 19.5201 19.3896 19.3401C19.7696 19.1501 19.9196 18.7001 19.7296 18.3301ZM16.3796 17.1601L16.9295 16.0701L17.4796 17.1601H16.3796Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TranslateLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.06 18.6699L16.92 14.3999L14.78 18.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1699 17.9099H18.6899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9201 22.0001C14.1201 22.0001 11.8401 19.73 11.8401 16.92C11.8401 14.12 14.1101 11.8401 16.9201 11.8401C19.7201 11.8401 22.0001 14.11 22.0001 16.92C22.0001 19.73 19.7301 22.0001 16.9201 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00995 5.84985H4.94995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96997 5.16992V5.84991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98994 5.83984C7.98994 7.58984 6.61994 9.00983 4.93994 9.00983"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TranslateOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.789 19.4199C14.679 19.4199 14.559 19.3899 14.459 19.3399C14.089 19.1499 13.939 18.6999 14.119 18.3299L16.259 14.0599C16.389 13.8099 16.649 13.6499 16.929 13.6499C17.209 13.6499 17.469 13.8099 17.599 14.0699L19.739 18.3399C19.929 18.7099 19.779 19.1599 19.399 19.3499C19.029 19.5399 18.579 19.3899 18.389 19.0099L16.929 16.0799L15.469 19.0099C15.329 19.2699 15.059 19.4199 14.789 19.4199Z"
        fill="currentColor"
      />
      <Path
        d="M18.6801 18.6602H15.1602C14.7502 18.6602 14.4102 18.3202 14.4102 17.9102C14.4102 17.5002 14.7502 17.1602 15.1602 17.1602H18.6801C19.0901 17.1602 19.4301 17.5002 19.4301 17.9102C19.4301 18.3202 19.1001 18.6602 18.6801 18.6602Z"
        fill="currentColor"
      />
      <Path
        d="M16.9198 22.7498C13.7098 22.7498 11.0898 20.1398 11.0898 16.9198C11.0898 13.6998 13.6998 11.0898 16.9198 11.0898C20.1298 11.0898 22.7498 13.6998 22.7498 16.9198C22.7498 20.1398 20.1398 22.7498 16.9198 22.7498ZM16.9198 12.5998C14.5298 12.5998 12.5898 14.5398 12.5898 16.9298C12.5898 19.3198 14.5298 21.2598 16.9198 21.2598C19.2998 21.2598 21.2498 19.3198 21.2498 16.9298C21.2498 14.5398 19.3098 12.5998 16.9198 12.5998Z"
        fill="currentColor"
      />
      <Path
        d="M4.86 12.7003C3.75 12.7003 2.87 12.3902 2.25 11.7902C1.59 11.1502 1.25 10.1802 1.25 8.93024V5.01025C1.25 2.58025 2.59 1.24023 5.02 1.24023H8.94C10.19 1.24023 11.15 1.57023 11.8 2.24023C12.43 2.89023 12.74 3.83027 12.71 5.03027V8.93024C12.74 10.1502 12.43 11.1103 11.78 11.7603C11.13 12.4103 10.17 12.7102 8.92999 12.6902H5.03C4.96 12.7002 4.91 12.7003 4.86 12.7003ZM5.02 2.75024C3.41 2.75024 2.75 3.41026 2.75 5.02026V8.94025C2.75 9.77025 2.92999 10.3702 3.28999 10.7202C3.63999 11.0602 4.20001 11.2103 4.99001 11.2003H8.92999C9.76999 11.2203 10.35 11.0503 10.7 10.7003C11.05 10.3503 11.21 9.76026 11.19 8.95026V5.01025C11.21 4.21025 11.05 3.64022 10.71 3.29022C10.36 2.93022 9.75999 2.75024 8.92999 2.75024H5.02Z"
        fill="currentColor"
      />
      <Path
        d="M8.99945 6.59961H4.93945C4.52945 6.59961 4.18945 6.25961 4.18945 5.84961C4.18945 5.43961 4.52945 5.09961 4.93945 5.09961H8.99945C9.40945 5.09961 9.74945 5.43961 9.74945 5.84961C9.74945 6.25961 9.41945 6.59961 8.99945 6.59961Z"
        fill="currentColor"
      />
      <Path
        d="M6.98047 6.59991C6.57047 6.59991 6.23047 6.25991 6.23047 5.84991V5.16992C6.23047 4.75992 6.57047 4.41992 6.98047 4.41992C7.39047 4.41992 7.73047 4.75992 7.73047 5.16992V5.84991C7.73047 6.25991 7.39047 6.59991 6.98047 6.59991Z"
        fill="currentColor"
      />
      <Path
        d="M4.93945 9.75983C4.52945 9.75983 4.18945 9.41983 4.18945 9.00983C4.18945 8.59983 4.52945 8.25983 4.93945 8.25983C6.20945 8.25983 7.23946 7.17984 7.23946 5.83984C7.23946 5.42984 7.57946 5.08984 7.98946 5.08984C8.39946 5.08984 8.73946 5.42984 8.73946 5.83984C8.73946 7.99984 7.03945 9.75983 4.93945 9.75983Z"
        fill="currentColor"
      />
      <Path
        d="M9.01042 9.76007C8.08042 9.76007 7.19043 9.29008 6.56043 8.46008C6.31043 8.13008 6.38043 7.66003 6.71043 7.41003C7.04043 7.16003 7.51042 7.23005 7.76042 7.56005C8.10042 8.02005 8.55042 8.27008 9.01042 8.27008C9.42042 8.27008 9.76042 8.61008 9.76042 9.02008C9.76042 9.43008 9.42042 9.76007 9.01042 9.76007Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.55997 16.4204 2.90997L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TranslateTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1699 17.9102H18.6899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00922 5.8501H4.94922"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96875 5.16992V5.84991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TranslateBold,
  broken: TranslateBroken,
  bulk: TranslateBulk,
  linear: TranslateLinear,
  outline: TranslateOutline,
  twotone: TranslateTwotone,
};

export const TranslateIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
