# Snowflake Cortex Overview

Snowflake Cortex is a collection of managed AI capabilities that can be used with data in Snowflake. It includes SQL and Python functions for common language and document tasks, managed search and analytics services, and tools for building agentic applications.

Cortex can be a fit when data is already in Snowflake and teams want managed AI features that integrate with Snowflake access controls and workflows. It does not remove the need to validate model outputs, design access carefully, or understand feature-specific availability and costs.

## Main Capabilities

### Cortex AI Functions

[Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql) provide managed AI tasks through SQL and Python. Examples include:

- `AI_COMPLETE` for generating responses from text or supported image inputs
- `AI_CLASSIFY` and `AI_FILTER` for classification and natural-language filtering
- `AI_EMBED` and `AI_MULTI_EMBED` for text, image, audio, or video embeddings
- `AI_EXTRACT` and `AI_PARSE_DOCUMENT` for extracting information from text or documents; `AI_PARSE_DOCUMENT` can return text and layout information
- `AI_SENTIMENT`, `AI_SUMMARIZE`, `AI_SUMMARIZE_AGG`, and `AI_AGG` for sentiment, summaries, and analysis across rows
- `AI_REDACT`, `AI_TRANSLATE`, and `AI_TRANSCRIBE` for redaction, translation, and transcription

The supported inputs, models, limits, and availability vary by function. Check the function reference before designing a workflow around a particular input type or model.

### Cortex Search

[Cortex Search](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview) is a managed hybrid search service for text data. It combines semantic and keyword retrieval and is commonly used for enterprise search and retrieval-augmented generation (RAG). Snowflake manages indexing and refresh behavior for the service; teams still need to choose source data, configure access, and account for freshness and service costs.

### Cortex Analyst

[Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst) helps applications translate natural-language questions about structured Snowflake data into SQL. It uses a semantic model or semantic view to describe business concepts and relationships; it is not simply a natural-language interface that can infer business meaning from any database schema. Generated queries should be tested and their results checked for the intended meaning.

### Cortex Agents

[Cortex Agents](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents) orchestrate multi-step requests by selecting and using configured tools. Depending on configuration, tools can include Cortex Analyst, Cortex Search, code execution, custom procedures or functions, and MCP connectors. An agent is not automatically connected to every data source or external service: its effective capabilities depend on its configured tools, permissions, and execution context.

### Snowflake CoCo

[Snowflake CoCo](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code) is Snowflake's AI agent experience for development and data workflows, available through Snowsight and developer tools. Its capabilities and supported clients evolve, so consult the current product documentation before choosing it as a development platform.

## Choosing a Cortex Capability

| Need | Start with | Key consideration |
|------|------------|-------------------|
| Summarize, classify, extract, or transform individual records | [Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql) | Check supported inputs, model availability, and function-specific costs. |
| Search documents or provide context to a language model | [Cortex Search](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview) | Plan for index freshness, access controls, and service costs. |
| Answer questions about structured business data | [Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst) | Invest in a well-designed semantic model or semantic view. |
| Handle multi-step requests across data sources or tools | [Cortex Agents](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents) | Limit configured tools and permissions; evaluate agent behavior. |
| Explore or develop Snowflake data workflows with an AI assistant | [Snowflake CoCo](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code) | Confirm current client support and organizational policies. |

## Security and Data Governance

Cortex features integrate with Snowflake's access-control model, but required privileges and enforcement details differ by feature. Grant only the roles and privileges needed for each workflow, and verify which role and execution context a service or application uses.

Snowflake documents privacy and governance protections for its AI features, including that customer data is not used to train models made available to other customers. This does not mean every feature, model, or configuration has identical data handling or stays in a single region. Cross-region inference and configured external integrations may apply. Review the documentation for the specific feature, model, region, and integrations in use, along with applicable organizational requirements.

Treat generated text, classifications, extracted fields, and SQL as model output: evaluate accuracy and failure modes before using results in consequential or automated workflows. Keep human review where the impact of an incorrect answer warrants it.

## Cost and Availability

There is no single billing rule for all Cortex capabilities. For example, AI Functions are billed according to function-specific consumption, such as tokens or document pages, and the warehouse used to run a query continues to incur compute cost. Managed services and agent workflows can have their own usage and compute costs. Estimate costs for the exact functions, models, data volumes, refresh rates, and services in the design, and monitor actual usage. See [cost considerations for Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql-cost).

Feature and model availability can vary by region, account configuration, and lifecycle status. Preview features may change. Model availability and behavior also evolve; check current documentation and Snowflake behavior-change notices before depending on a specific model or response format.

## Choosing Cortex or an Alternative

Consider Cortex when:

- The relevant data is already in Snowflake and the selected feature supports the workload.
- Snowflake-managed access controls, data workflows, or SQL and Python interfaces fit the team's needs.
- A managed search, text-to-SQL, or agent service is preferable to operating those components independently.

Consider other approaches when:

- A required model, region, input type, or integration is not supported or available.
- The workload depends on specialized model customization, tooling, latency, or infrastructure that Cortex does not provide.
- The design requires direct control over model hosting or orchestration.

Compare the full workflow, including data movement, model and service availability, access controls, evaluation, operational effort, and cost. Consult Snowflake's current documentation for [AI and ML features](https://docs.snowflake.com/en/guides-overview-ai-features) and the feature-specific references above before implementation.

## Before Production

- Test representative inputs, expected outputs, edge cases, and failure modes; do not assume model output is deterministic or correct.
- Verify access using the roles and execution context the production application will use.
- Estimate costs at expected data volumes, request rates, and refresh frequencies, then monitor actual usage.
- Decide how to detect failures, review consequential results, and handle changes to model behavior or feature availability.
