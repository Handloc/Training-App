import { createServer, Model } from "miragejs";

createServer({
  models: {
    users: Model,
  },

  routes() {
    this.get("/api/auth", (schema) => {
      return schema.all("users");
    });

    this.post("/api/auth", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.create("users", attrs);
    });
  },
});
