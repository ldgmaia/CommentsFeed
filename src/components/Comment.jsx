import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'//github.com/diego3g.png'} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Maia</strong>
              <time title='15 de Agosto as 18:45' dateTime='2022-08-15 18:45:23'>Cerca de 1h hora atras</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24}></Trash>
            </button>
          </header>

          <p>Muito bom, parabens</p>

        </div>
        <footer>
          <button >
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
