"use server"
import * as z from "zod";
import { SettingSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserbyId, getUserByEmail } from "@/data/user";
import { currentUser } from "@/lib/authentication";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (values: z.infer<typeof SettingSchema>) => {
    const user = await currentUser()

    if(!user) {
        return { error: "Unauthorized"}
    }

    const dbUser = await getUserbyId(user.id as string);

    if(!dbUser){
        return { error: "Unauthorized"};
    }

    if(user.isOAuth){
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }
    
    if(values.email && values.email !== user.email){
        const existingUser = await getUserByEmail(values.email);

        if(existingUser && existingUser.id !== user.id) {
            return { error: "Email already in user!"}
        }

        const verificationToken = await generateVerificationToken(values.email);
        await sendVerificationEmail(verificationToken.email, verificationToken.token);

        return { success : "Verification Email Sent"}

    }

    if(values.password && values.newPassword && dbUser.password) {
        const passwordsMatch = await bcrypt.compare(values.password, dbUser.password)

        if(!passwordsMatch){
            return { error: "Incorrect password!"};
        }

        const hashedPassword = await bcrypt.hash(values.newPassword,10);
        values.password = hashedPassword;
        values.newPassword = undefined;
    }

    await db.user.update({
        where: { id: dbUser.id},
        data: {
            ...values
        }
    })

    return { success: "Settings Updated"};
}