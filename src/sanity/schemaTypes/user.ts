import { defineField, defineType } from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'User', value: 'user' },
          { title: 'Admin', value: 'admin' },
          { title: 'Super Admin', value: 'super_admin' },
        ],
        layout: 'radio',
      },
      initialValue: 'user',
    }),
    defineField({
      name: 'accessRequestStatus',
      title: 'Access Request Status',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Pending', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    }),
    defineField({
        name: 'approvedBy',
        title: 'Approved By',
        type: 'reference',
        to: [{ type: 'user' }],
        hidden: ({ parent }) => parent?.accessRequestStatus !== 'approved',
    }),
    defineField({
        name: 'approvedAt',
        title: 'Approved At',
        type: 'datetime',
        hidden: ({ parent }) => parent?.accessRequestStatus !== 'approved',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
    },
  },
})
