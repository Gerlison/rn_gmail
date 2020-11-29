# RN_GMAIL

[![GitHub](https://img.shields.io/github/license/Gerlison/rjs_scrum_board)](https://github.com/Gerlison/rn_gmail/blob/master/docs/LICENSE)

A Gmail clone made with React Native and [rn-boilerplate-ts@0.0.2](https://www.npmjs.com/package/@gerlison/rn-boilerplate-ts)

## Table of Contents

- [Installation](#installation)
  - [Cloning the repository](#cloning-the-repository)
  - [Installing dependencies](#installing-dependencies)
  - [Running](#running)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
  - [Create a fork](#create-a-fork)
  - [Git Flow](#git-flow)
  - [Open a Pull Request](#open-a-pull-request)

## Installation

### Cloning the repository

Clearly you'll need [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your machine.
Navigate to a directory of your choice and clone the repository.

```bash
  $ git clone https://github.com/Gerlison/rn_gmail.git
```

### Installing dependencies

After cloned, navigate inside the project. Change "project_folder" to the folder just created by the `clone` command

```bash
  $ cd project_folder/
```

You'll need to install the project's dependencies now. To do that just:

```bash
  $ yarn
  $ cd ios/
  $ pod install
```

In case you haven't any of them installed, here some the links for install [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable).

### Running

> Be sure you have a running simulator/emulator or a device conected.

```bash
  # for development
  $ yarn android
  # or
  $ yarn ios

  # for production android builds
  $ cd android
  $ ./gradlew assembleRelease
```

---

## Screenshots

|                                                                                                    |                                                                                                    |                                                                                                    |                                                                                                    |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./docs/assets/screenshot1.png"> | <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./docs/assets/screenshot2.png"> | <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./docs/assets/screenshot3.png"> | <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="./docs/assets/screenshot4.png"> |

---

## Contributing

### Create a fork

To contribute to a open source project, you can do a fork from the source code, do your own changes on a copy without compromising the original.

If you don't know how to do that, follow this [guide](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo).

### Git Flow

_GitFlow is a branching model for Git, created by Vincent Driessen. It has attracted a lot of attention because it is very well suited to collaboration and scaling the development team._

So, in my projects I always try to use that. It's very useful and helps to control what is happing to the code base.

Read a little bit more [about this](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

### Open a Pull Request

With all your changes done, and you are ready to contribute, open a pull request to the _upstream_ `develop` branch. Your PR will be analysed, discuted and aproved gratefuly.

> About [pull requests](https://help.github.com/pt/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
