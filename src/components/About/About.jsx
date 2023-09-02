import { Outlet } from 'react-router-dom';
import styles from './About.module.css'


export default function About() {
   
    return (
       <div className={styles.about}>
         <div className={styles.about2}>
            <h2 className={styles.h2}>Rick and Morty</h2>
            <hr/>
            <p className={styles.span}>Hola Soy Maria Perez, y este es una parte del bootcamp de HENRY.</p>
            
            <p className={styles.span}>Para el desarrollo utilice Javascript, React, React-Router-dom, Redux y mucho amor ♥.</p>

            <p className={styles.span}>Fue una actividad interesante, pero sobre todo enriquecedora. Ayudo a fijar los conocimientos teóricos y prácticos aprendidos en clase, a aca les muestro un poco.</p>

            <p className={styles.span}>De Henry.</p>

            <h3>Maria Perez</h3>


            
            
         </div>
         <Outlet/>
       </div>
       
    );
 }