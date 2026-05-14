import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);

    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);

  clientPromise = client.connect();
}

// DATABASE NAME
const DB_NAME = "clearis";

// CONNECT FUNCTION
export async function connectDB(): Promise<Db> {
  const client = await clientPromise;

  return client.db(DB_NAME);
}

export default clientPromise;
