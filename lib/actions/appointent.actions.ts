"use server";
import { ID } from "node-appwrite";
import {
  APPOINTMENT_COLLECTION_ID,
  APPWRITE_DATABASE_ID,
  BUCKET_ID,
  databases,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      APPWRITE_DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};

export const fetchAppointmentDetails = async (appointmentId: string) => {
  try {
    const appointmentDetails = await databases.getDocument(
      APPWRITE_DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointmentDetails);
  } catch (error) {
    console.log(error);
  }
};
