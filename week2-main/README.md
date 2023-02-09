# Week2

create and application that receives two parameters
a file name
an option flag

the application code or decodes a text file using run length encoding

the CLI application is now completed:

    It takes a -p flag and a -o flag, both flags are required
    The -p flag it's a path to the text file the user wants to code or decode
    The -o flag can take one of the following two parameters:
        e for encode to encode a non coded file and d for decode to decode a previously encoded file
    If the file was already coded, decoded or was corrupted it will throw an error stating it
    If no commands are given yargs .showHelp will appear in console
