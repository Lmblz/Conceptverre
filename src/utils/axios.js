import axios from 'axios'

export const client = axios.create({
    headers: {
        Authorization: `Basic ${btoa(`${process.env.VUE_APP_WP_USERNAME}:${process.env.VUE_APP_WP_PASSWORD}`)}`
    },
    baseURL: process.env.VUE_APP_WP_API_URL
})
