module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    path: "/dashboard",
    build: {
      backend: "https://behindthecode.herokuapp.com/",
    },
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f21d236e2e119915c5b7e54542d5e996"),
    },
  },
});
