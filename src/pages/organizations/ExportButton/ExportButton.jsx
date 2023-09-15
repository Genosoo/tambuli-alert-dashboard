import styles from './exportButton.module.css'
import { BsDownload } from 'react-icons/bs'

export default function ExportButton() {
  return (
    <div className={styles.container}>
        <button className={styles.button}>
            Export <BsDownload />
        </button>
    </div>
  )
}
