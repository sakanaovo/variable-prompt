const vscode = require("vscode");
const variableMap = require("./variableMap");
const VARIABLE_RE = /--tsl(?:[\w-]+)?/;
function provideHover(document, position) {
  const lineText = document.lineAt(position.line).text;
  const regex = /--[\w-]+/g;
  const match = lineText.match(regex);
  const word = match[0];
  console.log("lineText", word);
  if (match.length > 0 && word.includes("--tsl")) {
    const completeVariable = match.find((variable) => variable.includes(word));
    const hoverText = variableMap[completeVariable];
    if (hoverText) {
      return new vscode.Hover(hoverText);
    }
  }
}

function provideCompletionItems(document, position) {
  const lineText = document.lineAt(position.line).text;

  const match = lineText.match(VARIABLE_RE);
  if (
    lineText.includes("tsl") ||
    match ||
    lineText.includes("--tsl") ||
    lineText.includes("t")
  ) {
    // 拿到 variableMap 中的所有变量
    const variables = Object.keys(variableMap);
    const completionItems = variables.map((variable) => {
      const item = new vscode.CompletionItem(variable);
      const color = variableMap[variable];
      item.detail = color;
      // 给detail 添加注释
      const formattedDetail = `这是一个颜色变量，值为 ${color}`;
      // 创建一个 MarkdownString
      const markdownString = new vscode.MarkdownString();

      // 添加普通文本和代码块
      markdownString.appendText(formattedDetail);
      // 将注释转换为 markdown 格式
      item.documentation = markdownString;
      item.kind = vscode.CompletionItemKind.Color;
      return item;
    });
    return completionItems;
  }
  return [];
}

module.exports = {
  provideHover,
  provideCompletionItems,
};
