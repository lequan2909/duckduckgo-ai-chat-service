import { Hono } from "jsr:@hono/hono";

import { chat } from "./src/api/chat.ts";
import { models } from "./src/api/models.ts";

import { auth } from "./src/auth.ts";
import { limit } from "./src/limit.ts";
import { cron } from "./src/cron.ts";

const app = new Hono();

auth(app);
limit(app);

chat(app);
models(app);

cron();

Deno.serve(app.fetch);
