// passport.js
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import passport from "passport";
import userdb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, callback) => {
      try {
        let user = await userdb.find({ email: profile.emails[0].value });
        if (!user) {
          user = new userdb({
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }
        return;
        callback(null, profile);
      } catch (err) {
        return callback(err, profile);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
