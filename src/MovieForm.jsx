import React, { Component } from 'react';
import './App.css';


class MovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = " http://92.175.11.66:3001/api/quests/movies/";
        e.preventDefault();
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Votre film préféré s'appelle ` + this.state.name +`. Ajout n°${res}`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un film');
            });
    }



    render() {
        return (
            <div className="FormMovie">
                <h1>Votre film préféré</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.lastname}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Affiche (URL)</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.firstname}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Commentaires</label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    };
}




export default MovieForm;