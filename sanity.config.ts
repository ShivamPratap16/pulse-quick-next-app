'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { myDarkTheme } from './src/sanity/theme'
import { structure } from './src/sanity/structure'
import Logo from './src/sanity/components/Logo'
import CustomLogin from './src/sanity/components/CustomLogin'
import StudioLayout from './src/sanity/components/StudioLayout'

// Note: Navbar customization can be done via components: { navbar: ... }
// But we are using StudioLayout for global CSS methods which is stronger for white-labeling.

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    title: 'PulseQuik',
    icon: Logo,
    theme: myDarkTheme,
    schema,
    studio: {
        components: {
            layout: StudioLayout,
            login: CustomLogin,
            // navbar: StudioNavbar // We'll stick to default navbar structure but styled via Layout
        }
    },
    plugins: [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
    auth: {
        providers: (providers) =>
            providers.filter((provider) => 
                provider.name === 'google' || provider.name === 'sanity'
            ),
    },
    document: {
        // 1. Prevent CREATING new 'user' or 'invite' documents if not Administrator
        newDocumentOptions: (prev, { currentUser, creationContext }) => {
            const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')
            
            if (creationContext.type === 'global') {
                if (!isAdmin) {
                    return prev.filter((templateItem) => 
                        !['user', 'invite'].includes(templateItem.templateId)
                    )
                }
            }
            return prev
        },
        // 2. Prevent EDITING/DELETING existing 'user' or 'invite' documents if not Administrator
        actions: (prev, context) => {
            const { schemaType, currentUser } = context
            const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')
            
            if (['user', 'invite'].includes(schemaType) && !isAdmin) {
                return [] // Return empty array = Read Only (No Save, No Delete, No Publish)
            }
            
            return prev
        }
    }
})
