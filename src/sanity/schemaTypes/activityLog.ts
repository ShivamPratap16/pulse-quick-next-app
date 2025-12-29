
import { defineField, defineType } from 'sanity'

export const activityLog = defineType({
  name: 'activityLog',
  title: 'Activity Log',
  type: 'document',
  fields: [
    defineField({
      name: 'action',
      title: 'Action',
      type: 'string',
    }),
    defineField({
      name: 'performedBy',
      title: 'Performed By',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
