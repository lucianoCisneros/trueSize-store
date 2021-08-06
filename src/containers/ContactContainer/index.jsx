import './index.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ContactContainer = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');

    const cartContext = useContext(CartContext);

    return (
        <section>
            <div className='contact-container'>
                <form action=''>
                    <h2 className='contact-title'>Contacto</h2>
                    <input className='contact-input' type='text' placeholder='Nombre' onInput={(e) => {setName(e.target.value)}} />
                    <input className='contact-input' type='text' placeholder='Apellido' onInput={(e) => {setLastName(e.target.value)}} />
                    <input className='contact-input' type='email' placeholder='E-mail' onInput={(e) => {setEmail(e.target.value)}} />
                    <input className='contact-input' type='tel' placeholder='Telefono' onInput={(e) => {setPhone(e.target.value)}} />
                    <textarea className='contact-text' placeholder='Consulta' onInput={(e) => {setQuestion(e.target.value)}} ></textarea>
                    <div className='button-container'>
                        <button className='contact-button' type='submit' id='send' onClick={ (e) => { e.preventDefault() ; cartContext.createQuestion(name, lastName, email, phone, question)}}>Enviar</button>
                        <button className='contact-button' type='reset' id='delete'>Borrar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


