type NavLink = {
  href: string;
  title: string;
  items?: NavLink[];
};

export const docsNavigationLinks: NavLink[] = [
  {
    href: "/docs",
    title: "Docs",
    items: [
      {
        href: "/docs/introduction",
        title: "Introduction",
      },
      {
        href: "/docs/tasks",
        title: "Tasks & Roadmap",
      },
    ],
  },
  {
    href: "/docs/setup",
    title: "Setup",
    items: [
      {
        href: "/docs/setup/react-native-expo",
        title: "Expo - React Native",
      },
      {
        href: "/docs/setup/next",
        title: "NextJS",
      },
      {
        href: "/docs/setup/monorepo",
        title: "Monorepo - Turborepo",
      },
      {
        href: "/docs/setup/theming",
        title: "Theming",
      },
      {
        href: "/docs/setup/your-first-component",
        title: "First universal component",
      },
    ],
  },
];

export const getDocumentNextAndPrevLinks = ({
  currentPath,
}: {
  currentPath: string;
}) => {
  const flatLinks = docsNavigationLinks.flatMap(
    (group) => group.items,
  ) as NavLink[];
  const totalItems = flatLinks.length;
  const itemIndex = flatLinks.findIndex((item) => item.href === currentPath);

  if (itemIndex === -1) {
    return {
      nextItem: undefined,
      prevItem: undefined,
    };
  }

  const nextItem =
    itemIndex === totalItems - 1 ? undefined : flatLinks[itemIndex + 1];
  const prevItem = itemIndex === 0 ? undefined : flatLinks[itemIndex - 1];

  return { nextItem, prevItem };
};
