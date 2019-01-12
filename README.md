# rollup-shaken
Investigate if `classnames` is included in a rollup bundle if a module is imported
from `@material-ui/core` that does not require `classnames`.

## bundles
- bundle.{classnamesImplementation}.{importType}.{moduleType}.js

## Conclusion
Using `import colors from "@material-ui/core/colors";` will correctly exclude the 
`classnames` package from the bundle. However using `import { colors } from "@material-ui/core";`
will include it. But this is due to the fact that rollup will include all components
from `@material-ui/core` which do require `classnames`.

### classnames -> clsx
Using the build from https://github.com/mui-org/material-ui/pull/14152
does not provide any benefit other the the reduced size of that dependency.
To reproduce these results you could use `yarn link @material-ui/core` but you 
have to adjust `namedExports` in `rollup.config.js`.