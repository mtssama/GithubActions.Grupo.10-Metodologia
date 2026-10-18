# Demo GitHub Actions – Equipo 6

![CI](https://github.com/mtssama/GithubActions.Grupo.10-Metodología/actions/workflows/ci.yml/badge.svg)

SPA mínima + suite de Playwright, con un workflow de CI que actúa como quality gate en los pull requests.

## Correr los tests en local

```bash
npm install
npx playwright install --with-deps
npm test
```
