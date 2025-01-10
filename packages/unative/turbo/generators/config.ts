import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("unative-component", {
    description: "Generate component in unative package",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of the new component to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Component name cannot include an extension.";
          }
          if (input.includes(" ")) {
            return "Component name cannot include spaces.";
          }
          if (!input) {
            return "Component name is required.";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/ui/{{ dashCase componentName }}/web.tsx",
        templateFile: "templates/web-template.hbs",
      },
      {
        type: "add",
        path: "./src/components/ui/{{ dashCase componentName }}/native.tsx",
        templateFile: "templates/native-template.hbs",
      },
      {
        type: "add",
        path: "./src/components/ui/{{ dashCase componentName }}/variants.tsx",
        templateFile: "templates/variants-template.hbs",
      },
      {
        type: "add",
        path: "./src/components/ui/{{ dashCase componentName }}/index.ts",
        templateFile: "templates/index-template.hbs",
      },
    ],
  });
}
