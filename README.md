# eslisp-dotify

Transform macro that implements Clojure-like syntax for property access and
method calls in Eslisp. Complements [eslisp-propertify](https://github.com/anko/eslisp-propertify).

## Examples

```
(.-baz      (foo bar))       => (. (foo bar) baz)
(.-baz.quux (foo bar))       => (. (foo bar) baz quux)
(.baz (foo bar) <args>)      => ((. (foo bar) baz) <args>)
(.baz.quux (foo bar) <args>) => ((. (foo bar) baz quux) <args>)
```

И те така те....
