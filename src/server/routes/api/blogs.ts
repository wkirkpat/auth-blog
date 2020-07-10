import * as express from "express";
import DB from "../../db";

const router = express.Router();

const isAdmin: express.RequestHandler = (req: any, res, next) => {
  if(!req.user || req.user.role !== "admin") {
      return res.sendStatus(401);
  } else {
      return next();
  }
}

router.get("/", async (req, res, next) => {
  try {
    let blogs = await DB.Blogs.getBlogs();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", isAdmin, async (req, res, next) => {
  try {
    let blog = await DB.Blogs.getBlog(req.params.id);
    res.json(blog);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(
      await DB.Blogs.newBlog(
        req.body.title,
        req.body.content,
        req.body.author,
        req.body.tag
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await DB.Blogs.deleteBlog(req.params.id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await DB.Blogs.updateBlog(
        req.body.title,
        req.body.content,
        req.body.author,
        req.body.tag,
        req.params.id
      )
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;