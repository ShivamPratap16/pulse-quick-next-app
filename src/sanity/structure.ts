import type { StructureBuilder } from 'sanity/structure'
// import { DashboardIcon, EditIcon, LinkIcon, DocumentIcon, EarthGlobeIcon } from '@sanity/icons'
import { LayoutDashboard, FileText, PenLine, Globe, ArrowRightLeft, File } from 'lucide-react'
import Dashboard from './components/Dashboard'
import { client } from './lib/client'

// Helper to render Lucide icons in Sanity (Sanity expects a component)
// We can just pass the Lucide component directly usually, or wrap it. 
// Lucide icons are React components, so strictly `icon: LayoutDashboard` works.

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = async (S: StructureBuilder, context: any) => {
    // SECURITY UX: Hiding sensitive schemas from non-admins
    // Note: This matches SANITY roles (Administrator, Editor), not App roles.
    // Project Owner must ensure App Admins are NOT Sanity Administrators.
    const currentUser = context.currentUser
    
    // Fetch custom role from dataset
    let isSuperAdmin = false;
    if (currentUser?.email) {
        try {
            const userDoc = await client.fetch(`*[_type == "user" && email == $email][0]{role}`, { email: currentUser.email });
            isSuperAdmin = userDoc?.role === 'super_admin';
        } catch (error) {
            console.error('Error fetching user role for structure:', error);
        }
    }

    const listItems = [
        // Dashboard (Custom View)
        S.listItem()
            .title('Dashboard')
            .icon(LayoutDashboard)
            .child(
                S.component()
                    .title('Dashboard')
                    .component(Dashboard)
            ),

        S.divider(),

        // Blog Folder (Grouped)
        S.listItem()
            .title('Blogs')
            .icon(PenLine)
            .child(
                S.list()
                    .title('Blog Manager')
                    .items([
                        S.listItem()
                            .title('All Blogs')
                            .icon(FileText)
                            .child(S.documentTypeList('post').title('All Blogs')),
                        
                        S.listItem()
                            .title('Drafts')
                            .icon(File)
                            .child(
                                S.documentList()
                                    .title('Draft Blogs')
                                    .filter('_type == "post" && (_id in path("drafts.**"))')
                            ),

                        S.listItem()
                            .title('Published')
                            .icon(Globe)
                            .child(
                                S.documentList()
                                    .title('Published Blogs')
                                    .filter('_type == "post" && !(_id in path("drafts.**"))')
                            ),

                        S.divider(),
                    ])
            ),

        // Redirects
        S.listItem()
            .title('URL Redirects')
            .icon(ArrowRightLeft)
            .child(S.documentTypeList('redirect').title('URL Redirects')),
    ]

    // SENSITIVE ITEMS: Only show for Super Admins
    if (isSuperAdmin) {
        listItems.push(
            S.divider(),
            S.listItem()
                .title('User Management')
                .child(
                    S.list()
                        .title('User Management')
                        .items([
                            S.documentTypeListItem('user').title('Users'),
                            S.documentTypeListItem('invite').title('Admin Invites')
                        ])
                )
        )
    }

    return S.list()
        .title('PulseQuik Admin')
        .items(listItems)
}
