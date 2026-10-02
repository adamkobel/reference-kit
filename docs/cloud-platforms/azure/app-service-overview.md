# Azure App Service Overview

Azure App Service is a managed platform for hosting web applications, REST APIs, and backend services without managing the underlying operating system or web server. It supports common application stacks, containerized workloads, custom domains, TLS, deployment automation, scaling, and integrated monitoring.

App Service is a good fit when a team wants managed hosting for a web-facing application and does not need to manage virtual machines. It is less suitable when the workload requires full operating-system control, specialized infrastructure, or a platform model that is fundamentally different from a web application or API.

## The Resource Model

An App Service deployment is built from several related Azure resources:

- **Subscription:** The billing and governance boundary that contains resource groups and resources.
- **Resource group:** A logical management boundary for related resources, such as an app, its plan, monitoring, database, and networking components.
- **App Service plan:** Defines the compute resources, operating system, region, pricing tier, and scaling capacity used by one or more apps.
- **App:** The deployable web application or API. Its code, runtime configuration, domains, certificates, and access settings belong to the app.
- **Deployment slot:** A live app environment associated with an app, commonly used for staging and production-safe releases.

The app and its App Service plan are separate resources, but an app cannot run without a plan. Other services, such as Azure SQL Database, Storage, Key Vault, Application Insights, and virtual networks, may support the application but are not part of App Service itself.

## App Service Plans

An App Service plan is the hosting boundary for an app. It determines the underlying compute allocation and several platform capabilities, while the app determines the application code and app-specific configuration.

Apps in the same plan share:

- The same region and operating system family
- The plan's pool of compute instances
- The plan's scaling operations and instance count
- The plan's pricing boundary

This sharing makes it possible to host multiple related apps efficiently, but it also creates a capacity and reliability tradeoff. A resource-intensive app can affect other apps in the same plan, and scaling the plan affects all of its apps. Separating apps into different plans provides stronger isolation and independent scaling at additional cost.

### Plan Families

Azure plan names and capabilities change over time, so the Azure portal and current product documentation should be used for exact limits and pricing. The broad plan families are:

- **Shared compute:** Free and Shared tiers are intended for experimentation, development, and low-demand scenarios. They have limited capacity and are not a general production target.
- **Dedicated compute:** Basic, Standard, Premium, and newer Premium variants run on dedicated App Service compute. They progressively add production features such as more capacity, autoscaling, deployment slots, backups, networking options, and stronger performance characteristics.
- **Isolated compute:** Isolated tiers run in an App Service Environment (ASE), providing dedicated and more isolated hosting with additional networking control. They are intended for workloads with demanding isolation, compliance, scale, or network placement requirements.

Plan tiers are not simply performance labels. They also control which platform features are available. When choosing a tier, evaluate the required features, isolation, availability design, scale range, and operational model along with expected traffic.

### Choosing a Plan

A practical decision sequence is:

1. Start with the runtime, operating system, region, and networking requirements.
2. Identify production capabilities such as custom domains, TLS, slots, backups, autoscale, private connectivity, and zone or instance resilience.
3. Estimate steady-state and peak resource needs, including memory, CPU, storage, and outbound connections.
4. Decide which apps can safely share a plan and which need independent capacity or scaling.
5. Confirm current pricing, quotas, regional availability, and feature support for the selected tier.

Moving an app to another plan changes its compute and billing boundary. It can be useful for separating workloads or changing capacity, but it should be considered an operational change and validated against region, operating system, networking, and feature requirements.

## Scaling and Availability

App Service supports two main forms of scaling:

- **Scale up:** Change the plan tier to obtain different compute characteristics or platform capabilities.
- **Scale out:** Add or remove instances within the plan so requests can be distributed across more workers.

Autoscale can adjust the instance count based on metrics or schedules. Scaling out improves capacity for stateless workloads, but it does not automatically make application state safe to share. Sessions, uploaded files, caches, background work, and database connections should use suitable external services or coordination mechanisms when multiple instances are involved.

The plan is an important availability boundary. Multiple apps sharing a plan also share its instance pool, so a capacity problem or plan-level operation can affect all of them. For higher resilience, use multiple instances, health checks, suitable deployment practices, and an architecture that accounts for regional and service dependencies. App Service is not a replacement for designing application-level reliability.

## Application Configuration and Deployment

An App Service app has a managed runtime environment. The application team typically selects a supported language stack or deploys a container image, then configures the app through platform settings and application files.

Important configuration areas include:

