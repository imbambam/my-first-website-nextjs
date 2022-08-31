import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myPicture from '../public/mypicture.jpg'

export default function Home() {
  return (

    <div className={styles.myContainer}>
      <div className={styles.card}>
        <img src='https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/300419807_1976430432746956_4817621093495514604_n.jpg?stp=cp1_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHb7jai9_fDdx_mtS4hWZHLLVFBLXVms0UtUUEtdWazReYXKWPW-LohofBslXgedlxTVuAO6O-eim7n2dFRHHV8&_nc_ohc=nvqtBsE9rz8AX9XowD3&_nc_ht=scontent.fcrk3-1.fna&oh=00_AT_4onQLwByfrho2ky0eR0KfRqZcjM5uamArKTGfsyLjKw&oe=6313A12E' alt="Avatar" className={styles.image} />
        <div className={styles.container}>
          <h1><b>Alyssa Malig Bondoc</b></h1> 
          <p>Hello, I am Alyssa Malig Bondoc. I&apos;m an I.T student from the University of the Assumption :D</p> 
          <p>
            ( This is a sample website - you&apos;ll be
            building a site like this on our Next.js
            tutorial . )
          </p>
        </div>
      </div>
    </div>

  )
}
