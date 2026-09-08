import { ApplicationIntegrationType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const builder = new SlashCommandBuilder()
    .setName("invoice")
    .setDescription("Create a new Bitcoin invoice")
    .setIntegrationTypes(ApplicationIntegrationType.UserInstall) // make it only usable via a User Bot (not guild bot)
    .addNumberOption(input =>
        input
            .setName("amount")
            .setDescription("the amount to be paid")
            .setRequired(true)
    )
    .addStringOption(input =>
        input
            .setName("unit")
            .setDescription("the units of the amount")
            .setChoices([
                {
                    name: "BTC",
                    value: "btc"
                },
                {
                    name: "sats",
                    value: "sats"
                }
            ])
            .setRequired(true)
    )
    .addStringOption(input => 
        input
            .setName("label")
            .setDescription("optional internal note")
    )

async function execute(interaction: ChatInputCommandInteraction) {
    
}

export {
    builder,
    execute
}