'use client'
import style from './page.module.scss'
import Layout from "../components/ui/layout/index";
import Container from "../components/ui/container/index";
import Link from "next/link";
import Modal from "../components/ui/modal/index";

export default function Home() {
  return(
    <Layout className={style.layout}>
      <section className={style.infoContainer}>
        <h1>Get started</h1>
        <h2>
          Stay organized and boost your productivity with our intuitive To-Do App.
          Whether you're managing personal tasks, work projects, or daily reminders,
          our app provides a simple and effective way to keep track of everything on your agenda.
        </h2>
      </section>
      <section className={style.buttonContainer}>
        <Link href={'/auth/sign-up'}>
          <Container className={style.navigateButton}>Sign up</Container>
        </Link>
        <Link href={'/auth/sign-in'}>
          <Container className={style.navigateButton}>Sign in</Container>
        </Link>
      </section>
    </Layout>
  )
}
