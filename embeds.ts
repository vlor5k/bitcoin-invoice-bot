import { AttachmentBuilder, EmbedBuilder } from "discord.js";
import * as qr from 'qr-image';

function pendingEmbed(address: string, sats: number, derivation: number, label?: string): {embed: EmbedBuilder, attachment: AttachmentBuilder} {
    const qr_img = qr.image(
        address,
        {
            type: 'png',
            ec_level: 'H',
            margin: 2
        }
    );

    const attachment = new AttachmentBuilder(qr_img, {
        name: "qr.png"
    });

    const embed =  new EmbedBuilder()
        .setColor(0xF2A900)
        .setTitle("Invoice")
        .addFields([
            {
                name: "Amount (BTC)",
                value: `\`${sats/100000000}\``,
                inline: true
            },
            {
                name: "Amount (sats)",
                value: `\`${sats}\``,
                inline: true
            },
            {
                name: "Address",
                value: `\`${address}\``,
            }
        ])
        .setImage("attachment://qr.png")
        .setFooter({text: `Waiting for transaction in mempool... • m/84'/0'/0'/0/${derivation}`});
    if(label) {
        embed.addFields({
            name: "Label",
            value: label
        });
    }

    return {
        embed,
        attachment
    }
}

function confirmingEmbed(txid: string, sats: number, derivation: number, label?: string): EmbedBuilder {
    const embed =  new EmbedBuilder()
        .setColor(0xF2A900)
        .setTitle("Confirming...")
        .setDescription(`[View transaction on mempool.guide](https://mempool.guide/tx/${txid})`)
        .addFields([
            {
                name: "Amount (BTC)",
                value: `\`${sats/100000000}\``,
                inline: true
            },
            {
                name: "Amount (sats)",
                value: `\`${sats}\``,
                inline: true
            }
        ])
        .setThumbnail("https://media.discordapp.net/attachments/1482913796669308971/1547738052103766097/mining.gif?ex=6aa482e3&is=6aa33163&hm=fcaa8deace38e0dcfd500612f95d01cd99f00d85c9e14650481250bacb3a97b5&=")
        .setFooter({text: `Waiting for transaction to be confirmed... • m/84'/0'/0'/0/${derivation}`});
    if(label) {
        embed.addFields({
            name: "Label",
            value: label
        });
    }

    return embed;
}


function confirmedEmbed(txid: string, sats: number, derivation: number, blockheight: number, label?: string): EmbedBuilder {
    const embed =  new EmbedBuilder()
        .setColor(0x35C748)
        .setTitle("Confirmed")
        .setDescription(`[View transaction on mempool.guide](https://mempool.guide/tx/${txid})`)
        .addFields([
            {
                name: "Amount (BTC)",
                value: `\`${sats/100000000}\``,
                inline: true
            },
            {
                name: "Amount (sats)",
                value: `\`${sats}\``,
                inline: true
            }
        ])
        .setThumbnail("https://media.discordapp.net/attachments/1482913796669308971/1547744849254551633/check-mark_2714-fe0f.png?ex=6aa48937&is=6aa337b7&hm=0cb5c8f206e79f9bfd6f1e18be048e6759dc68df33b1e67315fd4038d217c19b&=&format=webp&quality=lossless")
        .setFooter({text: `Confirmed at block height ${blockheight} • m/84'/0'/0'/0/${derivation}`});
    if(label) {
        embed.addFields({
            name: "Label",
            value: label
        });
    }

    return embed;
}



export {
    pendingEmbed,
    confirmingEmbed,
    confirmedEmbed
}