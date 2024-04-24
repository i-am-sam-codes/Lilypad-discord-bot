// const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName('faq')
//     .setDescription('Provides a link to our FAQ channel')
//     .addUserOption((option) => option.setName('user').setDescription('user to ping')),
//   execute: async (interaction) => {
//     const userId = interaction.options.getUser('user');

//     const faqEmbed = new EmbedBuilder()
//       .setColor('#cc9543')
//       .setTitle('Lilypad FAQ')
//       .setDescription('We have a channel with frequently asked questions - <#>!'); // insert future FAQ channel id here

//     await interaction.reply({
//       content: userId ? `${userId}` : '',
//       embeds: [faqEmbed],
//     });
//   },
// };
