# ng-emojis

Take your Angular templates to the next level and make them more expressive by using emojis.

In total there are 3,019 emojis in the Unicode Standard as of March 2019. They are great to express intent and to convey feelings and mood. So why not use emojis in our code as well?

This project aims to provide an expressive layer on top of Angular that makes it possible to use emojis as a drop-in replacement for some built-in directives, such as `*ngIf`, `*ngFor`, or `ngModel`.

For example, instead of:

```html
<div *ngIf="someCondition">Text</div>
```

we can now use an emoji:

```html
<div 🙈="someCondition">Text</div>
```

Fun!

And that's also where it stops!

**⚠️ Disclaimer ⚠️**

This library is a **fun experiment** and its goal is to demonstrate how we can _hack_ the Angular compiler to implement a custom template syntax.

**Can I use it?** Not really. This is not a library. However, you can clone the repo and play around with it and take a closer look at the implementation. The syntax only works in JIT mode.

If you want a similar thing that is more useful, check out [ngx-template-streams](https://github.com/typebytes/ngx-template-streams). It follows the same implementation but is feature rich and works for both JIT and AOT, as well as ViewEngine and Ivy. It's a small and lightweight library that provides a simple DSL enabling event streams in templates. In other words, this library will supercharge your templates with Observables.

## Quickstart

If you wanna dabble with the code and see the emojis in action then

1. `clone` the repo
2. run `yarn` to install all dependencies
3. serve the app by running `yarn start`

Alternatively, you can also start the app in debug mode with `yarn start:debug`.

Have fun! And start using emojis 👍.

## Supported Directives

- 🙈: `*ngIf`
- 🔁: `*ngFor`
- 💅: `ngStyle`
- 🍌: `(ngModel)`

## 📄 Licence

MIT License (MIT) © [Dominic Elm](https://github.com/d3lm) and [Kwinten Pisman](https://github.com/KwintenP)
