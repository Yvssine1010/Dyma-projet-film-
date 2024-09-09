import React, { Component } from "react";
import '../../index.css';

export default class MovieDetails extends Component {
  render() {
    return (
      <div className="w-25 border p-4 d-flex flex-column">
        <h5 className="my-custom-style">{this.props.movie.title}</h5>
        <hr className="w-100" />
        <div>
          <img
            className="d-block mx-auto"
            src={this.props.movie.img}
            style={{ width: '200px', height: 'auto' }} // Réduire la taille ici
            alt={this.props.movie.title} // Ajout d'un attribut alt pour l'accessibilité
          />
        </div>
        <hr className="w-100" />
        <p className="text-secondary">{this.props.movie.details}</p>
        <span>{this.props.movie.description}</span>
      </div>
    );
  }
}
