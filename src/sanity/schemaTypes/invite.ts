import { defineField, defineType } from 'sanity'

export const invite = defineType({
  name: 'invite',
  title: 'Invite',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'token',
      title: 'Token',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'Super Admin', value: 'super_admin' },
        ],
      },
      initialValue: 'admin',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Accepted', value: 'accepted' },
          { title: 'Expired', value: 'expired' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'expiresAt',
      title: 'Expires At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdBy',
      title: 'Created By',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
  ],
})
