import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ContactForm extends React.Component {
        state = {
            name: '',
            select: '',
            email: '',
            message: '',
            errors:[]
        }

        handleChangeName = e => {
            this.setState({
                name: e.target.value,
            })
        }

        handleChangeSelect = e => {
            this.setState({
                select: e.target.value,
            })
        }

        handleChangeEmail = e => {
            this.setState({
                email: e.target.value,
            })
        }

        handleChangeMessage = e => {
            this.setState({
                message: e.target.value,
            })
        }

        handleSubmit = e => {
            e.preventDefault();
        }

        handleSubmit = e => {
            e.preventDefault();
        let alert = [];
             if( this.state.name === '') {
                 alert.push('The name field must be filled')
             }
             if( this.state.message === '') {
                 alert.push('The message field must be filled')
             }
             if( this.state.email.indexOf('@') === -1) {
                 alert.push('The email field must be filled and must contain @')
       } else {
                 alert.push('Thank you for your message. It was sent to: ');
             }
            
            this.setState({errors:alert})
         }
        
        
        
        
        

        render() {

            let alert = this.state.errors;
            let good;

            return (
                <div>
                   <div>{alert.join()}</div>
                    <p>
                    <form onSubmit={ this.handleSubmit }>

                        <input onChange={ this.handleChangeName } value={ this.state.name } />
                        <select value={ this.state.select} onChange={ this.handleChangeSelect }>
                            <option value="1">Customer Service</option>
                            <option value="2">IT Department</option>
                            <option value="3">Marketing</option>
                        </select>
                        <input type={'email'} onChange={ this.handleChangeEmail } value={ this.state.email } />
                        <textarea onChange={ this.handleChangeMessage } value={ this.state.message } />
                        <input onClick={ this.handleClick } type="submit" />
                    </form>
                    </p>
                </div>
            )
        }
    }

    const App = () => <ContactForm />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});