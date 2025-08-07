import TodoModel from "../models/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(500)
        .json({ success: false, message: "all fiels are required" });
    }

    const newTodo = await TodoModel.create({
      title: title,
      description: description,
    });

    console.log("new todo created ", newTodo);

    return res
      .status(200)
      .json({
        success: true,
        message: "todo created succesfully",
        data: newTodo,
      });
  } catch (error) {
    console.log("error in create todo ", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todoId=req.params.id

    if (!title || !description) {
      return res
        .status(500)
        .json({ success: false, message: "all fiels are required" });
    }
    if (!todoId) {
      return res
        .status(500)
        .json({ success: false, message: "todoid not found" });
    }

    const newTodo = await TodoModel.findByIdAndUpdate({_id:todoId},{
      title: title,
      description: description,
    },{new:true});

    console.log("updated todo ", newTodo);

    return res
      .status(200)
      .json({
        success: true,
        message: "todo updated succesfully",
        data: newTodo,
      });
  } catch (error) {
    console.log("error in update  todo ", error);
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const allTodo = await TodoModel.find({});
    console.log("fetched all todo is ", allTodo);

    return res
      .status(200)
      .json({
        success: true,
        message: "all todo fetched succesfully",
        data: allTodo,
      });
  } catch (error) {
    console.log("error in getAllTodo todo ", error);
  }
};

export const deleteTodo = async (req, res) => {
  try {

    const todoId=req.params.id;
    const deleteTodo = await TodoModel.findByIdAndDelete({_id:todoId});
    console.log("deleted todo is ", deleteTodo);

    return res
      .status(200)
      .json({
        success: true,
        message: "todo deleted succesfully",
        data: deleteTodo,
      });
  } catch (error) {
    console.log("error in delete todo ", error);
  }
};


export const getTodo = async (req, res) => {
  try {

    const todoId=req.params.id
    const Todo = await TodoModel.findById(todoId);
    console.log("fetched todo is ", Todo);

    return res
      .status(200)
      .json({
        success: true,
        message: "todo fetched succesfully",
        data: Todo,
      });
  } catch (error) {
    console.log("error in getAllTodo todo ", error);
  }
};

export const deleteAllTodo = async (req, res) => {
  try {

    
    const Todo = await TodoModel.deleteMany();
   

    return res
      .status(200)
      .json({
        success: true,
        message: "all todo deleted succesfully",
        data: Todo,
      });
  } catch (error) {
    console.log("error in AllTododelete todo ", error);
  }
};
