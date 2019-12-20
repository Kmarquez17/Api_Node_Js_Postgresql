import Task from "../models/tasks";

export const createTask = async(req, res) => {
    console.log(req.body);
    const { name, done, projectid } = req.body;

    try {
        let task = await Task.create({ name, done, projectid }, {
            fields: ["name", "done", "projectid"]
        });

        if (task) {
            res.status(201).json({
                message: "New tasks created",
                data: task
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};
export const getTasks = async(req, res) => {
    const task = await Task.findAll({
        attributes: ["id", "projectid", "name", "done"],
        order: [
            ["id", "DESC"]
        ]
    });

    res.status(200).json({ data: task });
};
export const getTask = async(req, res) => {
    const { id } = req.params;
    const task = await Task.findOne({
        attributes: ["id", "projectid", "name", "done"],
        where: {
            id
        }
    });

    res.status(200).json({
        data: task
    });
};

export const updateTask = async(req, res) => {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    console.log(req.body);

    const tasks = await Task.findOne({
        attributes: ["id", "name", "done", "projectid"],
        where: {
            id
        }
    });

    if (tasks) {
        const updateTask = await Task.update({
            name,
            done,
            projectid
        }, {
            where: {
                id
            }
        });

        res.status(200).json({
            message: "Task Updated successfully"
        });
    } else {
        res.status(404).json({
            message: "There are no tasks"
        });
    }
};
export const deleteTask = async(req, res) => {
    const { id } = req.params;
    const deleteTask = await Task.destroy({
        where: {
            id
        }
    });

    if (deleteTask > 0) {
        res.status(200).json({
            message: "Taks Deleted successfully"
        });
    } else {
        res.status(404).json({
            message: "There are no tasks"
        });
    }
};
export const getTasksByProject = async(req, res) => {
    const { projectid } = req.params;
    const tasks = await Task.findAll({
        attributes: ["id", "name", "done", "projectid"],
        where: {
            projectid
        }
    });

    res.status(200).json({
        tasks
    });
};