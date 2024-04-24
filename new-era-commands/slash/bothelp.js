const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bothelp")
    .setDescription("Information about the Lilypad bot")
    .addUserOption((option) =>
      option.setName("user").setDescription("user to ping")
    ),
  execute: async (interaction) => {
    const userId = interaction.options.getUser("user");

    const botHelpEmbed = new EmbedBuilder()
      .setColor("#14C7C3")
      .setTitle("Lilypad Bot Info").setDescription(`
**Slash Commands** 
Type a slash \`/\` to see a list of all the available slash commands you can use. Most commands offer extra options, such as pinging a user or specifying additional variables.

**Party Parrot** 
Fun fact: Lilypad-bot loves the Party Parrot! 🦜
      `);

    await interaction.reply({
      content: userId ? `${userId}` : "",
      embeds: [botHelpEmbed],
    });
  },
};
