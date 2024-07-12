import * as sdk from "node-appwrite";

// Destructure environment variables
export const {
  PROJECT_ID,
  APPWRITE_API_KEY,
  APPWRITE_DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// Ensure required environment variables are defined
/*if (!PROJECT_ID || !APPWRITE_API_KEY || !ENDPOINT) {
  console.log(PROJECT_ID, APPWRITE_API_KEY, ENDPOINT);
  throw new Error(
    "Missing required environment variables for Appwrite configuration"
  );
}*/
console.log("end point", ENDPOINT);
// Initialize the Appwrite client
const client = new sdk.Client();
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(APPWRITE_API_KEY!);

// Export Appwrite services
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
