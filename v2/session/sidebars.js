module.exports = {
  sidebar: [
    {
      type: "category",
      label: "Start Here",
      customProps: {
        highlightGroup: true,
      },
      collapsed: false,
      items: [
        "introduction",
        {
          type: 'category',
          label: 'Quick setup',
          items: [
            "quick-setup/frontend",
            "quick-setup/backend",
            {
              type: 'category',
              label: 'Step 3) Core',
              items: [
                {
                  type: 'category',
                  label: 'Self hosted',
                  items: [
                    "quick-setup/core/with-docker",
                    "quick-setup/core/without-docker",
                    {
                      type: 'category',
                      label: 'Database Setup',
                      items: [
                        "quick-setup/database-setup/mysql",
                        "quick-setup/database-setup/postgresql",
                        "quick-setup/database-setup/rename-database-tables"
                      ],
                    }
                  ],
                },
                "quick-setup/core/saas-setup"
              ],
            },
            "quick-setup/handling-session-tokens",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      customProps: {
        logoUrl: [
          {
            url: '/img/logos/hasura-logo.png',
            label: 'Hasura',
          },
          {
            url: '/img/logos/graphql-logo.png',
            label: 'GraphQL',
          },
          {
            url: '/img/logos/nest-logo.svg',
            label: 'NestJS',
          },
          {
            url: '/img/logos/netlify.svg',
            label: 'Netlify',
          },
          {
            url: '/img/logos/aws-lambda.svg',
            label: 'AWS Lambda',
          },
        ],
      },
      items: [
        {
          type: 'category',
          label: 'Hasura',
          customProps: {
            logoUrl: '/img/logos/hasura-logo.png'
          },
          items: [
            "hasura-integration/with-jwt",
            "hasura-integration/without-jwt",
          ],
        },
        {
          type: 'category',
          label: 'GraphQL',
          customProps: {
            logoUrl: '/img/logos/graphql-logo.png'
          },
          items: [
            "graphql-integration/backend-setup",
            "graphql-integration/making-requests",
          ],
        },
        {
          type: 'category',
          label: 'NestJS',
          customProps: {
            logoUrl: '/img/logos/nest-logo.svg'
          },
          items: [
            "nestjs/guide",
          ],
        },
        {
          type: 'category',
          label: 'Netlify',
          customProps: {
            logoUrl: '/img/logos/netlify.svg'
          },
          items: [
            "serverless/with-netlify/about",
            "serverless/with-netlify/frontend",
            "serverless/with-netlify/backend-config",
            "serverless/with-netlify/auth-serverless",
            "serverless/with-netlify/session-verification",
            "serverless/with-netlify/next-steps"
          ],
        },
        {
          type: 'category',
          label: 'AWS Lambda',
          customProps: {
            logoUrl: '/img/logos/aws-lambda.svg'
          },
          items: [
            "serverless/with-aws-lambda/about",
            "serverless/with-aws-lambda/frontend",
            "serverless/with-aws-lambda/backend-config",
            "serverless/with-aws-lambda/auth-serverless",
            "serverless/with-aws-lambda/api-gateway-config",
            {
              type: 'category',
              label: '5. Session Verification',
              items: [
                "serverless/with-aws-lambda/session-verification",
                "serverless/with-aws-lambda/authorizer",
                "serverless/with-aws-lambda/jwt-authorizer",
              ],
            },
            "serverless/with-aws-lambda/next-steps",
            "serverless/with-aws-lambda/appsync-integration"
          ],
        },
        {
          type: 'category',
          label: 'Vercel',
          customProps: {
            logoUrl: '/img/logos/vercel.jpeg'
          },
          items: [
            "serverless/with-vercel/about"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Using sessions with JWTs",
      items: [
        "common-customizations/sessions/with-jwt/enabling-jwts",
        "common-customizations/sessions/with-jwt/custom-claims",
        "common-customizations/sessions/with-jwt/read-jwt",
        "common-customizations/sessions/with-jwt/jwt-verification"
      ]
    },
    {
      type: 'category',
      label: 'Auth flow customizations',
      collapsed: true,
      items: [
        "common-customizations/sessions/new-session",
        {
          type: "category",
          label: "Protecting API routes",
          items: [
            "common-customizations/sessions/session-verification-in-api/verify-session",
            "common-customizations/sessions/session-verification-in-api/get-session"
          ]
        },
        "common-customizations/sessions/protecting-frontend-routes",
        "common-customizations/sessions/ssr",
        {
          type: "category",
          label: "Reading / modifying session claims",
          items: [
            "common-customizations/sessions/claims/access-token-payload",
            "common-customizations/sessions/claims/claim-validators"
          ]
        },
        "common-customizations/sessions/revoke-session",
        {
          type: "category",
          label: "Session security",
          items: [
            "common-customizations/sessions/cookies-and-https",
            "common-customizations/sessions/cookie-consent",
            "common-customizations/sessions/anti-csrf",
            "common-customizations/sessions/same-site-cookie",
            "common-customizations/sessions/jwt-signing-key-rotation",
            "common-customizations/sessions/change-session-timeout",
            "common-customizations/sessions/access-token-blacklisting"
          ]
        },
        "common-customizations/sessions/share-sessions-across-sub-domains",
        "common-customizations/sessions/token-transfer-method",
        {
          type: "category",
          label: "Other operations",
          items: [
            "common-customizations/sessions/handling-session-expiry",
            "common-customizations/sessions/multiple-api-endpoints",
            "common-customizations/sessions/fetch-sessions-for-user",
            "common-customizations/sessions/in-iframe",
            "common-customizations/sessions/error-handling",

          ]
        },
        {
          type: "category",
          label: "Changing base path",
          items: [
            "common-customizations/changing-base-path/website-base-path",
            "common-customizations/changing-base-path/api-base-path"
          ]
        },
        {
          type: 'category',
          label: 'Actions, Hooks and Custom API responses',
          items: [
            "advanced-customizations/overview",
            {
              type: 'category',
              label: 'Frontend functions override',
              items: [
                "advanced-customizations/frontend-functions-override/about",
                "advanced-customizations/frontend-functions-override/usage"
              ],
            },
            {
              type: 'category',
              label: 'Backend functions override',
              items: [
                "advanced-customizations/backend-functions-override/about",
                "advanced-customizations/backend-functions-override/usage"
              ],
            },
            {
              type: 'category',
              label: 'APIs override',
              items: [
                "advanced-customizations/apis-override/about",
                "advanced-customizations/apis-override/usage",
                {
                  type: 'category',
                  label: 'Sending custom response',
                  items: [
                    "advanced-customizations/apis-override/custom-response/api-override",
                    "advanced-customizations/apis-override/custom-response/throwing-error"
                  ],
                },
                "advanced-customizations/apis-override/disabling"
              ],
            },
            {
              type: 'category',
              label: 'Frontend hooks',
              items: [
                "advanced-customizations/frontend-hooks/pre-api",
                "advanced-customizations/frontend-hooks/handle-event"
              ],
            },          ],
        },
        {
          type: "category",
          label: "SuperTokens Core customizations",
          items: [
            "common-customizations/core/api-keys",
            "common-customizations/core/ip-allow-deny",
            "common-customizations/core/performance",
            "common-customizations/core/logging",
            "common-customizations/core/add-ssl-via-nginx",
            {
              type: "category",
              label: "CLI",
              items: [
                "common-customizations/cli/overview",
                "common-customizations/cli/start",
                "common-customizations/cli/list",
                "common-customizations/cli/stop",
                "common-customizations/cli/uninstall"
              ]
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Testing & Debugging',
      items: [
        "testing/testing-with-postman",
        "troubleshooting/how-to-troubleshoot",
        "troubleshooting/cors-issues"
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        "migration/session-migration",
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        "architecture",
        "appinfo",
        "sdks",
        "apis",
        "compatibility-table"
      ],
    },
  ]
};
