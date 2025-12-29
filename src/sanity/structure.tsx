import type { StructureBuilder } from 'sanity/structure'
import React from 'react'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Admin Dashboard')
        .items([
            // Dashboard Item
            S.listItem()
                .title('Dashboard')
                .child(
                    S.component()
                        .title('Dashboard Overview')
                        .component(() => (
                            <div style={{ padding: '20px' }}>
                                <h1>Dashboard</h1>
                                <p>Welcome to the PulseQuik Admin Dashboard.</p>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                                    <div style={{ padding: '20px', background: '#f4f4f4', borderRadius: '8px', flex: 1 }}>
                                        <h3>Manage Blogs</h3>
                                        <p>Create, edit, and publish blog posts.</p>
                                    </div>
                                    <div style={{ padding: '20px', background: '#f4f4f4', borderRadius: '8px', flex: 1 }}>
                                        <h3>View Site</h3>
                                        <p><a href="/" target="_blank" rel="noreferrer">Open Live Website</a></p>
                                    </div>
                                </div>
                            </div>
                        ))
                ),
            S.divider(),

            // Blogs Folder
            S.listItem()
                .title('Blogs')
                .child(
                    S.list()
                        .title('Blogs')
                        .items([
                            S.listItem()
                                .title('All Blogs')
                                .child(S.documentTypeList('post').title('All Blogs')),
                            S.listItem()
                                .title('City-Based Blogs')
                                .child(
                                    S.documentList()
                                        .title('City-Based Blogs')
                                        .filter('_type == "post" && category == "City-based"')
                                ),
                            S.listItem()
                                .title('Service-Based Blogs')
                                .child(
                                    S.documentList()
                                        .title('Service-Based Blogs')
                                        .filter('_type == "post" && category == "Service-based"')
                                ),
                        ])
                ),

            // Redirects
            S.listItem()
                .title('Redirects')
                .child(S.documentTypeList('redirect').title('Redirects')),

        ])
