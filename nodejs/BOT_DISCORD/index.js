const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
const dotenv = require('dotenv').config()

const TOKEN = process.env.TOKEN

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.once(Events.ClientReady, readyCLient => {
    console.log('Ready! logged in as ', readyCLient.user.tag)
})

client.login(TOKEN)
client.commands = new Collection()