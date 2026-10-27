import './Hero.scss';

function Hero() {
    return (
        <section className='hero'>
            <div className='hero__backgroung'>
                <div className='hero__layer-1'></div>
                <div className='hero__layer-text'><h1>Енергосоларбуд</h1></div>
                <div className='hero__layer-2'></div>
            </div>

            <div className='hero__info'>
                <h2>Створюйте краще майбутнє завдяки ЕНЕРГОСОЛАРБУД</h2>
                <p>Зменште витрати на електроенергію, здобудьте енергетичну незалежність і перейдіть
                    на чисту відновлювану енергію завдяки інтелектуальним сонячним рішенням для дому.</p>
            </div>
        </section>
    );
}

export default Hero;