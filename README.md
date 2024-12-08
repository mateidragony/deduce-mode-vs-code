# deduce-mode

deduce-mode exists to  moderately improve the experience of writing [Deduce](https://github.com/jsiek/deduce/) in VS Code.

## Features

- Syntax Highlighting
- File icons
- Line Indentation
- Autorun
- Snippets

More to come!
- Configuration for deduce command line flags
- Semantic Highlighting
- Auto-formatter

## Installation
We are now on the marketplace! [link](https://marketplace.visualstudio.com/manage/publishers/calvinjosenhans/extensions/deduce-mode/hub?_a=acquisition)

### From File
To get the extension, download the latest `.vsix` file from [releases](https://github.com/HalflingHelper/deduce-mode/releases) 
and put it somewhere you'll remember. You can then add it as an extension in vscode.
![image](https://github.com/user-attachments/assets/7c840dbd-d781-4e3d-aa91-6606d4ff8bff)


## Requirements
Preferably you will have installed Deduce and Python 3.10+, otherwise the extension is not of much use to you. 😃

If the `ms-python.python` extension is installed, and you have not set a Python path to use for deduce, then the extension
will attempt to use a Python environment provided by that extension.


## Extension Settings
This extension contributes the following settings:
- `deduce-mode.pythonInstallPath`: The location of the Python executable you want to run Deduce with. Default `python`.
- `deduce-mode.deduceInstallPath`: The location of your `deduce.py` file.

## Known Issues
- Nothing right now!

## Release Notes

### 0.1.1
Updated tokenization and 

### 0.1.0
Somewhat usable software: Improved settings and errors, and expanded readme.

### 0.0.5
Touchups for release on the extension marketplace.

### 0.0.4
Improved run command and expanded token scopes for variable names and non-unicode operators.

### 0.0.3
Added support for basic line indentation and a run command.

### 0.0.2
Added file icons.

### 0.0.1
Prerelease: Minimal syntax highlighting support.
