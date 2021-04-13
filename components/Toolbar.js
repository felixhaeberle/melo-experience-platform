import Link from 'next/link'
import styles from '../styles/Toolbar.module.css'

export default function Toolbar({experiences, experience, currentIndex, handleClick}){
  let hasPrevItem, hasNextItem;
  hasPrevItem = typeof experiences[currentIndex -1] !== 'undefined' && experiences[currentIndex -1] !== null
  hasNextItem = typeof experiences[currentIndex +1] !== 'undefined' && experiences[currentIndex +1] !== null
  
  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.toolbarTitle}>
          <p>Melo Experience Platform</p>
        </div>
        <div className={styles.toolbarActiveExperienceTitle}>
          <p>{experience.title}</p>
        </div>
        <div className={styles.toolbarNavigation}>
          { hasPrevItem ? (
            <Link href={experiences[currentIndex -1].url}>
              <div>
                <a onClick={() => {handleClick('prev')}}>
                  <div className={styles.toolbarNavigationPrev}></div>
                </a>
              </div>
            </Link>
          ) : null }
          { hasNextItem ? (
            <Link href={experiences[currentIndex +1].url}>
              <div>
                <a onClick={() => {handleClick('next')}}>
                  <div className={styles.toolbarNavigationNext}></div>
                </a>
              </div>
            </Link>
          ) : null}
        </div>
        <div className={styles.toolbarLeash}></div>
      </div>
    </>
  )
}