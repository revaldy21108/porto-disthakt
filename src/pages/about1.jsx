import { Link } from "react-router-dom"

const About = () => {
    return (
        <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>About Us</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia perferendis dicta culpa quaerat doloribus maiores maxime beatae facere est nulla?
        </p>

        <h2>Tujuan</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, laboriosam dolorem sit ad adipisci voluptas, cumque at ratione ea tempore earum, voluptatem facere eveniet autem!
        </p>

        <h2>Kenapa kami?</h2>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
        </ul>

        <Link to ="/tes">Ke Test</Link>
        </div>
    )
}

export default About