import Sequelize from "sequelize";

export const configSequelize = new Sequelize("projects", "postgres", "km199717*", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    min: 0,
    max: 5,
    require: 30000,
    idle: 10000
  },
  logging: false
});
