# [Kernel Community](https://kernel.community)

This repo hosts the code for a new type of online learning environment, which mixes a 
spaced repetition memory system with a token model on Ethereum so that anyone can learn 
for free, while still ensuring that we can all generate some income (rather than perpetuating 
endless student debt cycles).

## Getting Started

**Dependencies**

1. Yarn
2. Node v13 or higher (we recommend [nvm](https://github.com/nvm-sh/nvm))

```
git clone https://github.com/kernel-community/kernel-v2.git
cd kernel-v2
yarn
cp .env.example .env
yarn start
```

If you're working locally on any smart contract related work, you may deploy the
desired contracts locally and set their addresses in your .env file.

```
GATSBY_LOCAL_DESCHOOL_ADDRESS="your-address-here"
GATSBY_LOCAL_LEARNING_CURVE_ADDRESS="your-address-here"
GATSBY_LOCAL_DAI_ADDRESS="your-address-here"
```

Check out the `guiding` directory under `content/en` for everything you could possibly need to know about how to work with this site, from a cheatsheet and component palette, to detail about how translations, search, and navigation are handled.

## Roadmap

This is a **rough outline** of the next steps to meet the vision above. Many of these steps can/may happen in parallel. All of them will be detailed in our project board.

- [x] Fix all current styling issues to make this new site match closely the old one.
- [x] Model smart contracts fully and write a formal spec. Figure out checkpoint verification mechanism.
- [x] Write some good blog pieces and structure that section correctly.
- [x] Write flashcard content and build `flashcard` React component.
- [x] Soft launch: no signups or actual spaced repetitive tracking. Anyone can use the flashcards simply as fun additions to the text.
- [ ] Build backend with email notifications and spaced tracking. Build `register` React component. Wire up `flashcards` to use the backend tracking.
- [ ] Finish writing and testing contracts. Get some Kernel friends to audit them.
- [ ] Build `redeem` React component and do all the testing on Kovan/Ropsten/whatever test net.
- [ ] **Much wow!**

While we may or may not stick to the plan above, you can be sure that our intention is to launch Kernel V2 _Soon™️_.
