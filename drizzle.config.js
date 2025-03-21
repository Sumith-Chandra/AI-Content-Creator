/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_TfLUGZB02lzI@ep-icy-pine-a8geflxn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',

    }
  };
  
