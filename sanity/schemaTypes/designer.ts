export default {
  name: 'designer',
  type: 'document',
  title: 'Designers',
  fields: [
    {
      name: 'name',
      title: 'Name the Designer',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About me',
      type: 'string',
    },
    {
      name: 'email',
      title: 'email',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profile Image',
    },
  ],
}
