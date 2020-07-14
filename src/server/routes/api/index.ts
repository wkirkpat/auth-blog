import * as express from "express";
import blogsRouter from "./blogs";
import * as passport from "passport";
import tagsRouter from "./tags";
import donateRouter from "./donate";

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate(
    "bearer",
    {
      session: false,
    },
    (err, user, info) => {
      if (user) req.user = user;
      return next();
    }
  )(req, res, next);
});

router.use("/blogs", blogsRouter);
router.use("/tags", tagsRouter);
router.use("/donate", donateRouter);

export default router;
