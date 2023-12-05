import { useSession } from "next-auth/react";
import Head from "next/head";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Profile</title>
      </Head>
      <h1>User Profile</h1>
      <div style={{ marginTop: "20px" }}>
        <img
          src={session?.user?.image}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          alt="image"
        />
      </div>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
    </div>
  );
};

export default ProfilePage;
