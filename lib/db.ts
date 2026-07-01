import Database from 'better-sqlite3';
import path from 'path';

// Define the path to out local SQLite database file
const dbPath = path.join(process.cwd(), 'database.sqlite');

// Initialize the database connection
const db = new Database(dbPath);

// Create the necessary tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS collections (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    tags TEXT NOT NULL, -- Stored as comma separated string
    note TEXT,
    tone TEXT NOT NULL,
    wide INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS collection_images (
    id TEXT PRIMARY KEY,
    collection_id TEXT NOT NULL,
    url TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS site_content (
    content_key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
