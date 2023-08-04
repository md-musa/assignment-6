import { Button, Dropdown, Space } from 'antd';
import Image from 'next/image';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { CATEGORIES } from '@/constants';
import { signIn, useSession } from 'next-auth/react';
import { useContext } from 'react';
import { AuthContext } from '@/pages/_app';

function Nav() {
  const items = Object.entries(CATEGORIES).map(([key, value]) => {
    return {
      key: key,
      label: <Link href={`/categories/${value}`}>{value.replace(/-/g, ' ')}</Link>,
    };
  });

  const [auth, setAuth] = useContext(AuthContext);

  const { data: session } = useSession();
  if (session?.user) {
    setAuth(session.user);
  }

  return (
    <nav className="flex space-x-6 items-center justify-between shadow-md px-10 py-2 rounded-lg border-4 my-4 bg-purple-600">
      <div>
        <Link href="/">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/013/091/374/original/processor-3d-illustration-icon-png.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="space-x-4 flex items-center">
        <span className="bg-gray-100 border border-gray-500 rounded-full p-2 hover:bg-gray-200 hover:shadow-md cursor-pointer">
          <Dropdown menu={{ items }}>
            <Space>
              Categories
              <DownOutlined />
            </Space>
          </Dropdown>
        </span>

        <Link href="/pcBuilder">
          <Button> PC Builder</Button>
        </Link>

        {auth.name ? (
          <p className="text-white font-semibold">{auth.name}</p>
        ) : (
          <Button onClick={signIn}>Login with Github</Button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