- Application settings and connection strings
- Runtime stack, startup behavior, and platform version
- Environment-specific values that should not be committed to source control
- Managed identity access to services such as Key Vault or Storage
- Custom domains, certificates, and TLS settings
- Health checks and access restrictions

Common deployment approaches include source control integration, CI/CD pipelines, package-based deployment, container registries, and infrastructure automation. The important design goal is repeatability: application artifacts and infrastructure configuration should be versioned and promoted through environments rather than changed manually as the primary release process.

### Deployment Slots

Deployment slots are separate live environments for the same app, such as `staging` and `production`. They are useful for validating a release before directing production traffic to it.

A typical slot workflow is:

1. Deploy the new version to a non-production slot.
2. Warm the application and run health or smoke checks.
3. Swap the slot with production.
4. Monitor the result and swap back if a rollback is needed.

Slot swaps do not remove the need for backward-compatible database migrations, external service coordination, or application observability. Some settings can be marked as deployment-slot-specific so that secrets and environment-specific values remain with their slot.

## Networking and Security Fundamentals

App Service provides public web endpoints by default, but access can be controlled and private connectivity can be added when the plan and architecture support it.

Key concepts include:

- **Custom domains and TLS:** Bind a domain to the app and use a certificate to provide HTTPS. Certificate renewal and hostname configuration should be part of the operating process.
- **Access restrictions:** Limit inbound traffic using IP rules, service tags, or other supported conditions.
- **Managed identity:** Let the app authenticate to Azure resources without storing long-lived credentials in application settings.
- **VNet integration:** Give the app controlled outbound access to resources reachable through an Azure virtual network. This does not, by itself, make the app's inbound endpoint private.
- **Private endpoints:** Provide private network access to supported resources, including scenarios where clients need to reach an app without using its public endpoint. DNS and routing must be designed alongside the endpoint.
- **App Service Environment:** Use an ASE when the hosting environment needs stronger isolation and more direct network placement control than a multitenant App Service plan provides.

Security should be designed across the application, identity, network, secrets, dependencies, and deployment pipeline. An App Service plan alone does not secure an application or its data.

## Operations and Observability

A production App Service workload should have an operating model for detecting problems and recovering from them. Useful capabilities include:

- Application logs, platform logs, HTTP access logs, and diagnostic traces
- Metrics for requests, response time, errors, CPU, memory, and instance health
- Application Insights or another application performance monitoring service
- Health checks that identify unhealthy instances and support traffic management
- Alerts connected to an on-call or incident process
- Backups where supported and appropriate for the app and its data
- Deployment history, release auditing, and a tested rollback path

Backups of the app are not automatically a complete disaster recovery strategy. Databases, storage, secrets, external integrations, DNS, and infrastructure definitions need their own recovery plans. Consider whether the recovery requirement is limited to restarting an app, restoring data, or recovering the service in another region.

## Common Tradeoffs

- **Shared plan vs. separate plans:** Shared plans reduce cost and simplify management; separate plans improve isolation and independent scaling.
- **Scale up vs. scale out:** A larger instance may help a resource-bound workload; more instances help workloads that can distribute requests effectively.
- **Slots vs. separate apps:** Slots support controlled releases within one app; separate apps may be clearer when environments require distinct identities, network boundaries, or lifecycle ownership.
- **VNet integration vs. private endpoint:** VNet integration primarily addresses app outbound access; private endpoints address private inbound access to supported services. They solve different networking problems.
- **Managed platform vs. virtual machines:** App Service reduces infrastructure operations; virtual machines provide more control but require responsibility for the operating system, patching, web server, and scaling design.

## App Service Decision Checklist

Before adopting App Service, confirm:

- The application fits a supported web, API, or container hosting model.
- The required runtime, region, operating system, and platform features are available.
- The selected plan provides the needed capacity, scaling, isolation, and networking behavior.
- Apps sharing a plan have compatible performance and availability expectations.
- Secrets and service access use managed identity or an appropriate secret-management design.
- Deployment, slot usage, health checks, monitoring, backups, and rollback are defined.
- Data services and external dependencies have separate availability and recovery plans.

## Further Reading

- [Azure App Service documentation](https://learn.microsoft.com/azure/app-service/)
- [App Service plan overview](https://learn.microsoft.com/azure/app-service/overview-hosting-plans)
- [Scale an app in Azure App Service](https://learn.microsoft.com/azure/app-service/manage-scale-up)
- [Set up staging environments in App Service](https://learn.microsoft.com/azure/app-service/deploy-staging-slots)
