import styles from '../styles/Toolbar.module.css'

export default function Toolbar(){  
  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.toolbarTitle}>
          <p>Melo Experience Platform</p>
        </div>
        <div className={styles.toolbarActiveExperienceTitle}>
          <p>Interaction Examples</p>
        </div>
        <div className={styles.toolbarLeash}></div>
      </div>
    </>
  )
}