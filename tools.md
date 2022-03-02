# LIBRARY & TOOLS

## JEST

- https://jestjs.io/docs/api#describename-fn
- https://jestjs.io/docs/expect
- https://github.com/sapegin/jest-cheat-sheet

## TYPEDOC

- https://typedoc.org

## Simple-git-hook:

- https://github.com/toplenboren/simple-git-hooks

### Usage

Add simple-git-hooks to the project

```
npm install simple-git-hooks --save-dev
```

Add simple-git-hooks to your package.json. Fill it with git hooks and the
corresponding commands.

For example:

```json
{ 
    "simple-git-hooks": { 
        "pre-commit": "npx lint-staged", 
        "pre-push": "npm run typecheck",

        // if you'd prefer preserve all unused hooks
        "preserveUnused": true,

        // if you'd prefer preserve specific unused hooks
        "preserveUnused": ["commit-msg"]
    }
}
```

```bash
git config core.hooksPath .git/hooks/
rm -rf .git/hooks
```

```bash
# Update ./git/hooks
npx simple-git-hooks
```

Now all the git hooks are created.

if you change configuration:

```bash
npx simple-git-hooks
```
