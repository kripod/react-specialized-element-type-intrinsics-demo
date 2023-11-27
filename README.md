# react-specialized-element-type-intrinsics-demo

A demo showcasing the potential performance gains provided by [this PR towards `@types/react`](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/67430).

## Before

```
> tsc --extendedDiagnostics --project tsconfig.before.json

Files:                          74
Lines of Library:            40612
Lines of Definitions:        24651
Lines of TypeScript:            30
Lines of JavaScript:             0
Lines of JSON:                   0
Lines of Other:                  0
Identifiers:                 59467
Symbols:                    160977
Types:                       11471
Instantiations:             357575
Memory used:               134316K
Assignability cache size:     3461
Identity cache size:            26
Subtype cache size:            423
Strict subtype cache size:       2
I/O Read time:               0.01s
Parse time:                  0.12s
ResolveTypeReference time:   0.00s
ResolveModule time:          0.00s
ResolveLibrary time:         0.01s
Program time:                0.15s
Bind time:                   0.06s
Check time:                  0.41s
printTime time:              0.00s
Emit time:                   0.00s
Total time:                  0.63s
```

## After

```
> tsc --extendedDiagnostics --project tsconfig.after.json

Files:                         74
Lines of Library:           40612
Lines of Definitions:       24651
Lines of TypeScript:           42
Lines of JavaScript:            0
Lines of JSON:                  0
Lines of Other:                 0
Identifiers:                59484
Symbols:                    40024
Types:                       2910
Instantiations:             12050
Memory used:               77305K
Assignability cache size:    1375
Identity cache size:           26
Subtype cache size:            28
Strict subtype cache size:      2
I/O Read time:              0.01s
Parse time:                 0.13s
ResolveTypeReference time:  0.00s
ResolveModule time:         0.00s
ResolveLibrary time:        0.01s
Program time:               0.16s
Bind time:                  0.06s
Check time:                 0.08s
printTime time:             0.00s
Emit time:                  0.00s
Total time:                 0.30s
```
