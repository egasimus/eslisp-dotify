# eslisp-dotify

Transform macro that implements Clojure-like property access in Eslisp.

## Examples

```
(.-bar     foo)       => (. foo bar)
(.-bar.baz foo)       => (. foo bar baz)
(.bar foo <args>)     => ((. foo bar) <args>)
(.bar.baz foo <args>) => ((. foo bar baz) <args>)
```

И те така те.
