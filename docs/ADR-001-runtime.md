# ADR-001: Runtime Choice (Edge vs Node)
**Status:** Draft
**Date:** 2025-10-15 19:09:45

## Context
We need to choose runtime per API route. Edge is fast and close to the user; Node supports larger deps and longer CPU.

## Decision (TBD)
- Default to Edge for lightweight fetch/compose.
- Fall back to Node for heavier libraries or long-running tasks.

## Consequences
- Mixed runtimes increase complexity but optimize latency.
- Add `runtime` annotations and test both in Preview.
