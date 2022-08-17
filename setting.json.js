{
    "workbench.colorTheme": "Dracula Soft",
    "terminal.integrated.profiles.windows": {
        "PowerShell": { "source": "PowerShell", "icon": "terminal-powershell" },
        "Command Prompt": {
          "path": [
            "F:\\programs\\Git\\bin\\bash.exe",
          ],
          "args": [],
          "icon": "terminal-bash"
        },
        "GitBash": {
          "path": ["F:\\programs\\Git\\bin\\bash.exe"],
          "source": "Git Bash",
          "icon": "terminal-bash"
        },
    },
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
    "workbench.editor.enablePreview": false,
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 18,
    "files.autoSave": "onFocusChange",
    "code-runner.runInTerminal": true,
    "code-runner.saveAllFilesBeforeRun": true,
    "code-runner.saveFileBeforeRun": true,
    "code-runner.terminalRoot": "/",
    "code-runner.defaultLanguage": "c",
    "code-runner.executorMap": {
        "javascript": "node",
        "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
        "c": "cd $dirWithoutTrailingSlash && gcc -std=c11 $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
        "cpp": "cd $dirWithoutTrailingSlash && g++ -std=c++11 $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
        "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "php": "php",
        "python": "python -u",
        "perl": "perl",
        "perl6": "perl6",
        "ruby": "ruby",
        "go": "go run",
        "lua": "lua",
        "groovy": "groovy",
        "powershell": "powershell -ExecutionPolicy ByPass -File",
        "bat": "cmd /c",
        "shellscript": "bash",
        "fsharp": "fsi",
        "csharp": "scriptcs",
        "vbscript": "cscript //Nologo",
        "typescript": "ts-node",
        "coffeescript": "coffee",
        "scala": "scala",
        "swift": "swift",
        "julia": "julia",
        "crystal": "crystal",
        "ocaml": "ocaml",
        "r": "Rscript",
        "applescript": "osascript",
        "clojure": "lein exec",
        "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
        "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
        "racket": "racket",
        "scheme": "csi -script",
        "ahk": "autohotkey",
        "autoit": "autoit3",
        "dart": "dart",
        "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
        "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
        "haskell": "runhaskell",
        "nim": "nim compile --verbosity:0 --hints:off --run",
        "lisp": "sbcl --script",
        "kit": "kitc --run",
        "v": "v run",
        "sass": "sass --style expanded",
        "scss": "scss --style expanded",
        "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
        "FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
    },
    "code-runner.executorMapByGlob": {
        "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
        "pom.xml": "cd $dir && mvn clean package"
    },
    "code-runner.fileDirectoryAsCwd": true,
    "code-runner.ignoreSelection": true,
    "code-runner.languageIdToFileExtensionMap": {
        "c":".c",
        "bat": ".bat",
        "powershell": ".ps1",
        "typescript": ".ts",
        "javascript": ".js"
    },
    "code-runner.temporaryFileName": "",
    "workbench.iconTheme": "vscode-great-icons",
    "editor.defaultFormatter": "remimarsal.prettier-now",
    "editor.formatOnSave": true,
    "editor.formatOnSaveMode": "modifications",
    "editor.minimap.enabled": false,
    "security.workspace.trust.untrustedFiles": "open",
    "workbench.editorAssociations": {
      "*.json": "default"
    },
    "typescript.updateImportsOnFileMove.enabled": "always",
    "window.menuBarVisibility": "compact",
}