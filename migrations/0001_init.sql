-- Enquiries from /start
CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  idea TEXT NOT NULL,
  stage TEXT NOT NULL,
  budget TEXT NOT NULL,
  timing TEXT NOT NULL,
  source TEXT
);
CREATE INDEX IF NOT EXISTS enquiries_created_at ON enquiries (created_at);
