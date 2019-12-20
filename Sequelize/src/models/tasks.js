import Sequelize from "sequelize";

import { configSequelize } from "../database/database";

const Tasks = configSequelize.define(
    "tasks", {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        name: { type: Sequelize.TEXT },
        done: { type: Sequelize.BOOLEAN },
        projectid: { type: Sequelize.INTEGER }
    }, {
        timestamps: false
    }
);

export default Tasks;