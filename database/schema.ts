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
    .notNull()
    .references(() => users.id),
  bio: text("bio"),
});

export const users_relations = relations(users, ({ one }) => ({
  profiles: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}));
