import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type CitiesCardProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    previewImage: string;
    rating: number;
    onMouseEnter?: () => void;
}

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, onMouseEnter }: CitiesCardProps) {
    const [, setOfferId] = useState('');
    const ratingWidth = `${rating * 20}%`;
    
    return (
        <article className="cities__card place-card" onMouseOver={() => setOfferId(id)} onMouseOut={() => setOfferId('') } onMouseEnter={onMouseEnter}>
            {isPremium && (
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>
            )}
            <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={ `${AppRoute.Offer}/${id}` }>
                    <img className="place-card__image" src={`/img/${previewImage}`} width="260" height="200" alt={title}></img>
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{ price }</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use href="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: ratingWidth }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={ `${AppRoute.Offer}/${id}` }>{title}</Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
}

export { CitiesCard }