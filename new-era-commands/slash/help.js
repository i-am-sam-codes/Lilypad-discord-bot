// const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("help")
//     .setDescription("Help")
//     .addUserOption((option) =>
//       option.setName("user").setDescription("user to ping")
//     ),
//   execute: async (interaction) => {
//     const userId = interaction.options.getUser("user");

//     // helpEmbed would make a good candidate for a general /help info command (a default command like there is for /points) when we implement subcommands for /help

//     const helpEmbed = new EmbedBuilder()
//       .setColor("#cc9543")
//       .setTitle("Get help in the Lilypad Discord Server!")
//       .setDescription("**"); // needs a fill in description

//     await interaction.reply({
//       content: userId ? `${userId}` : ``,
//       embeds: [helpEmbed],
//     });
//   },
// };
