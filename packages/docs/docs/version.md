---
image: /generated/articles-docs-version.png
id: version
title: VERSION
crumb: "API"
---

You may import this constant to get the current version of Remotion.  
This can be useful for displaying the Remotion version number in your application or for other version-specific operations.

Only the version of the `remotion` package will be reported. A [version conflict](/docs/cli/versions) with other Remotion packages cannot be ruled out.

```ts twoslash title="Importing VERSION from remotion/version"
import { VERSION } from "remotion";

console.log(VERSION); // "4.0.57";
```

You can also import it from `remotion/version` to avoid importing Remotion and its dependencies (React):

```ts twoslash title="Importing VERSION from remotion/version"
import { VERSION } from "remotion/version";

console.log(VERSION); // "4.0.57";
```

## See also

- [Source code for this constant](https://github.com/remotion-dev/remotion/blob/main/packages/core/src/version.ts)
