const vscode = require("vscode");
const { provideHover, provideCompletionItems } = require("./src/helper.js");
const files = [
  "javascript",
  "typescript",
  "javascriptreact",
  "typescriptreact",
  "vue",
  "scss",
  "less",
  "css",
  "sass",
];

function activate(context) {
  console.log("启动成功");

  context.subscriptions.push(
    vscode.languages.registerHoverProvider(files, {
      provideHover,
    })
  );

  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
    })
  );
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
