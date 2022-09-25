import News from "../models/News.js";

//create
const createNews = async (req, res, next) => {
  try {
    const news = new News(req.body);
    const savedNews = await news.save();
    res.status(200).json(savedNews);
  } catch (error) {
    console.log(error);
  }
};

//get
const getAllNews = async (req, res, next) => {
  try {
    const allNews = await News.find();
    res.status(200).json(allNews);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const newsPost = await News.findById(req.params.id);
    res.status(200).json(newsPost);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updatedNewsPost = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedNewsPost);
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const deletedNewsPost = await News.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedNewsPost);
  } catch (error) {
    console.log(error);
  }
};

export { createNews, getAllNews, getOne,update, deleteOne };
