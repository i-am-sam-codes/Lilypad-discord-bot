const { SlashCommandBuilder } = require("discord.js");
const PointsService = require("../../services/points");

function user(command) {
  command
    .setName("user")
    .setDescription("Lilypad Discord points and rank for specified user")
    .addUserOption((option) => {
      option
        .setName("name")
        .setDescription("The name of the user to display their points")
        .setRequired(true);
      return option;
    });

  return command;
}

function leaderboard(command) {
  command
    .setName("leaderboard")
    .setDescription("Displays the Lilypad Discord leaderboard")
    .addIntegerOption((option) => {
      option
        .setName("limit")
        .setDescription("Limit the result. Max is 25")
        .setRequired(false);
      return option;
    })
    .addIntegerOption((option) => {
      option
        .setName("offset")
        .setDescription("Offset is the starting position in the leaderboard")
        .setRequired(false);
      return option;
    });

  return command;
}

function info(command) {
  command
    .setName("info")
    .setDescription("A guide to points in the Lilypad Discord server");
  return command;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("points")
    .setDescription(
      "Points provides a fun way for users to see the points ranking on the server!"
    )
    .addSubcommand(user)
    .addSubcommand(leaderboard)
    .addSubcommand(info),
  execute: async (interaction) => {
    try {
      PointsService.handleInteraction(interaction);
    } catch (error) {
      console.log(error);
    }
  },
};
