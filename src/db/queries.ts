import { db } from "@/db/index";
import { and, desc, eq, inArray } from "drizzle-orm";

//query to get user by ID
export async function getProjects(
  userId: string,
  isDeleted: boolean,
  recents: number
) {
  if (!userId) {
    throw new Error("Invalid userId: userId is required");
  }

  try {
    if (recents === 0) {
      //get all projects
      const projects = await db
        .select()
        .from(Project)
        .where(
          and(eq(Project.userId, userId), eq(Project.isDeleted, isDeleted))
        )
        .orderBy(desc(Project.updatedAt));

      return projects;
    }
    //get recent limited number of projects
    const projects = await db
      .select()
      .from(Project)
      .where(and(eq(Project.userId, userId), eq(Project.isDeleted, isDeleted)))
      .orderBy(desc(Project.updatedAt))
      .limit(recents);

    return projects;
  } catch (error) {
    console.error("Database query error [PROJECT_TABLE]:", error);
    throw new Error("Failed to fetch projects");
  }
}

