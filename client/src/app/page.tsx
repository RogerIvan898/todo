import style from './page.module.scss'
import Layout from "../components/ui/layout/index";
import Container from "../components/ui/container/index";
import Link from "next/link";

export default function Home() {
  return(
    <Layout className={style.layout}>
      <main className={style.infoContainer}>
        <h1>Get started</h1>
        <h2>
          Stay organized and boost your productivity with our intuitive To-Do App.
          Whether you're managing personal tasks, work projects, or daily reminders,
          our app provides a simple and effective way to keep track of everything on your agenda.
        </h2>
      </main>
      <nav className={style.buttonContainer}>
        <Link href={'/auth/sign-up'}>
          <Container
            as={'button'}
            className={style.navigateButton}>
            Sign up
          </Container>
        </Link>
        <Link href={'/auth/sign-in'}>
          <Container
            as={'button'}
            className={style.navigateButton}>
            Sign in
          </Container>
        </Link>
      </nav>
    </Layout>
  )
}
