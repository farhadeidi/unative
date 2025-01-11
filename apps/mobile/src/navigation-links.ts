import { Href } from "expo-router";

type LinkItem = {
  label: string;
  href: Href;
  items?: LinkItem[];
};

export const navigationLinks: LinkItem[] = [
  {
    label: "Core Components",
    href: "/components",
    items: [
      {
        label: "Buttons",
        href: "/components/buttons-demo",
      },
      {
        label: "Text",
        href: "/components/text-demo",
      },
    ],
  },
  {
    label: "Widgets",
    href: "/widgets",
    items: [
      {
        label: "Theme Switch",
        href: "/widgets/theme-switch-demo",
      },
    ],
  },
];
