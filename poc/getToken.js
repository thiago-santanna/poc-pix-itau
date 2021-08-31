require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const qs = require('qs')

const getToken = async () => {
    const dadosCredenciais = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials'
    }

    const authCredenciais = qs.stringify(dadosCredenciais)

    const config = {
        method: 'POST',
        url: process.env.URL_BASE + 'sandbox/api/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'grant_type': 'client_credentials',
        },
        data: authCredenciais
    }

    const result = await axios(config)
    return result.data
}

exports.getToken = getToken
