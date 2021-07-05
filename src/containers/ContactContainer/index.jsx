import './index.css';

export const ContactContainer = () => {
    return (
        <section>
            <div className='contact-container'>
                <form action=''>
                    <h2 className='contact-title'>Contacto</h2>
                    <input type='text' placeholder='Nombre' />
                    <input type='text' placeholder='Apellido' />
                    <input type='email' placeholder='E-mail' />
                    <input type='number' placeholder='Telefono' />
                    <textarea placeholder='Consulta'></textarea>
                    <div className='buttons-container'>
                        <button type='submit' id='send'>Enviar</button>
                        <button type='reset' id='delete'>Borrar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


