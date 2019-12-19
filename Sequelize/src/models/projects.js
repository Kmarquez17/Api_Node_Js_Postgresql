import Sequelize from "sequelize";
import { configSequelize } from "../database/database";
import Tasks from "./tasks";

const Projects = configSequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    priority: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    deliverydate: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

Projects.hasMany(Tasks, { foreingKey: "projectId", source: "id" });
Tasks.belongsTo(Projects, { foreingKey: "projectId", source: "id" });

export default Projects;
