import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import redirect from './redirect'
import { user } from './user'
import { invite } from './invite'
import { youtube } from './youtube'
import { activityLog } from './activityLog'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, redirect, user, invite, youtube, activityLog],
}
