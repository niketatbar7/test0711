const vscode = require('vscode');

function activate(context) {
  console.log('VSCode Sample Extension 5 is now active!');

  let disposable = vscode.commands.registerCommand('sampleExtension5.insertDateTime', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor found!');
      return;
    }

    const now = new Date();
    const formatted = now.toLocaleString();

    editor.edit(editBuilder => {
      editBuilder.insert(editor.selection.active, formatted);
    });

    vscode.window.showInformationMessage('Inserted current date and time!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
