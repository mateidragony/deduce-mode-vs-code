// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

/* Constants */
const TERMINAL_NAME = "Deduce";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  const runCommand = vscode.commands.registerCommand('deduceMode.runFile', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const filePath = editor.document.uri.fsPath;
      const config = vscode.workspace.getConfiguration("deduce-mode")
      const python = config.get("pythonInstallPath")
      const deduce = config.get("deduceInstallPath")

      editor.document.save()

      if (!python) {
        vscode.window.showErrorMessage("`deduce-mode.pythonInstallPath` not set", "Open Settings")
        .then(selection => {
          if (selection == "Open Settings") {
            vscode.commands.executeCommand( 'workbench.action.openSettings', 'deduce-mode.pythonInstallPath' );
          }
        });
      }
      if (!deduce) {
        vscode.window.showErrorMessage("`deduce-mode.deduceInstallPath` not set", "Open Settings")
        .then(selection => {
          if (selection == "Open Settings") {
            vscode.commands.executeCommand( 'workbench.action.openSettings', 'deduce-mode.deduceInstallPath' );
          }
        });
      }

      if (!python || !deduce) { return; }

      const terminalCommand = `${python} ${deduce}/deduce.py ${filePath} --dir ${deduce}/lib`

      let terminal = vscode.window.terminals.find(t => t.name === TERMINAL_NAME);
      if (!terminal) {
        terminal = vscode.window.createTerminal(TERMINAL_NAME);
      }

      // Show the terminal and execute the command
      terminal.show();
      terminal.sendText(terminalCommand);
    }
  });

  context.subscriptions.push(runCommand);
}

// this method is called when your extension is deactivated
function deactivate() { }

// eslint-disable-next-line no-undef
module.exports = {
  activate,
  deactivate
}