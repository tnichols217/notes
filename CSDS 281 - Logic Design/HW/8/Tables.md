```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR
subgraph X
01[0] --->|a=1| 02[0]
01 ---> 01
end
```
