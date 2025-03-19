"use server";
import { checkRole } from "@/utils/roles";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateAdmin = async () => {
  try {
    const isAdmin = await checkRole("admin");
    const user = await currentUser();
    if (!user || !isAdmin) {
      return { status: 403 };
    }
    const clerkEmailID = user.emailAddresses[0].emailAddress;

    if (isAdmin && clerkEmailID.includes("propertyprocure@gmail.com")) {
      return { status: 200, user: isAdmin };
    } else {
      return { status: 201, user: false };
    }
  } catch (error) {
    console.log("⚠️ Error ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
