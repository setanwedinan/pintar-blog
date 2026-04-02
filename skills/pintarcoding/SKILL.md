# Pintar Coding - Site Optimization Audit

A sub-agent for running comprehensive site optimization audits in parallel.

## What This Does

Runs parallel audits for:
- **Performance/Build** - Load times, bundle size, image optimization
- **Accessibility** - ARIA labels, keyboard nav, screen reader support
- **SEO** - Meta tags, structured data, Lighthouse SEO score
- **Code Quality** - Linting, formatting, unused code, best practices

## How to Use

From main session:
```
run pintarcoding audit <site-path>
```

Or spawn directly:
```
pintarcoding audit <site-path>
```

## The Workflow

1. **Analyze** the target site/project
2. **Spawn 4 parallel agents** (one per audit domain)
3. **Collect results** from all agents
4. **Generate report** with findings and fixes
5. **Update pintarcoding.md** with changes made
6. **Persist fixes** to files where appropriate

## Output

- Summary report in pintarcoding.md
- Individual agent findings tracked
- Reusable for future audits

## File Tracking

pintarcoding.md maintains:
- Audit history (date, site, scores)
- Changes made (files modified, issues fixed)
- Recommendations for future runs
