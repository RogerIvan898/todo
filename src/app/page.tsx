import Head from 'next/head'
import Input from "../components/ui/Input/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>To do</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Input placeholder={'Text'}/>
      </div>
    </>
  );
}
