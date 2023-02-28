import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* here does not have to put meta tag, because meta is in Layout always, which here is with defaultProps */}
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam itaque et sequi ipsa? Culpa nemo earum quas nobis, esse nihil laborum necessitatibus quidem deserunt placeat tenetur illo obcaecati tempore dignissimos voluptates illum velit suscipit. Quam asperiores enim sapiente perspiciatis quibusdam deserunt nam eligendi nulla explicabo pariatur. Commodi officiis dolorum sequi dolor! Illum consequuntur architecto vitae. Optio, non praesentium, reprehenderit libero laudantium vel eum, sit iste explicabo fugit dignissimos repellendus consequuntur!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur vero illo, asperiores error optio eligendi aliquam eum ratione omnis distinctio ipsum fuga provident modi commodi cupiditate nulla nihil laboriosam corporis ullam voluptate totam ducimus ipsam! Unde inventore quo labore nostrum nulla exercitationem, omnis tempora facilis atque corrupti doloremque. Vitae voluptatibus dignissimos rerum dolorem itaque esse aspernatur. Assumenda neque eum in alias ut inventore modi quod quisquam, maiores porro libero.</p>
        <Link className={styles.btn} href='/ninjas'>See Ninja Listing</Link>
      </div>
    </>
  )
}
