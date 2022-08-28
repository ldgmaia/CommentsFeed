import styles  from './Post.module.css'

export function Post({author, content}) {
  return (
    <article className={styles.post}>
       <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ldgmaia.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Maia</strong>
            <span>Web Developer</span>
          </div>
        </div>

          <time title='15 de Agosto as 18:45' dateTime='2022-08-15 18:45:23'>Publicado ha 1 hora</time>

       </header>

       <div className={styles.content}>
        <p>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉&nbsp;<a href="#">jane.design/doctorcare</a> </p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw </a>{' '}
          <a href="#">#rocketseat</a>
          </p>
        </p>
       </div>
    </article>
  )
}
