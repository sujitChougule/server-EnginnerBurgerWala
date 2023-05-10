import express, { Router } from "express";
import passport, { Passport } from "passport";
import {
  getAdminStats,
  getAdminUsers,
  logout,
  myProfile,
} from "../controllers/user.js";
import { autherizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout);

//for admins only

router.get("/admin/users", isAuthenticated, autherizedAdmin, getAdminUsers);
router.get("/admin/stats", isAuthenticated, autherizedAdmin, getAdminStats);

export default router;
