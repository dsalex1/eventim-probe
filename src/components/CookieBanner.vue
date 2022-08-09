<template>
  <vue-cookie-comply
    :preferences="[
      {
        title: 'Required Cookies',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet malesuada libero.',
        items: [{ label: 'Active', value: 'performance', isRequired: true }],
      },
      {
        title: 'Statistical and Comfort Cookies',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet malesuada libero.',
        items: [{ label: 'Active', value: 'statistics' }],
      },
    ]"
    @on-accept-all-cookies="() => {}"
    @on-save-cookie-preferences="() => {}"
  />
</template>
