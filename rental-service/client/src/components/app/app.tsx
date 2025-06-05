import { JSX } from 'react';
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from '../private-route/private-route';
import { FullOffer, OffersList } from '../../types/offer';
import { Review } from '../../types/review';

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
    reviews: Review[];
}

function App({ offers, offersList, reviews }: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage/>} />

                <Route path={AppRoute.Login} element={<LoginPage />} />

                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute
                            //authorizationStatus={AuthorizationStatus.NoAuth}
                            authorizationStatus={AuthorizationStatus.Auth}
                            >
                            <FavoritesPage favoritesList={ offersList }   />
                        </PrivateRoute>} />

                <Route path={ `${AppRoute.Offer}/:id` } element={<OfferPage offers={offers} reviews={reviews} offersList={offersList}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export { App }; 