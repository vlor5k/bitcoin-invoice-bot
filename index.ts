import dotenv from 'dotenv';
import { ChatInputCommandInteraction, Client, Events, MessageFlags } from "discord.js";
import { execute } from './invoicecommand';

dotenv.config({
    quiet: true
});

const client = new Client({intents: []});

client.on(Events.ClientReady, (readyClient) => {
    console.log("logged in to discord as", readyClient.user.username)
});

client.on(Events.InteractionCreate, (interaction) => {
    if(!(interaction instanceof ChatInputCommandInteraction))
        return;

    if(interaction.user.id !== process.env.DISCORD_USERID) {
        interaction.reply({
            content: "you are not authorized to use this bot" +
                    "\nspin up your own instance here: <https://github.com/vlor5k/bitcoin-invoice-bot>",
            flags: [MessageFlags.Ephemeral] // "Only visible to you"
        })
        return;
    }

    execute(interaction);
});

client.login(process.env.DISCORD_TOKEN);