import { OffersList } from "../../types/offer";
import { SortOffer } from "../../types/sort";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: OffersList[];
    onListItemHover: (offerId: string) => void;
}

function CitiesCardList({ offersList, onListItemHover }: CitiesCardListProps) {
    return(
        <div className="cities__places-list places__list tabs__content">
            {offersList.map((item) =>
                <CitiesCard key={ item.id} id={ item.id } title={ item.title } type={ item.type } price={ item.price }
                                previewImage={ item.previewImage } isPremium={ item.isPremium} rating={ item.rating }
                                onMouseEnter={() => onListItemHover(item.id)}
            />)}
        </div>
    )
}

export { CitiesCardList };