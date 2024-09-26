import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  bio: text("bio"),
});

/*
 *
 * Database Relations.
 * These relations are set on the application level, no need for db:generate,
 * db:migrate or db:push
 */

export const users_relations = relations(users, ({ one }) => ({
  profiles: one(profiles),
}));

export const profiles_relations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
}));
