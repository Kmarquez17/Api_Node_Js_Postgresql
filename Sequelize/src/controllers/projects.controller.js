import Project from "../models/projects";

export const createProjects = async(req, res) => {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let project = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ["name", "priority", "description", "deliverydate"]
        });
        if (project) {
            res.status(201).json({
                message: "Project created successfully",
                data: project
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};

export const getProjects = async(req, res) => {
    const projects = await Project.findAll();

    res.status(200).json({ data: projects });
};

export const getProject = async(req, res) => {
    const { id } = req.params;
    const project = await Project.findAll({
        where: {
            id: id
        }
    });

    res.status(200).json({ data: project });
};

export const updateProject = async(req, res) => {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const projects = await Project.findAll({
        fields: ["id", "name", "priority", "description", "deliverydate"],
        where: {
            id
        }
    });
    if (projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        });

        res.status(200).json({
            message: "Project Updated successfully",
            //data: projects
        });
    } else {
        res.status(404).json({
            message: "There is no project"
        });
    }
};

export const deleteProject = async(req, res) => {
    const { id } = req.params;

    const deleteProject = await Project.destroy({
        where: {
            id: id
        }
    });

    if (deleteProject > 0) {
        res.status(200).json({
            message: "Project Deleted successfully"
        });
    } else {
        res.status(404).json({
            message: "There is no project"
        });
    }
};