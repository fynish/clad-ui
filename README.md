```
      ___  _           _       _
     / __|/ | __ _  __| |/\ /\| |
    / /   | |/ _| |/ _| / / \ \ |
   / /___ | | (_| | (_| \ \_/ / |
   \____/ |_|\__,_|\__,_|\___/|_|
       REACT / UI  EXPERIMENT
```

## About

This is a UI trial subject to be discontinued and deleted at any point. Please do not rely on this code to be suitable for any purpose.

---
## How to Use

See [The Future of CladUI](the-future-of-cladui) before using. To use this package:

- Add the `@fynish` registry line from our `.npmrc` file to your project's `.npmrc` file.
- `yarn add` or `npm install` `@fynish/clad-ui@0.1.0`

---
## The Future of CladUI

Rather than publicly launch a zero-ver package that we later abandon, we are conducting internal testing of CladUI using Github packages. This is to intentionally make it hard for people to use this package without realizing it is still in beta.

The two most likely possible outcomes of our testing are:

1. We decide maintaining our own UI library is not useful for our work flow. In this case, we will probably remove this repo.
2. We find CladUI useful, launch it as an NPM package, and switch it to a maintained, [semver](https://semver.org/) project.

In the interim, we welcome PRs from anyone. However, this is a WIP project without a set direction. If you are going to use this code, please expect abrupt changes in direction and breaking changes until/if this reaches version 1.0. 

It's easy to think, "It'll be fine. I'll just stick this in my Prod app, and things will settle down soon." It won't be fine. Don't use CladUI in important production applications. With the MIT license, you can freely do so, but bad things are likely to happen when you rely on projects that are not at least 1.0 semver.

---
###### Copyright © 2018 - 2021. Released under a [MIT License](https://opensource.org/licenses/MIT).
