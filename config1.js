const config1 = {
  tabWidth: 2,
  useTabs: true,
  semi: true,
  overrides: [
    {
      files: ["*.html", "*.ts", "*.js"],
      options: {
        semi: true,
        singleQuote: true,
        trailingComma: "all",
        tabWidth: 4,
        printWidth: 100,
        arrowParens: "avoid",
        jsxSingleQuote: true,
        jsxBracketSameLine: false,
        endOfLine: "auto",
      },
    },
    {
      files: "*.vue",
      options: {
        semi: true,
      },
    },
  ],
};

export { config1 };
