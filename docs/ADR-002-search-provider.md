# ADR-002: Web Search Provider
**Status:** Draft
**Date:** 2025-10-15 19:09:45

## Context
We enrich answers with current context. Options include Tavily or other search APIs.

## Decision (TBD)
- Start with Tavily for speed and simplicity.
- Keep a provider interface to swap vendors without touching business logic.

## Consequences
- One abstraction layer in `/lib/search.ts`.
- Cache results for 5–10 minutes to control costs.
