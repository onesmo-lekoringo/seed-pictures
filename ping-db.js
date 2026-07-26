import { createClient } from "@supabase/supabase-js";

// Retrieve environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY in environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function pingDatabase() {
  const timestamp = new Date().toISOString();
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("id")
      .limit(1);

    if (error) {
      console.error(`[${timestamp}] ❌ Database ping failed:`, error.message);
    } else {
      console.log(`[${timestamp}] ✅ Database ping successful. Fetched ${data.length} record(s).`);
    }
  } catch (err) {
    console.error(`[${timestamp}] ❌ Database ping error:`, err);
  }
}

// Ping immediately on start
console.log("🚀 Starting database ping service...");
pingDatabase();

// Ping every 10 minutes (10 * 60 * 1000 milliseconds)
const PING_INTERVAL = 10 * 60 * 1000;
setInterval(pingDatabase, PING_INTERVAL);
