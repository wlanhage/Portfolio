export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'learnings',
        title: 'Learnings',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'github_url',
        title: 'GitHub URL',
        type: 'url',
      },
      {
        name: 'live_url',
        title: 'Live URL',
        type: 'url',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            options: {
              isHighlighted: true,
            },
          },
        ],
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  }