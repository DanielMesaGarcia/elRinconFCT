module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    eventName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    eventDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    activityType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    eventDate: { //The DATE type is used for values with a date part but no time part. 
      //MySQL retrieves and displays DATE values in 'YYYY-MM-DD' format. 
      //The supported range is '1000-01-01' to '9999-12-31'.
      type: Sequelize.DATE,
      allowNull: false,
    },
    eventTime: { //hh:mm:ss
      type: Sequelize.TIME,
      allowNull: false,
    },
    eventLocation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userExperienceLevel: {
      type: Sequelize.STRING,
    },
    eventMaxAtendees: {
      type: Sequelize.INTEGER,
    },
    eventAtendees: {
      type: Sequelize.STRING,
    },
  });

  return Event;
}
