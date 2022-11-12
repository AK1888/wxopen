/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw, apply } from "@twind";
import Input from "../islands/Input.tsx";
import Qrcode from "../islands/Qrcode.tsx";
import DownloadBtn from "../islands/DownloadBtn.tsx";
import CallAppBtn from "../islands/CallAppBtn.tsx";
import CopyBtn from "../islands/CopyBtn.tsx";
import Layout from "../components/Layout.tsx";

const github = apply`
fixed top-5 left-5 decoration-none text-white 
`;

const GithubLab = () => (
);

const PageHeader = () => (
  <header class={tw`text-center`}>
    <h1 class={tw`text-white text-3xl mb-10`}>
      ⚡️ WXOPEN <span class={tw`text-gradient`}>跳出微信</span>
    </h1>
    <section class={tw`text-sm text-gray-400`}>
       微信扫一扫体验，只支持安卓，IOS显示引导页
    </section>
  </header>
);

const Button: FunctionComponent<{ onClick?: () => void }> = ({
  children,
  onClick,
}) => (
  <div onClick={onClick} class={tw`rounded bg-white px-2 py-1 text-sx`}>
    <button class={tw`text-gradient focus:outline-none`}>{children}</button>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <main
        class={tw`max-w-screen bg-black min-h-screen text-white flex items-center justify-center flex-col p-4`}
      >
        <GithubLab />
        <PageHeader />
        <Input />
        <section class={tw` text-xs flex items-center justify-center gap-1`}>
          <span>支持特性:</span>
          <CallAppBtn />
          <DownloadBtn />
        </section>
        <Qrcode />

        <section class={tw`text-xs mt-5`}>
          使用微信扫一扫或<CopyBtn>复制网址</CopyBtn>在微信打开
        </section>
      </main>
    </Layout>
  );
}
