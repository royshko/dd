// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'My App',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600'
                }
            ]
        }
    },
    runtimeConfig: {
        public: {}
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],

})
