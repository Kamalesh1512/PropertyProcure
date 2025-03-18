"use server";
import { error } from "console";

import {
  getProjects,
} from "@/db/queries";


export const getAllProjects = async () => {
  try {

    const projects = await getProjects(checkUser.user.id,false,0);

    if (projects.length === 0) {
      return { status: 404, error: "No Projects Found" };
    }
    return { status: 200, data: projects };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
