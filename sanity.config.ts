import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hotel-management',

  projectId: '3g89ehlo',
  dataset: 'production',

  basePath:"/studio",

  plugins: [deskTool(), visionTool()],



  schema: {
    types: schemaTypes,
  },
})
