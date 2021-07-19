import './index.css';

export const ContactContainer = () => {
    return (
        <section>
            <div className='contact-container'>
                <form action=''>
                    <h2 className='contact-title'>Contacto</h2>
                    <input className='contact-input' type='text' placeholder='Nombre' />
                    <input className='contact-input' type='text' placeholder='Apellido' />
                    <input className='contact-input' type='email' placeholder='E-mail' />
                    <input className='contact-input' type='tel' placeholder='Telefono' />
                    <textarea className='contact-text' placeholder='Consulta'></textarea>
                    <div className='button-container'>
                        <button className='contact-button' type='submit' id='send'>Enviar</button>
                        <button className='contact-button' type='reset' id='delete'>Borrar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


