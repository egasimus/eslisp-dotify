# eslisp-dotify

Transform macro for [Eslisp](https://github.com/anko/eslisp). Implements a
shorthand syntax for property access and method calls, similar to the
corresponding features in [Clojure](http://clojure.org/java_interop#dot)
or [Wisp](github.com/gozala/wisp). Nicely complements [eslisp-propertify](https://github.com/anko/eslisp-propertify).

[![NPM](https://img.shields.io/npm/v/eslisp-dotify.svg)](https://www.npmjs.com/package/eslisp-dotify)
[![Gitter](https://img.shields.io/badge/chat-gitter_%E2%86%92-blue.svg)](https://gitter.im/anko/eslisp)

## Examples

```
(.-baz      (foo bar))       => (. (foo bar) baz)
(.-baz.quux (foo bar))       => (. (foo bar) baz quux)
(.baz (foo bar) <args>)      => ((. (foo bar) baz) <args>)
(.baz.quux (foo bar) <args>) => ((. (foo bar) baz quux) <args>)
```

И те така те....
