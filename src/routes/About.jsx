import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.leftBox}>
          <div className={`${styles.photoBox} ${styles.photo1}`}></div>
          <div className={`${styles.photoBox} ${styles.photo2}`}></div>
          <div className={`${styles.photoBox} ${styles.photo3}`}></div>
          <div className={`${styles.photoBox} ${styles.photo4}`}></div>
          <div className={`${styles.photoBox} ${styles.photo5}`}></div>
          <div className={`${styles.photoBox} ${styles.photo6}`}></div>
        </div>
        <div className={styles.rightBox}>
          <h1 className={styles.title}>ZOO app</h1>
          <p>
            Here you can enjoy and compare different animals as well as learn
            more about each creature. Images are sourced from unsplash.com
            collection. Each time you reload pages, you get new images.
          </p>
          <p>In this project you can explore the following feathures: </p>
          <ol className={styles.features}>
            <li>
              each group of animals is a separated category, it means if you
              want to add a new category or change the present one - it can be
              implemented in a couple of seconds (just contact us);
            </li>
            <li>
              inside each category you can leave likes, delete and view a single
              page about each creature. Search will help you to find the one you
              are looking for in a second;
            </li>
            <li>
              if images are too small for you, you can always change settings -
              how many photoes to show in a row (options 2-5);
            </li>
            <li>
              in the left top corner there is always info telling how many
              images you currently have in a category;
            </li>
          </ol>
          <p>
            This project let me learn how to use Router, Outlet, useParams,
            useEffect, implement categories, CSS modules, passing props to
            childs through several parents.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
