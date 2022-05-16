# random-weight

Randomly pick an array item by weight callback

### Usage

```typescript
import rndw from "random-weighted-ts";
let items = [
  { name: "Alex", weight: 1 },
  { name: "Jonny", weight: 2 },
  { name: "Tom", weight: 3 },
];

console.log(rndw(items, (i) => i.weight).name, " is picked!");
```
