# RUNBOOK — HomeRates-Next
**Updated:** 2025-10-15 19:09:45

## If the UI is blank (white screen)
1) Open DevTools → Console for runtime errors.
2) Check /api/health and /api/version endpoints in the same env.
3) Confirm environment vars set in Vercel (Preview vs Prod).
4) Clear edge cache (Preview redeploy) and hard refresh.

## If /api/answers fails
- Inspect Vercel function logs.
- Verify FRED / Search API keys.
- Toggle runtime Node vs Edge and retest.
