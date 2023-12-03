import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
const ProfilePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  );
};

export default ProfilePage;
