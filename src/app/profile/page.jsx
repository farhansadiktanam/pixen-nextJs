"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div className="max-w-96 mx-auto flex flex-col items-center">
      <Card>
        <Avatar className="h-20 w-20">
          <Avatar.Image
            sizes="lg"
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-2xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
      </Card>
    </div>
  );
};

export default ProfilePage;
